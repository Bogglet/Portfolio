"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode, type Ref } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { Clay } from "./Clay";
import { whatsappLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const spring = { type: "spring", stiffness: 260, damping: 24 } as const;
const redClay = "radial-gradient(120% 120% at 28% 22%, #e2393a 0%, #b41314 45%, #7d0b0c 100%)";

type Lens = { x: number; y: number; cx: number; cy: number; width: number; size: number; zoom: number };

export function Hero() {
  const [agency, setAgency] = useState("");
  const typed = agency.trim().length > 0;
  const name = typed ? agency.trim() : "Your Agency";

  // The lens shows while the visitor is typing, then drifts away.
  const [lensOn, setLensOn] = useState(false);
  const [lens, setLens] = useState<Lens | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const frameRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLElement>(null);

  const showLens = (ms: number) => {
    setLensOn(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setLensOn(false), ms);
  };
  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Centre the lens on the agency name, measured from the real footer.
  const measure = useCallback(() => {
    const frame = frameRef.current?.getBoundingClientRect();
    const bottom = bottomRef.current?.getBoundingClientRect();
    const chip = chipRef.current?.getBoundingClientRect();
    if (!frame || !bottom || !chip) return;
    const size = frame.width < 480 ? 140 : 184;
    const visible = (size - 2 * Math.round(size * 0.07)) * 0.86;
    const zoom = Math.min(2.2, Math.max(1.6, visible / chip.width));
    // Long names don't fit at a readable zoom, so follow the newest letters.
    const span = visible / zoom;
    const focusX = chip.width <= span ? chip.left + chip.width / 2 : chip.right - span / 2;
    const focusY = chip.top + chip.height / 2;
    setLens({
      x: Math.min(focusX - frame.left, frame.width - size / 2 + (size < 150 ? 4 : 10)),
      y: focusY - frame.top,
      cx: focusX - bottom.left,
      cy: focusY - bottom.top,
      width: bottom.width,
      size,
      zoom,
    });
  }, []);

  useLayoutEffect(() => {
    if (lensOn) measure();
  }, [lensOn, name, measure]);

  useEffect(() => {
    if (!lensOn) return;
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [lensOn, measure]);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  });

  // reducedMotion="user" skips movement for people who ask for less motion,
  // while keeping server and client markup identical.
  return (
    <MotionConfig reducedMotion="user">
      <section id="top" className="relative overflow-hidden px-4 pb-20 pt-32 sm:pt-40">
        {/* soft blush wash behind the mockup */}
        <div
          aria-hidden
          className="absolute -right-40 top-10 -z-10 size-[720px] rounded-full bg-blush blur-3xl"
        />

        <div className="mx-auto grid max-w-site items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.h1
              {...rise(0)}
              className="font-display text-[clamp(2.4rem,6.2vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.035em] text-ink"
            >
              You sell the website.
              <br />
              We build it.
            </motion.h1>

            <motion.p {...rise(0.12)} className="mt-7 max-w-[34rem] text-lg leading-relaxed text-ink-soft sm:text-xl">
              Bogglet is the white-label development team behind digital agencies in Qatar, the UAE,
              UK and India. We also build websites, apps and custom software for businesses that come
              to us directly.
            </motion.p>

            <motion.div {...rise(0.22)} className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-red px-7 py-4 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgb(180_19_20/0.7)] transition-colors hover:bg-red-deep"
              >
                Become a partner
              </a>
              <Link
                href="/for-business"
                className="rounded-full border border-ink/15 bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:border-ink/40"
              >
                For businesses
              </Link>
            </motion.div>

            <motion.p {...rise(0.3)} className="mt-6 text-[15px] text-ink-soft">
              Prefer to talk it through?{" "}
              <a
                href={whatsappLink("Hi Bogglet, I'd like to talk about a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-red decoration-2 underline-offset-4"
              >
                Chat with us on WhatsApp
              </a>
            </motion.p>
          </div>

          {/* White-label demo */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, ease, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <Clay tone="butter" shape="sphere" className="-left-10 top-16 w-20 animate-float sm:-left-16 sm:w-24" />
            <Clay
              tone="sky"
              shape="pill"
              className="-right-6 top-24 w-32 animate-float sm:-right-12 sm:w-40"
              style={{ ["--r" as string]: "-18deg", animationDelay: "-2s" }}
            />
            <Clay
              tone="mint"
              shape="donut"
              className="-left-8 bottom-6 w-24 animate-float sm:-left-16 sm:w-28"
              style={{ animationDelay: "-4s" }}
            />
            <Clay
              tone="red"
              shape="squircle"
              className="-right-6 bottom-14 w-14 animate-float sm:-right-10 sm:w-16"
              style={{ ["--r" as string]: "14deg", animationDelay: "-1s" }}
            />

            <label className="relative z-10 mb-4 block">
              <span className="mb-2 block text-sm font-semibold text-ink">
                Type your agency name to see it on the site
              </span>
              <input
                value={agency}
                onChange={(e) => {
                  setAgency(e.target.value.slice(0, 28));
                  showLens(2200);
                }}
                onFocus={() => showLens(2600)}
                onBlur={() => showLens(500)}
                placeholder="Your Agency"
                className="w-full rounded-2xl border border-line bg-white px-5 py-3.5 text-base font-medium shadow-sm outline-none transition-colors placeholder:text-ink-soft/60 focus:border-red"
              />
            </label>

            <div ref={frameRef} className="relative z-10">
              <div className="overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_40px_80px_-40px_rgb(60_20_20/0.5)]">
                {/* browser chrome */}
                <div className="flex items-center gap-3 border-b border-line bg-[#faf6f5] px-4 py-3">
                  <span className="flex gap-1.5">
                    <i className="size-2.5 rounded-full bg-[#f2b8b0]" />
                    <i className="size-2.5 rounded-full bg-[#f6d98d]" />
                    <i className="size-2.5 rounded-full bg-[#b6e3c9]" />
                  </span>
                  <span className="truncate rounded-md bg-white px-3 py-1 text-xs text-ink-soft">
                    alnoorresort.qa
                  </span>
                </div>

                {/* sample client site */}
                <div className="bg-[#14342B] px-6 pb-6 pt-5 text-[#E9DCC4]">
                  <div className="flex items-center justify-between text-[11px] opacity-80">
                    <span className="font-display text-sm font-bold tracking-tight">Al Noor</span>
                    <span className="hidden gap-4 sm:flex">
                      <span>Rooms</span>
                      <span>Dining</span>
                      <span>Spa</span>
                    </span>
                  </div>
                  <p className="mt-10 max-w-[16rem] font-display text-2xl font-semibold leading-tight sm:text-[28px]">
                    A quiet escape on the Doha coast
                  </p>
                  <div className="mt-5 flex items-center gap-2 rounded-xl bg-white/10 p-2 text-[11px]">
                    <span className="flex-1 rounded-lg bg-white/10 px-3 py-2">Check-in · 12 Dec</span>
                    <span className="flex-1 rounded-lg bg-white/10 px-3 py-2">2 guests</span>
                    <span className="rounded-lg bg-[#C9A55C] px-3 py-2 font-semibold text-[#14342B]">Book</span>
                  </div>
                </div>
                <SiteBottom name={name} rootRef={bottomRef} chipRef={chipRef} />
              </div>

              {/* magnifying lens over the agency credit */}
              <AnimatePresence>
                {lensOn && lens && (
                  <motion.div
                    key="lens"
                    aria-hidden
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      x: 70,
                      y: 60,
                      rotate: 25,
                      left: lens.x - lens.size / 2,
                      top: lens.y - lens.size / 2,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      y: 0,
                      rotate: 0,
                      left: lens.x - lens.size / 2,
                      top: lens.y - lens.size / 2,
                    }}
                    exit={{ opacity: 0, scale: 0.6, x: 50, y: 40, rotate: 15 }}
                    transition={spring}
                    className="pointer-events-none absolute z-20"
                    style={{ width: lens.size, height: lens.size }}
                  >
                    <Magnifier lens={lens}>
                      <SiteBottom name={name} />
                    </Magnifier>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="relative z-10 mt-4 text-center text-sm text-ink-soft">
              Your logo, your client relationship. Our name never appears.
            </p>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

// Gallery strip and footer of the sample site. Rendered twice: once in the
// mockup, once enlarged inside the lens.
function SiteBottom({
  name,
  rootRef,
  chipRef,
}: {
  name: string;
  rootRef?: Ref<HTMLDivElement>;
  chipRef?: Ref<HTMLElement>;
}) {
  return (
    <div ref={rootRef}>
      <div className="grid grid-cols-3 gap-2 bg-[#E9DCC4] p-3">
        {["#c7b08a", "#a9926c", "#d8c6a5"].map((c) => (
          <span key={c} className="h-14 rounded-lg" style={{ background: c }} />
        ))}
      </div>
      <div className="flex items-center justify-between gap-3 bg-[#0e261f] px-6 py-3.5 text-[11px] text-[#E9DCC4]/70">
        <span className="shrink-0">
          © 2026<span className="hidden sm:inline"> Al Noor Resort</span>
        </span>
        <span className="flex min-w-0 items-center gap-1 whitespace-nowrap">
          <span className="sm:hidden">Built by</span>
          <span className="hidden sm:inline">Designed & developed by</span>
          <motion.strong
            key={name}
            ref={chipRef}
            initial={{ color: "#FFF6DD" }}
            animate={{ color: "#C9A55C" }}
            transition={{ duration: 0.6, ease }}
            className="block max-w-[13rem] truncate font-semibold sm:max-w-none"
          >
            {name}
          </motion.strong>
        </span>
      </div>
    </div>
  );
}

// A clay magnifying glass: red rim and handle, with the content beneath it
// shown enlarged. On phones the lens sits at the screen edge, so the handle
// points down-left.
function Magnifier({ lens, children }: { lens: Lens; children: ReactNode }) {
  const { size, cx, cy, width, zoom } = lens;
  const rim = Math.round(size * 0.07);
  const r = size / 2 - rim;
  const left = size < 150;

  return (
    <>
      <span
        className="clay absolute block rounded-full"
        style={{
          width: size * 0.55,
          height: size * 0.17,
          left: size / 2 + size * (left ? -0.33 : 0.33),
          top: size / 2 + size * 0.33 - size * 0.085,
          transform: `rotate(${left ? 135 : 45}deg)`,
          transformOrigin: "left center",
          background: redClay,
        }}
      />
      <span className="clay absolute inset-0 rounded-full" style={{ background: redClay }} />
      <div className="absolute overflow-hidden rounded-full bg-[#0e261f]" style={{ inset: rim }}>
        <motion.div
          className="absolute left-0 top-0"
          style={{ width, originX: 0, originY: 0 }}
          initial={{ scale: 1, x: r - cx, y: r - cy }}
          animate={{ scale: zoom, x: r - cx * zoom, y: r - cy * zoom }}
          transition={spring}
        >
          {children}
        </motion.div>
        {/* glass shine */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(60% 50% at 30% 22%, rgb(255 255 255 / 0.32), transparent 70%)",
            boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.25), inset 0 -12px 26px rgb(0 0 0 / 0.35)",
          }}
        />
      </div>
    </>
  );
}
