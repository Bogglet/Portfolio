import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Clay } from "@/components/Clay";
import { BusinessGroups } from "@/components/Sections";
import {
  businessAudiences,
  businessFaqs,
  businessPromises,
  businessSteps,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Websites, apps & custom software for businesses",
  description:
    "Bogglet builds business websites, online booking, mobile apps, ERP/CRM systems and AI tools for small businesses, startups and established companies across the GCC and India.",
  alternates: { canonical: "/for-business" },
};

function Heading({
  title,
  body,
  invert = false,
}: {
  title: string;
  body?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <h2
        className={`font-display text-[clamp(1.9rem,4.2vw,3.1rem)] font-bold leading-[1.06] tracking-[-0.03em] ${invert ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-5 text-lg leading-relaxed ${invert ? "text-white/75" : "text-ink-soft"}`}
        >
          {body}
        </p>
      )}
    </div>
  );
}

// A booking site and an admin dashboard side by side: the two halves of the offer.
function HeroArt() {
  return (
    <div
      aria-hidden
      className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[460px]"
    >
      <Clay
        tone="butter"
        shape="sphere"
        className="-left-6 top-4 w-20 animate-float sm:-left-10 sm:w-24"
      />
      <Clay
        tone="mint"
        shape="donut"
        className="-right-4 bottom-0 w-24 animate-float sm:-right-8 sm:w-28"
        style={{ animationDelay: "-3s" }}
      />

      {/* customer-facing booking site */}
      <div className="absolute left-0 top-0 z-10 w-[78%] overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_40px_80px_-40px_rgb(60_20_20/0.5)]">
        <div className="flex items-center gap-1.5 border-b border-line bg-[#faf6f5] px-4 py-3">
          <i className="size-2.5 rounded-full bg-[#f2b8b0]" />
          <i className="size-2.5 rounded-full bg-[#f6d98d]" />
          <i className="size-2.5 rounded-full bg-[#b6e3c9]" />
        </div>
        <div className="bg-[#eef5f9] px-5 pb-5 pt-4">
          <p className="font-display text-sm font-bold text-[#123a52]">
            Care Plus Clinic
          </p>
          <p className="mt-6 font-display text-lg font-semibold leading-tight text-[#123a52] sm:text-xl">
            Book a visit in under a minute
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] font-medium text-[#123a52]">
            {["Mon 10:00", "Mon 11:30", "Tue 09:00"].map((t, i) => (
              <span
                key={t}
                className={`rounded-lg px-2 py-2 text-center ${i === 1 ? "bg-[#123a52] text-white" : "bg-white"}`}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between rounded-lg bg-[#25d366] px-3 py-2 text-[11px] font-semibold text-white">
            <span>Confirm on WhatsApp</span>
            <span className="rounded bg-white/25 px-1.5">✓</span>
          </div>
        </div>
      </div>

      {/* back-office dashboard */}
      <div className="absolute bottom-0 right-0 z-20 w-[60%] rounded-[22px] bg-ink p-4 text-white shadow-[0_40px_80px_-30px_rgb(28_23_23/0.7)]">
        <p className="text-xs text-white/60">Today at the clinic</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/10 p-3">
            <p className="font-display text-xl font-bold">32</p>
            <p className="text-[11px] text-white/60">Appointments</p>
          </div>
          <div className="rounded-xl bg-red p-3">
            <p className="font-display text-xl font-bold">6</p>
            <p className="text-[11px] text-white/80">New patients</p>
          </div>
        </div>
        <div className="mt-3 flex h-16 items-end gap-1.5 rounded-xl bg-white/5 p-2">
          {[35, 55, 45, 70, 60, 90, 75].map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t ${i === 5 ? "bg-butter" : "bg-white/25"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ForBusinessPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:pb-24 sm:pt-40">
          <div
            aria-hidden
            className="absolute -right-40 top-10 -z-10 size-[720px] rounded-full bg-blush blur-3xl"
          />
          <div className="mx-auto grid max-w-site items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="text-[15px] font-semibold text-red">
                For businesses
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.3rem,5vw,3.8rem)] font-bold leading-[1.03] tracking-[-0.035em]">
                Websites and software that grow your business
              </h1>
              <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-ink-soft sm:text-xl">
                From a website that brings in customers to the custom software
                that runs your operations. We design, build and support it, for
                businesses in Qatar, the UAE, UK, India and beyond.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-red px-7 py-4 font-semibold text-white shadow-[0_14px_30px_-12px_rgb(180_19_20/0.7)] transition-colors hover:bg-red-deep"
                >
                  Get a quote
                </a>
                <a
                  href={whatsappLink(
                    "Hi Bogglet, I'd like to talk about a project for my business.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/15 bg-white px-7 py-4 font-semibold text-ink transition-colors hover:border-ink/40"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        <section className="bg-[#fbf8f7] px-4 py-24 sm:py-32">
          <div className="mx-auto max-w-site">
            <Heading
              title="Who we build for"
              body="Whether you need your first website or are replacing systems across several branches, the team and the process are the same."
            />
            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {businessAudiences.map((a) => (
                <li
                  key={a.title}
                  className="flex flex-col rounded-[28px] border border-line bg-white p-7"
                >
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{a.body}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                    {a.builds.map((b) => (
                      <li
                        key={b}
                        className="rounded-full bg-blush px-3 py-1 text-sm font-medium"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-24 sm:py-32">
          <div className="mx-auto max-w-site">
            <Heading
              title="What we build"
              body="Start with what you need now and add to it as you grow. Everything we build works together."
            />
            <div className="mt-14">
              <BusinessGroups />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-ink px-4 py-24 text-white sm:py-32">
          <Clay
            tone="red"
            shape="sphere"
            className="-right-24 -top-24 w-80 opacity-90"
          />
          <div className="relative mx-auto max-w-site">
            <Heading
              invert
              title="How a project runs"
              body="Clear steps, a fixed quote and a working preview at every milestone, so there are no surprises."
            />
            <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {businessSteps.map((s, i) => (
                <li
                  key={s.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-red font-display text-lg font-bold">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-white/70">{s.body}</p>
                </li>
              ))}
            </ol>

            <dl className="mt-20 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {businessPromises.map((p) => (
                <div key={p.title} className="border-t border-white/15 pt-5">
                  <dt className="font-display text-base font-bold tracking-tight">
                    {p.title}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-white/70">
                    {p.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Faq
          title="Questions businesses ask us"
          intro="Not sure what you need yet? Tell us what's slowing your business down and we'll suggest where to start."
          items={businessFaqs}
        />
        <Contact defaultKind="business" />
      </main>
      <Footer />
    </>
  );
}
