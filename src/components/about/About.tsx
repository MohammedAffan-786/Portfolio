"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Layers, BrainCircuit, Compass } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { ProfileData, EducationData } from "@/types";

interface AboutProps {
  profile: ProfileData;
  education: EducationData;
}

export function About({ profile, education }: AboutProps) {
  const pillars = [
    {
      icon: <GraduationCap className="w-4 h-4 text-[#003e9c]" />,
      title: "Academic Background",
      description:
        "Computer Science Engineering student at Sri Siddhartha Institute of Technology (SSIT), Tumakuru (2024–2027). Grounded fundamentals in algorithms, data structures, and distributed systems.",
    },
    {
      icon: <Layers className="w-4 h-4 text-[#0052cc]" />,
      title: "MERN & Full-Stack Development",
      description:
        "Developing web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB. Focused on clean modular architectures and reliable RESTful APIs.",
    },
    {
      icon: <BrainCircuit className="w-4 h-4 text-emerald-600" />,
      title: "AI-Powered Applications",
      description:
        "Building practical solutions integrating Generative AI, LangChain, vector databases (Qdrant), and LLM reasoning pipelines like DevFlow AI, EduReach, and Research Rabbit AI.",
    },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#003e9c]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/70 text-xs font-bold text-[#003e9c] uppercase font-mono shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#003e9c]" />
            01 &bull; About Me
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Personal Introduction &amp; Interests
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl font-normal">
            Computer Science Engineering student passionate about full-stack engineering, distributed systems, and real-world applied AI.
          </p>
        </motion.div>

        {/* Narrative & Pillars Grid (Animated & Spotlight Medium Sized) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Narrative Card with Dynamic Cursor Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <SpotlightCard className="p-6 sm:p-7 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Building meaningful software through continuous learning
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {profile.about}
              </p>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Location</span>
                  <span className="text-slate-900 font-bold text-xs truncate block">{profile.location}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Degree</span>
                  <span className="text-slate-900 font-bold text-xs">B.E. CSE</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Institution</span>
                  <span className="text-slate-900 font-bold text-xs truncate block">SSIT</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Timeline</span>
                  <span className="text-slate-900 font-bold text-xs">{education.timeline}</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Pillars List (Animated Staggered Spotlight Cards) */}
          <div className="lg:col-span-6 space-y-3">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                <SpotlightCard className="p-4 sm:p-4.5 group">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100/80 shrink-0">
                      {pillar.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#003e9c] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
