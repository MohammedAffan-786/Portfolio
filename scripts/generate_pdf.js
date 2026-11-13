const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const rootDir = path.resolve(__dirname, '..');
const outputPath = path.resolve(rootDir, 'Mohammed_Affan_Portfolio_Codebase.pdf');

const filesToInclude = [
  // Configuration & Metadata
  { category: 'Architecture & Metadata', path: 'README.md' },
  { category: 'Configuration', path: 'package.json' },
  { category: 'Configuration', path: 'next.config.ts' },
  { category: 'Configuration', path: 'tailwind.config.ts' },
  { category: 'Configuration', path: 'tsconfig.json' },
  { category: 'Configuration', path: '.env.example' },

  // Portfolio Datasets
  { category: 'Portfolio Dataset', path: 'src/data/portfolio/profile.json' },
  { category: 'Portfolio Dataset', path: 'src/data/portfolio/education.json' },
  { category: 'Portfolio Dataset', path: 'src/data/portfolio/skills.json' },
  { category: 'Portfolio Dataset', path: 'src/data/portfolio/projects.json' },
  { category: 'Portfolio Dataset', path: 'src/data/portfolio/experience.json' },
  { category: 'Portfolio Dataset', path: 'src/data/portfolio/certifications.json' },
  { category: 'Portfolio Dataset', path: 'src/data/portfolio/contact.json' },

  // Core Lib & API
  { category: 'Types', path: 'src/types/index.ts' },
  { category: 'Data Fetchers', path: 'src/lib/data.ts' },
  { category: 'GitHub Integration', path: 'src/lib/github.ts' },
  { category: 'AI Engine', path: 'src/lib/ai/provider.ts' },
  { category: 'AI Prompt Engineering', path: 'src/lib/ai/systemPrompt.ts' },
  { category: 'API Endpoints', path: 'src/app/api/chat/route.ts' },
  { category: 'API Endpoints', path: 'src/app/api/chat/status/route.ts' },
  { category: 'API Endpoints', path: 'src/app/api/github/route.ts' },

  // Application Pages & Layout
  { category: 'Pages & Layout', path: 'src/app/layout.tsx' },
  { category: 'Pages & Layout', path: 'src/app/page.tsx' },
  { category: 'Pages & Layout', path: 'src/app/globals.css' },
  { category: 'Pages & Layout', path: 'src/app/sitemap.ts' },
  { category: 'Pages & Layout', path: 'src/app/robots.ts' },

  // UI Components
  { category: 'Client Controller', path: 'src/components/PortfolioClient.tsx' },
  { category: 'UI Components', path: 'src/components/hero/Hero.tsx' },
  { category: 'UI Components', path: 'src/components/about/About.tsx' },
  { category: 'UI Components', path: 'src/components/skills/Skills.tsx' },
  { category: 'UI Components', path: 'src/components/projects/Projects.tsx' },
  { category: 'UI Components', path: 'src/components/projects/ProjectModal.tsx' },
  { category: 'UI Components', path: 'src/components/chat/AffanAIModal.tsx' },
  { category: 'UI Components', path: 'src/components/chat/FloatingAILauncher.tsx' },
  { category: 'UI Components', path: 'src/components/github/GitHubSection.tsx' },
  { category: 'UI Components', path: 'src/components/education/Education.tsx' },
  { category: 'UI Components', path: 'src/components/resume/ResumeModal.tsx' },
  { category: 'UI Components', path: 'src/components/contact/Contact.tsx' },
  { category: 'UI Components', path: 'src/components/background/InteractiveCanvasBackground.tsx' },
  { category: 'UI Components', path: 'src/components/layout/Navbar.tsx' },
  { category: 'UI Components', path: 'src/components/layout/Footer.tsx' },
];

console.log('Generating PDF documentation...');

