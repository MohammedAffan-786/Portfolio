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
      icon: <GraduationCap className="w-5 h-5 text-[#5594f2]" />,
      title: "Academic Background",
      description:
        "Computer Science Engineering student at Sri Siddhartha Institute of Technology (SSIT), Tumakuru (2024–2027). Building strong fundamentals in data structures, algorithms, databases, and systems.",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#d1eaff]" />,
      title: "MERN & Full-Stack Development",
      description:
        "Developing web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB. Focused on clean modular architectures and reliable RESTful APIs.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-emerald-400" />,
      title: "AI-Powered Applications",
      description:
        "Passionate about practical integrations of Generative AI and LLMs. Dedicated to building meaningful solutions like DevFlow AI, EduReach, and Research Rabbit AI that solve real-world problems.",
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#003e9c]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5594f2]" />
            <span className="text-xs font-semibold tracking-wider text-white uppercase font-mono">
              01 &bull; About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Personal Introduction &amp; Interests
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl font-light">
            Computer Science Engineering student passionate about full-stack engineering, distributed systems, and real-world applied AI.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-[28px] bg-gradient-to-b from-[#040d36]/70 via-[#050716]/90 to-[#04081c] border border-white/10 backdrop-blur-md space-y-6 shadow-xl shadow-blue-950/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Building meaningful software through continuous learning
            </h3>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
              {profile.about}
            </p>

            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-white/70">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-white/50 block text-[10px] uppercase">Location</span>
                <span className="text-white font-medium">{profile.location}</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-white/50 block text-[10px] uppercase">Degree</span>
                <span className="text-white font-medium">B.E. CSE</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-white/50 block text-[10px] uppercase">Institution</span>
                <span className="text-white font-medium">SSIT Tumakuru</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-white/50 block text-[10px] uppercase">Timeline</span>
                <span className="text-white font-medium">{education.timeline}</span>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[24px] bg-gradient-to-b from-[#040d36]/50 via-[#050716]/70 to-[#04081c] border border-white/10 hover:border-[#5594f2]/40 transition-all duration-300 hover:scale-[1.01] group backdrop-blur-sm shadow-lg shadow-blue-950/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10 group-hover:scale-110 group-hover:bg-[#003e9c]/30 transition-all">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-white group-hover:text-[#5594f2] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
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
