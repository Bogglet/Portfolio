"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { businessFaqs, faqs } from "@/lib/site";
import { Clay } from "./Clay";

type Item = { q: string; a: string };

type Props = {
  title?: string;
  intro?: string;
  // A single list (no tabs). Without it, the homepage agency/business tabs show.
  items?: Item[];
};

const groups = [
  { label: "For agencies", items: faqs, active: "bg-red text-white shadow-[0_10px_24px_-12px_rgb(180_19_20/0.7)]" },
  { label: "For businesses", items: businessFaqs, active: "bg-ink text-white" },
];

export function Faq({
  title = "Common questions",
  intro = "Something else on your mind? Message us on WhatsApp and you'll get a reply the same day.",
  items,
}: Props) {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const list = items ?? groups[tab].items;

  return (
    <section id="faq" className="relative overflow-hidden bg-[#fbf8f7] px-4 py-24 sm:py-32">
      {/* clay shapes peeking in from the edges */}
      <Clay
        tone="mint"
        shape="donut"
        className="-right-10 top-8 w-28 animate-float sm:-right-12 sm:w-36"
        style={{ animationDelay: "-3s" }}
      />
      <Clay
        tone="sky"
        shape="pill"
        className="-left-14 bottom-6 w-32 animate-float sm:w-44"
        style={{ ["--r" as string]: "16deg", animationDelay: "-1s" }}
      />
      <Clay tone="blush" shape="sphere" className="-right-5 bottom-3 w-14 animate-float sm:w-20" style={{ animationDelay: "-5s" }} />

      <div className="relative z-10 mx-auto grid max-w-site gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-display text-[clamp(1.9rem,4.2vw,3.1rem)] font-bold leading-[1.06] tracking-[-0.03em]">
            {title}
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>

          {!items && (
            <div className="mt-8 inline-flex rounded-full border border-line bg-white p-1.5">
              {groups.map((g, i) => (
                <button
                  key={g.label}
                  type="button"
                  aria-pressed={tab === i}
                  onClick={() => {
                    setTab(i);
                    setOpen(0);
                  }}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    tab === i ? g.active : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          )}

          {/* floating cluster in the space under the tabs */}
          <div aria-hidden className="relative mt-14 hidden h-56 max-w-sm lg:block">
            <Clay tone="butter" shape="sphere" className="left-6 top-4 w-28 animate-float" />
            <Clay
              tone="red"
              shape="squircle"
              className="left-40 top-24 w-16 animate-float"
              style={{ ["--r" as string]: "14deg", animationDelay: "-2s" }}
            />
            <Clay
              tone="sky"
              shape="sphere"
              className="left-64 top-2 w-12 animate-float"
              style={{ animationDelay: "-4s" }}
            />
          </div>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {list.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold tracking-tight"
                  >
                    {f.q}
                    <span
                      aria-hidden
                      className={`grid size-9 shrink-0 place-items-center rounded-full border text-xl transition-transform duration-300 ${isOpen ? "rotate-45 border-red bg-red text-white" : "border-line"}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-6 leading-relaxed text-ink-soft">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
