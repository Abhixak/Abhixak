import { portfolioData } from "@/data/portfolio";
import { Reveal } from "../animations/Reveal";

const categories = [
  { label: "Frontend", items: portfolioData.skills.frontend },
  { label: "Backend", items: portfolioData.skills.backend },
  { label: "Database", items: portfolioData.skills.database },
  { label: "Tools", items: portfolioData.skills.tools },
  { label: "Other", items: portfolioData.skills.other },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-surface-alt relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            Skills
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            A modern stack built for performance.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <Reveal key={category.label} delay={0.1 + index * 0.1}>
              <div className="shadow-soft rounded-3xl border border-white/10 bg-[color:var(--glass)] p-6 backdrop-blur-[14px] transition hover:-translate-y-1 hover:border-white/20">
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {category.label}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="light-font rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--text)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
