"use client";

import React, { useState } from "react";
import { FolderGit2, Github, ExternalLink, ArrowUpRight, CheckCircle2, Clock, AlertTriangle, Layers, Code } from "lucide-react";
import type { ProjectItem } from "@/types";
import { ProjectModal } from "./ProjectModal";

interface ProjectsProps {
  projects: ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterOptions = ["All", "Completed", "In Development", "Concept"];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Completed") return project.statusType === "completed";
    if (selectedFilter === "In Development") return project.statusType === "in-development";
    if (selectedFilter === "Concept") return project.statusType === "concept";
    return true;
  });

  return (
    <section id="projects" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/[0.08] text-xs font-mono text-sky-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            03 &bull; FEATURED ENGINEERING WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Architecture, Code &amp; Systems
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            A portfolio of practical engineering projects and research platforms. Each case study details actual implemented components, verified repositories, and clear roadmap boundaries.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === opt
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                  : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-white/[0.06] hover:border-white/[0.12]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="cursor-pointer group relative rounded-2xl bg-zinc-900/40 border border-white/[0.07] hover:border-sky-500/30 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/5 backdrop-blur-sm"
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
              <div>
                {/* Header Status & Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                      project.statusType === "completed"
                        ? "bg-emerald-950/50 text-emerald-300 border-emerald-500/30"
                        : project.statusType === "in-development"
                        ? "bg-sky-950/50 text-sky-300 border-sky-500/30"
                        : "bg-amber-950/50 text-amber-300 border-amber-500/30"
                    }`}
                  >
                    {project.status}
                  </span>

                  <div className="p-1.5 rounded-lg bg-zinc-800/80 text-zinc-400 group-hover:text-sky-300 group-hover:bg-zinc-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-sky-400/90 mb-3">
                  {project.subtitle}
                </p>

                {/* Overview Text */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                  {project.overview}
                </p>
              </div>

              {/* Bottom Card Footer: Tech Tags & GitHub Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-950 text-zinc-400 border border-white/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span className="text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    Click to view architecture
                  </span>
                  {project.githubUrl && (
                    <span className="text-sky-400 flex items-center gap-1">
                      <Github className="w-3.5 h-3.5" />
                      Repo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Case Study */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
