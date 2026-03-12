"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function TopNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-30 px-4 md:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3">
        <div className="shadow-soft flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-[color:var(--glass)] px-4 py-2 backdrop-blur-[14px]">
          <span
            className="light-font rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em]                      
  text-[color:var(--muted)]"
          >
            {portfolioData.name}
          </span>
          <span className="hidden text-xs text-[color:var(--muted)] md:block">
            {portfolioData.title}
          </span>
          <div className="hidden items-center gap-4 text-xs uppercase tracking-[0.26em] text-[color:var(--muted)] lg:flex">
            <a
              className="transition hover:text-[color:var(--text)]"
              href="#about"
            >
              About
            </a>
            <a
              className="transition hover:text-[color:var(--text)]"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="transition hover:text-[color:var(--text)]"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="transition hover:text-[color:var(--text)]"
              href="#service-areas"
            >
              Service Areas
            </a>
            <a
              className="transition hover:text-[color:var(--text)]"
              href="#education"
            >
              Education
            </a>
            <a
              className="transition hover:text-[color:var(--text)]"
              href="#experience"
            >
              Journey
            </a>
            <a
              className="transition hover:text-[color:var(--text)]"
              href="#faq"
            >
              FAQ
            </a>
            <a
              className="transition hover:text-[color:var(--text)]"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          {portfolioData.social.github ? (
            <a
              className="shadow-soft flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[color:var(--glass)] text-[color:var(--muted)] backdrop-blur-[14px] transition hover:text-[color:var(--text)]"
              href={portfolioData.social.github}
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
          ) : null}
          {portfolioData.social.linkedin ? (
            <a
              className="shadow-soft flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[color:var(--glass)] text-[color:var(--muted)] backdrop-blur-[14px] transition hover:text-[color:var(--text)]"
              href={portfolioData.social.linkedin}
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          ) : null}
          {portfolioData.social.email ? (
            <a
              className="shadow-soft flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[color:var(--glass)] text-[color:var(--muted)] backdrop-blur-[14px] transition hover:text-[color:var(--text)]"
              href={`mailto:${portfolioData.social.email}`}
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          ) : null}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          {portfolioData.social.github ? (
            <a
              className="shadow-soft flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[color:var(--glass)] text-[color:var(--muted)] backdrop-blur-[14px] transition hover:text-[color:var(--text)]"
              href={portfolioData.social.github}
            >
              <Github size={16} />
            </a>
          ) : null}
          {portfolioData.social.linkedin ? (
            <a
              className="shadow-soft flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[color:var(--glass)] text-[color:var(--muted)] backdrop-blur-[14px] transition hover:text-[color:var(--text)]"
              href={portfolioData.social.linkedin}
            >
              <Linkedin size={16} />
            </a>
          ) : null}
          {portfolioData.social.email ? (
            <a
              className="shadow-soft flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[color:var(--glass)] text-[color:var(--muted)] backdrop-blur-[14px] transition hover:text-[color:var(--text)]"
              href={`mailto:${portfolioData.social.email}`}
            >
              <Mail size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.nav>
  );
}
