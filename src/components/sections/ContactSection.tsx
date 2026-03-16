"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "../animations/Reveal";
import { portfolioData } from "@/data/portfolio";

const FORM_ENDPOINT = "https://formspree.io/f/xwvrojgr";
const REDIRECT_URL = "/thank-you";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const subject = formData.get("subject")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
        if (REDIRECT_URL) {
          const payload = { name, email, subject, message };
          if (typeof window !== "undefined") {
            window.sessionStorage.setItem("thankyou-submission", JSON.stringify(payload));
          }
          window.location.assign(REDIRECT_URL);
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-surface relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            Contact
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Let&apos;s build something exceptional.
          </h2>
        </Reveal>
        <div className="mt-6 grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal delay={0.1}>
            <div className="shadow-soft h-full rounded-3xl border border-white/10 bg-[color:var(--surface-strong)] p-8 backdrop-blur-[18px] md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Collaboration
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">
                Full-time or freelance engagements.
              </h3>
              <p className="mt-4 text-[color:var(--muted)]">
                Share your requirements or hiring timeline. I&apos;ll respond with
                availability, scope, and next steps.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[color:var(--glass)] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    Focus
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--text)]">
                    Product engineering, clean UI, and scalable architecture.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[color:var(--glass)] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    Turnaround
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--text)]">
                    Clear scope, weekly updates, and reliable delivery.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-[color:var(--muted)]">
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
                    <Mail size={16} /> {portfolioData.social.email}
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <form
              className="shadow-soft h-full rounded-3xl border border-white/10 bg-[color:var(--glass)] p-8 backdrop-blur-[14px] md:p-10"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_next" value={REDIRECT_URL} />
              <input
                className="hidden"
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="light-font w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-[color:var(--text)] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:outline-none"
                    placeholder="Your name"
                    type="text"
                    name="name"
                    required
                  />
                  <input
                    className="light-font w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-[color:var(--text)] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:outline-none"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <input
                  className="light-font w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-[color:var(--text)] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:outline-none"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
                <textarea
                  className="light-font min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-[color:var(--text)] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:outline-none"
                  placeholder="Project details"
                  name="message"
                  required
                />
              </div>
              <motion.button
                whileHover={{ y: -4 }}
                className="mt-6 w-full rounded-full bg-gradient-to-br from-[#f08a24] to-[#f7c06a] px-6 py-3 text-sm font-semibold text-[#1a0f07] shadow-lg shadow-[color:var(--glow)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>
              <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Typically replies within 24 hours
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: status === "success" || status === "error" ? 1 : 0,
                  y: status === "success" || status === "error" ? 0 : 10,
                }}
                className="mt-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-center text-xs uppercase tracking-[0.3em]"
                role="status"
                aria-live="polite"
              >
                {status === "success"
                  ? "Message sent. I will reply within 24 hours."
                  : status === "error"
                  ? "Something went wrong. Please try again."
                  : ""}
              </motion.div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
