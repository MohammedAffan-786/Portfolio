"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Framer-style Pill Brand Logo */}
          <Link
            href="#home"
            className="group flex items-center space-x-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003e9c] rounded-full"
            aria-label="Mohammed Affan Portfolio Home"
          >
            <div className="px-3.5 py-1.5 rounded-full bg-[#003e9c] hover:bg-[#0052cc] text-white flex items-center gap-2 shadow-md shadow-blue-900/20 transition-all">
              <span className="font-bold text-xs tracking-wider uppercase">
                Affan
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#5594f2]"></span>
            </div>
            <span className="hidden sm:inline-block font-bold text-sm tracking-tight text-slate-800 group-hover:text-[#003e9c] transition-colors">
              Mohammed Affan
            </span>
          </Link>

          {/* Desktop Navigation Links Pill Container */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/80 border border-slate-200/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-[#003e9c] shadow-sm shadow-blue-900/30"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Get in Touch (Framer-style electric blue pill button) */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-[#003e9c] hover:bg-[#0052cc] rounded-full shadow-lg shadow-blue-900/25 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
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
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-2 mt-2 shadow-xl">
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
        </div>
      )}
    </header>
  );
}
