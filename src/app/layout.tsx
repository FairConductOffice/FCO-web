import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fair Conduct Office — Regulatory & Digital Risk Advisory",
    template: "%s — Fair Conduct Office",
  },
  description:
    "Check whether your business meets its regulatory obligations. The Fair Conduct Office conducts independent compliance risk assessments for UK businesses in regulated sectors.",
  metadataBase: new URL("https://fairconductoffice.co.uk"),
  alternates: {
    canonical: "https://fairconductoffice.co.uk",
  },
  openGraph: {
    title: "Fair Conduct Office",
    description:
      "Independent compliance risk assessments for UK businesses in regulated sectors.",
    url: "https://fairconductoffice.co.uk",
    siteName: "Fair Conduct Office",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Fair Conduct Office",
    description:
      "Independent compliance risk assessments for UK businesses in regulated sectors.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Fair Conduct Office",
    alternateName: "FCO",
    url: "https://fairconductoffice.co.uk",
    email: "remediation@fairconductoffice.co.uk",
    description:
      "Independent compliance risk assessments and digital security audits for UK businesses in regulated sectors.",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceType: [
      "Regulatory compliance risk assessment",
      "Digital security audit",
      "GDPR compliance review",
      "Anti-money laundering compliance review",
    ],
    knowsAbout: [
      "UK GDPR",
      "Data Protection Act 2018",
      "Money Laundering Regulations 2017",
      "FCA Consumer Duty",
      "Consumer Rights Act 2015",
      "PECR",
    ],
  };

  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
