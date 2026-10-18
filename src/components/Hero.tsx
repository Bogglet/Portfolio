"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Clay } from "./Clay";
import { whatsappLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const [agency, setAgency] = useState("");
  const reduce = useReducedMotion();
  const name = agency.trim() || "Your Agency";

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  });

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-32 sm:pt-40">
      {/* soft blush wash behind the mockup */}
      <div
        aria-hidden
        className="absolute -right-40 top-10 -z-10 size-[720px] rounded-full bg-blush blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
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
            Oman and India. We also build websites, apps and custom software for businesses that come
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
          initial={reduce ? false : { opacity: 0, y: 40, rotate: -2 }}
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
              onChange={(e) => setAgency(e.target.value.slice(0, 28))}
              placeholder="Your Agency"
              className="w-full rounded-2xl border border-line bg-white px-5 py-3.5 text-base font-medium shadow-sm outline-none transition-colors placeholder:text-ink-soft/60 focus:border-red"
            />
          </label>

          <div className="relative z-10 overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_40px_80px_-40px_rgb(60_20_20/0.5)]">
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
            <div className="grid grid-cols-3 gap-2 bg-[#E9DCC4] p-3">
              {["#c7b08a", "#a9926c", "#d8c6a5"].map((c) => (
                <span key={c} className="h-14 rounded-lg" style={{ background: c }} />
              ))}
            </div>
            <div className="flex items-center justify-between bg-[#0e261f] px-6 py-3 text-[11px] text-[#E9DCC4]/70">
              <span>© 2026 Al Noor Resort</span>
              <span>
                Designed & developed by{" "}
                <motion.strong
                  key={name}
                  initial={reduce ? false : { opacity: 0.2, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-semibold text-[#C9A55C]"
                >
                  {name}
                </motion.strong>
              </span>
            </div>
          </div>
          <p className="relative z-10 mt-4 text-center text-sm text-ink-soft">
            Your logo, your client relationship. Our name never appears.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
