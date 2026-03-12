import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fair Conduct Office — Regulatory & Digital Risk Advisory",
  description:
    "Independent compliance risk assessments and digital security audits for UK businesses. We identify regulatory gaps before regulators do.",
  metadataBase: new URL("https://conductoffice.co.uk"),
  openGraph: {
    title: "Fair Conduct Office",
    description:
      "Regulatory intelligence and compliance risk advisory for UK businesses.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
