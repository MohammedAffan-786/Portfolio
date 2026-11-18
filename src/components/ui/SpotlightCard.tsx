"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue, type HTMLMotionProps } from "framer-motion";

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  glassSheen?: boolean;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.14)",
  glassSheen = true,
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    if (props.onMouseMove) {
      props.onMouseMove(e);
    }
  }

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[20px] sm:rounded-2xl bg-white/80 backdrop-blur-3xl backdrop-saturate-200 border border-white/95 ring-1 ring-white/80 shadow-[0_12px_40px_-10px_rgba(0,62,156,0.08),inset_0_2px_4px_0_rgba(255,255,255,1),inset_0_-1px_2px_0_rgba(0,62,156,0.03)] hover:shadow-[0_22px_55px_-5px_rgba(0,62,156,0.14),inset_0_2px_4px_0_rgba(255,255,255,1)] hover:border-white transition-all duration-300 ${className}`}
      {...props}
    >
      {/* 1. Glossy Liquid-Glass Specular Diagonal Face Sheen */}
      {glassSheen && (
        <div className="pointer-events-none absolute -inset-full bg-gradient-to-tr from-transparent via-white/15 to-white/40 opacity-70 group-hover:opacity-95 transition-opacity duration-500 transform -rotate-12" />
      )}

      {/* 2. Razor-sharp Top Bevel Specular Glass Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95" />

      {/* 3. Subtle Bottom Glass Edge Reflection */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

      {/* 4. Shimmer Light Sweep on Hover */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* 5. GPU-Accelerated Dynamic Colorful Radial Cursor Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[20px] sm:rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 75%
            )
          `,
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </motion.div>
  );
}
