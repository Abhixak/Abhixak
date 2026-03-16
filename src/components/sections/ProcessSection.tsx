"use client";

import { Reveal } from "../animations/Reveal";
import { Compass, Rocket, Wrench } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description: "Goals, scope, and success metrics.",
    icon: Compass,
  },
  {
    title: "Build",
    description: "Design, build, iterate in sprints.",
    icon: Wrench,
  },
  {
    title: "Launch",
    description: "Ship, monitor, improve.",
    icon: Rocket,
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
            Simple delivery flow.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={0.1 + index * 0.08}>
              <div className="shadow-soft h-full rounded-3xl border border-white/10 bg-[color:var(--glass)] p-6 backdrop-blur-[14px]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-2xl border border-white/10 bg-black/30 p-2 text-[color:var(--accent)]">
                    <step.icon size={18} />
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-xs text-[color:var(--muted)]">
                  {step.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/70" />
                  <span>Step {index + 1}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
