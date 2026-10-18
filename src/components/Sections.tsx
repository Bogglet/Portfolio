import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Clay } from "./Clay";
import {
  businessGroups,
  markets,
  projects,
  promises,
  services,
  stack,
  steps,
  type Service,
} from "@/lib/site";

function Heading({ title, body, invert = false }: { title: string; body?: ReactNode; invert?: boolean }) {
  return (
    <div className="max-w-2xl">
      <h2
        className={`font-display text-[clamp(1.9rem,4.2vw,3.1rem)] font-bold leading-[1.06] tracking-[-0.03em] ${invert ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-5 text-lg leading-relaxed ${invert ? "text-white/75" : "text-ink-soft"}`}>{body}</p>
      )}
    </div>
  );
}

// Butter highlighter stroke for the one phrase in an intro that matters most.
function Highlight({ children }: { children: ReactNode }) {
  return (
    <mark
      className="rounded-[0.3em] bg-transparent px-1 font-semibold text-ink [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
      style={{ backgroundImage: "linear-gradient(transparent 55%, rgb(255 207 92 / 0.8) 55%)" }}
    >
      {children}
    </mark>
  );
}

export function Markets() {
  const row = [...markets, ...markets];
  return (
    <section aria-label="Markets we serve" className="border-y border-line bg-white py-6">
      <div className="mx-auto mb-3 max-w-site px-4 text-sm font-medium text-ink-soft">
        Trusted by agencies and businesses across the Gulf and beyond
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="flex w-max animate-marquee gap-12 pr-12">
          {row.map((m, i) => (
            <li
              key={i}
              aria-hidden={i >= markets.length}
              className="flex items-center gap-12 whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-ink/80 sm:text-3xl"
            >
              {m}
              <span className="size-2.5 rounded-full bg-red" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Audiences() {
  return (
    <section className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-site">
        <Heading
          title="Two ways to work with us"
          body="Most of our work comes from agencies who need a reliable build team. We also work directly with businesses of every size, from a first website to company-wide software."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          <a
            href="#partners"
            className="group relative overflow-hidden rounded-[32px] bg-red p-8 text-white sm:p-12"
          >
            <Clay tone="butter" shape="sphere" className="-right-10 -top-10 w-24 opacity-90 sm:w-36" />
            <Clay tone="blush" shape="donut" className="-bottom-12 -right-6 w-24 opacity-80 sm:right-24 sm:w-28" />
            <p className="relative z-10 text-sm font-semibold text-white/75">For digital agencies</p>
            <h3 className="relative z-10 mt-3 max-w-md font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Your white-label development team
            </h3>
            <p className="relative z-10 mt-5 max-w-md text-lg leading-relaxed text-white/85">
              You keep the client, the branding and the margin. We design, build and ship it quietly in the
              background.
            </p>
            <span className="relative z-10 mt-10 inline-block rounded-full bg-white px-6 py-3 font-semibold text-red transition-transform group-hover:translate-x-1">
              How the partnership works
            </span>
          </a>
          <Link
            href="/for-business"
            className="group relative overflow-hidden rounded-[32px] border border-line bg-blush p-8 sm:p-12"
          >
            <Clay tone="sky" shape="pill" className="-right-14 bottom-6 w-32 sm:-right-10 sm:bottom-10 sm:w-40" style={{ transform: "rotate(-20deg)" }} />
            <p className="relative z-10 text-sm font-semibold text-ink-soft">For businesses</p>
            <h3 className="relative z-10 mt-3 max-w-sm font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Websites and software for your business
            </h3>
            <p className="relative z-10 mt-5 max-w-sm text-lg leading-relaxed text-ink-soft">
              From a website that brings in customers to the custom software, ERP, apps and AI tools that
              run your operations. One team, start to finish.
            </p>
            <span className="relative z-10 mt-10 inline-block rounded-full bg-ink px-6 py-3 font-semibold text-white transition-transform group-hover:translate-x-1">
              What we build for businesses
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

const toneClass: Record<Service["tone"], string> = {
  red: "bg-red text-white",
  butter: "bg-butter text-ink",
  sky: "bg-sky text-ink",
  mint: "bg-mint text-ink",
  blush: "bg-blush text-ink",
  ink: "bg-ink text-white",
};

export function Services() {
  return (
    <section id="services" className="bg-[#fbf8f7] px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-site">
        <Heading
          title="If it runs on a screen, we build it"
          body={
            <>
              Design, development and support under one roof, so you can{" "}
              <Highlight>say yes to whatever your client asks for next.</Highlight>
            </>
          }
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.title}
              className={`flex flex-col rounded-[28px] p-7 ${toneClass[s.tone]} ${i === 0 ? "lg:row-span-2 lg:p-9" : ""} ${i === services.length - 1 ? "lg:col-span-3" : ""}`}
            >
              <h3 className={`font-display font-bold tracking-tight ${i === 0 ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                {s.title}
              </h3>
              <p className={`mt-3 leading-relaxed opacity-80 ${i === 0 ? "max-w-xs text-lg" : ""}`}>{s.body}</p>
              {i === 0 && (
                <div aria-hidden className="relative my-6 h-36 lg:h-auto lg:flex-1">
                  <Clay tone="butter" shape="sphere" className="left-2 top-4 w-20" />
                  <Clay tone="blush" shape="squircle" className="left-24 top-14 w-28" style={{ transform: "rotate(12deg)" }} />
                  <Clay tone="sky" shape="donut" className="right-2 top-0 w-24" />
                </div>
              )}
              <ul className="relative z-10 mt-auto flex flex-wrap gap-2 pt-6">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className={`rounded-full px-3 py-1 text-sm font-medium ${s.tone === "red" || s.tone === "ink" ? "bg-white/15" : "bg-white/60"}`}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="px-4 pb-24 pt-4 sm:pb-32">
      <div className="mx-auto max-w-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading
            title="Recent work"
            body="A few projects we can show. Most of our white-label work carries our partners' names, so ask us for private case studies."
          />
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.client} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <article>
                <div className="aspect-[4/3] overflow-hidden rounded-[28px] border border-line">
                  <Image
                    src={p.image}
                    alt={`${p.kind} for ${p.client}${p.where ? ` in ${p.where}` : ""}`}
                    width={1600}
                    height={1200}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="size-full object-cover"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-bold tracking-tight">{p.client}</h3>
                  {p.where && <span className="text-sm font-medium text-ink-soft">{p.where}</span>}
                </div>
                <p className="mt-1 text-sm font-semibold text-red">{p.kind}</p>
                <p className="mt-2 max-w-md leading-relaxed text-ink-soft">{p.summary}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-ink px-4 py-24 text-white sm:py-32">
      <Clay tone="red" shape="sphere" className="-right-24 -top-24 w-80 opacity-90" />
      <Clay tone="butter" shape="pill" className="-left-16 bottom-24 w-48 opacity-90" style={{ transform: "rotate(24deg)" }} />
      <div className="relative mx-auto max-w-site">
        <Heading
          invert
          title="How a white-label project runs"
          body="A simple process your team can plug into on the first project, without any onboarding calls."
        />
        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
              <span className="grid size-11 place-items-center rounded-full bg-red font-display text-lg font-bold">
                {i + 1}
              </span>
              <h3 className="mt-6 font-display text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-24">
          <Heading invert title="Why agencies keep working with us" />
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <div key={p.title} className="border-t border-white/15 pt-5">
                <dt className="font-display text-base font-bold tracking-tight">{p.title}</dt>
                <dd className="mt-2 leading-relaxed text-white/70">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const groupTone = { blush: "bg-blush", butter: "bg-butter" } as const;

export function BusinessGroups() {
  return (
    <ul className="grid gap-5 lg:grid-cols-2">
      {businessGroups.map((g) => (
        <li key={g.title} className={`rounded-[32px] p-8 sm:p-10 ${groupTone[g.tone]}`}>
          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{g.title}</h3>
          <p className="mt-3 max-w-md leading-relaxed text-ink/75">{g.body}</p>
          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {g.items.map((item) => (
              <li key={item} className="flex items-center gap-3 font-medium">
                <span aria-hidden className="size-2 shrink-0 rounded-full bg-red" />
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export function ForBusiness() {
  return (
    <section id="business" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-site">
        <Heading
          title="Building for businesses directly"
          body="Not an agency? We work with small businesses, startups and established companies across the Gulf and India, from a first website to the software that runs the whole operation."
        />
        <div className="mt-14">
          <BusinessGroups />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/for-business"
            className="rounded-full bg-ink px-7 py-4 font-semibold text-white transition-colors hover:bg-red"
          >
            Explore business solutions
          </Link>
          <Link
            href="/for-business#contact"
            className="rounded-full border border-ink/15 bg-white px-7 py-4 font-semibold text-ink transition-colors hover:border-ink/40"
          >
            Get a quote for your business
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section aria-label="Technologies" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-site">
        <Heading
          title="Tools we know well"
          body={
            <>
              These are the ones we use most, and we know many more. We pick what suits
              the project and your client&apos;s team, not what&apos;s trendy.
            </>
          }
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {stack.map((t) => (
            <li key={t} className="rounded-full border border-line bg-white px-5 py-2.5 font-medium text-ink">
              {t}
            </li>
          ))}
          <li className="rounded-full bg-red px-5 py-2.5 font-semibold text-white shadow-[0_10px_24px_-12px_rgb(180_19_20/0.7)]">
            Many more
          </li>
        </ul>
      </div>
    </section>
  );
}
