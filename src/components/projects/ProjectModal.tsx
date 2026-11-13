"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle, Clock, AlertTriangle, Cpu, Layers, ShieldCheck } from "lucide-react";
import type { ProjectItem } from "@/types";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getStatusBadge = (statusType: ProjectItem["statusType"], status: string) => {
    if (statusType === "completed") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          {status}
        </span>
      );
    }
    if (statusType === "in-development") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-950/60 text-sky-300 border border-sky-500/30">
          <Clock className="w-3.5 h-3.5 text-sky-400" />
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-950/60 text-amber-300 border border-amber-500/30">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
        {status}
      </span>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0f15] border border-white/[0.12] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-8 text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-3">
            {getStatusBadge(project.statusType, project.status)}
            <span className="text-xs font-mono text-zinc-400">
              System Architecture &amp; Case Study
            </span>
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-sky-300 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-3 pt-1">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-white/[0.1] rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              View GitHub Repository
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-zinc-400 bg-zinc-900 border border-white/[0.05] rounded-lg">
              <Github className="w-4 h-4 opacity-40" />
              Repository: Private / In Local Development
            </div>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Launch Live Demo
            </a>
          )}
        </div>

        {/* Section 1: Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-zinc-950/60 border border-white/[0.06] space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-red-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              Problem Statement
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-950/60 border border-white/[0.06] space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Proposed Solution
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.proposedSolution}
            </p>
          </div>
        </div>

        {/* Section 2: Architecture & Implementation Notes */}
        <div className="p-6 rounded-xl bg-zinc-950/80 border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <Layers className="w-4 h-4" />
              System Architecture &amp; Data Flow
            </div>
            <span className="text-[11px] font-mono text-zinc-400">Verified Technical Layout</span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {project.architectureNotes}
          </p>

          {/* Structured Architecture Flow Diagram */}
          <div className="p-4 rounded-lg bg-[#07080b] border border-white/[0.04] font-mono text-xs text-zinc-300 overflow-x-auto">
            {project.id === "devflow-ai" && (
              <pre className="text-sky-300 leading-normal">
{`+-------------------------+       HTTP/REST        +----------------------------------------+
|      Frontend UI        |<---------------------->|        Core API Server (Node.js)       |
|  (React 18 + Vite + TS) |                        | (Express, Zod, Mongoose, BullMQ Queue) |
+-------------------------+                        +-------------------+--------------------+
                                                                       | Enqueues Task
                                                                       v
+-------------------------+                        +----------------------------------------+
| Hardened Worker Sandbox |<-----------------------|              Redis / BullMQ            |
| (Docker/gVisor Seccomp) |   Isolated Task Exec   | (Async Task Ingestion & Job Queue)     |
+-------------------------+                        +----------------------------------------+`}
              </pre>
            )}

            {project.id === "edureach" && (
              <pre className="text-indigo-300 leading-normal">
{`+-------------------------+       REST / JWT       +----------------------------------------+
|      Client Portal      |<---------------------->|       Backend Server (Node.js 24)      |
| (React 19 + Vite + TW)  |                        |   (Express 5, TypeScript, Auth Engine)  |
+-------------------------+                        +-------------------+--------------------+
                                                                       | RAG Retrieval
                                                                       v
+-------------------------+                        +----------------------------------------+
|    Google Gemini LLM    |<-----------------------|         MongoDB & Mongoose Store       |
| (Knowledge Augmentation)|                        | (Campus Knowledge Base & Student Data) |
+-------------------------+                        +----------------------------------------+`}
              </pre>
            )}

            {project.id === "ai-resume-analyser" && (
              <pre className="text-emerald-300 leading-normal">
{`+-------------------------+       PDF File         +----------------------------------------+
|    Streamlit Web UI     |----------------------->|     Python NLP Extraction Pipeline     |
| (Interactive Dashboard) |                        |      (spaCy, PyResparser, Tokenizer)   |
+-------------------------+                        +-------------------+--------------------+
                                                                       | Persists Data
                                                                       v
+-------------------------+                        +----------------------------------------+
| Domain Recommendation   |<-----------------------|        MySQL Relational Database       |
| (Course & Skill Matching|                        |  (Candidate Resume Records & Ratings)  |
+-------------------------+                        +----------------------------------------+`}
              </pre>
            )}

            {project.id === "rapidcare" && (
              <pre className="text-amber-300 leading-normal">
{`+-------------------------+       HTTPS API        +----------------------------------------+
|    Emergency Web SPA    |<---------------------->|        Node.js & Express Backend       |
| (React + Vite + TW CSS) |                        | (Emergency Resource Router & Triage)   |
+-------------------------+                        +-------------------+--------------------+
                                                                       |
                                                                       v
                                                   +----------------------------------------+
                                                   | MongoDB & Cloudinary Media Integration |
                                                   | (Hospital Coordinates & Action Videos) |
                                                   +----------------------------------------+`}
              </pre>
            )}

            {project.id === "mountainsafe-ai" && (
              <pre className="text-zinc-400 leading-normal">
{`[CONCEPTUAL PIPELINE ONLY — NOT YET IMPLEMENTED]
+-------------------------+                        +----------------------------------------+
| GIS & Elevation Data    |--- (Planned Stream) -->|      Risk Index Prediction Service     |
| (OpenStreetMap & Cont.) |                        | (Machine Learning Models — In R&D)     |
+-------------------------+                        +----------------------------------------+`}
              </pre>
            )}
          </div>
        </div>

        {/* Section 3: Implemented vs Planned Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              Verified Implemented Features
            </h4>
            <ul className="space-y-2">
              {project.implementedFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                  <span className="text-emerald-400 mt-0.5">&bull;</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              Planned Roadmap &amp; Challenges
            </h4>
            <ul className="space-y-2">
              {project.plannedFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                  <span className="text-amber-400 mt-0.5">&bull;</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technology Stack Tags */}
        <div className="space-y-2 pt-2 border-t border-white/[0.06]">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Technologies Applied:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-white/[0.06] text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Verification Notice */}
        <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08] flex items-start gap-3 text-xs text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
          <div>
            <strong className="text-zinc-200 block mb-0.5 font-mono text-[11px]">
              DATA INTEGRITY AUDIT NOTE
            </strong>
            {project.verificationNotice}
          </div>
        </div>
      </div>
    </div>
  );
}
