"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  color: string;
}

export function InteractiveCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      setMousePos({ x: -1000, y: -1000 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Colorful vibrant palette for constellation nodes
    const particleColors = [
      "rgba(37, 99, 235,",   // Vivid Royal Blue
      "rgba(147, 51, 234,",  // Radiant Violet / Purple
      "rgba(14, 165, 233,",  // Sky Cyan
      "rgba(16, 185, 129,",  // Fresh Emerald
      "rgba(244, 63, 94,",   // Vibrant Rose
      "rgba(245, 158, 11,",  // Sunny Amber
    ];

    const particleCount = Math.min(Math.floor((width * height) / 24000), 55);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.45 + 0.2;
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2.2 + 1,
        alpha: baseAlpha,
        baseAlpha,
        color,
      });
    }

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        const dx = mouse.x - p1.x;
        const dy = mouse.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.6;
          p1.x -= (dx / dist) * force;
          p1.y -= (dy / dist) * force;
          p1.alpha = Math.min(0.95, p1.baseAlpha + 0.4);
        } else {
          p1.alpha = p1.baseAlpha;
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color} ${p1.alpha * 0.8})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p1.x - p2.x;
          const cdy = p1.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 130) {
            const lineAlpha = (1 - cdist / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Luminous Base Atmospheric Gradients (Crisp Daytime Canvas) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8faff] via-[#ffffff] to-[#f4f7fe]" />

      {/* 2. Vibrant Colorful Floating Aurora Glow Meshes (Rich Multi-Hue Daytime Refraction) */}
      {/* Azure Cyan & Sapphire Orb */}
      <motion.div
        animate={{
          x: [0, 50, -35, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[8%] w-[950px] h-[700px] bg-gradient-to-br from-[#38bdf8]/28 via-[#2563eb]/20 to-transparent blur-[140px] rounded-full pointer-events-none"
      />

      {/* Radiant Violet & Magenta Orb */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 45, -30, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[22%] right-[-8%] w-[900px] h-[800px] bg-gradient-to-bl from-[#a855f7]/26 via-[#6366f1]/22 to-transparent blur-[150px] rounded-full pointer-events-none"
      />

      {/* Fresh Emerald & Cyan/Teal Orb */}
      <motion.div
        animate={{
          x: [0, 40, -45, 0],
          y: [0, -35, 40, 0],
          scale: [1, 1.08, 0.94, 1],
        }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[52%] left-[-10%] w-[850px] h-[750px] bg-gradient-to-tr from-[#10b981]/25 via-[#06b6d4]/20 to-transparent blur-[150px] rounded-full pointer-events-none"
      />

      {/* Warm Rose & Sunset Amber Orb */}
      <motion.div
        animate={{
          x: [0, -35, 45, 0],
          y: [0, 30, -35, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{ duration: 23, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-10%] right-[10%] w-[900px] h-[750px] bg-gradient-to-tl from-[#f43f5e]/22 via-[#fb923c]/20 to-transparent blur-[160px] rounded-full pointer-events-none"
      />

      {/* 3. Colorful Aerodynamic Aviation Wave Streamlines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.11] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M-100,180 C300,80 600,340 1000,140 C1250,40 1450,210 1600,170"
          fill="none"
          stroke="url(#aerowave-gradient-blue-violet)"
          strokeWidth="3"
          strokeDasharray="9 7"
        />
        <path
          d="M-50,440 C350,280 700,580 1100,380 C1350,280 1500,460 1650,400"
          fill="none"
          stroke="url(#aerowave-gradient-emerald-cyan)"
          strokeWidth="2.5"
        />
        <path
          d="M-80,680 C280,560 620,800 1020,660 C1280,580 1480,720 1620,680"
          fill="none"
          stroke="url(#aerowave-gradient-rose-amber)"
          strokeWidth="2.2"
          strokeDasharray="7 5"
        />
        <defs>
          <linearGradient id="aerowave-gradient-blue-violet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="aerowave-gradient-emerald-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="aerowave-gradient-rose-amber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>

      {/* 4. Architectural Precision Dot Matrix Blueprint Pattern */}
      <div
        className="absolute inset-0 opacity-[0.038] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.8) 1.2px, transparent 1.2px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* 5. Dynamic Cursor Aura Reflection */}
      {mousePos.x > -500 && (
        <div
          className="absolute w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(59, 130, 246, 0.08) 35%, rgba(16, 185, 129, 0.04) 60%, transparent 75%)",
          }}
        />
      )}

      {/* 6. Live Constellation Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
