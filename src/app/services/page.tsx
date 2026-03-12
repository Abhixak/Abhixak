import { CursorGlow } from "@/components/animations/CursorGlow";
import { TopNav } from "@/components/navigation/TopNav";
import { Footer } from "@/components/sections/Footer";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { portfolioData } from "@/data/portfolio";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications using MERN, Next.js, and modern UI/UX practices.",
  },
  {
    title: "React & Next.js Frontend",
    description:
      "High-performance, SEO-friendly interfaces for business platforms and landing pages.",
  },
  {
    title: "React Native Mobile Apps",
    description:
      "Cross-platform mobile apps with clean architecture and scalable API integrations.",
  },
  {
    title: "Admin Dashboards & CRMs",
    description:
      "Role-based dashboards, analytics, and internal tools tailored to business workflows.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative pt-14 md:pt-4">
      <CursorGlow />
      <TopNav />
      <section className="section-surface relative overflow-hidden py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            Services
          </span>
          <h1 className="mt-4 max-w-3xl font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Full stack development services for modern products.
          </h1>
          <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
            {portfolioData.name} builds scalable web and mobile applications for clients in
            India and worldwide, with a focus on performance and clarity.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="shadow-soft rounded-3xl border border-white/10 bg-[color:var(--glass)] p-6 backdrop-blur-[14px]"
              >
                <h2 className="text-lg font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceAreasSection />
      <Footer />
    </main>
  );
}
