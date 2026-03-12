import { Reveal } from "../animations/Reveal";

const education = [
  {
    range: "2020 - 2023",
    degree: "BCA",
    school: "NSCBM College Hamirpur (HP)",
  },
  {
    range: "2023 - 2025",
    degree: "MCA",
    school: "Chandigarh University",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="section-surface relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            Education
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Academic foundation and growth.
          </h2>
        </Reveal>
        <div className="mt-8 space-y-6 border-l border-[color:var(--muted)]/30 pl-6">
          {education.map((item) => (
            <Reveal key={item.degree} delay={0.15}>
              <div className="relative">
                <span className="absolute left-[-30px] top-2 h-3 w-3 rounded-full bg-[color:var(--accent)] shadow-[0_0_12px_var(--glow)]" />
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {item.range}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.degree}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.school}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
