import {
  getProfile,
  getEducation,
  getSkills,
  getProjects,
  getContact,
} from "@/lib/data";
import { fetchGitHubData } from "@/lib/github";
import { PortfolioClient } from "@/components/PortfolioClient";

export const revalidate = 3600; // 1-hour ISR revalidation

export default async function HomePage() {
  const profile = getProfile();
  const education = getEducation();
  const skills = getSkills();
  const projects = getProjects();
  const contact = getContact();

  const githubData = await fetchGitHubData("MohammedAffan-786");

  return (
    <PortfolioClient
      profile={profile}
      education={education}
      skills={skills}
      projects={projects}
      contact={contact}
      initialGitHub={{
        repos: githubData.repos,
        error: githubData.error || null,
        lastFetched: githubData.lastFetched,
      }}
    />
  );
}
