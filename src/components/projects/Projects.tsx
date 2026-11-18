"use client";

import React, { useState } from "react";
import { FolderGit2, Github, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
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
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-[#003e9c]/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5594f2]" />
            <span className="text-xs font-semibold tracking-wider text-white uppercase font-mono">
              03 &bull; Featured Engineering Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Architecture, Code &amp; Systems
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl font-light">
            A portfolio of practical engineering projects and research platforms. Each case study details actual implemented components, verified repositories, and clear roadmap boundaries.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedFilter(opt)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  selectedFilter === opt
                    ? "bg-[#003e9c] text-white shadow-lg shadow-blue-900/40 border border-blue-400/30 scale-105"
                    : "bg-white/[0.05] text-white/70 hover:text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isCompleted = project.statusType === "completed";
            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="cursor-pointer group relative rounded-[28px] bg-gradient-to-b from-[#040d36]/70 via-[#050716]/90 to-[#04081c] border border-white/10 hover:border-[#5594f2]/50 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/20 backdrop-blur-sm"
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
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full border ${
                        isCompleted
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30 font-medium"
                          : project.statusType === "in-development"
                          ? "bg-[#003e9c]/30 text-[#d1eaff] border-blue-400/30"
                          : "bg-amber-500/15 text-amber-300 border-amber-500/30"
                      }`}
                    >
                      {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                      {project.status}
                    </span>

                    <div className="p-2 rounded-full bg-white/10 text-white/70 group-hover:text-white group-hover:bg-[#003e9c] transition-all group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#5594f2] transition-colors tracking-tight mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-[#5594f2]/90 mb-3.5">
                    {project.subtitle}
                  </p>

                  {/* Overview Text */}
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3 mb-6 font-light">
                    {project.overview}
                  </p>
                </div>

                {/* Bottom Card Footer: Tech Tags & GitHub Link */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.06] text-white/80 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-full text-[10px] font-mono bg-white/[0.04] text-white/60">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
                    <span className="text-[11px] group-hover:text-white transition-colors">
                      View Architecture &rarr;
                    </span>
                    {project.githubUrl && (
                      <span className="text-[#5594f2] flex items-center gap-1 font-semibold">
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
