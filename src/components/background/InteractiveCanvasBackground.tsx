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
      radius: 160,
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

    const particleColors = [
      "rgba(0, 62, 156,",     // Royal sapphire
      "rgba(59, 130, 246,",   // Sky blue
      "rgba(99, 102, 241,",   // Indigo accent
      "rgba(16, 185, 129,",   // Subtle emerald
    ];

    const particleCount = Math.min(Math.floor((width * height) / 26000), 50);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.35 + 0.15;
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.8,
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
          const force = (1 - dist / mouse.radius) * 1.5;
          p1.x -= (dx / dist) * force;
          p1.y -= (dy / dist) * force;
          p1.alpha = Math.min(0.85, p1.baseAlpha + 0.35);
        } else {
          p1.alpha = p1.baseAlpha;
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color} ${p1.alpha * 0.65})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p1.x - p2.x;
          const cdy = p1.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 125) {
            const lineAlpha = (1 - cdist / 125) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 62, 156, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
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
      {/* 1. Luminous Base Atmospheric Gradients (Ultra-light, Pure Daytime Aesthetic) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f9fe] via-[#f9fbff] to-[#f4f7fc]" />

      {/* 2. Organic Floating Aurora Glow Spheres with Non-Linear Floating Physics */}
      <motion.div
        animate={{
          x: [0, 45, -30, 0],
          y: [0, -35, 25, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-8%] left-[10%] w-[900px] h-[650px] bg-gradient-to-br from-[#60a5fa]/18 via-[#3b82f6]/12 to-transparent blur-[140px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -25, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[28%] right-[-5%] w-[850px] h-[750px] bg-gradient-to-bl from-[#818cf8]/14 via-[#60a5fa]/10 to-transparent blur-[160px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, 30, -35, 0],
          y: [0, -30, 35, 0],
          scale: [1, 1.06, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[-5%] left-[5%] w-[800px] h-[700px] bg-gradient-to-tr from-[#38bdf8]/15 via-[#a7f3d0]/10 to-transparent blur-[150px] rounded-full pointer-events-none"
      />

      {/* 3. Aerodynamic Aviation Wave Streamlines (Creative Light Graphic Element) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.065] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M-100,200 C300,100 600,350 1000,150 C1250,50 1450,220 1600,180"
          fill="none"
          stroke="url(#aerowave-gradient-1)"
          strokeWidth="2.5"
          strokeDasharray="8 6"
        />
        <path
          d="M-50,450 C350,300 700,600 1100,400 C1350,300 1500,480 1650,420"
          fill="none"
          stroke="url(#aerowave-gradient-2)"
          strokeWidth="2"
        />
        <path
          d="M-80,700 C280,580 620,820 1020,680 C1280,600 1480,740 1620,700"
          fill="none"
          stroke="url(#aerowave-gradient-1)"
          strokeWidth="1.8"
          strokeDasharray="6 4"
        />
        <defs>
          <linearGradient id="aerowave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003e9c" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="aerowave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#003e9c" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* 4. Architectural Precision Dot Matrix Blueprint Pattern */}
      <div
        className="absolute inset-0 opacity-[0.032] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 62, 156, 0.75) 1.2px, transparent 1.2px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* 5. Dynamic Cursor Aura Reflection */}
      {mousePos.x > -500 && (
        <div
          className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(96, 165, 250, 0.03) 40%, transparent 70%)",
          }}
        />
      )}

      {/* 6. Live Constellation Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
