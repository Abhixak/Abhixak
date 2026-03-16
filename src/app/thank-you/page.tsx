import type { Metadata } from "next";
import { CursorGlow } from "@/components/animations/CursorGlow";
import { TopNav } from "@/components/navigation/TopNav";
import { Footer } from "@/components/sections/Footer";
import { ThankYouSubmission } from "@/components/sections/ThankYouSubmission";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Thank You | ${portfolioData.name}`,
  description: "Thanks for reaching out. I will reply with next steps soon.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: `Thank You | ${portfolioData.name}`,
    description: "Thanks for reaching out. I will reply with next steps soon.",
    url: "/thank-you",
    siteName: portfolioData.name,
    images: [portfolioData.seo.ogImage],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Thank You | ${portfolioData.name}`,
    description: "Thanks for reaching out. I will reply with next steps soon.",
    images: [portfolioData.seo.ogImage],
  },
};

export default function ThankYouPage() {
  return (
    <main className="relative pt-14 md:pt-24">
      <CursorGlow />
      <TopNav />
      <section className="section-surface relative overflow-hidden py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="shadow-soft rounded-3xl border border-white/10 bg-[color:var(--surface-strong)] p-8 backdrop-blur-[18px] md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
                  Thank You
                </span>
                <h1 className="mt-4 max-w-2xl font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
                  Message received. I&apos;ll be in touch shortly.
                </h1>
                <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
                  Expect a reply with availability, scope suggestions, and next steps within
                  24 hours.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[color:var(--glass)] px-6 py-4 text-sm text-[color:var(--muted)]">
                <p className="text-xs uppercase tracking-[0.3em]">Reference</p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--text)]">#AKR-24H</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em]">Support Window</p>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[color:var(--glass)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Response Time
                </p>
                <p className="mt-3 text-sm text-[color:var(--text)]">
                  Typically within 24 hours on business days.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[color:var(--glass)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Next Steps
                </p>
                <p className="mt-3 text-sm text-[color:var(--text)]">
                  I&apos;ll confirm scope and share a proposed timeline.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[color:var(--glass)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Location
                </p>
                <p className="mt-3 text-sm text-[color:var(--text)]">
                  {portfolioData.location}
                </p>
              </div>
            </div>
            <ThankYouSubmission />
            <div className="mt-10 flex flex-wrap gap-4 text-sm">
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
        </div>
      </section>
      <Footer />
    </main>
  );
}
