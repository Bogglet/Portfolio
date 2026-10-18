"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";
import { services } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3.5">
      <nav
        aria-label="Main Navigation"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-[background-color,border-color,box-shadow] duration-300 sm:px-6 sm:py-3 ${
          scrolled || open || servicesOpen
            ? "border-line bg-white/95 shadow-[0_12px_32px_-16px_rgb(28_23_23/0.12)] backdrop-blur-md"
            : "border-transparent bg-white/80 shadow-[0_4px_20px_-10px_rgb(28_23_23/0.05)] backdrop-blur-sm sm:bg-transparent sm:shadow-none"
        }`}
      >
        <Link href="/" className="text-red transition-opacity hover:opacity-90" aria-label="Bogglet Innovations, Home">
          <Logo className="h-6 sm:h-7" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 text-[15px] font-medium text-ink-soft lg:flex">
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1.5 transition-colors hover:text-ink ${
                pathname.startsWith("/services") ? "font-semibold text-red" : ""
              }`}
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <svg
                className={`size-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-1/2 top-full mt-3 w-[620px] -translate-x-1/2 rounded-3xl border border-line bg-white p-4 shadow-[0_20px_50px_-15px_rgb(28_23_23/0.18)]"
                >
                  <div className="flex items-center justify-between border-b border-line/60 px-3 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                      Software & Digital Capabilities
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs font-semibold text-red hover:underline"
                    >
                      View All Services →
                    </Link>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="group rounded-2xl p-2.5 transition-colors hover:bg-blush"
                      >
                        <span className="block font-display text-sm font-bold text-ink group-hover:text-red">
                          {s.title}
                        </span>
                        <span className="mt-0.5 line-clamp-1 block text-xs text-ink-soft">
                          {s.shortDesc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/white-label"
            className={`transition-colors hover:text-ink ${pathname === "/white-label" ? "font-semibold text-red" : ""}`}
          >
            White-Label
          </Link>

          <Link
            href="/industries"
            className={`transition-colors hover:text-ink ${pathname === "/industries" ? "font-semibold text-red" : ""}`}
          >
            Industries
          </Link>

          <Link
            href="/work"
            className={`transition-colors hover:text-ink ${pathname === "/work" ? "font-semibold text-red" : ""}`}
          >
            Work
          </Link>

          <Link
            href="/about"
            className={`transition-colors hover:text-ink ${pathname === "/about" ? "font-semibold text-red" : ""}`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`transition-colors hover:text-ink ${pathname === "/contact" ? "font-semibold text-red" : ""}`}
          >
            Contact
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/white-label"
            className="hidden rounded-full border border-line bg-blush px-4 py-2 text-xs font-semibold text-ink-soft transition-colors hover:border-red hover:text-red md:inline-block"
          >
            Agency Partner?
          </Link>
          <Link
            href={isHome ? "#contact" : "/contact"}
            className="rounded-full bg-red px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-red-deep sm:px-5 sm:py-2.5 sm:text-[14px]"
          >
            Discuss Project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="grid size-10 place-items-center rounded-full border border-line lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-ink transition-transform duration-200 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded bg-ink transition-transform duration-200 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-h-[85vh] max-w-6xl overflow-y-auto rounded-3xl border border-line bg-white p-5 shadow-2xl lg:hidden"
          >
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-display text-base font-bold hover:bg-blush"
              >
                Home
              </Link>

              <div className="rounded-2xl border border-line/60 bg-[#fbf8f7] p-3">
                <div className="flex items-center justify-between px-2 pb-2">
                  <span className="font-display text-sm font-bold text-ink">Services</span>
                  <Link
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="text-xs font-semibold text-red"
                  >
                    All Services →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-ink-soft hover:bg-white hover:text-ink"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/white-label"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-display text-base font-bold hover:bg-blush"
              >
                White-Label Development
                <span className="ml-2 rounded-full bg-red/10 px-2.5 py-0.5 text-xs font-semibold text-red">
                  For Agencies
                </span>
              </Link>

              <Link
                href="/industries"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-display text-base font-bold hover:bg-blush"
              >
                Industries
              </Link>

              <Link
                href="/work"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-display text-base font-bold hover:bg-blush"
              >
                Case Studies & Work
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-display text-base font-bold hover:bg-blush"
              >
                About Bogglet
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-display text-base font-bold hover:bg-blush"
              >
                Contact & Enquiry
              </Link>
            </div>

            <div className="mt-5 border-t border-line pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full rounded-2xl bg-red px-4 py-3.5 text-center font-display text-sm font-bold text-white shadow-md hover:bg-red-deep"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/white-label"
                onClick={() => setOpen(false)}
                className="mt-2 block w-full rounded-2xl border border-line bg-blush px-4 py-3 text-center text-sm font-semibold text-ink hover:bg-white"
              >
                Explore Agency Partnership
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
