import { NextResponse } from "next/server";
import { getAIConfig, checkOllamaHealth } from "@/lib/ai/provider";

export const dynamic = "force-dynamic";

export async function GET() {
  const config = getAIConfig();

  if (!config.enabled) {
    return NextResponse.json({
      available: false,
      status: "disabled",
      message: "Affan AI is currently disabled in configuration.",
    });
  }

  const isProduction = process.env.NODE_ENV === "production";
  if (isProduction && !config.allowPublicAccess) {
    return NextResponse.json({
      available: false,
      status: "production_offline",
      message: "Affan AI is currently offline. Please explore the portfolio or contact Mohammed directly.",
      notice: "Public deployment mode: Local inference server is disconnected to protect zero-cost serverless limits.",
    });
  }

  const isAlive = await checkOllamaHealth(config.baseUrl);

  if (isAlive) {
    return NextResponse.json({
      available: true,
      status: "online",
      model: config.model,
      message: "Affan AI is active and powered by local Llama 3.1 8B.",
    });
  } else {
    return NextResponse.json({
      available: false,
      status: "offline",
      message: "Affan AI is currently offline. Please explore the portfolio or contact Mohammed directly.",
      notice: "Ollama instance at " + config.baseUrl + " did not respond.",
    });
  }
}
