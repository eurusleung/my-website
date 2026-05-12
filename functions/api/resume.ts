import OpenAI from "openai";

import { defaultData } from "../../data";
import { buildMessages } from "../../lib/prompts";
import type { Perspective, ResumeData } from "../../lib/types";

const VALID_PERSPECTIVES: Perspective[] = [
  "recruiter",
  "business",
  "reader",
  "professor",
];

const cache = new Map<string, { data: ResumeData; timestamp: number }>();
const CACHE_TTL = 24 * 60 * 60 * 1000;

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const onRequestPost = async ({ request, env }: { request: Request; env: { DEEPSEEK_API_KEY: string } }) => {
  try {
    const ip = request.headers.get("cf-connecting-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return json({ error: "Too many requests" }, 429);
    }

    const body = await request.json() as { perspective?: string };
    const perspective = body.perspective as Perspective;

    if (!VALID_PERSPECTIVES.includes(perspective)) {
      return json({ error: "Invalid perspective" }, 400);
    }

    const cached = cache.get(perspective);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return json(cached.data);
    }

    const openai = new OpenAI({
      apiKey: env.DEEPSEEK_API_KEY,
      baseURL: "https://api.deepseek.com/v1",
    });

    const messages = buildMessages(perspective, defaultData);
    const completion = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages,
      temperature: 0,
      max_tokens: 4096,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return json({ error: "AI returned empty response" }, 500);
    }

    let data: ResumeData;
    try {
      data = JSON.parse(content.trim()) as ResumeData;
    } catch {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]) as ResumeData;
      } else {
        return json({ error: "Failed to parse AI response" }, 500);
      }
    }

    cache.set(perspective, { data, timestamp: Date.now() });
    return json(data);
  } catch (error) {
    console.error("Resume API error:", error);
    return json({ error: "Internal server error" }, 500);
  }
};
