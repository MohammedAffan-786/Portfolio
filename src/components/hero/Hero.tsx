"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles, CheckCircle2, Terminal } from "lucide-react";
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
    { label: "Code Integrity", value: "100% Verified", desc: "Zero-fabrication genuine repository code" },
  ];

  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      {/* Framer-style Curved Aviation Hero Container in Clean Medium Size */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative mx-auto max-w-5xl rounded-[24px] sm:rounded-[32px] overflow-hidden border border-blue-200/70 bg-gradient-to-b from-[#eaf2ff] via-[#f4f7fe] to-[#ffffff] shadow-[0_12px_40px_-15px_rgba(0,62,156,0.1)] p-6 sm:p-10 lg:p-12"
      >
        {/* Ambient Top Light Beam with Breathing Animation */}
        <motion.div
          animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-44 bg-gradient-to-b from-[#5594f2]/20 via-[#003e9c]/10 to-transparent blur-3xl pointer-events-none"
        />

        {/* Subtle grid line accents */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 62, 156, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 62, 156, 0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto">
          
          {/* Rare-to-find Pulsing Radar Availability Pill */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-300/80 bg-emerald-50/80 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-bold tracking-wider text-emerald-800 uppercase font-mono">
              Available for Internships &bull; Full-Stack &amp; AI Engineering
            </span>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.div variants={itemVariants} className="space-y-3 pt-1">
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

          {/* Action Pill Buttons with Spring Hover/Tap & Sheen Effect */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="#projects"
                className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#003e9c] hover:bg-[#0052cc] shadow-md shadow-blue-900/20 transition-all group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore My Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 pointer-events-none" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-colors"
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-[#003e9c] bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/80 shadow-sm transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#003e9c]" />
              <span>View Verified CV</span>
            </motion.button>
          </motion.div>

          {/* Social Proof Pills */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2.5 pt-1">
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/MohammedAffan-786"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 shadow-sm transition-colors"
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#003e9c] hover:bg-slate-50 shadow-sm transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Rare-to-find Glass Highlights Metric Strip (Medium Sized) */}
          <motion.div
            variants={itemVariants}
            className="w-full pt-6 mt-2 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="p-3 rounded-xl bg-white/70 border border-slate-200/70 backdrop-blur-md shadow-sm"
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
