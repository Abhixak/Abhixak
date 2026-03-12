import { CursorGlow } from "@/components/animations/CursorGlow";
import { TopNav } from "@/components/navigation/TopNav";
import { Footer } from "@/components/sections/Footer";
import { portfolioData } from "@/data/portfolio";

export default function ThankYouPage() {
  return (
    <main className="relative pt-14 md:pt-24">
      <CursorGlow />
      <TopNav />
      <section className="section-surface relative overflow-hidden py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            Thank You
          </span>
          <h1 className="mt-4 max-w-3xl font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Your message is on its way.
          </h1>
          <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
            I appreciate you reaching out. I&apos;ll respond with availability, scope, and
            next steps as soon as possible.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              className="rounded-full border border-white/10 bg-[color:var(--glass)] px-6 py-3 font-semibold text-[color:var(--text)] transition hover:border-white/30"
              href="/"
            >
              Back to home
            </a>
            {portfolioData.social.email ? (
              <a
                className="rounded-full border border-white/10 bg-transparent px-6 py-3 text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
                href={`mailto:${portfolioData.social.email}`}
              >
                Email directly
              </a>
            ) : null}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
