import { Providers } from "@/components/Provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alchemy Foundation | Empowering Girls & Protecting Animals in India",
  description:
    "Alchemy Foundation is a leading Indian NGO dedicated to educating underprivileged girls and rescuing abandoned animals. Join our mission through donations, volunteering, and community support.",
  keywords: [
    "NGO India",
    "girl education India",
    "animal welfare NGO",
    "charity India",
    "donate for education",
    "animal rescue India",
    "women empowerment",
    "HopeHands",
  ],
  authors: [{ name: "HopeHands Foundation" }],
  openGraph: {
    type: "website",
    url: "https://Alchemy.org/",
    title:
      "Alchemy Foundation | Empowering Girls & Protecting Animals in India",
    description:
      "Join India's trusted NGO in empowering underprivileged girls through education and protecting abandoned animals.",
    images: [
      { url: "https://Alehcmy.org/og-image.jpg", width: 1200, height: 630 },
    ],
    siteName: "Alchemy Foundation",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Alchemy",
    creator: "@Alchemy",
    title: "Alchemy Foundation",
    description:
      "Join India's trusted NGO in empowering underprivileged girls and protecting abandoned animals.",
    images: ["https://Alchemy.org/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaOrgNGO = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Alchemy Foundation",
    alternateName: "Alchemy",
    description:
      "Alchemy Foundation is a leading Indian NGO dedicated to educating underprivileged girls and rescuing abandoned animals across India.",
    url: "https://Alchemy.org",
    logo: "https://Alchemy.org/favicon.ico",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://facebook.com/Alchemy",
      "https://twitter.com/Alchemy",
      "https://instagram.com/Alchemy",
      "https://linkedin.com/company/Alchemy",
      "https://youtube.com/Alchemy",
    ],
    nonprofitStatus: "Nonprofit501c3",
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f97316" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgNGO) }}
        />
      </head>
      <body className="antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
