import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Clay } from "@/components/Clay";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industry Solutions & Sector Capabilities",
  description:
    "Discover how Bogglet develops custom software, ERP systems, web applications, and workflow automations tailored to retail, healthcare, education, logistics, hospitality, and startups.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-24">
        {/* Hero */}
        <section className="px-4 pb-16 sm:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[36px] bg-[#fbf8f7] border border-line p-8 sm:p-14">
              <Clay tone="sky" shape="sphere" className="-right-8 -top-8 w-24 sm:w-36 opacity-80" />
              <Clay tone="butter" shape="donut" className="-bottom-8 right-24 w-28 opacity-75" />

              <span className="inline-block text-xs font-bold uppercase tracking-wider text-red">
                Industry-Specific Solutions
              </span>
              <h1 className="mt-3 font-display text-[clamp(2.1rem,5vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink max-w-3xl">
                Software Tailored to Your Industry&apos;s Operations.
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft">
                Operational realities differ from sector to sector. We architect software, internal management tools, and customer portals grounded in the workflows, data structures, and compliance requirements of your specific field.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-red px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-deep"
                >
                  Discuss Your Industry Project
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-[#faf6f5]"
                >
                  View Core Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Industry Cards */}
        <section className="px-4">
          <div className="mx-auto max-w-6xl space-y-8">
            {industries.map((ind, idx) => (
              <div
                key={ind.id}
                id={ind.id}
                className="rounded-[32px] border border-line bg-white p-8 sm:p-10 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                  <div className="lg:max-w-md">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-red">
                      Industry 0{idx + 1}
                    </span>
                    <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                      {ind.name}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft">
                      {ind.summary}
                    </p>

                    <div className="mt-6 pt-4 border-t border-line/60">
                      <Link
                        href={`/contact?industry=${ind.id}`}
                        className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-red hover:underline"
                      >
                        <span>Request a Scoping Call for {ind.name}</span>
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 rounded-2xl bg-[#fbf8f7] border border-line/60 p-6">
                    <span className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-3">
                      Applicable Use Cases & Systems:
                    </span>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {ind.useCases.map((uc, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-line bg-white p-4 shadow-2xs"
                        >
                          <span className="text-red font-bold text-xs block mb-1">✓ Use Case</span>
                          <p className="text-xs font-medium leading-relaxed text-ink">{uc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-4 mt-20">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-ink p-8 sm:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-butter">
                  Specialized Operations?
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
                  Operating in an unlisted or niche industry?
                </h3>
                <p className="mt-2 text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
                  We specialize in mapping bespoke operational requirements and translating them into robust software architecture. Let&apos;s analyze your process together.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 rounded-full bg-red px-8 py-4 font-display text-sm font-bold text-white hover:bg-red-deep"
              >
                Discuss Custom Requirements
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
