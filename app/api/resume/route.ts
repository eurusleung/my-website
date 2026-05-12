import { NextResponse } from "next/server";
import OpenAI from "openai";

import { defaultData } from "@/data";
import { buildMessages } from "@/lib/prompts";
import type { Perspective, ResumeData } from "@/lib/types";

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: "https://api.deepseek.com/v1",
});

const cache = new Map<string, { data: ResumeData; timestamp: number }>();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

const VALID_PERSPECTIVES: Perspective[] = [
  "recruiter",
  "business",
  "reader",
  "professor",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const perspective = body.perspective as Perspective;

    if (!VALID_PERSPECTIVES.includes(perspective)) {
      return NextResponse.json(
        { error: "Invalid perspective. Valid values: recruiter, business, reader, professor" },
        { status: 400 },
      );
    }

    // Check cache
    const cached = cache.get(perspective);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return NextResponse.json(cached.data);
    }

    // Build messages for AI
    const messages = buildMessages(perspective, defaultData);

    // Call DeepSeek
    const completion = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages,
      temperature: 0.7,
      max_tokens: 4096,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { error: "AI returned empty response" },
        { status: 500 },
      );
    }

    // Parse the AI response
    let data: ResumeData;
    try {
      data = JSON.parse(content.trim()) as ResumeData;
    } catch {
      // If AI returns markdown-wrapped JSON, try to extract it
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]) as ResumeData;
      } else {
        return NextResponse.json(
          { error: "Failed to parse AI response as JSON" },
          { status: 500 },
        );
      }
    }

    // Cache the result
    cache.set(perspective, { data, timestamp: Date.now() });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Resume API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
