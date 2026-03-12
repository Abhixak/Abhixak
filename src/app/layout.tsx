import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

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
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
