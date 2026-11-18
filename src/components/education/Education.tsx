"use client";

import React from "react";
import { GraduationCap, BookOpen, MapPin, Calendar, ShieldAlert } from "lucide-react";
import type { EducationData } from "@/types";

interface EducationProps {
  education: EducationData;
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow accent */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#003e9c]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5594f2]" />
            <span className="text-xs font-semibold tracking-wider text-white uppercase font-mono">
              04 &bull; Academic Foundations
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Formal Education &amp; Coursework
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl font-light">
            Undergraduate computer science engineering program grounding practical software development in computational theory and systems architecture.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-[28px] bg-gradient-to-b from-[#040d36]/70 via-[#050716]/90 to-[#04081c] border border-white/10 backdrop-blur-md space-y-6 shadow-xl shadow-blue-950/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
              <div>
                <span className="text-xs font-mono text-[#5594f2] block mb-1">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                  {education.degree}
                </h3>
                <p className="text-sm text-white/80 font-medium mt-1">
                  Major: {education.major}
                </p>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-white/70 space-y-1">
                <div className="flex sm:justify-end items-center gap-1.5 text-white">
                  <Calendar className="w-3.5 h-3.5 text-[#5594f2]" />
                  <span>{education.timeline}</span>
                </div>
                <div className="text-[11px] text-white/50">
                  ({education.timelineStatus})
                </div>
              </div>
            </div>

            {/* Institution & Location */}
            <div className="flex items-center gap-2 text-sm text-white">
              <MapPin className="w-4 h-4 text-[#5594f2]" />
              <span className="font-semibold">{education.institution}</span>
              <span className="text-white/60">&bull; {education.location}</span>
            </div>

            {/* Coursework Modules */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/70 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#5594f2]" />
                Key Coursework &amp; Theory
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.courseworkHighlights.map((course) => (
                  <span
                    key={course}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.05] border border-white/10 text-white/90"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Strict Integrity Notice: Withholding unconfirmed CGPA */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3 text-xs text-white/70">
              <ShieldAlert className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block font-mono text-[11px] mb-0.5">
                  ACADEMIC RECORD POLICY
                </strong>
                {education.cgpaNotice}
              </div>
            </div>
          </div>

          {/* Quick Academic Meta */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-7 rounded-[28px] bg-gradient-to-b from-[#040d36]/50 via-[#050716]/70 to-[#04081c] border border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/60">
                Institutional Overview
              </h4>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Sri Siddhartha Institute of Technology (SSIT) is an established engineering institution affiliated with Visvesvaraya Technological University (VTU) and accredited with technical engineering programs.
              </p>
            </div>

            <div className="p-7 rounded-[28px] bg-gradient-to-b from-[#040d36]/50 via-[#050716]/70 to-[#04081c] border border-white/10 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/60">
                Current Standing
              </h4>
              <div className="space-y-3 text-xs text-white/80">
                <div className="flex justify-between items-center py-1 border-b border-white/[0.06]">
                  <span className="text-white/50">Program:</span>
                  <span className="font-mono text-white font-medium">B.E. CSE</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/[0.06]">
                  <span className="text-white/50">Status:</span>
                  <span className="font-mono text-[#5594f2] font-medium">Enrolled Student</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-white/50">Target Year:</span>
                  <span className="font-mono text-white font-medium">2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
