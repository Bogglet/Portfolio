"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { generalFaqs, whiteLabelFaqs, whatsappLink } from "@/lib/site";

export function Faq() {
  const [tab, setTab] = useState<"general" | "whitelabel">("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = tab === "general" ? generalFaqs : whiteLabelFaqs;

  return (
    <section id="faq" className="bg-[#fbf8f7] px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red">FAQ</p>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,3.8vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
              Common questions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Can&apos;t find your answer?{" "}
              <a
                href={whatsappLink("Hi Bogglet, I have a question about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red hover:underline"
              >
                Ask us on WhatsApp →
              </a>
            </p>

            <div className="mt-8 flex rounded-2xl border border-line bg-white p-1.5">
              {(["general", "whitelabel"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => { setTab(t); setOpenIndex(0); }}
                  className={`flex-1 rounded-xl py-2.5 text-xs font-bold transition-all ${
                    tab === t
                      ? t === "general" ? "bg-red text-white shadow-sm" : "bg-ink text-white shadow-sm"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {t === "general" ? "For Businesses" : "For Agencies"}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion */}
          <ul className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <li key={f.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${tab}-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-base font-bold tracking-tight text-ink"
                    >
                      <span>{f.q}</span>
                      <span
                        aria-hidden
                        className={`grid size-7 shrink-0 place-items-center rounded-full border text-base transition-transform duration-300 ${
                          isOpen ? "rotate-45 border-red bg-red text-white" : "border-line bg-white text-ink-soft"
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${tab}-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
