import { Reveal } from "../animations/Reveal";

const areas = [
  "Mohali",
  "Chandigarh",
  "Delhi NCR",
  "Global Remote",
];

export function ServiceAreasSection() {
  return (
    <section id="service-areas" className="section-surface relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            Service Areas
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Serving India and global clients.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="light-font rounded-full border border-white/10 bg-[color:var(--glass)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
