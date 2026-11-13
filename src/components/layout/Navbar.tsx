"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X, Terminal, Cpu } from "lucide-react";

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

      const sections = ["home", "about", "skills", "projects", "education", "contact"];
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
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <Link
            href="#home"
            className="group flex items-center space-x-2.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
            aria-label="Mohammed Affan Portfolio Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#08090d] rounded-[7px] flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 font-bold text-sm tracking-wider">
                  MA
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                Mohammed Affan
              </span>
              <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                CS Undergrad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-zinc-900/40 border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-sky-300 bg-sky-500/10 border border-sky-500/20 shadow-sm shadow-sky-500/10"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Profiles */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-white/[0.06] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-white/[0.06] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <Link
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 rounded-lg shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900/80 border border-white/[0.08] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
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
        <div className="md:hidden border-b border-white/[0.08] bg-[#0a0c10]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 mt-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
            <div className="flex space-x-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.06] rounded-md"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.06] rounded-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-sky-600 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
