import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import {
  Audiences,
  Markets,
  Partners,
  Services,
  Stack,
  Work,
} from "@/components/Sections";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/brand/logo-full.png`,
      email: site.email,
      telephone: site.whatsapp,
      description: site.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: ["QA", "AE", "SA", "OM", "BH", "KW", "IN", "GB"],
      sameAs: [site.socials.linkedin, site.socials.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "Service",
      name: "Custom Software Development",
      provider: { "@id": `${site.url}/#organization` },
      description: "Bespoke software development, ERP/CRM systems, web applications, websites, AI solutions, and white-label development services.",
      areaServed: ["QA", "AE", "SA", "OM", "BH", "KW", "IN"],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Markets */}
        <Markets />

        {/* 3. Audiences */}
        <Audiences />

        {/* 4. Services */}
        <Services />

        {/* 5. White-Label / Agency Partners */}
        <Partners />

        {/* 6. Recent Work */}
        <Work />

        {/* 7. Tech Stack */}
        <Stack />

        {/* 8. FAQs */}
        <Faq />

        {/* 9. Contact */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
