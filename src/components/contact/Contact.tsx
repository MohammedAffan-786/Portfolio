"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
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
    
    // Interactive Framer-style micro celebration
    try {
      confetti({
        particleCount: 35,
        spread: 55,
        origin: { y: 0.8 },
        colors: ["#003e9c", "#5594f2", "#10b981", "#60a5fa"],
      });
    } catch {
      // Fallback silently if canvas is unavailable
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Framer-style Curved Aviation CTA Container (Medium Balanced Size with Motion) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl rounded-[28px] sm:rounded-[36px] overflow-hidden border border-blue-200/80 bg-gradient-to-b from-[#eaf2ff] via-[#f1f6ff] to-[#ffffff] p-6 sm:p-10 lg:p-12 shadow-[0_16px_45px_-12px_rgba(0,62,156,0.1)]"
      >
        {/* Ambient Top Light Beam with Breathing Glow */}
        <motion.div
          animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-b from-[#5594f2]/20 via-[#003e9c]/10 to-transparent blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center space-y-5">
          {/* Badge */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200/80 bg-white/90 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#003e9c] animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider text-[#003e9c] uppercase font-mono">
              Get in Touch &bull; Open for Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Don&apos;t Wait Any Longer. <br className="hidden sm:inline" />
            Let&apos;s Build Together.
          </h2>

          <p className="text-xs sm:text-base text-slate-600 max-w-xl font-normal leading-relaxed">
            Interested in software engineering internships, open-source collaboration, or discussing distributed systems and AI architectures? My inbox is always open.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${contact.email}?subject=Hello%20Mohammed%20Affan%20-%20Opportunity%20/%20Collaboration`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#003e9c] hover:bg-[#0052cc] shadow-md shadow-blue-900/20 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Compose Email Directly</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#003e9c]" />
                  <span>Copy {contact.email}</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Connected Cards: Profiles & Details (Medium Cards with Hover Motion) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-6">
            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#003e9c]/30 transition-all shadow-sm flex flex-col items-center text-center space-y-1.5"
            >
              <div className="p-2 rounded-full bg-blue-50 text-[#003e9c] border border-blue-200 group-hover:scale-105 transition-transform">
                <Linkedin className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1">
                LinkedIn
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#003e9c] transition-colors" />
              </span>
              <span className="text-[11px] text-slate-500 font-mono">mdaffan1</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#003e9c]/30 transition-all shadow-sm flex flex-col items-center text-center space-y-1.5"
            >
              <div className="p-2 rounded-full bg-slate-100 text-slate-800 border border-slate-200 group-hover:scale-105 transition-transform">
                <Github className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1">
                GitHub
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </span>
              <span className="text-[11px] text-slate-500 font-mono">MohammedAffan-786</span>
            </motion.a>

            {/* Location */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col items-center text-center space-y-1.5"
            >
              <div className="p-2 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900">Location</span>
              <span className="text-[11px] text-slate-500 font-mono">{contact.location}</span>
            </motion.div>
          </div>

          {/* Open For Badges */}
          <div className="pt-4 border-t border-blue-200/60 w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-500">
            <span className="font-bold text-slate-700 text-xs">Available For:</span>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {contact.openFor.map((item) => (
                <span
                  key={item}
                  className="px-3 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-mono text-[10px] font-medium shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
