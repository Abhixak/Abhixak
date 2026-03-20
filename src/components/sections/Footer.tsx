import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="section-surface-alt border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] md:px-10">
        
        <div className="flex items-center gap-4">
          <a
            className="flex items-center gap-2 transition hover:text-[color:var(--text)]"
            href="/services"
          >
            Services
          </a>
          <a
            className="flex items-center gap-2 transition hover:text-[color:var(--text)]"
            href="/#faq"
          >
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-3">
          {portfolioData.social.github ? (
            <a
              className="shadow-soft flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[color:var(--glass)] backdrop-blur-[14px]"
              href={portfolioData.social.github}
            >
              <Github size={14} />
            </a>
          ) : null}
          {portfolioData.social.linkedin ? (
            <a
              className="shadow-soft flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[color:var(--glass)] backdrop-blur-[14px]"
              href={portfolioData.social.linkedin}
            >
              <Linkedin size={14} />
            </a>
          ) : null}
          {portfolioData.social.email ? (
            <a
              className="shadow-soft flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[color:var(--glass)] backdrop-blur-[14px]"
              href={`mailto:${portfolioData.social.email}`}
            >
              <Mail size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
