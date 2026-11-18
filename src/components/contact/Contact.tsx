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
      {/* Framer-style Curved Aviation CTA Container in Ultra-Glossy Glass */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/90 bg-gradient-to-b from-white/90 via-white/75 to-white/60 backdrop-blur-3xl backdrop-saturate-180 p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,62,156,0.08),inset_0_1.5px_2px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,62,156,0.03)]"
      >
        {/* Glossy Top Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95" />

        {/* Ambient Top Light Beam with Breathing Glow */}
        <motion.div
          animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-44 bg-gradient-to-b from-[#60a5fa]/25 via-[#003e9c]/10 to-transparent blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center space-y-5">
          {/* Badge */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200/80 bg-white/80 backdrop-blur-md shadow-sm"
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

          {/* Main Action Buttons with Glossy Effects */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${contact.email}?subject=Hello%20Mohammed%20Affan%20-%20Opportunity%20/%20Collaboration`}
              className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#002b66] via-[#003e9c] to-[#0052cc] shadow-[0_8px_25px_rgba(0,62,156,0.35),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_12px_32px_rgba(0,62,156,0.45),inset_0_1px_1px_rgba(255,255,255,0.5)] transition-all group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send className="w-3.5 h-3.5" />
                <span>Compose Email Directly</span>
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-white/80 hover:bg-white border border-white/95 shadow-[0_4px_16px_rgba(0,62,156,0.06),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:border-blue-200/80 backdrop-blur-xl transition-all"
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

          {/* Connected Cards: Profiles & Details (Vibrant Glossy Liquid Glass Finish) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-6">
            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-blue-50/60 hover:bg-blue-50/90 border border-blue-200/80 hover:border-blue-300 backdrop-blur-2xl shadow-[0_4px_20px_rgba(37,99,235,0.06),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all flex flex-col items-center text-center space-y-1.5"
            >
              <div className="p-2.5 rounded-full bg-blue-100/80 text-blue-700 border border-blue-200 group-hover:scale-110 transition-transform">
                <Linkedin className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-blue-950 flex items-center gap-1">
                LinkedIn
                <ArrowUpRight className="w-3 h-3 text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span className="text-[11px] text-blue-700 font-mono font-medium">mdaffan1</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-purple-50/60 hover:bg-purple-50/90 border border-purple-200/80 hover:border-purple-300 backdrop-blur-2xl shadow-[0_4px_20px_rgba(147,51,234,0.06),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all flex flex-col items-center text-center space-y-1.5"
            >
              <div className="p-2.5 rounded-full bg-purple-100/80 text-purple-700 border border-purple-200 group-hover:scale-110 transition-transform">
                <Github className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-purple-950 flex items-center gap-1">
                GitHub
                <ArrowUpRight className="w-3 h-3 text-purple-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span className="text-[11px] text-purple-700 font-mono font-medium">MohammedAffan-786</span>
            </motion.a>

            {/* Location */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 rounded-2xl bg-emerald-50/60 hover:bg-emerald-50/90 border border-emerald-200/80 backdrop-blur-2xl shadow-[0_4px_20px_rgba(16,185,129,0.06),inset_0_1.5px_2px_rgba(255,255,255,1)] flex flex-col items-center text-center space-y-1.5"
            >
              <div className="p-2.5 rounded-full bg-emerald-100/80 text-emerald-700 border border-emerald-200">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-emerald-950">Location</span>
              <span className="text-[11px] text-emerald-700 font-mono font-medium">{contact.location}</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
