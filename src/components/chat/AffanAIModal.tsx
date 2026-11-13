"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  X,
  Send,
  Trash2,
  Copy,
  Check,
  RefreshCw,
  AlertCircle,
  Cpu,
  CornerDownLeft,
  ChevronDown,
  Terminal,
} from "lucide-react";
import type { ChatMessage } from "@/types";

interface AffanAIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AffanAIModal({ isOpen, onClose }: AffanAIModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [aiStatus, setAiStatus] = useState<{
    available: boolean;
    status: string;
    message: string;
    model?: string;
  }>({
    available: false,
    status: "checking",
    message: "Verifying local inference endpoint...",
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Suggested questions
  const suggestedQuestions = [
    "Tell me about Mohammed.",
    "Explain DevFlow AI architecture.",
    "What technologies does he use?",
    "What problem does EduReach solve?",
    "How can I contact him?",
  ];

  // Check AI Health on open
  const checkHealth = async () => {
    try {
      const res = await fetch("/api/chat/status");
      const data = await res.json();
      setAiStatus(data);
    } catch {
      setAiStatus({
        available: false,
        status: "offline",
        message: "Affan AI is currently offline. Please explore the portfolio or contact Mohammed directly.",
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      checkHealth();
      if (messages.length === 0) {
        setMessages([
          {
            id: "welcome",
            role: "assistant",
            content:
              "Hello! I am **Affan AI**, Mohammed's personal AI portfolio representative. I can answer inquiries regarding his verified education, technical skills, projects, and architecture designs based strictly on factual portfolio data.\n\nHow can I help you today?",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      }
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClear = () => {
    setMessages([
      {
        id: "welcome-reset",
        role: "assistant",
        content:
          "Conversation history cleared. Feel free to ask another question about Mohammed's projects or skills.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const sendMessage = async (contentToSend?: string) => {
    const text = (contentToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: "u-" + Date.now(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    const assistantMsgId = "a-" + Date.now();
    const assistantPlaceholder: ChatMessage = {
      id: assistantMsgId,
      role: "assistant",
      content: "",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...newMessages, assistantPlaceholder]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages
            .filter((m) => m.id !== "welcome" && m.id !== "welcome-reset")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error ||
            "Affan AI is currently offline. Please explore the portfolio or contact Mohammed directly."
        );
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No readable stream response from AI service.");

      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId ? { ...msg, content: accumulated } : msg
          )
        );
      }
    } catch (err: any) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMsgId
            ? {
                ...msg,
                content:
                  err.message ||
                  "Affan AI is currently offline. Please explore the portfolio or contact Mohammed directly.",
                error: true,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="affan-ai-title"
    >
      <div
        className="relative w-full max-w-2xl h-[85vh] flex flex-col bg-[#0b0c12] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chat Window Header */}
        <div className="px-5 py-4 bg-zinc-900/70 border-b border-white/[0.08] flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <div className="w-full h-full bg-[#0b0c12] rounded-[6px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-sky-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="affan-ai-title" className="text-sm font-bold text-white tracking-tight">
                  Affan AI
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                  Llama 3.1 8B
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    aiStatus.available ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
                <span className={aiStatus.available ? "text-emerald-400" : "text-amber-400"}>
                  {aiStatus.available ? "Ollama Online (Local)" : "Offline Mode"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={checkHealth}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              title="Refresh connection status"
              aria-label="Refresh status"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={handleClear}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              title="Clear conversation"
              aria-label="Clear chat"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Offline notice bar if unavailable */}
        {!aiStatus.available && (
          <div className="px-4 py-2.5 bg-amber-950/30 border-b border-amber-500/20 text-xs text-amber-200 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <div className="leading-tight">
              <span className="font-semibold block text-[11px] uppercase tracking-wide">
                Honest Connection Notice:
              </span>
              {aiStatus.message}
              <span className="block text-[11px] text-amber-300/80 mt-0.5">
                To test live local inference: run <code className="bg-black/40 px-1 rounded font-mono">ollama run llama3.1:8b</code>.
              </span>
            </div>
          </div>
        )}

        {/* Messages Stream Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-tr-none shadow-md"
                    : msg.error
                    ? "bg-red-950/40 border border-red-500/30 text-red-200 rounded-tl-none"
                    : "bg-zinc-900/90 border border-white/[0.08] text-zinc-200 rounded-tl-none shadow-md"
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>

                {/* Bottom message toolbar */}
                <div className="mt-2 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>{msg.timestamp}</span>
                  {msg.role === "assistant" && msg.content && !msg.error && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.content)}
                      className="hover:text-white flex items-center gap-1 transition-colors"
                      title="Copy response"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-sky-400 font-mono pl-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>Affan AI is streaming thoughts...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries Chips */}
        <div className="px-4 py-2 border-t border-white/[0.05] bg-zinc-950/40 overflow-x-auto flex gap-2 no-scrollbar">
          {suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              disabled={isLoading}
              className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 border border-white/[0.06] text-zinc-300 hover:text-sky-300 hover:border-sky-500/30 whitespace-nowrap transition-colors flex-shrink-0 disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="p-3 sm:p-4 bg-zinc-900/80 border-t border-white/[0.08] flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Mohammed's projects, tech stack, or studies..."
            className="flex-1 bg-zinc-950 border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors"
          />

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white hover:from-sky-500 hover:to-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-sky-600/20"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
