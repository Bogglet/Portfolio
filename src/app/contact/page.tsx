import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Start a Project & Contact Us",
  description:
    "Tell us what you want to build. Get a fixed quote and technical consultation for custom business software, websites, mobile applications, AI solutions, or white-label partnerships.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-20">
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
