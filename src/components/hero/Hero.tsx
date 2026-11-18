"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import type { ProfileData, EducationData } from "@/types";

interface HeroProps {
  profile: ProfileData;
  education: EducationData;
  onOpenResumeModal: () => void;
}

export function Hero({ profile, education, onOpenResumeModal }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const highlights = [
    { label: "Engineering Systems", value: "3 Completed", desc: "DevFlow AI, EduReach, Research Rabbit AI" },
    { label: "Core Stack", value: "MERN + Python", desc: "TypeScript, Express, MongoDB, FastAPI" },
    { label: "AI Architecture", value: "RAG & Vector Search", desc: "Qdrant, LangChain, Citation Graphs" },
    { label: "System Design", value: "Scalable & Modular", desc: "Clean architecture, REST APIs & data modeling" },
  ];

  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      {/* Framer-style Curved Aviation Hero Container in Ultra-Glossy Glass */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative mx-auto max-w-5xl rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/90 bg-gradient-to-b from-white/90 via-white/75 to-white/60 backdrop-blur-3xl backdrop-saturate-180 shadow-[0_20px_60px_-15px_rgba(0,62,156,0.08),inset_0_1.5px_2px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,62,156,0.03)] p-6 sm:p-10 lg:p-14"
      >
        {/* Glossy Top Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95" />

        {/* Ambient Top Light Beam with Breathing Animation */}
        <motion.div
          animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.06, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-b from-[#60a5fa]/25 via-[#003e9c]/10 to-transparent blur-3xl pointer-events-none"
        />

        {/* Subtle grid line accents */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 62, 156, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 62, 156, 0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          
          {/* Main Hero Headline */}
          <motion.div variants={itemVariants} className="space-y-3.5 pt-2">
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Crafting Intelligent Systems &amp;{" "}
              <span className="bg-gradient-to-r from-[#002b66] via-[#003e9c] to-[#0052cc] bg-clip-text text-transparent">
                High-Impact Web Applications
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed pt-1">
              <strong className="font-extrabold text-slate-800 tracking-wide uppercase">MOHAMMED AFFAN FAROOQ</strong> &mdash; Computer Science Engineering undergraduate specializing in MERN stack architectures, autonomous agents, and RAG knowledge systems.
            </p>
          </motion.div>

          {/* Action Pill Buttons with Spring Hover/Tap & Glossy Sheen Effect */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="#projects"
                className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#002b66] via-[#003e9c] to-[#0052cc] shadow-[0_8px_25px_rgba(0,62,156,0.35),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_12px_32px_rgba(0,62,156,0.45),inset_0_1px_1px_rgba(255,255,255,0.5)] transition-all group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore My Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-white/80 hover:bg-white border border-white/95 shadow-[0_4px_16px_rgba(0,62,156,0.06),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:border-blue-200/80 backdrop-blur-xl transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#003e9c]" />
                <span>Let&apos;s Connect</span>
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-[#003e9c] bg-blue-50/80 hover:bg-blue-100/90 border border-blue-200/70 shadow-[0_4px_16px_rgba(0,62,156,0.06),inset_0_1.5px_2px_rgba(255,255,255,1)] backdrop-blur-xl transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#003e9c]" />
              <span>View Verified CV</span>
            </motion.button>
          </motion.div>

          {/* Social Proof Glossy Pills */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2.5 pt-1">
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/MohammedAffan-786"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/mdaffan1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-xs font-semibold text-slate-700 hover:text-[#003e9c] hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Glass Highlights Metric Strip (Ultra-Glossy Card Finish) */}
          <motion.div
            variants={itemVariants}
            className="w-full pt-6 mt-2 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="p-3.5 rounded-2xl bg-white/60 hover:bg-white/80 border border-white/80 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,62,156,0.03),inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all"
              >
                <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold mb-0.5">
                  {item.label}
                </div>
                <div className="text-sm font-bold text-slate-900 tracking-tight">
                  {item.value}
                </div>
                <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
