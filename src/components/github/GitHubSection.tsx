"use client";

import React, { useState } from "react";
import { Github, Star, GitFork, RefreshCw, AlertCircle, ExternalLink, Code } from "lucide-react";
import type { GitHubRepo } from "@/types";

interface GitHubSectionProps {
  initialRepos: GitHubRepo[];
  initialError: string | null;
  initialLastFetched: string;
}

export function GitHubSection({
  initialRepos,
  initialError,
  initialLastFetched,
}: GitHubSectionProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>(initialRepos);
  const [error, setError] = useState<string | null>(initialError);
  const [lastFetched, setLastFetched] = useState<string>(initialLastFetched);
  const [loading, setLoading] = useState(false);

  const refreshData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/github");
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setRepos(data.repos || []);
        setError(null);
        setLastFetched(data.lastFetched);
      }
    } catch {
      setError("Failed to refresh GitHub data. Live API is currently unreachable.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (isoString: string) => {
    try {
      return new Date(isoString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return isoString;
    }
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/[0.05] text-xs font-mono text-white mb-2">
              <Github className="w-3.5 h-3.5 text-white" />
              LIVE GITHUB REPOSITORIES
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Official GitHub Activity
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-1 font-light">
              Direct telemetry from{" "}
              <a
                href="https://github.com/MohammedAffan-786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5594f2] hover:underline font-mono"
              >
                github.com/MohammedAffan-786
              </a>
              . No simulated statistics.
            </p>
          </div>

          {/* Refresh Action & Timestamp */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-white/50">
              Updated: {formatDate(lastFetched)}
            </span>
            <button
              onClick={refreshData}
              disabled={loading}
              className="p-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 transition-colors focus:outline-none"
              aria-label="Refresh GitHub data"
              title="Refresh GitHub data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-[#5594f2]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Error Alert if rate-limited or offline */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <strong className="block font-semibold">GitHub Live Status Notice:</strong>
              {error}
            </div>
          </div>
        )}

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-[24px] bg-gradient-to-b from-[#040d36]/50 via-[#050716]/70 to-[#04081c] border border-white/10 hover:border-[#5594f2]/40 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-sm text-white group-hover:text-[#5594f2] transition-colors truncate">
                    {repo.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover:text-white flex-shrink-0 transition-colors" />
                </div>

                <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mb-4 font-light">
                  {repo.description || "Active public repository maintained by Mohammed Affan."}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="flex items-center gap-1 text-white/80">
                      <Code className="w-3 h-3 text-[#5594f2]" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-white/60" />
                    {repo.forks}
                  </span>
                </div>
                <span className="text-white/50">
                  {formatDate(repo.updatedAt)}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
