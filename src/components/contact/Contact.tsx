"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Github, Copy, Check, Send, MapPin, ArrowUpRight } from "lucide-react";
import type { ContactData } from "@/types";

interface ContactProps {
  contact: ContactData;
}

export function Contact({ contact }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Framer-style Curved Aviation CTA Container in Advanced Light Theme */}
      <div className="relative mx-auto max-w-7xl rounded-[36px] sm:rounded-[48px] overflow-hidden border border-blue-200/80 bg-gradient-to-b from-[#eaf2ff] via-[#f1f6ff] to-[#ffffff] p-8 sm:p-14 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,62,156,0.12)]">
        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-b from-[#5594f2]/20 via-[#003e9c]/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200/80 bg-white/90 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#003e9c] animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-[#003e9c] uppercase font-mono">
              Get in Touch &bull; Open for Opportunities
            </span>
          </div>

          {/* Heading in Framer style */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Don&apos;t Wait Any Longer. <br className="hidden sm:inline" />
            Let&apos;s Build Together.
          </h2>

          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
            Interested in software engineering internships, open-source collaboration, or discussing distributed systems and AI architectures? My inbox is always open.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`mailto:${contact.email}?subject=Hello%20Mohammed%20Affan%20-%20Opportunity%20/%20Collaboration`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#003e9c] hover:bg-[#0052cc] shadow-lg shadow-blue-900/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>Compose Email Directly</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#003e9c]" />
                  <span>Copy {contact.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Connected Cards: Profiles & Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-10">
            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#003e9c]/40 transition-all shadow-sm flex flex-col items-center text-center space-y-2"
            >
              <div className="p-2.5 rounded-full bg-blue-50 text-[#003e9c] border border-blue-200 group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#003e9c] transition-colors" />
              </span>
              <span className="text-xs text-slate-500 font-mono">linkedin.com/in/mdaffan1</span>
            </a>

            {/* GitHub */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#003e9c]/40 transition-all shadow-sm flex flex-col items-center text-center space-y-2"
            >
              <div className="p-2.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200 group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                GitHub
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </span>
              <span className="text-xs text-slate-500 font-mono">MohammedAffan-786</span>
            </a>

            {/* Location */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col items-center text-center space-y-2">
              <div className="p-2.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-900">Location</span>
              <span className="text-xs text-slate-500 font-mono">{contact.location}</span>
            </div>
          </div>

          {/* Open For Badges */}
          <div className="pt-6 border-t border-blue-200/60 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span className="font-bold text-slate-700">Available For:</span>
            <div className="flex flex-wrap gap-2 justify-center">
              {contact.openFor.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-mono text-[11px] font-medium shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
