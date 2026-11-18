"use client";

import React, { useEffect, useState } from "react";
import { X, Download, FileText, GraduationCap, Code } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-[32px] shadow-2xl p-6 sm:p-8 space-y-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
          aria-label="Close resume modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-[#003e9c] border border-blue-200">
            <FileText className="w-3.5 h-3.5" />
            VERIFIED CURRICULUM VITAE
          </div>
          <h2 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Mohammed Affan &mdash; Engineering CV
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-mono">
            {profile.headline} &bull; {profile.location}
          </p>
        </div>

        {/* Download Action & Notice */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-700 space-y-1">
            <span className="font-bold text-slate-900 block">Resume Document:</span>
            {hasCustomPdf ? (
              <span className="text-emerald-700 font-mono text-[11px] font-bold">
                &bull; Official PDF available for download
              </span>
            ) : (
              <span className="text-slate-500 text-[11px]">
                Official verified engineering credentials, projects, and skills summary.
              </span>
            )}
          </div>

          <div className="flex gap-2">
            {hasCustomPdf ? (
              <a
                href="/affan-resume.pdf"
                download="Mohammed_Affan_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#003e9c] hover:bg-[#0052cc] rounded-full transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            ) : (
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#003e9c] hover:bg-[#0052cc] rounded-full transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                Print / Save CV
              </button>
            )}
          </div>
        </div>

        {/* Structured Resume Content */}
        <div className="space-y-6 divide-y divide-slate-100 text-xs sm:text-sm">
          {/* Education */}
          <div className="space-y-3 pt-4">
            <h3 className="font-mono uppercase tracking-wider text-xs text-[#003e9c] font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            <div className="space-y-1 pl-3 border-l-2 border-[#003e9c]/30">
              <div className="flex justify-between items-center text-slate-900 font-bold">
                <span>{education.degree} ({education.major})</span>
                <span className="font-mono text-xs text-slate-500 font-medium">{education.timeline}</span>
              </div>
              <p className="text-xs text-slate-600">{education.institution}, {education.location}</p>
              <p className="text-[11px] text-slate-500 italic">
                Note: {education.cgpaNotice}
              </p>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3 pt-4">
            <h3 className="font-mono uppercase tracking-wider text-xs text-[#003e9c] font-bold flex items-center gap-2">
              <Code className="w-4 h-4" />
              Verified Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
              {skills.categories.map((cat) => (
                <div key={cat.name} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-mono text-slate-500 block mb-1 uppercase font-bold">
                    {cat.name}
                  </span>
                  <p className="text-xs text-slate-800 font-medium">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Projects */}
          <div className="space-y-3 pt-4">
            <h3 className="font-mono uppercase tracking-wider text-xs text-emerald-700 font-bold flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Featured Engineering Projects
            </h3>
            <div className="space-y-3 pl-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>DevFlow AI &mdash; Autonomous Code &amp; Security Platform</span>
                  <span className="text-amber-700 text-xs font-mono">In Development</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  Full monorepo featuring Node.js/Express API, Python AI Service, BullMQ queues, Docker/gVisor sandboxed test runner, and AST code extraction.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>EduReach &mdash; Agentic College Information Assistant</span>
                  <span className="text-[#003e9c] text-xs font-mono">In Development</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  Node.js 24 + Express 5, React 19 + Vite, LangChain, Google Gemini, and MongoDB vector store.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Research Rabbit AI &mdash; Semantic Literature Discovery</span>
                  <span className="text-emerald-700 text-xs font-mono font-bold">Completed</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  FastAPI service, Qdrant vector database, citation graph mapper, and RAG factual synthesis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Mohammed Affan &bull; Portfolio 2026</span>
          <button
            onClick={onClose}
            className="text-slate-700 hover:text-[#003e9c] underline underline-offset-4 font-bold"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
