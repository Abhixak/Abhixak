import type { Metadata } from "next";
import { CursorGlow } from "@/components/animations/CursorGlow";
import { TopNav } from "@/components/navigation/TopNav";
import { Footer } from "@/components/sections/Footer";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

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
            Full stack development services for modern products.
          </h1>
          <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
            {portfolioData.name} builds scalable web and mobile applications for clients in
            India and worldwide, with a focus on performance and clarity.
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
      <ContactSection />
      <Footer />
    </main>
  );
}
