"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="skills" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#003e9c]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/70 text-xs font-bold text-[#003e9c] uppercase font-mono shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#003e9c]" />
            02 &bull; Technical Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Verified Skills &amp; Applied Tooling
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl font-normal">
            Practical competencies verified through actual repositories and coursework. No fabricated percentage bars or unproven seniority claims.
          </p>

          {/* Category Filter Pills with Sliding Animation */}
          <div className="flex flex-wrap justify-center gap-1.5 pt-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillsTab"
                      className="absolute inset-0 bg-[#003e9c] rounded-full shadow-sm shadow-blue-900/25"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-700 hover:text-slate-900 bg-white border border-slate-200/90 hover:bg-slate-50 px-3.5 py-1 rounded-full shadow-sm"
                    }`}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Cards Grid (Animated Motion Cards) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence>
            {displayedCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                layout
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 sm:p-5.5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#003e9c]/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,62,156,0.06)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#003e9c] transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-[10px] font-mono font-bold text-[#003e9c] px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                      {category.skills.length} tools
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-3.5 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${
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
                        <p className="text-[10px] sm:text-[11px] text-slate-500 leading-normal font-normal">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom verification badge */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-500 font-mono font-medium">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified in active coursework &amp; code</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
