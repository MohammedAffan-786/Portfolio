"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";
import { ResumeModal } from "@/components/resume/ResumeModal";
import { InteractiveCanvasBackground } from "@/components/background/InteractiveCanvasBackground";

import type {
  ProfileData,
  EducationData,
  SkillsData,
  ProjectItem,
  ContactData,
} from "@/types";

interface PortfolioClientProps {
  profile: ProfileData;
  education: EducationData;
  skills: SkillsData;
  projects: ProjectItem[];
  contact: ContactData;
}

export function PortfolioClient({
  profile,
  education,
  skills,
  projects,
  contact,
}: PortfolioClientProps) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-[#003e9c]/15 selection:text-[#003e9c] font-sans antialiased">
      {/* Interactive Light Aviation Background */}
      <InteractiveCanvasBackground />

      {/* Navigation */}
      <Navbar
        githubUrl={contact.github}
        linkedinUrl={contact.linkedin}
        email={contact.email}
      />

      {/* Main Content Flow */}
      <main className="relative z-10 space-y-12 sm:space-y-16">
        <Hero
          profile={profile}
          education={education}
          onOpenResumeModal={() => setIsResumeOpen(true)}
        />

        <About profile={profile} education={education} />

        <Skills skillsData={skills} />

        <Projects projects={projects} />

        <Contact contact={contact} />
      </main>

      {/* Footer */}
      <Footer
        githubUrl={contact.github}
        linkedinUrl={contact.linkedin}
        email={contact.email}
      />

      {/* Resume Modal */}
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
