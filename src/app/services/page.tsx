import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Clay } from "@/components/Clay";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Explore Bogglet's software development services: Custom software, ERP & CRM, websites, mobile applications, AI solutions, workflow automation, e-commerce, and maintenance.",
  alternates: {
    canonical: "/services",
  },
};

const toneBg = {
  red: "bg-red text-white",
  butter: "bg-butter text-ink",
  sky: "bg-sky text-ink",
  mint: "bg-mint text-ink",
  blush: "bg-blush text-ink",
  ink: "bg-ink text-white",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-24">
        {/* Header */}
        <section className="px-4 pb-16 sm:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[36px] bg-[#fbf8f7] border border-line p-8 sm:p-14">
              <Clay tone="butter" shape="sphere" className="-right-8 -top-8 w-24 sm:w-36 opacity-80" />
              <Clay tone="sky" shape="donut" className="-bottom-10 right-20 w-24 sm:w-32 opacity-75" />

              <span className="inline-block text-xs font-bold uppercase tracking-wider text-red">
                Capabilities & Solutions
              </span>
              <h1 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink max-w-3xl">
                Software Development Built Around Your Business.
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft">
                From internal management systems and scalable customer portals to responsive websites, cross-platform mobile apps, and practical AI integrations, we engineer technology designed for your exact operational requirements.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-red px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-deep"
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/white-label"
                  className="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-[#f6f2f0]"
                >
                  Looking for White-Label Delivery?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Directory Grid */}
        <section className="px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((s, index) => (
                <article
                  key={s.slug}
                  className="flex flex-col justify-between rounded-[32px] border border-line bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-red">
                        0{index + 1} &middot; Capability
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          toneBg[s.tone]
                        }`}
                      >
                        {s.tags[0]}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink">
                      <Link href={`/services/${s.slug}`} className="hover:text-red transition-colors">
                        {s.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {s.shortDesc}
                    </p>

                    <div className="mt-6 border-t border-line/60 pt-4">
                      <span className="block text-xs font-bold uppercase tracking-wider text-ink-soft">
                        Common Problems Solved:
                      </span>
                      <ul className="mt-2 space-y-1.5 text-xs text-ink-soft">
                        {s.problemsSolved.slice(0, 2).map((prob, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red font-bold">›</span>
                            <span>{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-[#fbf8f7] px-2.5 py-1 text-xs font-medium text-ink-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-line/60 pt-5">
                    <Link
                      href={`/services/${s.slug}`}
                      className="font-display text-xs font-bold text-red hover:underline uppercase tracking-wider inline-flex items-center gap-1.5"
                    >
                      <span>Explore {s.title}</span>
                      <span aria-hidden>→</span>
                    </Link>
                    <Link
                      href={`/contact?service=${s.slug}`}
                      className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white hover:bg-ink/80"
                    >
                      {s.ctaText}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-4 mt-20">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-red p-8 sm:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold">
                  Unsure which software approach fits your requirement?
                </h3>
                <p className="mt-2 text-white/85 text-sm sm:text-base max-w-xl">
                  Share your workflow challenge with our engineering team. We will help you scope the most practical, cost-effective solution.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 rounded-full bg-white px-7 py-3.5 font-display text-sm font-bold text-red hover:bg-blush"
              >
                Start Technical Discovery
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
