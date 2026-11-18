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
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#003e9c]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 text-xs font-bold text-[#003e9c] uppercase font-mono shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#003e9c]" />
            02 &bull; Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Verified Skills &amp; Applied Tooling
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
            Practical competencies verified through actual repositories and coursework. No fabricated percentage bars or unproven seniority claims.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#003e9c] text-white shadow-md shadow-blue-900/25 scale-105"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50 shadow-sm"
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
              className="p-7 rounded-[28px] bg-white border border-slate-200/90 hover:border-[#003e9c]/40 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,62,156,0.08)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#003e9c] transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-mono font-semibold text-[#003e9c] px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                    {category.skills.length} tools
                  </span>
                </div>

                <p className="text-xs text-slate-600 mb-5 leading-relaxed font-normal">
                  {category.description}
                </p>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                            skill.level === "Proficient"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                              : skill.level === "Working Knowledge"
                              ? "bg-blue-50 text-[#003e9c] border-blue-200"
                              : "bg-slate-100 text-slate-700 border-slate-300"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal font-normal">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom verification badge */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified in active coursework &amp; code</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
