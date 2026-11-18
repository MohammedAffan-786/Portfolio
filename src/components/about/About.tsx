"use client";

import React from "react";
import { GraduationCap, Layers, BrainCircuit, Compass } from "lucide-react";
import type { ProfileData, EducationData } from "@/types";

interface AboutProps {
  profile: ProfileData;
  education: EducationData;
}

export function About({ profile, education }: AboutProps) {
  const pillars = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#003e9c]" />,
      title: "Academic Background",
      description:
        "Computer Science Engineering student at Sri Siddhartha Institute of Technology (SSIT), Tumakuru (2024–2027). Building strong fundamentals in data structures, algorithms, databases, and systems.",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0052cc]" />,
      title: "MERN & Full-Stack Development",
      description:
        "Developing web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB. Focused on clean modular architectures and reliable RESTful APIs.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-emerald-600" />,
      title: "AI-Powered Applications",
      description:
        "Passionate about practical integrations of Generative AI and LLMs. Dedicated to building meaningful solutions like DevFlow AI, EduReach, and Research Rabbit AI that solve real-world problems.",
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#003e9c]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 text-xs font-bold text-[#003e9c] uppercase font-mono shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#003e9c]" />
            01 &bull; About Me
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Personal Introduction &amp; Interests
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
            Computer Science Engineering student passionate about full-stack engineering, distributed systems, and real-world applied AI.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.04)] space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Building meaningful software through continuous learning
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {profile.about}
            </p>

            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70">
                <span className="text-slate-600 block text-[10px] uppercase font-semibold">Location</span>
                <span className="text-slate-900 font-bold">{profile.location}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70">
                <span className="text-slate-600 block text-[10px] uppercase font-semibold">Degree</span>
                <span className="text-slate-900 font-bold">B.E. CSE</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70">
                <span className="text-slate-600 block text-[10px] uppercase font-semibold">Institution</span>
                <span className="text-slate-900 font-bold">SSIT Tumakuru</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70">
                <span className="text-slate-600 block text-[10px] uppercase font-semibold">Timeline</span>
                <span className="text-slate-900 font-bold">{education.timeline}</span>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[24px] bg-white border border-slate-200/90 hover:border-[#003e9c]/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-0.5 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-50/80 border border-blue-100 group-hover:scale-110 group-hover:bg-[#003e9c] text-[#003e9c] group-hover:text-white transition-all">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#003e9c] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
