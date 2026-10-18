import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Unbounded } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bogglet — Custom Software Development & Technology Solutions",
    template: "%s | Bogglet Innovations",
  },
  description: site.description,
  keywords: [
    "custom software development company",
    "business software development",
    "ERP and CRM development",
    "business website development",
    "web and mobile application development",
    "AI solution development",
    "business process automation",
    "white-label software development",
    "white-label web development for agencies",
    "software development partner GCC UAE Qatar Saudi Arabia",
    "software development company Kerala India",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Bogglet — Turn Your Business Ideas Into Powerful Digital Solutions",
    description: site.primaryPositioning,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bogglet — Technology Built Around Your Business",
    description: site.primaryPositioning,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#b41314",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${instrument.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
