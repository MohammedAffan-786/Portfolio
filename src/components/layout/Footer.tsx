"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, ShieldCheck, Heart } from "lucide-react";

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
    <footer className="relative border-t border-white/[0.08] bg-[#07080b] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start space-y-1.5 text-center md:text-left">
            <span className="font-bold text-white text-base tracking-tight">
              Mohammed Affan
            </span>
            <p className="text-zinc-400 text-xs max-w-md">
              Computer Science Undergraduate &bull; Sri Siddhartha Institute of Technology, Tumakuru
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/[0.06] text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/[0.06] text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-lg bg-zinc-900 border border-white/[0.06] text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-white/[0.06] text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Back to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Verification Policy Notice */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Strict Zero-Cost &bull; 100% Verified Information &bull; Real Projects</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Mohammed Affan. Crafted with Next.js &amp; Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
