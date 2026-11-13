"use client";

import React, { useEffect, useState } from "react";
import { X, Download, FileText, CheckCircle2, AlertCircle, ExternalLink, GraduationCap, Code } from "lucide-react";
import type { ProfileData, EducationData, SkillsData } from "@/types";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  education: EducationData;
  skills: SkillsData;
}

export function ResumeModal({ isOpen, onClose, profile, education, skills }: ResumeModalProps) {
  const [hasCustomPdf, setHasCustomPdf] = useState(false);

  useEffect(() => {
    // Check if public/affan-resume.pdf exists
    fetch("/affan-resume.pdf", { method: "HEAD" })
      .then((res) => {
        setHasCustomPdf(res.ok);
      })
      .catch(() => setHasCustomPdf(false));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0f15] border border-white/[0.12] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label="Close resume modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-sky-950/60 text-sky-300 border border-sky-500/30">
            <FileText className="w-3.5 h-3.5" />
            VERIFIED CURRICULUM VITAE
          </div>
          <h2 id="resume-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Mohammed Affan — Engineering CV
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            {profile.headline} &bull; {profile.location}
          </p>
        </div>

        {/* Download Action & Notice */}
        <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-zinc-300 space-y-1">
            <span className="font-semibold text-zinc-100 block">Resume Document:</span>
            {hasCustomPdf ? (
              <span className="text-emerald-400 font-mono text-[11px]">
                &bull; Official PDF available for download
              </span>
            ) : (
              <span className="text-zinc-400 text-[11px]">
                Drop your customized PDF at <code className="text-sky-300 font-mono">public/affan-resume.pdf</code> for direct document download.
              </span>
            )}
          </div>

          <div className="flex gap-2">
            {hasCustomPdf ? (
              <a
                href="/affan-resume.pdf"
                download="Mohammed_Affan_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            ) : (
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Print / Save CV View
              </button>
            )}
          </div>
        </div>

        {/* Structured Resume Content */}
        <div className="space-y-6 divide-y divide-white/[0.06] text-xs sm:text-sm">
          {/* Education */}
          <div className="space-y-3 pt-4">
            <h3 className="font-mono uppercase tracking-wider text-xs text-sky-400 font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            <div className="space-y-1 pl-2 border-l border-white/[0.08]">
              <div className="flex justify-between items-center text-zinc-200 font-medium">
                <span>{education.degree} ({education.major})</span>
                <span className="font-mono text-xs text-zinc-400">{education.timeline}</span>
              </div>
              <p className="text-xs text-zinc-400">{education.institution}, {education.location}</p>
              <p className="text-[11px] text-zinc-400 italic">
                Note: {education.cgpaNotice}
              </p>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3 pt-4">
            <h3 className="font-mono uppercase tracking-wider text-xs text-indigo-400 font-semibold flex items-center gap-2">
              <Code className="w-4 h-4" />
              Verified Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
              {skills.categories.map((cat) => (
                <div key={cat.name} className="p-2.5 rounded-lg bg-zinc-950/60 border border-white/[0.04]">
                  <span className="text-[11px] font-mono text-zinc-400 block mb-1 uppercase">
                    {cat.name}
                  </span>
                  <p className="text-xs text-zinc-300">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Projects */}
          <div className="space-y-3 pt-4">
            <h3 className="font-mono uppercase tracking-wider text-xs text-emerald-400 font-semibold flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Featured Engineering Projects
            </h3>
            <div className="space-y-3 pl-2">
              <div className="p-3 rounded-lg bg-zinc-950/60 border border-white/[0.04]">
                <div className="flex justify-between font-medium text-zinc-200">
                  <span>DevFlow AI — Autonomous Code &amp; Security Platform</span>
                  <span className="text-sky-400 text-xs font-mono">In Development</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Full monorepo featuring Node.js/Express API, Python AI Service, BullMQ queues, Docker/gVisor sandboxed test runner, and AST code extraction.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-zinc-950/60 border border-white/[0.04]">
                <div className="flex justify-between font-medium text-zinc-200">
                  <span>EduReach — Agentic College Information Assistant</span>
                  <span className="text-sky-400 text-xs font-mono">In Development</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Node.js 24 + Express 5, React 19 + Vite, LangChain, Google Gemini, and MongoDB vector store.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-zinc-950/60 border border-white/[0.04]">
                <div className="flex justify-between font-medium text-zinc-200">
                  <span>AI Resume Analyser</span>
                  <span className="text-emerald-400 text-xs font-mono">Completed</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Streamlit web dashboard utilizing Python, spaCy NLP, and MySQL for candidate resume parsing and domain recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span>Mohammed Affan &bull; Portfolio 2026</span>
          <button
            onClick={onClose}
            className="text-zinc-300 hover:text-white underline underline-offset-4"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
