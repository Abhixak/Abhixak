import type { Metadata } from "next";
import { CursorGlow } from "@/components/animations/CursorGlow";
import { TopNav } from "@/components/navigation/TopNav";
import { Footer } from "@/components/sections/Footer";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { Code2, LayoutDashboard, MonitorSmartphone, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: `Services | ${portfolioData.name}`,
  description:
    "Full stack web and mobile development services covering Next.js, React, React Native, and MERN applications.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Services | ${portfolioData.name}`,
    description:
      "Full stack web and mobile development services covering Next.js, React, React Native, and MERN applications.",
    url: "/services",
    siteName: portfolioData.name,
    images: [portfolioData.seo.ogImage],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${portfolioData.name}`,
    description:
      "Full stack web and mobile development services covering Next.js, React, React Native, and MERN applications.",
    images: [portfolioData.seo.ogImage],
  },
};

const services = [
  {
    title: "Full Stack Web Development",
    description: "End-to-end web apps with modern stacks.",
    icon: Code2,
  },
  {
    title: "React & Next.js Frontend",
    description: "Fast, SEO-ready interfaces.",
    icon: MonitorSmartphone,
  },
  {
    title: "React Native Mobile Apps",
    description: "Cross-platform mobile builds.",
    icon: Smartphone,
  },
  {
    title: "Admin Dashboards & CRMs",
    description: "Dashboards, analytics, CRM tools.",
    icon: LayoutDashboard,
  },
];

export default function ServicesPage() {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${portfolioData.siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${portfolioData.siteUrl}/services`,
      },
    ],
  };

  return (
    <main className="relative pt-14 md:pt-4">
      <CursorGlow />
      <TopNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <section className="section-surface relative overflow-hidden py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] before:h-px before:w-8 before:bg-gradient-to-r before:from-[color:var(--muted)]/70 before:to-transparent before:content-['']">
            Services
          </span>
          <h1 className="mt-4 max-w-3xl font-[family:var(--font-poppins)] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Full stack services.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[color:var(--muted)]">
            Fast, reliable web and mobile builds.
          </p>
          <Link
            href="/"
            className="shadow-soft mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[color:var(--glass)] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)] backdrop-blur-[14px] transition hover:text-[color:var(--text)]"
          >
            Go Home
          </Link>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="shadow-soft rounded-3xl border border-white/10 bg-[color:var(--glass)] p-6 backdrop-blur-[14px]"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl border border-white/10 bg-black/30 p-2 text-[color:var(--accent)]">
                    <service.icon size={18} />
                  </span>
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                </div>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceAreasSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
