"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Clay } from "./Clay";
import { whatsappLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

type Tab = "software" | "mobile" | "whitelabel";

const tabs: { id: Tab; label: string }[] = [
  { id: "software", label: "Custom Software" },
  { id: "mobile",   label: "Mobile App" },
  { id: "whitelabel", label: "White-Label" },
];

/* ── Business-website mockup ─────────────────────────────────── */
function SoftwareMockup({ name }: { name: string }) {
  const display = name || "Your Business";
  return (
    <div className="overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_24px_60px_-16px_rgba(28,23,23,0.22)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-[#f5f5f5] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-ink-soft/60">
          {name ? name.toLowerCase().replace(/\s+/g, "") + ".com" : "yourbusiness.com"}
        </div>
      </div>

      {/* Simulated website */}
      <div className="bg-[#0f172a]">
        {/* Nav */}
        <div className="flex items-center justify-between px-6 py-4">
          <motion.span key={display} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-display text-sm font-bold text-white">
            {display}
          </motion.span>
          <div className="flex gap-4 text-[11px] text-white/50">
            <span>Solutions</span><span>Pricing</span><span>Contact</span>
          </div>
        </div>

        {/* Hero copy */}
        <div className="px-6 pb-5 pt-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-400">Software Solutions</p>
          <motion.p key={display} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="mt-2 font-display text-xl font-bold leading-tight text-white sm:text-2xl">
            Powerful tools<br />built for <span className="text-blue-400">{display}.</span>
          </motion.p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-lg bg-blue-600 px-4 py-2 text-[11px] font-semibold text-white">Get started</span>
            <span className="rounded-lg border border-white/20 px-4 py-2 text-[11px] text-white/70">Learn more</span>
          </div>

          {/* Mini stat cards */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[["98%", "Uptime"], ["2× ", "Faster ops"], ["24/7", "Support"]].map(([n, l]) => (
              <div key={l} className="rounded-xl bg-white/5 p-3">
                <p className="font-display text-base font-black text-white">{n}</p>
                <p className="text-[10px] text-white/50">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/5 bg-[#080f1d] px-5 py-2.5">
        <span className="text-[10px] text-white/30">© 2026 {display}</span>
        <span className="text-[10px] text-white/30">Built by <span className="text-blue-400/80">Bogglet</span></span>
      </div>
    </div>
  );
}

/* ── Mobile-app mockup ───────────────────────────────────────── */
function MobileMockup({ name }: { name: string }) {
  const display = name || "Your App";
  return (
    <div className="mx-auto w-[220px]">
      {/* Phone shell */}
      <div className="relative overflow-hidden rounded-[36px] border-[6px] border-ink bg-ink shadow-[0_24px_60px_-16px_rgba(28,23,23,0.3)]">
        {/* Notch */}
        <div className="flex justify-center bg-ink pt-2 pb-1">
          <div className="h-4 w-24 rounded-full bg-[#1a1a1a]" />
        </div>

        {/* App screen */}
        <div className="bg-[#f8f4f0] pb-4">
          {/* App header */}
          <div className="bg-red px-4 py-4">
            <p className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">Welcome back</p>
            <motion.p key={display} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="mt-0.5 font-display text-base font-black text-white leading-tight">
              {display}
            </motion.p>
          </div>

          {/* Content cards */}
          <div className="px-3 pt-3 space-y-2">
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <p className="text-[10px] font-semibold text-ink-soft">Today&apos;s summary</p>
              <div className="mt-2 flex gap-2">
                <div className="flex-1 rounded-xl bg-blush p-2 text-center">
                  <p className="font-display text-lg font-black text-red">48</p>
                  <p className="text-[9px] text-ink-soft">Orders</p>
                </div>
                <div className="flex-1 rounded-xl bg-butter p-2 text-center">
                  <p className="font-display text-lg font-black text-ink">$2.4k</p>
                  <p className="text-[9px] text-ink-soft">Revenue</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <p className="text-[10px] font-semibold text-ink-soft mb-2">Activity</p>
              {[70, 45, 85, 60, 90].map((h, i) => (
                <div key={i} className="mb-1 flex items-center gap-1.5">
                  <div className="h-1.5 rounded-full bg-red/80" style={{ width: `${h}%` }} />
                  <span className="text-[8px] text-ink-soft">{h}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-3 flex justify-around border-t border-line bg-white px-2 pt-2 pb-1">
            {["🏠", "📊", "💬", "⚙️"].map((icon) => (
              <span key={icon} className="text-base">{icon}</span>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center bg-[#f8f4f0] pb-2">
          <div className="h-1 w-16 rounded-full bg-ink/20" />
        </div>
      </div>
    </div>
  );
}

/* ── White-label mockup (hotel booking) ──────────────────────── */
function WhitelabelMockup({ name }: { name: string }) {
  const display = name || "Your Agency";
  return (
    <div className="overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_24px_60px_-16px_rgba(28,23,23,0.22)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-[#f5f5f5] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 rounded-md bg-white px-3 py-1 text-[11px] text-ink-soft/60">alnoorresort.qa</div>
      </div>

      {/* Hotel website */}
      <div className="bg-[#14342B]">
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-display text-sm font-bold text-[#E9DCC4]">Al Noor</span>
          <div className="flex gap-5 text-[11px] text-[#E9DCC4]/70">
            <span>Rooms</span><span>Dining</span><span>Spa</span>
          </div>
        </div>
        <div className="px-6 pb-5 pt-1">
          <p className="font-display text-[1.4rem] font-bold leading-tight text-[#E9DCC4]">
            A quiet<br />escape on the<br />Doha coast
          </p>
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/10 p-2 text-[11px] text-[#E9DCC4]">
            <span className="flex-1 rounded-lg bg-white/10 px-3 py-2 font-medium">Check-in · 12 Dec</span>
            <span className="flex-1 rounded-lg bg-white/10 px-3 py-2 font-medium">2 guests</span>
            <span className="rounded-lg bg-[#C9A55C] px-3 py-2 font-bold text-[#14342B]">Book</span>
          </div>
          <div className="mt-3 flex gap-2">
            {["#D4C5A0", "#B8A882", "#9C8B65"].map((c) => (
              <div key={c} className="h-7 flex-1 rounded-lg" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer with live agency name */}
      <div className="flex items-center justify-between border-t border-[#0a1f17] bg-[#0e261f] px-5 py-2.5">
        <span className="text-[10px] text-[#E9DCC4]/50">© 2026 Al Noor Resort</span>
        <span className="text-[10px] text-[#E9DCC4]/60">
          Designed &amp; developed by{" "}
          <motion.strong key={display} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-semibold text-[#C9A55C]">
            {display}
          </motion.strong>
        </span>
      </div>
    </div>
  );
}

/* ── Main Hero ───────────────────────────────────────────────── */
export function Hero() {
  const [tab, setTab] = useState<Tab>("software");
  const [names, setNames] = useState({ software: "", mobile: "", whitelabel: "" });
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease, delay },
  });

  const tabMeta: Record<Tab, { placeholder: string; label: string }> = {
    software:   { placeholder: "e.g. NexaCorp", label: "Enter your business name" },
    mobile:     { placeholder: "e.g. TrackMate", label: "Enter your app name" },
    whitelabel: { placeholder: "e.g. Apex Studio", label: "Type your agency name to see it on the site" },
  };

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-24 sm:pt-32 lg:pb-20">
      {/* BG glow */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-10 -z-10 h-[480px] w-[480px] rounded-full bg-blush opacity-60 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">

        {/* ─── LEFT ───────────────────────────────────────────── */}
        <div>
          <motion.div
            {...rise(0)}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
            </span>
            <span>Software Development & Technology Partner</span>
          </motion.div>

          <motion.h1
            {...rise(0.06)}
            className="font-display text-[clamp(2.4rem,4.4vw,4.1rem)] font-black leading-[1.02] tracking-[-0.035em] text-ink"
          >
            Escalate your growth.<br />
            <span className="text-red">We build the software.</span>
          </motion.h1>

          <motion.p {...rise(0.12)} className="mt-5 max-w-[430px] text-sm leading-relaxed text-ink-soft sm:text-base">
            From custom business platforms, ERPs, and mobile apps to silent
            white-label engineering for digital agencies — we deliver scalable
            technology with zero overhead.
          </motion.p>

          <motion.div {...rise(0.18)} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-red px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgb(180_19_20/0.55)] transition-all hover:bg-red-deep"
            >
              Start a project →
            </Link>
            <Link
              href="/white-label"
              className="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-[#faf6f5]"
            >
              Agency partner?
            </Link>
          </motion.div>

          <motion.div {...rise(0.24)} className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-soft">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-red transition-colors"
            >
              <span className="inline-block size-2 rounded-full bg-emerald-500" />
              Chat on WhatsApp
            </a>
            <span className="hidden sm:inline text-line">•</span>
            <span>Strict NDA</span>
            <span className="hidden sm:inline text-line">•</span>
            <span>100% Code Ownership</span>
          </motion.div>
        </div>

        {/* ─── RIGHT ──────────────────────────────────────────── */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[520px] lg:mx-0"
        >
          {/* Tab switcher */}
          <div className="mb-4 flex rounded-2xl border border-line bg-white p-1 shadow-sm">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex-1 rounded-xl py-2 text-xs font-bold transition-all ${
                  tab === t.id ? "bg-red text-white shadow-sm" : "text-ink-soft hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Name input */}
          <div className="relative z-20 mb-3">
            <label className="block">
              <span className="mb-1.5 block text-xs text-ink-soft">
                {tabMeta[tab].label}
              </span>
              <input
                value={names[tab]}
                onChange={(e) =>
                  setNames((n) => ({ ...n, [tab]: e.target.value.slice(0, 28) }))
                }
                placeholder={tabMeta[tab].placeholder}
                className="w-full rounded-2xl border border-line bg-white px-5 py-3.5 text-sm font-semibold text-ink shadow-sm outline-none focus:border-red"
              />
            </label>
          </div>

          {/* Clay blobs — only behind browser tabs */}
          {tab !== "mobile" && (
            <div aria-hidden className="pointer-events-none">
              <Clay tone="butter" shape="sphere"   className="absolute -left-10 top-28 z-10 w-[80px] animate-float" />
              <Clay tone="sky"    shape="pill"      className="absolute -right-10 top-20 z-10 w-[100px] animate-float" style={{ ["--r" as string]: "-18deg", animationDelay: "-2.4s" }} />
              <Clay tone="mint"   shape="donut"     className="absolute -left-4 bottom-10 z-10 w-[70px] animate-float" style={{ animationDelay: "-4s" }} />
              <Clay tone="red"    shape="squircle"  className="absolute -right-3 bottom-14 z-10 w-[50px] animate-float" style={{ ["--r" as string]: "14deg", animationDelay: "-1.1s" }} />
            </div>
          )}

          {/* Animated mockup swap */}
          <div className="relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease }}
              >
                {tab === "software"   && <SoftwareMockup   name={names.software} />}
                {tab === "mobile"     && <MobileMockup      name={names.mobile} />}
                {tab === "whitelabel" && <WhitelabelMockup  name={names.whitelabel} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Captions per tab */}
          <AnimatePresence mode="wait">
            <motion.p
              key={tab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative z-20 mt-3 text-center text-xs text-ink-soft"
            >
              {tab === "software"   && "Your brand, your domain. We build the software behind it."}
              {tab === "mobile"     && "iOS & Android apps — designed, built, and shipped by us."}
              {tab === "whitelabel" && "Your logo, your client relationship. Our name never appears."}
            </motion.p>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
