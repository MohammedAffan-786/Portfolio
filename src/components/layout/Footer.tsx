"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";

interface FooterProps {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export function Footer({ githubUrl, linkedinUrl, email }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030612] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Detail Quote */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#003e9c]" />
              <span className="font-bold text-white text-base tracking-tight">
                Mohammed Affan Farooq
              </span>
            </div>
            <p className="text-zinc-400 text-xs max-w-md">
              Computer Science Engineering &bull; Sri Siddhartha Institute of Technology (SSIT), Tumakuru
            </p>
            <p className="text-[#5594f2] text-xs font-mono italic">
              &ldquo;Every detail matters.&rdquo;
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#003e9c] text-white hover:bg-[#0052cc] transition-colors shadow-md shadow-blue-900/30 focus:outline-none"
              aria-label="Back to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Verification Policy Notice */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Strict Zero-Cost &bull; 100% Verified Academic &amp; Project Work</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Mohammed Affan Farooq. Aviation Edition.
          </div>
        </div>
      </div>
    </footer>
  );
}
