import { portfolioData } from "@/data/portfolio";
import { Reveal } from "../animations/Reveal";

const featuredStack = [
  {
    name: "Next.js",
    note: "App Router + SEO",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    logoClassName: "invert",
  },
  {
    name: "React",
    note: "Component systems",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    note: "APIs + services",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    note: "Data modeling",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "React Native",
    note: "Mobile delivery",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    note: "UI speed",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

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
            Modern stack, fast delivery.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredStack.map((item) => (
              <div
                key={item.name}
                className="shadow-soft rounded-2xl border border-white/10 bg-[color:var(--glass)] px-5 py-4 backdrop-blur-[14px]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Featured
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className={`h-8 w-8 ${item.logoClassName ?? ""}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-sm text-[color:var(--muted)]">
                      {item.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
