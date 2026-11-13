import { NextRequest, NextResponse } from "next/server";
import { getAIConfig, checkOllamaHealth, streamOllamaChat, ChatMessageInput } from "@/lib/ai/provider";
import { generateAffanAISystemPrompt } from "@/lib/ai/systemPrompt";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const config = getAIConfig();

    if (!config.enabled) {
      return NextResponse.json(
        { error: "Affan AI is currently disabled in configuration." },
        { status: 503 }
      );
    }

    const isProduction = process.env.NODE_ENV === "production";
    if (isProduction && !config.allowPublicAccess) {
      return NextResponse.json(
        {
          error: "Affan AI is currently offline. Please explore the portfolio or contact Mohammed directly.",
        },
        { status: 503 }
      );
    }

    // Parse and validate request
    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request payload. 'messages' array is required." },
        { status: 400 }
      );
    }

    // Enforce limits for security & zero-cost server protection
    const messages: ChatMessageInput[] = body.messages.slice(-8).map((m: any) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content || "").slice(0, 1000),
    }));

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || !lastMessage.content.trim()) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    // Health check
    const isAlive = await checkOllamaHealth(config.baseUrl);
    if (!isAlive) {
      return NextResponse.json(
        {
          error: "Affan AI is currently offline. Please explore the portfolio or contact Mohammed directly.",
        },
        { status: 503 }
      );
    }

    const systemPrompt = generateAffanAISystemPrompt();
    const stream = await streamOllamaChat(messages, config, systemPrompt);

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: "Affan AI is currently offline. Please explore the portfolio or contact Mohammed directly.",
      },
      { status: 503 }
    );
  }
}
