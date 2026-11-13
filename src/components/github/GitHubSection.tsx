"use client";

import React, { useState, useEffect } from "react";
import { Github, Star, GitFork, RefreshCw, AlertCircle, ExternalLink, Calendar, Code } from "lucide-react";
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
    <section className="relative py-20 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-400 mb-2">
              <Github className="w-3.5 h-3.5 text-white" />
              LIVE GITHUB REPOSITORIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Official GitHub Activity
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Direct telemetry from <a href="https://github.com/MohammedAffan-786" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">github.com/MohammedAffan-786</a>. No simulated statistics.
            </p>
          </div>

          {/* Refresh Action & Timestamp */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-zinc-400">
              Updated: {formatDate(lastFetched)}
            </span>
            <button
              onClick={refreshData}
              disabled={loading}
              className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Refresh GitHub data"
              title="Refresh GitHub data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-sky-400" : ""}`} />
            </button>
          </div>
        </div>

        {/* Error Alert if rate-limited or offline */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-amber-950/40 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-200">
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
              className="group p-5 rounded-xl bg-zinc-900/30 border border-white/[0.06] hover:border-white/[0.15] hover:bg-zinc-900/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-sm text-zinc-200 group-hover:text-sky-300 transition-colors truncate">
                    {repo.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200 flex-shrink-0 transition-colors" />
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                  {repo.description || "Active public repository maintained by Mohammed Affan."}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="flex items-center gap-1 text-zinc-300">
                      <Code className="w-3 h-3 text-sky-400" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-zinc-400" />
                    {repo.forks}
                  </span>
                </div>
                <span className="text-zinc-400">
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
