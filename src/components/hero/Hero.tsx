"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin, Sparkles, Terminal, Code2, ShieldAlert } from "lucide-react";
import type { ProfileData, EducationData } from "@/types";

interface HeroProps {
  profile: ProfileData;
  education: EducationData;
  onOpenResumeModal: () => void;
  onOpenChat: () => void;
}

export function Hero({ profile, education, onOpenResumeModal, onOpenChat }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Typography & Headline */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 backdrop-blur-md self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-sky-300">
                B.E. Computer Science &bull; SSIT Tumakuru
              </span>
            </div>

            {/* Name & Big Typography */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm font-mono tracking-widest uppercase text-zinc-400">
                Software Engineer &amp; Builder
              </h2>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Mohammed{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400">
                  Affan
                </span>
              </h1>
            </div>

            {/* Real verified introduction */}
            <p className="text-base sm:text-lg text-zinc-300 font-light max-w-2xl leading-relaxed">
              {profile.introduction}
            </p>

            {/* Supporting summary */}
            <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
              Currently pursuing Computer Science &amp; Engineering. Focusing on modular full-stack architectures,
              agentic workflows, and autonomous developer tooling with rigorous zero-cost engineering.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/[0.08] hover:border-white/[0.18] rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                Resume Details
              </button>

              <button
                type="button"
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-sky-300 bg-sky-950/40 hover:bg-sky-900/50 border border-sky-500/30 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                Ask Affan AI
              </button>
            </div>

            {/* Social Links & Honest Note */}
            <div className="flex items-center space-x-4 pt-4 text-xs text-zinc-400 font-mono">
              <a
                href="https://github.com/MohammedAffan-786"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                github.com/MohammedAffan-786
              </a>
              <span className="text-zinc-600">&bull;</span>
              <a
                href="https://linkedin.com/in/mdaffan1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" />
                in/mdaffan1
              </a>
            </div>
          </div>

          {/* Interactive Engineering HUD / System Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer atmospheric glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Main Technical HUD Card */}
              <div className="relative rounded-2xl border border-white/[0.09] bg-[#0c0d12]/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl space-y-5">
                {/* HUD Header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    <span className="text-xs font-mono text-zinc-400 pl-2">
                      affan@system:~$ init --verified
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded">
                    PROD-STRICT
                  </span>
                </div>

                {/* Technical Capability Modules */}
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05] hover:border-sky-500/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-sky-400" />
                          <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">
                            Core Engineering Stack
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-400">
                          Python, JavaScript (ES6+), TypeScript, SQL, Node.js, Express, React, MongoDB
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">
                        Full-Stack
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05] hover:border-indigo-500/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-indigo-400" />
                          <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">
                            Active Research Initiatives
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-400">
                          DevFlow AI (AST &amp; Sandboxed Testing) &amp; EduReach (Agentic RAG)
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-950/40 border border-amber-500/20 px-1.5 py-0.5 rounded">
                        In Dev
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05] hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-emerald-400" />
                          <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">
                            Verification &amp; Integrity Policy
                          </h4>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-tight">
                          Zero fabricated statistics, genuine GitHub repositories, transparent development statuses.
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded">
                        Honest
                      </span>
                    </div>
                  </div>
                </div>

                {/* Terminal status line */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/[0.05]">
                  <span>Sri Siddhartha Institute of Tech</span>
                  <span className="text-sky-400">Tumakuru, KA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
