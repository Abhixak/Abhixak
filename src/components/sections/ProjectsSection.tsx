"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "../animations/Reveal";
import { TiltCard } from "../ui/TiltCard";

const getScreenshotUrl = (url: string) =>
  `/api/screenshot?url=${encodeURIComponent(url)}&w=1200&h=675`;

export function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleProjects = portfolioData.projects.slice(0, visibleCount);
  const canLoadMore = visibleCount < portfolioData.projects.length;

  return (
    <section id="projects" className="section-surface relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            Projects
          </span>
        </Reveal>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <Reveal delay={0.1}>
            <h2 className="font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              Projects built for real-world use.
            </h2>
          </Reveal>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.title} delay={0.1 + index * 0.1}>
              <TiltCard className="shadow-soft group rounded-3xl border border-white/10 bg-[color:var(--glass)] p-6 backdrop-blur-[14px] transition hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#f08a24]/20 via-[#f7c06a]/10 to-transparent">
                  <div className="aspect-[16/9]">
                    {project.demo && project.demo !== "#" ? (
                      <img
                        src={getScreenshotUrl(project.demo)}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(240,138,36,0.35),transparent_60%)]">
                        <span className="light-font rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                          Preview unavailable
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-[color:var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                  {project.demo && project.demo !== "#" ? (
                    <a className="flex items-center gap-2 text-[color:var(--accent)]" href={project.demo}>
                      Live Demo <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        {portfolioData.projects.length > 4 ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 4, portfolioData.projects.length))}
              className="rounded-full border border-white/10 bg-[color:var(--glass)] px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:border-white/30"
              disabled={!canLoadMore}
            >
              {canLoadMore ? "View More Projects" : "All Projects Loaded"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
