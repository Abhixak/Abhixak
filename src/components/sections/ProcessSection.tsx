"use client";

import { Reveal } from "../animations/Reveal";

const steps = [
  {
    title: "Discover",
    description:
      "Clarify goals, scope, and success metrics so we build the right thing with confidence.",
  },
  {
    title: "Build",
    description:
      "Design, develop, and iterate in focused sprints with clear weekly progress updates.",
  },
  {
    title: "Launch",
    description:
      "Ship, monitor, and refine with performance and reliability in mind from day one.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-surface relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            Process
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            A simple, reliable delivery flow.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={0.1 + index * 0.08}>
              <div className="shadow-soft h-full rounded-3xl border border-white/10 bg-[color:var(--glass)] p-6 backdrop-blur-[14px]">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
