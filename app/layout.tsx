import { Providers } from "@/components/Provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "HopeHands Foundation | Empowering Girls & Protecting Animals in India",
  description:
    "HopeHands Foundation is a leading Indian NGO dedicated to educating underprivileged girls and rescuing abandoned animals. Join our mission through donations, volunteering, and community support.",
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
    url: "https://hopehands.org/",
    title:
      "HopeHands Foundation | Empowering Girls & Protecting Animals in India",
    description:
      "Join India's trusted NGO in empowering underprivileged girls through education and protecting abandoned animals.",
    images: [
      { url: "https://hopehands.org/og-image.jpg", width: 1200, height: 630 },
    ],
    siteName: "HopeHands Foundation",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hopehands",
    creator: "@hopehands",
    title: "HopeHands Foundation",
    description:
      "Join India's trusted NGO in empowering underprivileged girls and protecting abandoned animals.",
    images: ["https://hopehands.org/og-image.jpg"],
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
    name: "HopeHands Foundation",
    alternateName: "HopeHands",
    description:
      "HopeHands Foundation is a leading Indian NGO dedicated to educating underprivileged girls and rescuing abandoned animals across India.",
    url: "https://hopehands.org",
    logo: "https://hopehands.org/favicon.ico",
    foundingDate: "2017",
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
      "https://facebook.com/hopehands",
      "https://twitter.com/hopehands",
      "https://instagram.com/hopehands",
      "https://linkedin.com/company/hopehands",
      "https://youtube.com/hopehands",
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
