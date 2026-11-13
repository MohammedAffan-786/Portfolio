export interface ProfileData {
  name: string;
  headline: string;
  introduction: string;
  about: string;
  location: string;
  availability: string;
  statusVerification: {
    isConfirmed: boolean;
    lastReviewed: string;
    notice: string;
  };
}

export interface EducationData {
  institution: string;
  location: string;
  degree: string;
  major: string;
  timeline: string;
  timelineStatus: string;
  cgpa: string | null;
  cgpaNotice: string;
  courseworkHighlights: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  verified: boolean;
  note: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  status: "Completed" | "In Development" | "Concept / Planned Development";
  statusType: "completed" | "in-development" | "concept";
  featured: boolean;
  githubUrl: string | null;
  liveDemoUrl: string | null;
  overview: string;
  problemStatement: string;
  proposedSolution: string;
  implementedFeatures: string[];
  plannedFeatures: string[];
  techStack: string[];
  architectureNotes: string;
  verificationNotice: string;
}

export interface ExperienceRole {
  title: string;
  organization: string;
  period: string;
  type: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ExperienceData {
  notice: string;
  roles: ExperienceRole[];
}

export interface ContactData {
  email: string;
  linkedin: string;
  github: string;
  existingPortfolio: string;
  location: string;
  preferredContactMethod: string;
  openFor: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  htmlUrl: string;
  updatedAt: string;
  isFork: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
  error?: boolean;
}
