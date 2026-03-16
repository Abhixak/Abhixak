"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "../animations/Reveal";
import { HeroCanvas } from "../three/HeroCanvas";
import { TiltCard } from "../ui/TiltCard";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const { scrollY } = useScroll();
  const textShift = useTransform(scrollY, [0, 400], [0, -40]);
  const [isFlipped, setIsFlipped] = useState(false);

  const heroSummary =
    "Product-focused Full Stack Developer turning complex problems into clear, usable solutions.";

  return (
    <section className="section-surface relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-[70vh] opacity-35 md:inset-0 md:h-auto">
        <HeroCanvas />
      </div>
      <div className="relative mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 px-6 pb-16 pt-6 md:pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 ">
        <motion.div style={{ y: textShift }} className="hero-contrast">
          <Reveal>
            <span className="chip inline-flex items-center rounded-full border border-white/10 bg-[color:var(--glass)] px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-[color:var(--muted)]">
              {portfolioData.title}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em] md:text-6xl">
              {portfolioData.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base text-[color:var(--muted)] md:text-lg">
              {heroSummary}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              <span className="rounded-full border border-white/10 bg-[color:var(--glass)] px-3 py-2">
                {portfolioData.tagline}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_12px_var(--glow)]" />
                {portfolioData.location}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.17}>
            <div className="mt-4 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-[color:var(--glass)] px-4 py-2 text-[9px] uppercase tracking-[0.24em] text-[color:var(--muted)] sm:text-[10px] sm:tracking-[0.3em]">
              <span>{portfolioData.availability}</span>
              <span className="hidden h-3 w-px bg-white/10 sm:inline-block" />
              <span>IST (GMT+5:30)</span>
              <span className="hidden h-3 w-px bg-white/10 sm:inline-block" />
              <span>Replies within 24 hours</span>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="shadow-soft inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f08a24] to-[#f7c06a] px-6 py-3 text-sm font-semibold text-[#1a0f07] transition hover:-translate-y-1"
                href="#projects"
              >
                View Projects <ArrowUpRight size={16} />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[color:var(--glass)] px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:-translate-y-1"
                href="#contact"
              >
                Contact Me <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[color:var(--muted)]">
              {portfolioData.social.github ? (
                <a
                  className="flex items-center gap-2 transition hover:text-[color:var(--text)]"
                  href={portfolioData.social.github}
                >
                  <Github size={16} /> GitHub
                </a>
              ) : null}
              {portfolioData.social.linkedin ? (
                <a
                  className="flex items-center gap-2 transition hover:text-[color:var(--text)]"
                  href={portfolioData.social.linkedin}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              ) : null}
              {portfolioData.social.email ? (
                <a
                  className="flex items-center gap-2 transition hover:text-[color:var(--text)]"
                  href={`mailto:${portfolioData.social.email}`}
                >
                  <Mail size={16} /> Email
                </a>
              ) : null}
            </div>
          </Reveal>
        </motion.div>
        <Reveal delay={0.16}>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsFlipped((prev) => !prev)}
              className="group relative block w-full text-left"
              aria-pressed={isFlipped}
              aria-label="Flip profile card"
            >
              <div className="relative h-full w-full [perspective:1200px]">
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative h-full w-full [transform-style:preserve-3d]"
                >
                  <TiltCard className="shadow-soft relative w-full overflow-hidden rounded-[24px] border border-white/10 bg-[color:var(--surface-strong)] p-8 backdrop-blur-[18px] md:p-10 [backface-visibility:hidden]">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(240,138,36,0.18),transparent_55%)]" />
                    <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(240,138,36,0.3),transparent_70%)] blur-2xl" />
                    <div className="relative">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-5">
                          <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:h-32 sm:w-32">
                            <Image
                              className="h-full w-full object-cover"
                              src="/ABHIXAK.jpg"
                              alt="Abhishek Kumar"
                              width={160}
                              height={160}
                              priority
                              sizes="128px"
                            />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                              Business Card
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold">
                              {portfolioData.name}
                            </h3>
                            <p className="mt-2 text-sm text-[color:var(--muted)]">
                              {portfolioData.title}
                            </p>
                          </div>
                        </div>
                        <div className="hidden text-right text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] sm:block">
                          {portfolioData.location}
                        </div>
                      </div>
                      <p className="mt-6 text-sm text-[color:var(--muted)]">
                        {portfolioData.availability}
                      </p>
                      <div className="mt-8 grid gap-3 text-sm text-[color:var(--muted)]">
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[color:var(--glass)] px-4 py-3">
                          <span>Focus</span>
                          <span className="text-[color:var(--text)]">Product engineering</span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[color:var(--glass)] px-4 py-3">
                          <span>Stack</span>
                          <span className="text-[color:var(--text)]">
                            MERN + React Native + Next basics
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[color:var(--glass)] px-4 py-3">
                          <span>Delivery</span>
                          <span className="text-[color:var(--text)]">Weekly updates</span>
                        </div>
                      </div>
                      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                        Tap to flip
                      </p>
                    </div>
                  </TiltCard>
                  <div className="shadow-soft absolute inset-0 rounded-[24px] border border-white/10 bg-[color:var(--surface-strong)] p-8 backdrop-blur-[18px] md:p-10 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="absolute inset-0 bg-[linear-gradient(315deg,rgba(240,138,36,0.2),transparent_55%)]" />
                    <div className="relative flex h-full flex-col gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                          Services
                        </p>
                        <h3 className="mt-3 text-xl font-semibold">What I deliver</h3>
                        <p className="mt-4 text-sm text-[color:var(--muted)]">
                          Full-cycle builds focused on clarity and performance.
                        </p>
                      </div>
                      <div className="grid gap-3 text-sm">
                        <div className="rounded-2xl border border-white/10 bg-[color:var(--glass)] px-4 py-3">
                          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                            Services
                          </p>
                          <p className="mt-2 text-[color:var(--text)]">
                            Web Apps - Mobile Apps - Dashboards - APIs
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-[color:var(--glass)] px-4 py-3">
                          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                            Process
                          </p>
                          <p className="mt-2 text-[color:var(--text)]">
                            Discover - Build - Launch - Iterate
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-[color:var(--glass)] px-4 py-3">
                          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                            Availability
                          </p>
                          <p className="mt-2 text-[color:var(--text)]">
                            Open for full-time - Freelance
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
