"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle, Clock, AlertTriangle, Layers, ShieldCheck } from "lucide-react";
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

  const getStatusBadge = (statusType: ProjectItem["statusType"], status: string) => {
    if (statusType === "completed") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-300">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          {status}
        </span>
      );
    }
    if (statusType === "in-development") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-[#003e9c] border border-blue-200">
          <Clock className="w-3.5 h-3.5 text-[#003e9c]" />
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-700 border border-amber-300">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
        {status}
      </span>
    );
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-[28px] shadow-2xl p-6 sm:p-8 space-y-7 text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Modal Header */}
            <div className="space-y-2.5 pr-10">
              <div className="flex flex-wrap items-center gap-3">
                {getStatusBadge(project.statusType, project.status)}
                <span className="text-xs font-mono text-slate-500 font-semibold">
                  System Architecture &amp; Case Study
                </span>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#003e9c] font-semibold">
                {project.subtitle}
              </p>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {project.githubUrl ? (
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-[#003e9c] hover:bg-[#0052cc] rounded-full shadow-md transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Repository
                </motion.a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-slate-500 bg-slate-100 border border-slate-200 rounded-full">
                  <Github className="w-4 h-4 opacity-40" />
                  Repository: Private / In Local Development
                </div>
              )}

              {project.liveDemoUrl && (
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Live Demo
                </motion.a>
              )}
            </div>

            {/* Section 1: Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-200/60 space-y-1.5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Problem Statement
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200/60 space-y-1.5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Proposed Solution
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {project.proposedSolution}
                </p>
              </div>
            </div>

            {/* Section 2: Architecture & Implementation Notes */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <div className="flex items-center gap-2 text-[#003e9c] font-mono text-xs uppercase tracking-wider font-bold">
                  <Layers className="w-4 h-4" />
                  System Architecture &amp; Data Flow
                </div>
                <span className="text-[11px] font-mono text-slate-500 font-medium">Verified Technical Layout</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {project.architectureNotes}
              </p>

              {/* Structured Architecture Flow Diagram */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-100 overflow-x-auto shadow-inner">
                {project.id === "research-rabbit-ai" && (
                  <pre className="text-emerald-400 leading-normal">
{`+-------------------------+       Vector Query     +----------------------------------------+
|   Research Discovery UI |<---------------------->|        FastAPI Semantic Engine         |
|  (React 19 + Graph UI)  |                        |  (Vector Embeddings & Citation Mapper) |
+-------------------------+                        +-------------------+--------------------+
                                                                       | Multi-hop Query
                                                                       v
+-------------------------+                        +----------------------------------------+
| Qdrant Vector Database  |<-----------------------|         PostgreSQL Database            |
| (Semantic Paper Vectors)|   Similarity Match     | (Paper Metadata, Citations & Reviews)  |
+-------------------------+                        +----------------------------------------+`}
                  </pre>
                )}

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
                  <pre className="text-slate-400 leading-normal">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Implemented Features
                </h4>
                <ul className="space-y-1.5">
                  {project.implementedFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                      <span className="text-emerald-600 font-bold">&bull;</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-700 flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  Planned Roadmap &amp; Challenges
                </h4>
                <ul className="space-y-1.5">
                  {project.plannedFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-normal">
                      <span className="text-amber-600 font-bold">&bull;</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technology Stack Tags */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Technologies Applied:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Notice */}
            <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 flex items-start gap-2.5 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-[#003e9c] mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 block mb-0.5 font-mono text-[11px] font-bold">
                  DATA INTEGRITY AUDIT NOTE
                </strong>
                {project.verificationNotice}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
