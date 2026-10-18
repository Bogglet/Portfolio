import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Clay } from "@/components/Clay";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Bogglet Innovations",
  description:
    "Learn about Bogglet's software engineering ethos: business-first technology solutions, transparent communication, and dedicated partnership for businesses and digital agencies.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Business-First Thinking",
    body: "We do not write code for its own sake. Every database schema, user interface, and integration is designed to serve a tangible operational goal or business outcome.",
  },
  {
    title: "Practical, Scalable Engineering",
    body: "We select modern, proven technologies—such as TypeScript, React, Next.js, and PostgreSQL—ensuring maintainability, clean architecture, and easy long-term scaling.",
  },
  {
    title: "Transparent, Predictable Scoping",
    body: "No hidden hourly billing or surprise invoices. We agree on defined deliverables, milestone staging demos, and fixed quotes upfront.",
  },
  {
    title: "Dual-Audience Flexibility",
    body: "Whether serving as an invisible back-office development team for partner agencies or as the end-to-end technology partner for founders, we adapt seamlessly to your working model.",
  },
  {
    title: "Total IP & Code Ownership",
    body: "You own what we build. Full source code, database architecture, design assets, and production deployment credentials belong entirely to you at handover.",
  },
  {
    title: "Long-Term Technical Care",
    body: "Software needs maintenance as operating systems, APIs, and business volumes evolve. We offer dependable post-launch bug support and ongoing engineering retainers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-24">
        {/* Hero */}
        <section className="px-4 pb-16 sm:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[36px] bg-[#fbf8f7] border border-line p-8 sm:p-14">
              <Clay tone="red" shape="sphere" className="-right-8 -top-8 w-24 sm:w-36 opacity-80" />
              <Clay tone="butter" shape="pill" className="-bottom-8 right-24 w-32 opacity-75" style={{ transform: "rotate(15deg)" }} />

              <span className="inline-block text-xs font-bold uppercase tracking-wider text-red">
                About Bogglet Innovations
              </span>
              <h1 className="mt-3 font-display text-[clamp(2.1rem,5vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink max-w-3xl">
                Technology Built Around Your Business.
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft">
                Bogglet is a software development and technology solutions partner. We help businesses, startups, entrepreneurs, and digital agencies turn operational challenges and growth requirements into practical, scalable digital products.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-red px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-deep"
                >
                  Discuss Your Next Project
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-[#faf6f5]"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red">
                How We Operate
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                Our Engineering & Business Principles
              </h2>
              <p className="mt-3 text-base text-ink-soft leading-relaxed">
                We believe software development should be grounded in clarity, technical rigor, and commercial common sense.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-3xl border border-line bg-white p-7 shadow-sm transition-all hover:shadow-md"
                >
                  <h3 className="font-display text-base font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dual Delivery Model */}
        <section className="px-4 py-16 bg-[#fbf8f7]">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red">
                  Our Business Model
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                  Serving Both Direct Clients and Agency Partners
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft">
                  We maintain two distinct, specialized collaboration tracks. Neither is an afterthought:
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-line bg-white p-5 shadow-2xs">
                    <h3 className="font-display text-sm font-bold text-ink">
                      Direct Software Development for Businesses
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                      For business owners and founders who need a trusted engineering partner to design, build, deploy, and maintain custom applications, ERPs, CRM systems, websites, or AI automation.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-white p-5 shadow-2xs">
                    <h3 className="font-display text-sm font-bold text-ink">
                      White-Label Engineering for Agencies & Studios
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                      For digital marketing firms, creative studios, and consultants who need invisible technical muscle behind their brand. We deliver complete software under strict NDAs, leaving all client relationships and credit to your agency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-line bg-white p-8 sm:p-10 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14733e]">
                  Regional & International Reach
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  Kerala Engineering Hub, Global Client Delivery
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                  Headquartered in <strong>{site.address}</strong>, our engineering team works with clients across the GCC (Qatar, UAE, Saudi Arabia, Oman, Bahrain, Kuwait) as well as the UK and international markets.
                </p>

                <div className="mt-6 space-y-2 border-t border-line/60 pt-4 text-xs text-ink-soft">
                  <div className="flex items-center gap-2">
                    <span className="text-red font-bold">✓</span>
                    <span>Minimal time-zone difference with the Gulf (IST is UTC+5:30)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red font-bold">✓</span>
                    <span>Extensive experience with English/Arabic bilingual & RTL layouts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red font-bold">✓</span>
                    <span>Integration capability with regional GCC payment gateways</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red font-bold">✓</span>
                    <span>High engineering standards at competitive development rates</span>
                  </div>
                </div>

                <div className="mt-8 pt-2">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-ink px-6 py-3 text-xs font-semibold text-white hover:bg-ink/80"
                  >
                    Get in Touch With Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-4 mt-20">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-red p-8 sm:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold">
                  Let&apos;s build software that drives real results.
                </h3>
                <p className="mt-2 text-white/85 text-sm sm:text-base max-w-xl leading-relaxed">
                  Have an operational challenge or a project brief ready? Connect directly with our engineering team today.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 rounded-full bg-white px-8 py-4 font-display text-sm font-bold text-red hover:bg-blush"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
