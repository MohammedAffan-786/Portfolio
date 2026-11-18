"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import type { ProfileData, EducationData } from "@/types";

interface HeroProps {
  profile: ProfileData;
  education: EducationData;
  onOpenResumeModal: () => void;
}

export function Hero({ profile, education, onOpenResumeModal }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      {/* Massive Framer-style Curved Aviation Hero Container in Advanced Light Theme */}
      <div className="relative mx-auto max-w-7xl rounded-[36px] sm:rounded-[48px] overflow-hidden border border-blue-200/70 bg-gradient-to-b from-[#eaf2ff] via-[#f4f7fe] to-[#ffffff] shadow-[0_20px_60px_-15px_rgba(0,62,156,0.12)] p-6 sm:p-14 lg:p-20">
        
        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-gradient-to-b from-[#5594f2]/20 via-[#003e9c]/10 to-transparent blur-3xl pointer-events-none" />

        {/* Subtle grid line accents */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 62, 156, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 62, 156, 0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200/80 bg-white/80 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#003e9c] animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-[#003e9c] uppercase font-mono">
              B.E. Computer Science &bull; SSIT Tumakuru (2024&ndash;2027)
            </span>
          </div>

          {/* Main Hero Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Crafting Intelligent Systems &amp;{" "}
              <span className="bg-gradient-to-r from-[#002b66] via-[#003e9c] to-[#0052cc] bg-clip-text text-transparent">
                High-Impact Web Applications
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
              Mohammed Affan Farooq &mdash; Computer Science Engineering undergraduate specializing in MERN stack architectures, autonomous agents, and RAG knowledge systems.
            </p>
          </div>

          {/* Action Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#003e9c] hover:bg-[#0052cc] shadow-lg shadow-blue-900/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-[#003e9c]" />
              <span>Let&apos;s Connect</span>
            </Link>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#003e9c] bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/80 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-[#003e9c]" />
              <span>View Verified CV</span>
            </button>
          </div>

          {/* Social Proof Pills */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href="https://github.com/MohammedAffan-786"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 shadow-sm transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mdaffan1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#003e9c] hover:bg-slate-50 shadow-sm transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
