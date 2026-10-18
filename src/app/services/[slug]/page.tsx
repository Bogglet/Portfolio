import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Clay } from "@/components/Clay";
import { services, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — Bogglet`,
    description: service.shortDesc,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} — Bogglet Innovations`,
      description: service.shortDesc,
      url: `${site.url}/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-24">
        {/* Service Hero */}
        <section className="px-4 pb-16 sm:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[36px] bg-[#fbf8f7] border border-line p-8 sm:p-14">
              <Clay tone="butter" shape="sphere" className="-right-8 -top-8 w-24 sm:w-36 opacity-80" />
              <Clay tone="mint" shape="pill" className="-bottom-8 right-24 w-32 opacity-75" style={{ transform: "rotate(-15deg)" }} />

              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-red">
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
                <span>/</span>
                <span>{service.title}</span>
              </div>

              <h1 className="mt-4 font-display text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.06] tracking-[-0.035em] text-ink max-w-3xl">
                {service.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft">
                {service.body}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="rounded-full bg-red px-7 py-4 text-sm font-semibold text-white shadow-md hover:bg-red-deep"
                >
                  {service.ctaText}
                </Link>
                <Link
                  href="/white-label"
                  className="rounded-full border border-line bg-white px-6 py-4 text-sm font-semibold text-ink hover:bg-[#faf6f5]"
                >
                  White-Label for Agencies
                </Link>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2 border-t border-line/60 pt-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white border border-line px-3 py-1 text-xs font-semibold text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Problems Solved & Key Capabilities */}
        <section className="px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Common Business Problems */}
              <div className="rounded-3xl border border-line bg-white p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-red">
                  Operational Bottlenecks We Eliminate
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                  Common Business Problems Solved
                </h2>
                <ul className="mt-6 space-y-4">
                  {service.problemsSolved.map((prob, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-red/10 text-xs font-bold text-red">
                        ✕
                      </span>
                      <p className="text-sm leading-relaxed text-ink-soft">{prob}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Capabilities */}
              <div className="rounded-3xl border border-line bg-white p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14733e]">
                  Technical Delivery
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                  Key Capabilities & Use Cases
                </h2>
                <ul className="mt-6 space-y-3">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#e7f8ee] text-xs font-bold text-[#14733e]">
                        ✓
                      </span>
                      <p className="text-sm leading-relaxed text-ink font-medium">{cap}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: How the Engagement Works */}
        <section className="px-4 py-16 bg-[#fbf8f7]">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red">
                Structured Delivery
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                How an Engagement Works
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">
                We avoid vague scoping and continuous delays. Each project phase has defined deliverables, test environments, and clear milestones.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {service.engagementWorkflow.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-line bg-white p-5 shadow-sm"
                >
                  <span className="font-display text-xs font-bold text-red uppercase">
                    Step 0{idx + 1}
                  </span>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-ink">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Technology & Integrations */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-line bg-white p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                Engineering Stack
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                Relevant Technologies & Integrations
              </h2>
              <p className="mt-2 text-sm text-ink-soft max-w-2xl">
                We select technologies that offer performance, security, and long-term maintainability for your team.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-line bg-[#fbf8f7] px-4 py-2 text-xs sm:text-sm font-semibold text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions */}
        {service.faq && service.faq.length > 0 && (
          <section className="px-4 py-12">
            <div className="mx-auto max-w-6xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red">
                Clear Answers
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                Frequently Asked Questions about {service.title}
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {service.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-line bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-display text-base font-bold text-ink">{item.q}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Action Banner */}
        <section className="px-4 mt-16">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-red p-8 sm:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-butter">
                  Ready to Start?
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
                  Discuss Your {service.title} Project
                </h3>
                <p className="mt-2 text-white/85 text-sm sm:text-base max-w-xl">
                  Share your requirements with our technical team for an objective evaluation, architectural options, and a fixed quote.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="rounded-full bg-white px-7 py-3.5 font-display text-sm font-bold text-red hover:bg-blush"
                >
                  {service.ctaText}
                </Link>
                <Link
                  href="/white-label"
                  className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Partner as an Agency
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services Navigation */}
        <section className="px-4 mt-20">
          <div className="mx-auto max-w-6xl">
            <h3 className="font-display text-lg font-bold text-ink">Explore Other Capabilities</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.slice(0, 4).map((os) => (
                <Link
                  key={os.slug}
                  href={`/services/${os.slug}`}
                  className="group rounded-2xl border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-red"
                >
                  <span className="font-display text-xs font-bold text-ink group-hover:text-red">
                    {os.title}
                  </span>
                  <p className="mt-1.5 text-xs text-ink-soft line-clamp-2">{os.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
