import { NextRequest, NextResponse } from "next/server";
import { getAIConfig, checkOllamaHealth, streamOllamaChat, ChatMessageInput } from "@/lib/ai/provider";
import { generateAffanAISystemPrompt } from "@/lib/ai/systemPrompt";
import { generateKnowledgeResponse } from "@/lib/ai/fallbackEngine";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const config = getAIConfig();

    // Parse and validate request
    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request payload. 'messages' array is required." },
        { status: 400 }
      );
    }

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

    // Try Ollama if running
    const isOllamaAlive = await checkOllamaHealth(config.baseUrl);
    if (isOllamaAlive) {
      try {
        const systemPrompt = generateAffanAISystemPrompt();
        const stream = await streamOllamaChat(messages, config, systemPrompt);

        return new Response(stream, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "X-Content-Type-Options": "nosniff",
          },
        });
      } catch (err) {
        console.warn("Ollama streaming failed, falling back to Knowledge Engine", err);
      }
    }

    // Knowledge Engine fallback (streams answer smoothly so UI gets live typed response)
    const answer = generateKnowledgeResponse(lastMessage.content);
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        const words = answer.split(" ");
        for (let i = 0; i < words.length; i++) {
          const chunk = (i === 0 ? "" : " ") + words[i];
          controller.enqueue(encoder.encode(chunk));
          // Small artificial delay for natural streaming feel
          await new Promise((resolve) => setTimeout(resolve, 20));
        }
        controller.close();
      },
    });

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
        error: "Unable to process inquiry at this moment. Please reach out to Mohammed directly at mohammedaffan971211@gmail.com.",
      },
      { status: 500 }
    );
  }
}
