import { Reveal } from "../animations/Reveal";

const faqs = [
  {
    question: "Do you take remote projects globally?",
    answer: "Yes. India + global remote.",
  },
  {
    question: "What tech stack do you specialize in?",
    answer: "MERN, React Native, Next.js.",
  },
  {
    question: "Can you build admin dashboards and internal tools?",
    answer: "Yes. Admin panels, analytics, CRM.",
  },
  {
    question: "Do you offer ongoing support after delivery?",
    answer: "Yes. Maintenance and improvements.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-surface-alt relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            FAQ
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Quick answers.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={0.15 + index * 0.05}>
              <div className="shadow-soft rounded-3xl border border-white/10 bg-[color:var(--glass)] p-6 backdrop-blur-[14px]">
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <p className="mt-3 text-xs text-[color:var(--muted)]">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
