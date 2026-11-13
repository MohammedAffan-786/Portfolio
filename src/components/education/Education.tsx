"use client";

import React from "react";
import { GraduationCap, BookOpen, MapPin, Calendar, ShieldAlert } from "lucide-react";
import type { EducationData } from "@/types";

interface EducationProps {
  education: EducationData;
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/[0.08] text-xs font-mono text-purple-400">
            <GraduationCap className="w-3.5 h-3.5" />
            04 &bull; ACADEMIC FOUNDATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Formal Education &amp; Coursework
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Undergraduate computer science engineering program grounding practical software development in computational theory and systems architecture.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 p-7 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/[0.07] backdrop-blur-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
              <div>
                <span className="text-xs font-mono text-sky-400 block mb-1">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {education.degree}
                </h3>
                <p className="text-sm text-zinc-300 font-medium mt-0.5">
                  Major: {education.major}
                </p>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-zinc-400 space-y-1">
                <div className="flex sm:justify-end items-center gap-1.5 text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>{education.timeline}</span>
                </div>
                <div className="text-[11px] text-zinc-400">
                  ({education.timelineStatus})
                </div>
              </div>
            </div>

            {/* Institution & Location */}
            <div className="flex items-center gap-2 text-sm text-zinc-200">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span className="font-semibold">{education.institution}</span>
              <span className="text-zinc-400">&bull; {education.location}</span>
            </div>

            {/* Coursework Modules */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                Key Coursework &amp; Theory
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.courseworkHighlights.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-950 border border-white/[0.05] text-zinc-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Strict Integrity Notice: Withholding unconfirmed CGPA */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.06] flex items-start gap-3 text-xs text-zinc-400">
              <ShieldAlert className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-zinc-200 block font-mono text-[11px] mb-0.5">
                  ACADEMIC RECORD POLICY
                </strong>
                {education.cgpaNotice}
              </div>
            </div>
          </div>

          {/* Quick Academic Meta */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/[0.06] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wide text-zinc-400">
                Institutional Overview
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Sri Siddhartha Institute of Technology (SSIT) is an established engineering institution affiliated with Visvesvaraya Technological University (VTU) and accredited with technical engineering programs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/[0.06] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wide text-zinc-400">
                Current Standing
              </h4>
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Program:</span>
                  <span className="font-mono text-zinc-200">B.E. CSE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Status:</span>
                  <span className="font-mono text-sky-400">Enrolled Student</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Target Year:</span>
                  <span className="font-mono text-zinc-200">2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
