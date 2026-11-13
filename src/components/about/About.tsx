"use client";

import React from "react";
import { GraduationCap, Code2, BrainCircuit, Lightbulb, Compass, Layers } from "lucide-react";
import type { ProfileData, EducationData } from "@/types";

interface AboutProps {
  profile: ProfileData;
  education: EducationData;
}

export function About({ profile, education }: AboutProps) {
  const pillars = [
    {
      icon: <GraduationCap className="w-5 h-5 text-sky-400" />,
      title: "Academic Background",
      description:
        "Computer Science Engineering student at Sri Siddhartha Institute of Technology (SSIT), Tumakuru (2024–2027). Building strong fundamentals in data structures, algorithms, databases, and systems.",
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      title: "MERN & Full-Stack Development",
      description:
        "Developing web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB. Focused on clean modular architectures and reliable RESTful APIs.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-emerald-400" />,
      title: "AI-Powered Applications",
      description:
        "Passionate about practical integrations of Generative AI and LLMs. Dedicated to building meaningful solutions like DevFlow AI and EduReach that solve real-world problems.",
    },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/[0.08] text-xs font-mono text-sky-400">
            <Compass className="w-3.5 h-3.5" />
            01 &bull; ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Personal Introduction &amp; Interests
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Computer Science Engineering student interested in full-stack development and AI-powered applications.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/[0.07] backdrop-blur-md space-y-6">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Building meaningful applications through continuous learning
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {profile.about}
            </p>

            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <div>
                <span className="text-zinc-400 block text-[11px]">LOCATION</span>
                <span className="text-zinc-200">{profile.location}</span>
              </div>
              <div className="border-l border-white/[0.08] pl-4">
                <span className="text-zinc-400 block text-[11px]">DEGREE</span>
                <span className="text-zinc-200">B.E. Computer Science</span>
              </div>
              <div className="border-l border-white/[0.08] pl-4">
                <span className="text-zinc-400 block text-[11px]">INSTITUTION</span>
                <span className="text-zinc-200">SSIT Tumakuru</span>
              </div>
              <div className="border-l border-white/[0.08] pl-4">
                <span className="text-zinc-400 block text-[11px]">TIMELINE</span>
                <span className="text-zinc-200">{education.timeline}</span>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-900/30 border border-white/[0.06] hover:border-sky-500/30 transition-all hover:bg-zinc-900/50 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-white/[0.05] group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-zinc-100 group-hover:text-sky-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
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
