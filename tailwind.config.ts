import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090d",
        surface: {
          50: "#181a20",
          100: "#131419",
          200: "#0e1014",
          300: "#0a0b0e",
        },
        accent: {
          cyan: "#38bdf8",
          blue: "#3b82f6",
          indigo: "#6366f1",
          violet: "#8b5cf6",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          strong: "rgba(255, 255, 255, 0.16)",
          glow: "rgba(99, 102, 241, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%)",
        "mesh-gradient": "radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.08) 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-slow": "glow 4s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
