# Mohammed Affan — Advanced AI-Powered Developer Portfolio

[![Next.js 15](https://img.shields.io/badge/Next.js-15.x-black.svg?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![Zero Cost](https://img.shields.io/badge/Budget-%E2%82%B90%20Zero--Cost-emerald.svg)](#zero-cost-architecture)
[![Ollama](https://img.shields.io/badge/AI-Ollama%20%7C%20Llama%203.1%208B-orange.svg)](https://ollama.com)

A modern, production-grade personal developer portfolio engineered for **Mohammed Affan**, Computer Science undergraduate at Sri Siddhartha Institute of Technology (SSIT), Tumakuru.

Built with a strict **Zero-Cost Policy (₹0 expenditure)**, **100% Data Integrity (Zero Fabricated Metrics/Experience)**, and full separation between local AI inference (Ollama with Llama 3.1 8B) and high-performance serverless public deployment on Vercel Hobby.

---

## Architecture & System Overview

```
                      +------------------------------------------+
                      |               Vercel Edge                |
                      |   (Static Assets & Edge CDN Cache 1hr)   |
                      +--------------------+---------------------+
                                           |
                   +-----------------------+-----------------------+
                   |                                               |
                   v                                               v
+--------------------------------------+       +---------------------------------------+
|           Next.js Frontend           |       |              API Routes               |
|  - Interactive Canvas Particles      |       |  - /api/github (Public GitHub API)   |
|  - Real Time GitHub Showcase         |       |  - /api/chat/status (Health Check)   |
|  - System Architecture Modal Drawers |       |  - /api/chat (Ollama Llama 3.1 8B)   |
|  - High Contrast Accessible Dark UI  |       +-------------------+-------------------+
+--------------------------------------+                           |
                                                                   | HTTP Streaming
                                                                   v
                                               +---------------------------------------+
                                               |     Affan AI (Local Inference)       |
                                               |     Ollama: http://localhost:11434    |
                                               |     Model: Meta Llama 3.1 8B          |
                                               +---------------------------------------+
```

---

## Key Features

1. **Strict Data Honesty & Fact Grounding**:
   - Zero fabricated employment, certifications, or GPA percentages.
   - Genuine distinction between **Completed** projects (*AI Resume Analyser*), **In Development** projects (*DevFlow AI*, *EduReach*, *RapidCare*), and **Concept / Planned Development** (*MountainSafe AI*).
2. **Integrated Affan AI Assistant**:
   - Powered by Meta's open-weights **Llama 3.1 8B** via **Ollama**.
   - Grounded exclusively in verified structured data in `src/data/portfolio/`.
   - Supports streaming responses, conversation reset, response copying, and strict honesty instructions.
3. **Dual Deployment Modes (Mode A vs Mode B)**:
   - **Mode A (Local Development)**: Streams live responses from your local Ollama daemon.
   - **Mode B (Public Vercel Deployment)**: Gracefully identifies that local inference is offline without breaking the portfolio UI, preventing serverless timeouts or paid API dependencies.
4. **Live GitHub API Telemetry**:
   - Directly queries `https://api.github.com/users/MohammedAffan-786/repos`.
   - Reflects actual public repositories, languages, stars, and last-updated timestamps with 1-hour server caching and rate-limit fallbacks.
5. **Interactive System Architecture Showcase**:
   - Clickable project cards with modal views displaying system diagrams, problem statements, implemented features, and technical verification audits.
6. **Zero-Cost Budget**:
   - ₹0 expenditure. Free and open-source fonts, libraries, and hosting (Vercel Hobby, GitHub).

---

## Tech Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Server components, ISR caching, dynamic API routes |
| **Language** | TypeScript 5.x | Strict domain modeling and type safety |
| **Styling** | Tailwind CSS & PostCSS | Atomic utilities, high-contrast dark palette |
| **Icons** | Lucide React | Lightweight SVG icons |
| **Visuals** | Interactive HTML5 Canvas | Lightweight 3D particle constellation with mouse repulsion |
| **Local AI** | Ollama + Llama 3.1 8B | Local streaming chat assistant |
| **Deployment** | Vercel (Hobby Tier) | Serverless zero-cost deployment |

---

## Directory Structure

```
affan-portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/
│   │   │   │   ├── route.ts            # Ollama streaming endpoint with guardrails
│   │   │   │   └── status/route.ts     # Health check (Mode A vs Mode B)
│   │   │   └── github/route.ts         # GitHub public API fetcher with cache
│   │   ├── globals.css                 # Custom scrollbar, animations & base CSS
│   │   ├── layout.tsx                  # Root layout, fonts, and OpenGraph SEO
│   │   ├── page.tsx                    # Main server component
│   │   ├── robots.ts                   # Search crawler directives
│   │   └── sitemap.ts                  # Automatic XML sitemap
│   ├── components/
│   │   ├── about/                      # Academic mindset & pillars
│   │   ├── background/                 # Particle network canvas background
│   │   ├── chat/                       # Affan AI modal & floating launcher
│   │   ├── contact/                    # Direct email & social profile actions
│   │   ├── education/                  # SSIT B.E. CSE timeline & coursework
│   │   ├── github/                     # Live repository telemetry showcase
│   │   ├── hero/                       # Hero headline, CTAs & Technical HUD
│   │   ├── layout/                     # Navbar and Footer
│   │   ├── projects/                   # Project gallery & architecture modal
│   │   ├── resume/                     # Resume viewer & download modal
│   │   └── PortfolioClient.tsx         # Client orchestrator
│   ├── data/
│   │   └── portfolio/                  # Verified Source of Truth JSON files
│   │       ├── profile.json
│   │       ├── education.json
│   │       ├── skills.json
│   │       ├── projects.json
│   │       ├── experience.json
│   │       ├── certifications.json
│   │       └── contact.json
│   ├── lib/
│   │   ├── ai/                         # Ollama client provider & prompt generator
│   │   ├── data.ts                     # Typed portfolio getters
│   │   └── github.ts                   # GitHub REST API client
│   └── types/                          # TypeScript interfaces
├── public/                             # Static assets (add your PDF here)
├── .env.example                        # Template environment variables
├── next.config.ts                      # Next.js configuration
├── tailwind.config.ts                  # Tailwind design tokens
└── tsconfig.json                       # TypeScript compiler options
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.18.0 or newer (tested on Node v24.x)
- **npm** or **pnpm**
- **Git**
- *(Optional for AI)* **Ollama**: [ollama.com](https://ollama.com)

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/MohammedAffan-786/Portfolio.git
cd Portfolio
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Default settings:
```env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.1:8b
AI_ENABLED=true
AI_PUBLIC_ACCESS=false
NEXT_PUBLIC_GITHUB_USERNAME=MohammedAffan-786
```

### 3. Setting Up Affan AI (Local Mode)

1. Install Ollama from [ollama.com](https://ollama.com).
2. Pull the Meta Llama 3.1 8B model:
   ```bash
   ollama pull llama3.1:8b
   ```
3. Verify that Ollama is running:
   ```bash
   ollama run llama3.1:8b
   ```
   *Note: If Ollama is offline or not running, the portfolio continues to function normally and Affan AI displays a transparent offline indicator.*

### 4. Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build & Testing

Run the full production build:

```bash
npm run build
npm run start
```

---

## Public Deployment on Vercel (Hobby Tier)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of production developer portfolio"
   git branch -M main
   git remote add origin https://github.com/MohammedAffan-786/Portfolio.git
   git push -u origin main
   ```
2. Import the project in the [Vercel Dashboard](https://vercel.com/new).
3. Set the Framework Preset to **Next.js**.
4. Configure Environment Variables:
   - `AI_ENABLED=true`
   - `AI_PUBLIC_ACCESS=false` (keeps public visitors informed that Ollama is offline, protecting zero-cost execution)
   - `NEXT_PUBLIC_GITHUB_USERNAME=MohammedAffan-786`
5. Click **Deploy**. Vercel will build and assign a free `*.vercel.app` subdomain with automatic SSL.

---

## Customizing Your Profile

All personal data is decoupled from component code. Edit the files in `src/data/portfolio/`:

- `profile.json`: Headline, introduction, bio, and location.
- `education.json`: Dates, coursework, and verified academic notes.
- `skills.json`: Verified tools, technologies, and project usage notes.
- `projects.json`: Projects, architecture details, and roadmap milestones.
- `contact.json`: Social links and email address.
- `public/affan-resume.pdf`: Place your official PDF resume in the `public/` directory for direct single-click downloading.

---

## License

This project is open-source under the [MIT License](LICENSE).
