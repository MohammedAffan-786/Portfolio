import {
  getProfile,
  getEducation,
  getSkills,
  getProjects,
  getContact,
} from "@/lib/data";
import { PortfolioClient } from "@/components/PortfolioClient";

export const revalidate = 3600;

export default async function HomePage() {
  const profile = getProfile();
  const education = getEducation();
  const skills = getSkills();
  const projects = getProjects();
  const contact = getContact();

  return (
    <PortfolioClient
      profile={profile}
      education={education}
      skills={skills}
      projects={projects}
      contact={contact}
    />
  );
}
