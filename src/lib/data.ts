import profileData from "@/data/portfolio/profile.json";
import educationData from "@/data/portfolio/education.json";
import skillsData from "@/data/portfolio/skills.json";
import projectsData from "@/data/portfolio/projects.json";
import experienceData from "@/data/portfolio/experience.json";
import certificationsData from "@/data/portfolio/certifications.json";
import contactData from "@/data/portfolio/contact.json";

import type {
  ProfileData,
  EducationData,
  SkillsData,
  ProjectItem,
  ExperienceData,
  ContactData,
} from "@/types";

export function getProfile(): ProfileData {
  return profileData as ProfileData;
}

export function getEducation(): EducationData {
  return educationData as EducationData;
}

export function getSkills(): SkillsData {
  return skillsData as SkillsData;
}

export function getProjects(): ProjectItem[] {
  return projectsData as ProjectItem[];
}

export function getProjectById(id: string): ProjectItem | undefined {
  return (projectsData as ProjectItem[]).find((p) => p.id === id);
}

export function getExperience(): ExperienceData {
  return experienceData as ExperienceData;
}

export function getCertifications() {
  return certificationsData;
}

export function getContact(): ContactData {
  return contactData as ContactData;
}

export function getFullPortfolioContext(): string {
  return JSON.stringify(
    {
      profile: profileData,
      education: educationData,
      skills: skillsData,
      projects: projectsData,
      experience: experienceData,
      contact: contactData,
    },
    null,
    2
  );
}
