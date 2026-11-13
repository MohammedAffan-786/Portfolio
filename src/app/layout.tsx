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
    "Official developer portfolio of Mohammed Affan Farooq — Computer Science Engineering student at Sri Siddhartha Institute of Technology, Tumakuru. MERN stack developer and AI-powered application builder.",
  keywords: [
    "Mohammed Affan",
    "Mohammed Affan Farooq",
    "DevFlow AI",
    "EduReach",
    "AI-Powered Research Engine",
    "Computer Science",
    "Sri Siddhartha Institute of Technology",
    "SSIT Tumakuru",
    "MERN Stack Developer",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Generative AI",
  ],
  authors: [{ name: "Mohammed Affan Farooq" }],
  creator: "Mohammed Affan Farooq",
  metadataBase: new URL("https://affan-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://affan-portfolio.vercel.app",
    title: "Mohammed Affan | Software Developer & AI Systems",
    description:
      "Official portfolio of Mohammed Affan Farooq. Building intelligent applications and exploring practical technology solutions.",
    siteName: "Mohammed Affan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Affan | Software Developer",
    description:
      "Computer Science Engineering student at SSIT Tumakuru. MERN stack developer & AI-powered application builder.",
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
