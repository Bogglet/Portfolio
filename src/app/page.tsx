import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Audiences, ForBusiness, Markets, Partners, Services, Stack, Work } from "@/components/Sections";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { homeJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
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
