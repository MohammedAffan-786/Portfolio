"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin, Sparkles, Terminal, Code2, ShieldAlert, Mail } from "lucide-react";
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
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 backdrop-blur-md self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-sky-300">
                CSE &bull; Sri Siddhartha Institute of Technology (SSIT)
              </span>
            </div>

            {/* Name & Big Typography */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400">
                  Mohammed Affan.
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-zinc-200 tracking-tight">
                Building intelligent applications. Exploring what&apos;s possible with technology.
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl leading-relaxed">
              I&apos;m a Computer Science Engineering student passionate about full-stack development,
              AI-powered applications, and solving practical problems through software.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore My Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-white/[0.12] rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                Let&apos;s Connect
              </Link>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/[0.08] rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                Resume
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

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-3 text-xs text-zinc-400 font-mono">
              <a
                href="https://github.com/MohammedAffan-786"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                MohammedAffan-786
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
              <span className="text-zinc-600">&bull;</span>
              <span>Tumakuru, KA</span>
            </div>
          </div>

          {/* Technical HUD Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative rounded-2xl border border-white/[0.09] bg-[#0c0d12]/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    <span className="text-xs font-mono text-zinc-400 pl-2">
                      affan-farooq@ssit:~$
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 border border-sky-500/20 px-2 py-0.5 rounded">
                    MERN &bull; AI
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                    <div className="flex items-center gap-2 mb-1">
                      <Code2 className="w-4 h-4 text-sky-400" />
                      <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">
                        Core Development Stack
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400">
                      Python, JavaScript, C++, React.js, Node.js, Express.js, MongoDB, MySQL
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                    <div className="flex items-center gap-2 mb-1">
                      <Terminal className="w-4 h-4 text-indigo-400" />
                      <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">
                        Featured Systems
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400">
                      DevFlow AI (Code Security), EduReach (Agentic Chatbot), AI Research Engine
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldAlert className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">
                        Academic Credentials
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400">
                      B.E. Computer Science and Engineering &bull; SSIT Tumakuru (2024–2027)
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/[0.05]">
                  <span>Sri Siddhartha Institute of Tech</span>
                  <span className="text-sky-400">Tumakuru, Karnataka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
