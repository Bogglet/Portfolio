import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Clay } from "@/components/Clay";
import { projects, type Project } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies & Work Showcase",
  description:
    "Explore genuine case studies and technical software capabilities engineered by Bogglet across hospitality, real estate, retail e-commerce, and logistics.",
  alternates: {
    canonical: "/work",
  },
};

function ProjectPreviewArt({ p }: { p: Project }) {
  const [dark, light, accent] = p.palette;
  if (p.layout === "app") {
    return (
      <div className="flex h-full items-end justify-center gap-4 pt-8" style={{ background: light }}>
        {[0, 1].map((n) => (
          <div
            key={n}
            className={`w-[40%] rounded-t-[28px] border-[6px] border-b-0 p-3 shadow-md ${
              n ? "translate-y-6" : ""
            }`}
            style={{ borderColor: dark, background: "white" }}
          >
            <div className="h-20 rounded-xl" style={{ background: n ? accent : dark }} />
            <div className="mt-3 h-2 w-3/4 rounded-full" style={{ background: dark, opacity: 0.8 }} />
            <div className="mt-2 h-2 w-1/2 rounded-full" style={{ background: dark, opacity: 0.3 }} />
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-12 rounded-lg" style={{ background: light }} />
              <div className="h-12 rounded-lg" style={{ background: light }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (p.layout === "dash") {
    return (
      <div className="grid h-full grid-cols-[24%_1fr] gap-4 p-6" style={{ background: dark }}>
        <div className="space-y-3 rounded-xl bg-white/5 p-4">
          {[1, 0.4, 0.4, 0.4].map((o, i) => (
            <div key={i} className="h-2.5 rounded-full" style={{ background: i ? light : accent, opacity: o }} />
          ))}
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-14 rounded-xl bg-white/5 p-3">
                <div className="h-2 w-1/2 rounded-full bg-white/20" />
                <div className="mt-2 h-3 w-3/4 rounded-full" style={{ background: i === 0 ? accent : light }} />
              </div>
            ))}
          </div>
          <div className="flex h-28 items-end gap-2 rounded-xl bg-white/5 p-3">
            {[35, 60, 45, 80, 70, 95, 55, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{ height: `${h}%`, background: i === 5 ? accent : `${light}55` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (p.layout === "shop") {
    return (
      <div className="h-full p-6" style={{ background: light }}>
        <div className="flex justify-between">
          <div className="h-3 w-20 rounded-full" style={{ background: dark }} />
          <div className="size-4 rounded-full" style={{ background: accent }} />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <div
                className="aspect-[3/4] rounded-xl"
                style={{ background: i === 1 ? accent : `${dark}22` }}
              />
              <div className="mt-2.5 h-2 w-3/4 rounded-full" style={{ background: dark, opacity: 0.6 }} />
              <div className="mt-1.5 h-2 w-1/3 rounded-full" style={{ background: accent }} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col p-6" style={{ background: dark }}>
      <div className="flex justify-between">
        <div className="h-3.5 w-16 rounded-full" style={{ background: light }} />
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-2 w-8 rounded-full" style={{ background: light, opacity: 0.4 }} />
          ))}
        </div>
      </div>
      <div className="mt-8 h-5 w-2/3 rounded-full" style={{ background: light }} />
      <div className="mt-2.5 h-5 w-1/2 rounded-full" style={{ background: light }} />
      <div className="mt-6 h-8 w-28 rounded-lg" style={{ background: accent }} />
      <div className="mt-auto grid grid-cols-3 gap-2 pt-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-12 rounded-lg" style={{ background: light, opacity: 0.25 + i * 0.15 }} />
        ))}
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-24">
        {/* Hero */}
        <section className="px-4 pb-16 sm:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[36px] bg-[#fbf8f7] border border-line p-8 sm:p-14">
              <Clay tone="butter" shape="sphere" className="-right-8 -top-8 w-24 sm:w-36 opacity-80" />
              <Clay tone="sky" shape="donut" className="-bottom-8 right-24 w-28 opacity-75" />

              <span className="inline-block text-xs font-bold uppercase tracking-wider text-red">
                Demonstrated Engineering Capabilities
              </span>
              <h1 className="mt-3 font-display text-[clamp(2.1rem,5vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink max-w-3xl">
                Case Studies & Technical Showcase.
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft">
                Most of our development engagements carry strict non-disclosure agreements for white-label agency partners or proprietary enterprise systems. Below is an authentic overview of our architecture, problem-solving, and functional capabilities.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-red px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-deep"
                >
                  Discuss Your Project Requirement
                </Link>
                <Link
                  href="/white-label"
                  className="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-[#faf6f5]"
                >
                  White-Label Agency Information
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Projects List */}
        <section className="px-4">
          <div className="mx-auto max-w-6xl space-y-12">
            {projects.map((p, idx) => (
              <article
                key={p.id}
                id={p.id}
                className="overflow-hidden rounded-[36px] border border-line bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  {/* Left: Case study content */}
                  <div className="p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider">
                        <span className="text-red">Case Study 0{idx + 1} &middot; {p.category}</span>
                        <span className="text-ink-soft">{p.location}</span>
                      </div>

                      <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                        {p.title}
                      </h2>
                      <p className="mt-1 text-xs font-semibold text-ink-soft">
                        Client Type: {p.clientType}
                      </p>

                      <div className="mt-6 space-y-4 text-sm leading-relaxed">
                        <div className="rounded-2xl border border-line/60 bg-[#fbf8f7] p-4">
                          <strong className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                            Business Context & Requirement:
                          </strong>
                          <p className="text-ink-soft">{p.requirement}</p>
                        </div>

                        <div className="rounded-2xl border border-line/60 bg-white p-4 shadow-2xs">
                          <strong className="block text-xs font-bold uppercase tracking-wider text-red mb-1">
                            Solution Developed:
                          </strong>
                          <p className="text-ink font-medium">{p.solution}</p>
                        </div>
                      </div>

                      {/* Capabilities */}
                      <div className="mt-6 border-t border-line/60 pt-4">
                        <span className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-2">
                          Key Technical Capabilities:
                        </span>
                        <ul className="space-y-1.5 text-xs text-ink-soft">
                          {p.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-red font-bold">✓</span>
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
                      <div className="flex flex-wrap gap-1.5">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-[#fbf8f7] border border-line px-3 py-1 text-xs font-semibold text-ink"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/contact?project=${p.id}`}
                        className="rounded-full bg-red px-5 py-2.5 text-xs font-bold text-white hover:bg-red-deep"
                      >
                        Request Architecture Details
                      </Link>
                    </div>
                  </div>

                  {/* Right: Architectural / UI Mockup */}
                  <div className="aspect-[4/3] lg:aspect-auto border-t lg:border-t-0 lg:border-l border-line overflow-hidden">
                    <ProjectPreviewArt p={p} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Private Case Studies Notice */}
        <section className="px-4 mt-20">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-line bg-[#fbf8f7] p-8 sm:p-12 text-center">
            <h3 className="font-display text-2xl font-bold text-ink">
              Looking for specific architectural references?
            </h3>
            <p className="mt-3 text-ink-soft text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              If your organization has unique requirements—such as multi-tenant SaaS, HIPAA/GDPR considerations, or high-volume payment processing—we can share relevant anonymized technical architecture diagrams and code samples during our discovery call.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-ink/80"
              >
                Schedule Technical Discovery
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
