import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { GuideBot } from "@/components/visuals/GuideBot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: `${portfolioData.name} - ${portfolioData.title}`,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  metadataBase: new URL(portfolioData.siteUrl),
  alternates: {
    canonical: portfolioData.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: `${portfolioData.name} - ${portfolioData.title}`,
    description: portfolioData.seo.description,
    url: portfolioData.siteUrl,
    siteName: portfolioData.name,
    images: [portfolioData.seo.ogImage],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} - ${portfolioData.title}`,
    description: portfolioData.seo.description,
    images: [portfolioData.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: portfolioData.title,
    description: portfolioData.seo.description,
    url: portfolioData.siteUrl,
    image: `${portfolioData.siteUrl}${portfolioData.seo.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: portfolioData.location,
      addressCountry: "IN",
    },
    sameAs: [portfolioData.social.github, portfolioData.social.linkedin].filter(Boolean),
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${portfolioData.name} Portfolio`,
    url: portfolioData.siteUrl,
    description: portfolioData.seo.description,
    publisher: {
      "@type": "Person",
      name: portfolioData.name,
    },
  };

  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        {isProduction ? (
          <>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-EV5ET54R39"
            />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-EV5ET54R39');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body
        className={`${poppins.variable} ${manrope.variable} antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        {children}
        <GuideBot />
      </body>
    </html>
  );
}
