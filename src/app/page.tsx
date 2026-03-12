import { CursorGlow } from "@/components/animations/CursorGlow";
import { TopNav } from "@/components/navigation/TopNav";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: portfolioData.name,
        jobTitle: portfolioData.title,
        description: portfolioData.seo.description,
        url: portfolioData.siteUrl,
        email: `mailto:${portfolioData.social.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: portfolioData.location,
          addressCountry: "IN",
        },
        sameAs: [portfolioData.social.github, portfolioData.social.linkedin].filter(Boolean),
        knowsAbout: portfolioData.seo.keywords,
      },
      {
        "@type": "WebSite",
        name: `${portfolioData.name} - ${portfolioData.title}`,
        url: portfolioData.siteUrl,
        description: portfolioData.seo.description,
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <main className="relative pt-14 md:pt-24">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CursorGlow />
      <TopNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServiceAreasSection />
      <EducationSection />
      <ExperienceSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
