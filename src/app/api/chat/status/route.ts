import { NextResponse } from "next/server";
import { getAIConfig, checkOllamaHealth } from "@/lib/ai/provider";

export const dynamic = "force-dynamic";

export async function GET() {
  const config = getAIConfig();

  // Check if local Ollama is running
  const isOllamaAlive = await checkOllamaHealth(config.baseUrl);

  if (isOllamaAlive) {
    return NextResponse.json({
      available: true,
      status: "online",
      model: "Ollama (Llama 3.1 8B)",
      message: "Affan AI is active and connected to local Llama 3.1 8B inference.",
    });
  }

  // Gracefully active Knowledge Engine mode (works 24/7 on Vercel and local)
  return NextResponse.json({
    available: true,
    status: "knowledge_engine",
    model: "Portfolio Intelligence Engine",
    message: "Affan AI is active and answering directly from Mohammed's verified knowledge base.",
  });
}
