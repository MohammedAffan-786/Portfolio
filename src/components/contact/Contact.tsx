"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Github, Globe, Copy, Check, Send, Sparkles, MapPin } from "lucide-react";
import type { ContactData } from "@/types";

interface ContactProps {
  contact: ContactData;
  onOpenChat: () => void;
}

export function Contact({ contact, onOpenChat }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-sky-500/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/[0.08] text-xs font-mono text-sky-400">
            <Mail className="w-3.5 h-3.5" />
            05 &bull; LET&apos;S CONNECT
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Have an idea or opportunity? Let&apos;s connect.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            I&apos;m always interested in connecting with developers, exploring new technologies, collaborating on meaningful projects, and learning from new opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Direct Email Card */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                Direct Inbox
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Send an email directly
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Reach out for internship opportunities, technical collaborations, or engineering discussions.
              </p>
            </div>

            {/* Email Address Display Box */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                    Verified Contact Email
                  </span>
                  <span className="text-sm sm:text-base font-mono text-zinc-100 font-medium select-all">
                    {contact.email}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-zinc-200 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Mailto Action */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${contact.email}?subject=Hello%20Mohammed%20Affan%20-%20Opportunity%20/%20Project`}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-sky-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Compose Email to Mohammed
              </a>

              <button
                type="button"
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-sky-300 bg-sky-950/40 hover:bg-sky-900/50 border border-sky-500/30 rounded-xl transition-all"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                Ask Affan AI Assistant
              </button>
            </div>

            {/* Opportunities Mohammed is open for */}
            <div className="pt-4 border-t border-white/[0.06] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Focus Areas &amp; Opportunities:
              </span>
              <div className="flex flex-wrap gap-2">
                {contact.openFor.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-950 text-zinc-300 border border-white/[0.05]"
                  >
                    &bull; {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Profiles & Alternative Links */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/30 border border-white/[0.06] hover:border-sky-500/30 hover:bg-zinc-900/60 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    LinkedIn Profile
                  </h4>
                  <span className="text-xs text-zinc-400 font-mono">
                    linkedin.com/in/mdaffan1
                  </span>
                </div>
              </div>
              <span className="text-xs text-sky-400 font-mono group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/30 border border-white/[0.06] hover:border-zinc-500/30 hover:bg-zinc-900/60 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-white border border-white/[0.08] group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    GitHub Profile
                  </h4>
                  <span className="text-xs text-zinc-400 font-mono">
                    github.com/MohammedAffan-786
                  </span>
                </div>
              </div>
              <span className="text-xs text-sky-400 font-mono group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>

            <div className="p-5 rounded-xl bg-zinc-900/30 border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200">
                    Location
                  </h4>
                  <span className="text-xs text-zinc-400 font-mono">
                    {contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
