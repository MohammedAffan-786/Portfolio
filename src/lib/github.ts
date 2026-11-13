import { GitHubRepo } from "@/types";

export interface GitHubFetchResult {
  repos: GitHubRepo[];
  user: {
    login: string;
    avatarUrl: string;
    htmlUrl: string;
    publicRepos: number;
    bio: string | null;
  } | null;
  lastFetched: string;
  error?: string | null;
}

export async function fetchGitHubData(username: string = "MohammedAffan-786"): Promise<GitHubFetchResult> {
  const now = new Date().toISOString();

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Affan-Developer-Portfolio",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // Fetch user profile and repositories in parallel
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 }, // 1-hour cache on Next.js server
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!reposRes.ok) {
      if (reposRes.status === 403) {
        return {
          repos: [],
          user: null,
          lastFetched: now,
          error: "GitHub API rate limit exceeded. Please visit github.com/MohammedAffan-786 directly.",
        };
      }
      return {
        repos: [],
        user: null,
        lastFetched: now,
        error: `GitHub API responded with status ${reposRes.status}.`,
      };
    }

    const rawRepos = await reposRes.json();
    const rawUser = userRes.ok ? await userRes.json() : null;

    if (!Array.isArray(rawRepos)) {
      return {
        repos: [],
        user: null,
        lastFetched: now,
        error: "Unexpected response format from GitHub API.",
      };
    }

    // Filter out user profile README repository (MohammedAffan-786/MohammedAffan-786) and generic tutorials if desired, or include them honestly
    const repos: GitHubRepo[] = rawRepos
      .filter((r: any) => !r.fork)
      .map((r: any) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
        htmlUrl: r.html_url,
        updatedAt: r.updated_at,
        isFork: r.fork,
      }));

    return {
      repos,
      user: rawUser
        ? {
            login: rawUser.login,
            avatarUrl: rawUser.avatar_url,
            htmlUrl: rawUser.html_url,
            publicRepos: rawUser.public_repos,
            bio: rawUser.bio,
          }
        : null,
      lastFetched: now,
      error: null,
    };
  } catch (err: any) {
    return {
      repos: [],
      user: null,
      lastFetched: now,
      error: "Unable to reach GitHub API at this time. Live data is temporarily unavailable.",
    };
  }
}
