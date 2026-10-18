"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";

// Absolute paths so the links also work from /for-business.
const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#partners", label: "For agencies" },
  { href: "/for-business", label: "For businesses" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-site items-center justify-between rounded-full border px-5 py-3 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled || open
            ? "border-line bg-white/85 shadow-[0_10px_30px_-18px_rgb(60_20_20/0.4)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="flex text-red" aria-label="Bogglet Innovations, home">
          {/* nudged down: the "g" tails make the word sit high in its box */}
          <Logo className="h-6 translate-y-[9%] sm:h-7" />
        </Link>

        <ul className="hidden items-center gap-7 text-[15px] font-medium text-ink-soft lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-red px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-red-deep sm:inline-block"
          >
            Get a quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-site rounded-3xl border border-line bg-white p-3 shadow-xl lg:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-display text-lg font-semibold hover:bg-blush"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-2xl bg-red px-4 py-3 text-center font-semibold text-white"
            >
              Get a quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
