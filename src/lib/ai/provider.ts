export interface ChatMessageInput {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface AIProviderConfig {
  baseUrl: string;
  model: string;
  enabled: boolean;
  allowPublicAccess: boolean;
}

export function getAIConfig(): AIProviderConfig {
  return {
    baseUrl: process.env.OLLAMA_BASE_URL || "http://localhost:11434",
    model: process.env.OLLAMA_MODEL || "llama3.1:8b",
    enabled: process.env.AI_ENABLED !== "false",
    allowPublicAccess: process.env.AI_PUBLIC_ACCESS === "true",
  };
}

export async function checkOllamaHealth(baseUrl: string): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`${baseUrl}/api/tags`, {
      method: "GET",
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return res.ok;
  } catch {
    return false;
  }
}

export async function streamOllamaChat(
  messages: ChatMessageInput[],
  config: AIProviderConfig,
  systemPrompt: string
): Promise<ReadableStream<Uint8Array>> {
  const payload = {
    model: config.model,
    messages: [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({
        role: m.role,
        content: m.content.slice(0, 1500), // Enforce length limits for security
      })),
    ],
    stream: true,
  };

  const response = await fetch(`${config.baseUrl}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok || !response.body) {
    throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
  }

  const reader = response.body.getReader();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  return new ReadableStream({
    async start(controller) {
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;
            try {
              const parsed = JSON.parse(trimmed);
              if (parsed.message?.content) {
                controller.enqueue(encoder.encode(parsed.message.content));
              }
              if (parsed.done) {
                controller.close();
                return;
              }
            } catch {
              // Ignore line parse errors during streaming
            }
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });
}
