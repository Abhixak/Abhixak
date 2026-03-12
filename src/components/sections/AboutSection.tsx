import { portfolioData } from "@/data/portfolio";
import { Reveal } from "../animations/Reveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";

export function AboutSection() {
  return (
    <section id="about" className="section-surface relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(240,138,36,0.18),transparent_65%)] blur-2xl" />
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            About Me
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-3xl font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Building reliable products with a focus on clarity, performance, and craft.
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.15}>
            <div className="shadow-soft rounded-3xl border border-white/10 bg-[color:var(--surface-strong)] p-8 backdrop-blur-[18px] md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                <span className="rounded-full border border-white/10 bg-[color:var(--glass)] px-3 py-1">
                  Full Stack
                </span>
                <span className="rounded-full border border-white/10 bg-[color:var(--glass)] px-3 py-1">
                  Product Focused
                </span>
                <span className="rounded-full border border-white/10 bg-[color:var(--glass)] px-3 py-1">
                  Performance First
                </span>
              </div>
              <p className="mt-6 whitespace-pre-line text-[color:var(--muted)]">
                {portfolioData.about}
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
                <span className="h-px w-10 bg-gradient-to-r from-[color:var(--accent)] to-transparent" />
                Based in {portfolioData.location}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="grid gap-4 md:grid-cols-2">
              {portfolioData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="shadow-soft rounded-3xl border border-white/10 bg-[color:var(--glass)] p-6 backdrop-blur-[14px]"
                >
                  <div className="h-[2px] w-10 rounded-full bg-[color:var(--accent)]" />
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold">
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
