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
    default: "Bogglet Innovations | White-Label Software & Web Development",
    template: "%s | Bogglet Innovations",
  },
  description: site.description,
  keywords: [
    "Bogglet Innovations",
    "Bogglet",
    "best web development team in kerala",
    "best web development team in kerala india gcc uk",
    "best whitelabeled software team kerala india gcc uk",
    "tech team for all businesses",
    "business tools development",
    "business software development",
    "white-label software development",
    "whitelabel software development",
    "white-label web development",
    "white-label app development",
    "white-label agency partner",
    "custom software development",
    "software development company Bengaluru",
    "GCC software development",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Bogglet Innovations — White-Label Software, Web & App Development",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bogglet Innovations — White-Label Software, Web & App Development",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#b41314",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
