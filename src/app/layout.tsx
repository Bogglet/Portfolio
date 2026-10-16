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
    default: "Bogglet Innovations — White-label web & app development",
    template: "%s | Bogglet Innovations",
  },
  description: site.description,
  keywords: [
    "white label web development",
    "website development partner",
    "outsource web development UAE",
    "web development Qatar",
    "mobile app development GCC",
    "Kerala web development company",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Bogglet Innovations — You manage the client. We handle the build.",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
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
