import { Reveal } from "../animations/Reveal";
import { GraduationCap } from "lucide-react";

const education = [
  {
    range: "2020 - 2023",
    degree: "Bachelor of Computer Applications",
    school: "NSCBM College Hamirpur (HP)",
  },
  {
    range: "2023 - 2025",
    degree: "Master of Computer Applications",
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
            Academic background.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <Reveal key={item.degree} delay={0.15}>
              <div className="shadow-soft rounded-3xl border border-white/10 bg-[color:var(--glass)] p-6 backdrop-blur-[14px]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    {item.range}
                  </span>
                  <span className="rounded-2xl border border-white/10 bg-black/30 p-2 text-[color:var(--accent)]">
                    <GraduationCap size={18} />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.degree}</h3>
                <p className="mt-2 text-xs text-[color:var(--muted)]">{item.school}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
