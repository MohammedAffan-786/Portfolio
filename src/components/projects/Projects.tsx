"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Github, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { ProjectItem } from "@/types";
import { ProjectModal } from "./ProjectModal";

interface ProjectsProps {
  projects: ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterOptions = ["All", "Completed"];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Completed") return project.statusType === "completed";
    return true;
  });

  return (
    <section id="projects" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-[#003e9c]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-3 mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/70 text-xs font-bold text-[#003e9c] uppercase font-mono shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-[#003e9c]" />
            03 &bull; Featured Engineering Works
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Architecture, Code &amp; Systems
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl font-normal">
            A portfolio of practical engineering projects and research platforms. Each case study details actual implemented components, verified repositories, and clear roadmap boundaries.
          </p>

          {/* Filter Pills with Animated Sliding Pill */}
          <div className="flex flex-wrap justify-center gap-1.5 pt-2">
            {filterOptions.map((opt) => {
              const isActive = selectedFilter === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setSelectedFilter(opt)}
                  className="relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-[#003e9c] rounded-full shadow-sm shadow-blue-900/25"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-700 hover:text-slate-900 bg-white/80 border border-white/90 backdrop-blur-md hover:bg-white px-3.5 py-1 rounded-full shadow-sm"
                    }`}
                  >
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid (Medium Sized Spotlight Cards - Dynamic Mouse Glow) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isCompleted = project.statusType === "completed";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  onClick={() => setActiveModalProject(project)}
                  className="cursor-pointer h-full"
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalProject(project);
                    }
                  }}
                  aria-label={`View architecture details for ${project.title}`}
                >
                  <SpotlightCard className="p-4 sm:p-5 h-full hover:border-[#003e9c]/40 group">
                    <div>
                      {/* Header Status & Top Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                            isCompleted
                              ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                              : "bg-blue-50 text-[#003e9c] border-blue-200"
                          }`}
                        >
                          {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                          {project.status}
                        </span>

                        <div className="flex items-center gap-1.5">
                          {project.liveDemoUrl && (
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50/90 hover:bg-emerald-100 border border-emerald-300 shadow-sm transition-all hover:scale-105"
                              title={`Launch live demo for ${project.title}`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>Live Demo</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                          <div className="p-1 rounded-full bg-slate-100 text-slate-600 group-hover:text-white group-hover:bg-[#003e9c] transition-all group-hover:scale-105 shadow-sm">
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#003e9c] transition-colors tracking-tight mb-0.5">
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-[#003e9c] mb-2">
                        {project.subtitle}
                      </p>

                      {/* Overview Text */}
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-3.5 font-normal">
                        {project.overview}
                      </p>
                    </div>

                    {/* Bottom Card Footer: Tech Tags & Link */}
                    <div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-medium bg-white/80 text-slate-700 border border-white/95 shadow-[0_1px_3px_rgba(0,62,156,0.03)]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded-lg text-[9px] font-mono text-slate-500 bg-white/60 border border-white/80">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                        <span className="text-[11px] font-semibold text-slate-700 group-hover:text-[#003e9c] transition-colors">
                          View Architecture &rarr;
                        </span>
                        <div className="flex items-center gap-2">
                          {project.liveDemoUrl && (
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-emerald-700 hover:text-emerald-800 flex items-center gap-1 font-bold text-[11px] hover:underline"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[#003e9c] hover:text-[#002b66] flex items-center gap-1 font-bold text-[11px] hover:underline"
                            >
                              <Github className="w-3 h-3" />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal Case Study */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
