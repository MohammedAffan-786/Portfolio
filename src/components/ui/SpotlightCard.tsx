"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue, type HTMLMotionProps } from "framer-motion";

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 62, 156, 0.08)",
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
      className={`group relative overflow-hidden rounded-2xl bg-white/75 backdrop-blur-2xl backdrop-saturate-180 border border-white/90 shadow-[0_10px_35px_-8px_rgba(0,62,156,0.05),inset_0_1.5px_2px_0_rgba(255,255,255,1),inset_0_-1px_1px_0_rgba(0,62,156,0.03)] hover:shadow-[0_20px_45px_-5px_rgba(0,62,156,0.1),inset_0_1.5px_2px_0_rgba(255,255,255,1)] hover:border-blue-200/80 transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Glossy Top Bevel Specular Sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

      {/* Shimmer light sweep across card header */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* GPU-Accelerated Dynamic Radial Cursor Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              480px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </motion.div>
  );
}
