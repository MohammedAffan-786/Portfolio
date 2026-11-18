"use client";

import React, { useState } from "react";
import { Cpu, CheckCircle2 } from "lucide-react";
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
    <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#003e9c]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5594f2]" />
            <span className="text-xs font-semibold tracking-wider text-white uppercase font-mono">
              02 &bull; Technical Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Verified Skills &amp; Applied Tooling
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl font-light">
            Practical competencies verified through actual repositories and coursework. No fabricated percentage bars or unproven seniority claims.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#003e9c] text-white shadow-lg shadow-blue-900/40 border border-blue-400/30 scale-105"
                    : "bg-white/[0.05] text-white/70 hover:text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.name}
              className="p-7 rounded-[28px] bg-gradient-to-b from-[#040d36]/60 via-[#050716]/80 to-[#04081c] border border-white/10 hover:border-[#5594f2]/40 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20 group"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                  <h3 className="text-base font-bold text-white group-hover:text-[#5594f2] transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-mono text-[#d1eaff]/70 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10">
                    {category.skills.length} tools
                  </span>
                </div>

                <p className="text-xs text-white/70 mb-5 leading-relaxed font-light">
                  {category.description}
                </p>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                            skill.level === "Proficient"
                              ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                              : skill.level === "Working Knowledge"
                              ? "bg-[#003e9c]/30 text-[#d1eaff] border-blue-400/30"
                              : "bg-white/10 text-white/80 border-white/15"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-white/60 leading-normal font-light">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom verification badge */}
              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-white/60 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified in active coursework &amp; code</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