const doc = new PDFDocument({
  margin: 40,
  size: 'A4',
  bufferPages: true,
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Cover Page
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#08090d');

doc.fontSize(28).fillColor('#38bdf8').font('Helvetica-Bold');
doc.text('MOHAMMED AFFAN', 50, 160);

doc.fontSize(16).fillColor('#ffffff').font('Helvetica');
doc.text('Advanced AI-Powered Developer Portfolio', 50, 205);

doc.fontSize(12).fillColor('#94a3b8').font('Helvetica');
doc.text('Complete Production Codebase, System Architecture & Verified Dataset', 50, 230);

doc.rect(50, 260, 495, 2).fill('#3b82f6');

doc.fontSize(10).fillColor('#cbd5e1').font('Helvetica');
const introText = 
  'This document contains the verified production source code for Mohammed Affan\'s developer portfolio.\n\n' +
  '• Developer: Mohammed Affan\n' +
  '• Education: B.E. Computer Science, Sri Siddhartha Institute of Technology (SSIT), Tumakuru\n' +
  '• Budget Policy: Strict Zero-Cost (₹0 Expenditure)\n' +
  '• Stack: Next.js 15, React 19, TypeScript 5, Tailwind CSS, Local Ollama (Llama 3.1 8B), GitHub REST API\n' +
  '• Generated: November 2026';

doc.text(introText, 50, 280, { width: 495, lineGap: 4 });

doc.rect(50, 420, 495, 120).strokeColor('#1e293b').stroke();
doc.fontSize(11).fillColor('#38bdf8').font('Helvetica-Bold');
doc.text('VERIFICATION & HONESTY CONTRACT', 65, 435);

doc.fontSize(9).fillColor('#94a3b8').font('Helvetica');
const auditNotice = 
  '1. Zero fabricated experience, certifications, or GPA percentages.\n' +
  '2. Distinguishes Completed (AI Resume Analyser), In Development (DevFlow AI, EduReach, RapidCare), and Concept (MountainSafe AI).\n' +
  '3. Local AI runs through open-weights Ollama (Llama 3.1 8B) without paid API keys.\n' +
  '4. Mode A (Local Ollama streaming) and Mode B (Graceful offline Vercel deployment).';
doc.text(auditNotice, 65, 455, { width: 465, lineGap: 3 });

// Table of Contents
doc.addPage();
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#ffffff');
doc.fillColor('#0f172a').font('Helvetica-Bold').fontSize(18).text('TABLE OF CONTENTS', 40, 40);
doc.rect(40, 65, 515, 1).fill('#cbd5e1');

let yPos = 85;
doc.fontSize(9).font('Helvetica');
filesToInclude.forEach((file, index) => {
  if (yPos > 750) {
    doc.addPage();
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#ffffff');
    yPos = 40;
  }
  doc.fillColor('#0369a1').font('Helvetica-Bold').text(`${index + 1}. [${file.category}]`, 40, yPos, { continued: true });
  doc.fillColor('#334155').font('Helvetica').text(` ${file.path}`);
  yPos += 16;
});

// Code Sections
filesToInclude.forEach((file, index) => {
  doc.addPage();
  doc.rect(0, 0, doc.page.width, doc.page.height).fill('#ffffff');

  // Header banner
  doc.rect(40, 30, 515, 32).fill('#0f172a');
  doc.fillColor('#38bdf8').font('Helvetica-Bold').fontSize(11).text(
    `FILE ${index + 1} OF ${filesToInclude.length}: ${file.path}`,
    50,
    41
  );

  const fullPath = path.resolve(rootDir, file.path);
  let content = '';
  try {
    if (fs.existsSync(fullPath)) {
      content = fs.readFileSync(fullPath, 'utf8');
    } else {
      content = `[File not found at ${fullPath}]`;
    }
  } catch (err) {
    content = `[Error reading file: ${err.message}]`;
  }

  doc.font('Courier').fontSize(7.5).fillColor('#1e293b');
  
  // Wrap lines for neat printing
  const lines = content.split('\n');
  let currentY = 75;
  const bottomMargin = 780;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].replace(/\t/g, '  ');
    // Truncate overly long lines to avoid wrapping glitches
    const line = rawLine.length > 110 ? rawLine.slice(0, 107) + '...' : rawLine;

    if (currentY > bottomMargin) {
      doc.addPage();
      doc.rect(0, 0, doc.page.width, doc.page.height).fill('#ffffff');
      // Continuation header
      doc.rect(40, 30, 515, 20).fill('#f1f5f9');
      doc.fillColor('#475569').font('Helvetica-Bold').fontSize(8).text(
        `${file.path} (continued)`,
        50,
        36
      );
      doc.font('Courier').fontSize(7.5).fillColor('#1e293b');
      currentY = 60;
    }

    doc.text(line, 45, currentY, { lineBreak: false });
    currentY += 9.5;
  }
});

// Number all pages
const totalPages = doc.bufferedPageRange().count;
for (let i = 0; i < totalPages; i++) {
  doc.switchToPage(i);
  if (i > 0) {
    doc.fillColor('#94a3b8').font('Helvetica').fontSize(8).text(
      `Mohammed Affan Portfolio Codebase • Page ${i + 1} of ${totalPages}`,
      40,
      doc.page.height - 25,
      { align: 'center', width: doc.page.width - 80 }
    );
  }
}

doc.end();

writeStream.on('finish', () => {
  console.log(`PDF successfully generated: ${outputPath}`);
});
