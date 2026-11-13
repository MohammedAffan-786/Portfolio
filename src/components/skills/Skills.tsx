"use client";

import React, { useState } from "react";
import { Cpu, CheckCircle2, BookOpen, Layers, Terminal, Sparkles } from "lucide-react";
import type { SkillsData } from "@/types";

interface SkillsProps {
  skillsData: SkillsData;
}

export function Skills({ skillsData }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skillsData.categories.map((c) => c.name)];

  const displayedCategories =
    selectedCategory === "All"
      ? skillsData.categories
      : skillsData.categories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-sky-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/[0.08] text-xs font-mono text-indigo-400">
            <Cpu className="w-3.5 h-3.5" />
            02 &bull; TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Verified Skills &amp; Applied Tooling
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Practical competencies verified through actual repositories and coursework. No fabricated percentage bars or unproven seniority claims.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                  : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-white/[0.06] hover:border-white/[0.12]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.07] backdrop-blur-sm flex flex-col justify-between hover:border-white/[0.15] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-sky-300 transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {category.skills.length} tools
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-zinc-950/60 border border-white/[0.04] hover:border-white/[0.1] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-zinc-200">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            skill.level === "Proficient"
                              ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/30"
                              : skill.level === "Working Knowledge"
                              ? "bg-sky-950/40 text-sky-300 border-sky-500/30"
                              : skill.level === "Project Experience"
                              ? "bg-indigo-950/40 text-indigo-300 border-indigo-500/30"
                              : "bg-zinc-800 text-zinc-400 border-zinc-700"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom verification badge */}
              <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified in active code</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
