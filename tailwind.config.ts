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
        background: "#050716",
        surface: {
          50: "#0d143a",
          100: "#091030",
          200: "#060b24",
          300: "#040718",
        },
        aviation: {
          blue: "#003e9c",
          brightBlue: "#0052cc",
          sky: "#5594f2",
          ice: "#d1eaff",
          navy: "#040d36",
          midnight: "#050716",
          light: "#eff1f3",
          card: "#0b1238",
        },
        accent: {
          cyan: "#38bdf8",
          blue: "#003e9c",
          indigo: "#4f46e5",
          violet: "#7c3aed",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          strong: "rgba(255, 255, 255, 0.16)",
          glow: "rgba(0, 62, 156, 0.4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "aviation-gradient": "linear-gradient(180deg, #d1eaff 0%, #3b82f6 20%, #003e9c 50%, #040d36 80%, #050716 100%)",
        "radial-aviation": "radial-gradient(circle at 50% 0%, rgba(85, 148, 242, 0.25) 0%, rgba(0, 62, 156, 0.15) 45%, transparent 75%)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
