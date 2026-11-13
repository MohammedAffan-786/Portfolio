import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Affan | Developer Portfolio & AI Engineering",
  description:
    "Official developer portfolio of Mohammed Affan — Computer Science undergraduate at Sri Siddhartha Institute of Technology, Tumakuru. Explore verified projects in autonomous AI systems (DevFlow AI), agentic assistants (EduReach), and full-stack engineering.",
  keywords: [
    "Mohammed Affan",
    "Affan AI",
    "DevFlow AI",
    "EduReach",
    "Computer Science",
    "Sri Siddhartha Institute of Technology",
    "Full-Stack Developer",
    "AI Engineer",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Mohammed Affan" }],
  creator: "Mohammed Affan",
  metadataBase: new URL("https://affan-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://affan-portfolio.vercel.app",
    title: "Mohammed Affan | Software Developer & AI Systems",
    description:
      "Official portfolio of Mohammed Affan. Engineering autonomous developer tooling (DevFlow AI) and agentic RAG systems (EduReach).",
    siteName: "Mohammed Affan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Affan | Software Developer",
    description:
      "Computer Science undergraduate at SSIT Tumakuru. Full-stack engineering, AI tooling, and verified projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#08090d] text-zinc-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
