"use client";

import React, { useState } from "react";
import { FolderGit2, Github, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-[#003e9c]/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 text-xs font-bold text-[#003e9c] uppercase font-mono shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-[#003e9c]" />
            03 &bull; Featured Engineering Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Architecture, Code &amp; Systems
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
            A portfolio of practical engineering projects and research platforms. Each case study details actual implemented components, verified repositories, and clear roadmap boundaries.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedFilter(opt)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                  selectedFilter === opt
                    ? "bg-[#003e9c] text-white shadow-md shadow-blue-900/25 scale-105"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50 shadow-sm"
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
                className="cursor-pointer group relative rounded-[28px] bg-white border border-slate-200/90 hover:border-[#003e9c]/50 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,62,156,0.1)]"
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
                      className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${
                        isCompleted
                          ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                          : project.statusType === "in-development"
                          ? "bg-blue-50 text-[#003e9c] border-blue-200"
                          : "bg-amber-50 text-amber-700 border-amber-300"
                      }`}
                    >
                      {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                      {project.status}
                    </span>

                    <div className="p-2 rounded-full bg-slate-100 text-slate-600 group-hover:text-white group-hover:bg-[#003e9c] transition-all group-hover:scale-110 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#003e9c] transition-colors tracking-tight mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#003e9c] mb-3.5">
                    {project.subtitle}
                  </p>

                  {/* Overview Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {project.overview}
                  </p>
                </div>

                {/* Bottom Card Footer: Tech Tags & GitHub Link */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-full text-[10px] font-mono text-slate-500 bg-slate-50 border border-slate-200/60">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span className="text-[11px] font-semibold text-slate-700 group-hover:text-[#003e9c] transition-colors">
                      View Architecture &rarr;
                    </span>
                    {project.githubUrl && (
                      <span className="text-[#003e9c] flex items-center gap-1 font-bold">
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
