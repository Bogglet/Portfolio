"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/lib/site";

type Props = {
  title?: string;
  intro?: string;
  items?: { q: string; a: string }[];
};

export function Faq({
  title = "Common questions",
  intro = "Something else on your mind? Message us on WhatsApp and you'll get a reply the same day.",
  items = faqs,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#fbf8f7] px-4 py-24 sm:py-32">
      <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-display text-[clamp(1.9rem,4.2vw,3.1rem)] font-bold leading-[1.06] tracking-[-0.03em]">
            {title}
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {items.map((f, i) => {
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
