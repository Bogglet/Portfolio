import { Clay } from "./Clay";
import { markets, projects, promises, services, stack, steps, type Project, type Service } from "@/lib/site";

function Heading({ title, body, invert = false }: { title: string; body?: string; invert?: boolean }) {
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

export function Markets() {
  const row = [...markets, ...markets];
  return (
    <section aria-label="Markets we serve" className="border-y border-line bg-white py-6">
      <div className="mx-auto mb-3 max-w-6xl px-4 text-sm font-medium text-ink-soft">
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
      <div className="mx-auto max-w-6xl">
        <Heading
          title="Two ways to work with us"
          body="Most of our work comes from agencies who need a reliable build team. We also take on projects directly for businesses."
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
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-[32px] border border-line bg-blush p-8 sm:p-12"
          >
            <Clay tone="sky" shape="pill" className="-right-14 bottom-6 w-32 sm:-right-10 sm:bottom-10 sm:w-40" style={{ transform: "rotate(-20deg)" }} />
            <p className="relative z-10 text-sm font-semibold text-ink-soft">For businesses</p>
            <h3 className="relative z-10 mt-3 max-w-sm font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              A product team without the hiring
            </h3>
            <p className="relative z-10 mt-5 max-w-sm text-lg leading-relaxed text-ink-soft">
              From the first sketch to the App Store, with one team accountable for the whole thing.
            </p>
            <span className="relative z-10 mt-10 inline-block rounded-full bg-ink px-6 py-3 font-semibold text-white transition-transform group-hover:translate-x-1">
              Start a project
            </span>
          </a>
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
      <div className="mx-auto max-w-6xl">
        <Heading
          title="If it runs on a screen, we build it"
          body="Design, development and support under one roof, so you can say yes to whatever your client asks for next."
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

function ProjectArt({ p }: { p: Project }) {
  const [dark, light, accent] = p.palette;
  if (p.layout === "app") {
    return (
      <div className="flex h-full items-end justify-center gap-4 pt-8" style={{ background: light }}>
        {[0, 1].map((n) => (
          <div
            key={n}
            className={`w-[38%] rounded-t-[26px] border-[6px] border-b-0 p-3 ${n ? "translate-y-6" : ""}`}
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
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-2 w-8 rounded-full" style={{ background: light, opacity: 0.4 }} />
          ))}
        </div>
      </div>
      <div className="mt-8 h-5 w-2/3 rounded-full" style={{ background: light }} />
      <div className="mt-2 h-5 w-1/2 rounded-full" style={{ background: light }} />
      <div className="mt-6 h-8 w-28 rounded-lg" style={{ background: accent }} />
      <div className="mt-auto grid grid-cols-3 gap-2 pt-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-12 rounded-lg" style={{ background: light, opacity: 0.25 + i * 0.15 }} />
        ))}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="px-4 pb-24 pt-4 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading
            title="Recent work"
            body="Most of what we build carries our partners' names, so client details are kept anonymous. Ask us for private case studies."
          />
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.client} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <article>
                <div className="aspect-[4/3] overflow-hidden rounded-[28px] border border-line">
                  <ProjectArt p={p} />
                </div>
                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-bold tracking-tight">{p.client}</h3>
                  <span className="text-sm font-medium text-ink-soft">{p.where}</span>
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
      <div className="relative mx-auto max-w-6xl">
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

export function Stack() {
  return (
    <section aria-label="Technologies" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Heading title="Tools we know well" body="We pick what suits the project and your client's team, not what's trendy." />
        <ul className="mt-10 flex flex-wrap gap-3">
          {stack.map((t) => (
            <li key={t} className="rounded-full border border-line bg-white px-5 py-2.5 font-medium text-ink">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
