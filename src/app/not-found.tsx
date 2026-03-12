import { TopNav } from "@/components/navigation/TopNav";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <main className="relative pt-14 md:pt-24">
      <TopNav />
      <section className="section-surface relative overflow-hidden py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            404
          </span>
          <h1 className="mt-4 max-w-3xl font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Page not found.
          </h1>
          <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              className="rounded-full border border-white/10 bg-[color:var(--glass)] px-6 py-3 font-semibold text-[color:var(--text)] transition hover:border-white/30"
              href="/"
            >
              Back to home
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
