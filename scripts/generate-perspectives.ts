import OpenAI from "openai";
import { defaultData } from "../data/index";
import { buildMessages } from "../lib/prompts";
import type { Perspective, ResumeData } from "../lib/types";
import fs from "fs";
import path from "path";

const PERSPECTIVES: Perspective[] = ["recruiter", "business", "reader", "professor"];

async function generate() {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    console.error("DEEPSEEK_API_KEY not set in environment");
    process.exit(1);
  }

  const openai = new OpenAI({
    apiKey,
    baseURL: "https://api.deepseek.com/v1",
  });

  const outDir = path.join(__dirname, "..", "data", "perspectives");

  for (const perspective of PERSPECTIVES) {
    console.log(`Generating ${perspective}...`);
    const messages = buildMessages(perspective, defaultData);

    const completion = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages,
      temperature: 0,
      max_tokens: 4096,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      console.error(`  Empty response for ${perspective}`);
      continue;
    }

    let data: ResumeData;
    try {
      data = JSON.parse(content.trim()) as ResumeData;
    } catch {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]) as ResumeData;
      } else {
        console.error(`  Failed to parse JSON for ${perspective}`);
        continue;
      }
    }

    const outFile = path.join(outDir, `${perspective}.json`);
    fs.writeFileSync(outFile, JSON.stringify(data, null, 2), "utf-8");
    console.log(`  Saved to data/perspectives/${perspective}.json`);
  }

  console.log("Done!");
}

generate().catch(console.error);
