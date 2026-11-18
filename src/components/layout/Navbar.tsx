"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export function Navbar({ githubUrl, linkedinUrl, email }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Rare-to-find Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#003e9c] via-[#5594f2] to-[#0052cc] origin-left z-50 shadow-[0_0_12px_#003e9c]"
        style={{ scaleX }}
      />

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Clean Brand Full Name in CAPS */}
            <Link
              href="#home"
              className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003e9c] rounded-full py-1"
              aria-label="MOHAMMED AFFAN Portfolio Home"
            >
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-slate-900 group-hover:text-[#003e9c] transition-colors">
                MOHAMMED AFFAN
              </span>
            </Link>

            {/* Desktop Navigation Links Pill Container with Sliding Active Pill */}
            <nav className="hidden md:flex items-center space-x-1 bg-white/80 border border-slate-200/80 rounded-full p-1 backdrop-blur-md shadow-sm">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 bg-[#003e9c] rounded-full shadow-sm shadow-blue-900/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Action Button: Get in Touch (Framer-style electric blue pill button with sheen) */}
            <div className="hidden md:flex items-center space-x-3">
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="#contact"
                  className="relative overflow-hidden inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-[#003e9c] hover:bg-[#0052cc] rounded-full shadow-lg shadow-blue-900/25 transition-all group"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>Let&apos;s Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 pointer-events-none" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-full shadow-sm focus:outline-none"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-2 mt-2 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#003e9c] hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <div className="flex space-x-2">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-full"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-full"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#003e9c] rounded-full shadow-md"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
