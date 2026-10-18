import Link from "next/link";
import { Clay } from "./Clay";
import {
  markets,
  projects,
  services,
  type Project,
  type ServiceDetail,
} from "@/lib/site";

// ─── Shared Heading ────────────────────────────────────────────────────────────
export function Heading({
  eyebrow,
  title,
  body,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-xl">
      {eyebrow && (
        <p className={`text-xs font-bold uppercase tracking-widest ${invert ? "text-butter" : "text-red"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-2 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.03em] ${invert ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {body && (
        <p className={`mt-3 text-base leading-relaxed ${invert ? "text-white/75" : "text-ink-soft"}`}>
          {body}
        </p>
      )}
    </div>
  );
}

// ─── 1. Markets Marquee ─────────────────────────────────────────────────────────
export function Markets() {
  const row = [...markets, ...markets];
  return (
    <section aria-label="Markets we serve" className="border-y border-line bg-white py-5">
      <div className="mx-auto mb-2.5 max-w-6xl px-4 text-[11px] font-semibold uppercase tracking-widest text-ink-soft">
        Serving businesses & agencies across
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="flex w-max animate-marquee gap-10 pr-10">
          {row.map((m, i) => (
            <li
              key={i}
              aria-hidden={i >= markets.length}
              className="flex items-center gap-10 whitespace-nowrap font-display text-xl font-semibold tracking-tight text-ink/75 sm:text-2xl"
            >
              {m}
              <span className="size-2 rounded-full bg-red" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── 2. Audience Cards ──────────────────────────────────────────────────────────
export function Audiences() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Heading
          eyebrow="Who we work with"
          title="Two ways to collaborate with Bogglet"
          body="Whether you are an ambitious business building proprietary software, or an agency scaling client delivery."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* 1. Businesses */}
          <Link href="#services" className="group relative overflow-hidden rounded-[32px] bg-ink p-8 text-white sm:p-12 shadow-sm transition-transform hover:-translate-y-0.5">
            <Clay tone="butter" shape="sphere" className="-right-8 -top-8 w-28 opacity-80 sm:w-36" />
            <Clay tone="sky" shape="donut" className="-bottom-10 right-8 w-24 opacity-75" />
            <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-butter">For Businesses & Startups</p>
            <h3 className="relative z-10 mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl text-white">
              A full software team without the hiring
            </h3>
            <p className="relative z-10 mt-4 max-w-md text-base leading-relaxed text-white/80">
              Custom software, mobile apps, ERPs, client portals, and AI systems built around your exact business workflows.
            </p>
            <span className="relative z-10 mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform group-hover:translate-x-1">
              Explore solutions →
            </span>
          </Link>

          {/* 2. Agencies */}
          <Link href="/white-label" className="group relative overflow-hidden rounded-[32px] bg-red p-8 text-white sm:p-12 shadow-sm transition-transform hover:-translate-y-0.5">
            <Clay tone="butter" shape="sphere" className="-right-8 -top-8 w-28 opacity-90 sm:w-36" />
            <Clay tone="blush" shape="donut" className="-bottom-10 right-8 w-24 opacity-75" />
            <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-white/70">For Digital Agencies</p>
            <h3 className="relative z-10 mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Silent white-label development
            </h3>
            <p className="relative z-10 mt-4 max-w-md text-base leading-relaxed text-white/85">
              You keep the client and the margin. We design, code, and ship websites and software invisibly under your agency brand.
            </p>
            <span className="relative z-10 mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-red transition-transform group-hover:translate-x-1">
              Agency partnership →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Services Grid ───────────────────────────────────────────────────────────
const toneCls: Record<ServiceDetail["tone"], string> = {
  red: "bg-red text-white",
  butter: "bg-butter text-ink",
  sky: "bg-sky text-ink",
  mint: "bg-mint text-ink",
  blush: "bg-blush text-ink",
  ink: "bg-ink text-white",
};

export function Services() {
  return (
    <section id="services" className="bg-[#fbf8f7] px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading
            eyebrow="What we build"
            title="Every digital solution your business needs"
            body="Purpose-built for your company's growth — and available unbranded for agency partners."
          />
          <Link href="/services" className="text-sm font-semibold text-red hover:underline">
            All services →
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.slug}
              className={`flex flex-col rounded-[28px] p-7 ${toneCls[s.tone]} ${i === 0 ? "lg:row-span-2 lg:p-9" : ""} ${i === services.length - 1 ? "lg:col-span-3" : ""}`}
            >
              <h3 className={`font-display font-bold tracking-tight ${i === 0 ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                {s.title}
              </h3>
              <p className={`mt-2 leading-relaxed opacity-80 ${i === 0 ? "max-w-xs text-lg" : "text-sm"}`}>
                {s.shortDesc}
              </p>
              {i === 0 && (
                <div aria-hidden className="relative my-6 h-32 lg:h-auto lg:flex-1">
                  <Clay tone="butter" shape="sphere" className="left-2 top-4 w-20" />
                  <Clay tone="blush" shape="squircle" className="left-24 top-12 w-28" style={{ transform: "rotate(12deg)" }} />
                  <Clay tone="sky" shape="donut" className="right-2 top-0 w-24" />
                </div>
              )}
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {s.tags.slice(0, 3).map((t) => (
                  <li key={t} className={`rounded-full px-3 py-1 text-xs font-medium ${s.tone === "red" || s.tone === "ink" ? "bg-white/15" : "bg-white/60"}`}>
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${s.slug}`}
                className={`mt-5 self-start text-xs font-bold uppercase tracking-wider hover:underline ${s.tone === "red" || s.tone === "ink" ? "text-white/80" : "text-ink/70"}`}
              >
                {s.ctaText} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── 4. White-Label Section ─────────────────────────────────────────────────────
const whiteLabelPoints = [
  "Deliver under your brand — we sign an NDA and never contact your client.",
  "Expand into software without hiring a full engineering team.",
  "Fixed quotes so your profit margin stays exactly where you set it.",
  "One project manager, same-day replies, aligned working hours.",
];

const whiteLabelSteps = [
  { n: "01", title: "Share the brief", body: "Send your client's scope, references, and deadline." },
  { n: "02", title: "Get a fixed quote", body: "Clear price, timeline, and deliverables within 24 hours." },
  { n: "03", title: "We build quietly", body: "Staging links at every milestone you can share with your client." },
  { n: "04", title: "Launch under your name", body: "Code, logins, and documentation — all handed over to you." },
];

export function Partners() {
  return (
    <section id="white-label" className="relative overflow-hidden bg-ink px-4 py-20 text-white sm:py-28">
      <Clay tone="red" shape="sphere" className="-right-20 -top-20 w-72 opacity-90" />
      <Clay tone="butter" shape="pill" className="-left-14 bottom-16 w-44 opacity-80" style={{ transform: "rotate(24deg)" }} />

      <div className="relative mx-auto max-w-6xl">
        <Heading
          invert
          eyebrow="For agencies & partners"
          title="Your clients. Your brand. Our dev team."
          body="Offer custom websites, apps, ERPs, and AI tools — delivered silently under your studio's name."
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {whiteLabelPoints.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-red text-xs font-bold">✓</span>
              <p className="text-sm leading-relaxed text-white/80">{p}</p>
            </li>
          ))}
        </ul>

        <ol className="mt-16 grid gap-4 md:grid-cols-4">
          {whiteLabelSteps.map((s) => (
            <li key={s.n} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <span className="font-display text-2xl font-black text-red">{s.n}</span>
              <h3 className="mt-4 font-display text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/white-label" className="rounded-full bg-red px-6 py-3.5 text-sm font-semibold text-white hover:bg-red-deep">
            Explore partnership
          </Link>
          <Link href="#contact" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
            Send a brief
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 5. Work / Case Studies ─────────────────────────────────────────────────────
function ProjectArt({ p }: { p: Project }) {
  const [dark, light, accent] = p.palette;
  if (p.layout === "app") {
    return (
      <div className="flex h-full items-end justify-center gap-4 pt-8" style={{ background: light }}>
        {[0, 1].map((n) => (
          <div key={n} className={`w-[38%] rounded-t-[24px] border-[6px] border-b-0 p-3 ${n ? "translate-y-6" : ""}`} style={{ borderColor: dark, background: "white" }}>
            <div className="h-20 rounded-xl" style={{ background: n ? accent : dark }} />
            <div className="mt-3 h-2 w-3/4 rounded-full" style={{ background: dark, opacity: 0.8 }} />
            <div className="mt-2 h-2 w-1/2 rounded-full" style={{ background: dark, opacity: 0.3 }} />
          </div>
        ))}
      </div>
    );
  }
  if (p.layout === "dash") {
    return (
      <div className="grid h-full grid-cols-[22%_1fr] gap-3 p-5" style={{ background: dark }}>
        <div className="space-y-2 rounded-xl bg-white/5 p-3">
          {[1, 0.4, 0.4, 0.4].map((o, i) => (
            <div key={i} className="h-2 rounded-full" style={{ background: i ? light : accent, opacity: o }} />
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
            {[40, 65, 50, 80, 70, 95, 60, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === 5 ? accent : `${light}55` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (p.layout === "shop") {
    return (
      <div className="h-full p-5" style={{ background: light }}>
        <div className="flex justify-between">
          <div className="h-3 w-16 rounded-full" style={{ background: dark }} />
          <div className="size-3 rounded-full" style={{ background: accent }} />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <div className="aspect-[3/4] rounded-xl" style={{ background: i === 1 ? accent : `${dark}22` }} />
              <div className="mt-2 h-2 w-3/4 rounded-full" style={{ background: dark, opacity: 0.6 }} />
              <div className="mt-1.5 h-2 w-1/3 rounded-full" style={{ background: accent }} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col p-5" style={{ background: dark }}>
      <div className="flex justify-between">
        <div className="h-3 w-14 rounded-full" style={{ background: light }} />
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => <div key={i} className="h-2 w-8 rounded-full" style={{ background: light, opacity: 0.4 }} />)}
        </div>
      </div>
      <div className="mt-8 h-5 w-2/3 rounded-full" style={{ background: light }} />
      <div className="mt-2 h-5 w-1/2 rounded-full" style={{ background: light }} />
      <div className="mt-6 h-8 w-28 rounded-lg" style={{ background: accent }} />
      <div className="mt-auto grid grid-cols-3 gap-2 pt-6">
        {[0, 1, 2].map((i) => <div key={i} className="h-12 rounded-lg" style={{ background: light, opacity: 0.25 + i * 0.15 }} />)}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading
            eyebrow="Recent work"
            title="What we've built"
            body="Most work carries our partners' brand. Client details are kept anonymous — ask us for private case studies."
          />
          <Link href="/work" className="text-sm font-semibold text-red hover:underline">All case studies →</Link>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.id} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <article>
                <div className="aspect-[4/3] overflow-hidden rounded-[28px] border border-line">
                  <ProjectArt p={p} />
                </div>
                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-bold tracking-tight">{p.clientType}</h3>
                  <span className="text-sm font-medium text-ink-soft">{p.location}</span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-red">{p.category}</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{p.solution}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── 6. Tech Stack ──────────────────────────────────────────────────────────────
const techByCategory = [
  { label: "Web & Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress", "Webflow"] },
  { label: "Backend & APIs", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Firebase"] },
  { label: "Mobile Apps", items: ["Flutter", "React Native"] },
  { label: "Cloud & DevOps", items: ["AWS", "Vercel", "Cloudflare", "Docker"] },
  { label: "AI & Automation", items: ["OpenAI", "Claude", "n8n", "Stripe"] },
  { label: "Design", items: ["Figma", "Shopify"] },
];

export function Stack() {
  return (
    <section aria-label="Technologies" className="bg-[#fbf8f7] px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Heading eyebrow="Engineering stack" title="Tools we know well" body="We pick what suits the project, not what's trendy." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techByCategory.map((cat) => (
            <div key={cat.label} className="rounded-2xl border border-line bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">{cat.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((t) => (
                  <span key={t} className="rounded-full border border-line bg-[#fbf8f7] px-3 py-1 text-sm font-medium text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
