"use client";

import React from "react";
import { Sparkles, MessageSquare } from "lucide-react";

interface FloatingAILauncherProps {
  onOpen: () => void;
  isOpen: boolean;
}

export function FloatingAILauncher({ onOpen, isOpen }: FloatingAILauncherProps) {
  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onOpen}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-sky-600 to-violet-600 text-white font-medium text-xs sm:text-sm shadow-xl shadow-sky-500/25 border border-white/20 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        aria-label="Open Affan AI Assistant"
      >
        {/* Pulsing glow background */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 opacity-70 blur-md group-hover:opacity-100 transition-opacity -z-10" />

        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
        </div>

        <span className="font-semibold tracking-wide">Affan AI</span>

        <span className="hidden sm:inline-block text-[10px] font-mono bg-black/30 px-2 py-0.5 rounded-full border border-white/10 text-sky-200">
          Llama 3.1
        </span>
      </button>
    </div>
  );
}
