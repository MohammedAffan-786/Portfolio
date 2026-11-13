"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { GitHubSection } from "@/components/github/GitHubSection";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";
import { AffanAIModal } from "@/components/chat/AffanAIModal";
import { FloatingAILauncher } from "@/components/chat/FloatingAILauncher";
import { ResumeModal } from "@/components/resume/ResumeModal";
import { InteractiveCanvasBackground } from "@/components/background/InteractiveCanvasBackground";

import type {
  ProfileData,
  EducationData,
  SkillsData,
  ProjectItem,
  ContactData,
  GitHubRepo,
} from "@/types";

interface PortfolioClientProps {
  profile: ProfileData;
  education: EducationData;
  skills: SkillsData;
  projects: ProjectItem[];
  contact: ContactData;
  initialGitHub: {
    repos: GitHubRepo[];
    error: string | null;
    lastFetched: string;
  };
}

export function PortfolioClient({
  profile,
  education,
  skills,
  projects,
  contact,
  initialGitHub,
}: PortfolioClientProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090d] text-zinc-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Interactive Background */}
      <InteractiveCanvasBackground />

      {/* Navigation */}
      <Navbar
        githubUrl={contact.github}
        linkedinUrl={contact.linkedin}
        email={contact.email}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero
          profile={profile}
          education={education}
          onOpenResumeModal={() => setIsResumeOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />

        <About profile={profile} education={education} />

        <Skills skillsData={skills} />

        <Projects projects={projects} />

        <GitHubSection
          initialRepos={initialGitHub.repos}
          initialError={initialGitHub.error}
          initialLastFetched={initialGitHub.lastFetched}
        />

        <Education education={education} />

        <Contact
          contact={contact}
          onOpenChat={() => setIsChatOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        githubUrl={contact.github}
        linkedinUrl={contact.linkedin}
        email={contact.email}
      />

      {/* Floating AI Launcher & Modals */}
      <FloatingAILauncher
        isOpen={isChatOpen}
        onOpen={() => setIsChatOpen(true)}
      />

      <AffanAIModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        education={education}
        skills={skills}
      />
    </div>
  );
}
