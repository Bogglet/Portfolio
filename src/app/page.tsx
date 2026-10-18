import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Audiences, ForBusiness, Markets, Partners, Services, Stack, Work } from "@/components/Sections";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/logo-full.png`,
  email: site.email,
  description: site.description,
  areaServed: ["QA", "AE", "OM", "SA", "BH", "KW", "IN"],
  contactPoint: { "@type": "ContactPoint", telephone: site.whatsapp, contactType: "sales" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <Hero />
        <Markets />
        <Audiences />
        <Work />
        <Services />
        <Partners />
        <ForBusiness />
        <Stack />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
