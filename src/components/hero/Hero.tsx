"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin, Mail, Code2, Layers, CheckCircle2, Terminal } from "lucide-react";
import type { ProfileData, EducationData } from "@/types";

interface HeroProps {
  profile: ProfileData;
  education: EducationData;
  onOpenResumeModal: () => void;
}

export function Hero({ profile, education, onOpenResumeModal }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      {/* Massive Framer-style Curved Aviation Hero Container */}
      <div className="relative mx-auto max-w-7xl rounded-[32px] sm:rounded-[44px] overflow-hidden border border-white/[0.12] bg-gradient-to-b from-[#003e9c]/90 via-[#040d36]/95 to-[#050716] shadow-2xl shadow-blue-950/50 p-6 sm:p-12 lg:p-16">
        
        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-gradient-to-b from-[#d1eaff]/25 via-[#5594f2]/20 to-transparent blur-3xl pointer-events-none" />

        {/* Subtle grid line accents */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5594f2] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-white uppercase">
              B.E. Computer Science &bull; SSIT Tumakuru (2024&ndash;2027)
            </span>
          </div>

          {/* Large Hero Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d1eaff] to-[#5594f2]">
                Mohammed Affan.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#eff1f3] tracking-tight max-w-3xl mx-auto">
              Building intelligent applications. Exploring what&apos;s possible with technology.
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#cbd5e1] font-light max-w-2xl mx-auto leading-relaxed">
            Computer Science Engineering student passionate about full-stack development,
            AI-powered applications, and solving practical problems through software.
          </p>

          {/* Framer-style Pill Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#003e9c] hover:bg-[#0052cc] rounded-full shadow-xl shadow-blue-900/40 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-full backdrop-blur-md transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-[#5594f2]" />
              <span>Let&apos;s Connect</span>
            </Link>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-full backdrop-blur-md transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-[#5594f2]" />
              <span>Resume</span>
            </button>
          </div>

          {/* Social Proof Line */}
          <div className="flex items-center justify-center space-x-4 pt-2 text-xs text-zinc-300 font-mono">
            <a
              href="https://github.com/MohammedAffan-786"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4 text-[#5594f2]" />
              github.com/MohammedAffan-786
            </a>
            <span className="text-zinc-500">&bull;</span>
            <a
              href="https://linkedin.com/in/mdaffan1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4 text-[#5594f2]" />
              linkedin.com/in/mdaffan1
            </a>
            <span className="text-zinc-500">&bull;</span>
            <span>Tumakuru, KA</span>
          </div>

          {/* Floating iOS-style Notification Cards (Inspired directly by the Framer site) */}
          <div className="w-full pt-8 sm:pt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            
            {/* Notification 1: DevFlow AI */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-xl shadow-xl transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300 mb-2">
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  In Development
                </span>
                <span className="text-zinc-400">Active Pipeline</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#5594f2] transition-colors mb-1">
                🚀 DevFlow AI
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Autonomous code intelligence, AST parsing, and isolated Docker sandbox testing.
              </p>
            </div>

            {/* Notification 2: EduReach */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-xl shadow-xl transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300 mb-2">
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  In Development
                </span>
                <span className="text-zinc-400">Agentic RAG</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#5594f2] transition-colors mb-1">
                🎓 EduReach
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                AI college assistant powered by Google Gemini, MongoDB vector store, and Vapi voice counselor.
              </p>
            </div>

            {/* Notification 3: Research Rabbit AI (COMPLETED) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-emerald-400/30 backdrop-blur-xl shadow-xl transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300 mb-2">
                <span className="flex items-center gap-1.5 font-semibold text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Completed
                </span>
                <span className="text-emerald-400/80 font-mono text-[10px]">VERIFIED</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                🐇 Research Rabbit AI
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Semantic literature search, citation graph discovery, and verifiable RAG answers.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
