import { NextResponse } from "next/server";
import { fetchGitHubData } from "@/lib/github";

export const revalidate = 3600;

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "MohammedAffan-786";
  const data = await fetchGitHubData(username);
  return NextResponse.json(data);
}
