"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { SkillsData } from "@/types";

interface SkillsProps {
  skillsData: SkillsData;
}

export function Skills({ skillsData }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skillsData.categories.map((c) => c.name)];

  const categoryColors: Record<string, { spotlight: string; badge: string; text: string; dot: string }> = {
    "Programming Languages": {
      spotlight: "rgba(37, 99, 235, 0.16)",
      badge: "bg-blue-50/90 text-blue-700 border-blue-200",
      text: "group-hover:text-blue-600",
      dot: "bg-blue-500",
    },
    "Frontend Development": {
      spotlight: "rgba(6, 182, 212, 0.16)",
      badge: "bg-cyan-50/90 text-cyan-700 border-cyan-200",
      text: "group-hover:text-cyan-600",
      dot: "bg-cyan-500",
    },
    "Backend Development": {
      spotlight: "rgba(16, 185, 129, 0.16)",
      badge: "bg-emerald-50/90 text-emerald-700 border-emerald-200",
      text: "group-hover:text-emerald-600",
      dot: "bg-emerald-500",
    },
    "Databases": {
      spotlight: "rgba(245, 158, 11, 0.16)",
      badge: "bg-amber-50/90 text-amber-800 border-amber-200",
      text: "group-hover:text-amber-600",
      dot: "bg-amber-500",
    },
    "AI & Generative AI": {
      spotlight: "rgba(147, 51, 234, 0.16)",
      badge: "bg-purple-50/90 text-purple-700 border-purple-200",
      text: "group-hover:text-purple-600",
      dot: "bg-purple-500",
    },
    "Developer Tools": {
      spotlight: "rgba(244, 63, 94, 0.16)",
      badge: "bg-rose-50/90 text-rose-700 border-rose-200",
      text: "group-hover:text-rose-600",
      dot: "bg-rose-500",
    },
  };

  const displayedCategories =
    selectedCategory === "All"
      ? skillsData.categories
      : skillsData.categories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#003e9c]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
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
                        : "text-slate-700 hover:text-slate-900 bg-white/80 border border-white/90 backdrop-blur-md hover:bg-white px-3.5 py-1 rounded-full shadow-sm"
                    }`}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Cards Grid (Animated Motion Spotlight Cards) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {displayedCategories.map((category, idx) => {
              const theme = categoryColors[category.name] || {
                spotlight: "rgba(59, 130, 246, 0.14)",
                badge: "bg-blue-50/90 text-blue-700 border-blue-200",
                text: "group-hover:text-blue-600",
                dot: "bg-blue-500",
              };

              return (
                <motion.div
                  key={category.name}
                  layout
                  initial={{ opacity: 0, y: 25, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <SpotlightCard spotlightColor={theme.spotlight} className="p-4 sm:p-5 h-full group">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
                          <h3 className={`text-sm sm:text-base font-bold text-slate-900 ${theme.text} transition-colors`}>
                            {category.name}
                          </h3>
                        </div>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border shadow-sm ${theme.badge}`}>
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
                            className="p-2.5 rounded-xl bg-white/80 border border-white/95 shadow-[0_2px_8px_rgba(0,62,156,0.03),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white hover:border-blue-200/80 transition-all"
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
                                    ? "bg-blue-50 text-blue-700 border-blue-200"
                                    : "bg-purple-50 text-purple-700 border-purple-200"
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
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
