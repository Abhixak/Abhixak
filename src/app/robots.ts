import { portfolioData } from "@/data/portfolio";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${portfolioData.siteUrl}/sitemap.xml`,
    host: portfolioData.siteUrl,
  };
}
