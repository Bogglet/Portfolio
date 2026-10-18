"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Clay } from "@/components/Clay";
import {
  services,
  whiteLabelBenefits,
  whiteLabelFaqs,
  whiteLabelSteps,
  whatsappLink,
} from "@/lib/site";

export default function WhiteLabelPage() {
  const [agencyName, setAgencyName] = useState("");
  const displayAgency = agencyName.trim() || "Your Agency Name";

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-4 pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[36px] bg-ink p-8 sm:p-14 text-white shadow-xl">
              <Clay tone="red" shape="sphere" className="-right-10 -top-10 w-44 sm:w-60 opacity-90" />
              <Clay tone="butter" shape="pill" className="-left-10 bottom-6 w-36 sm:w-48 opacity-80" style={{ transform: "rotate(24deg)" }} />

              <div className="relative z-10 max-w-3xl">
                <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-butter">
                  For Digital Agencies & Technology Partners
                </span>
                <h1 className="mt-4 font-display text-[clamp(2.3rem,5.5vw,4.2rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white">
                  Your Clients. Your Brand. <br />
                  <span className="text-red">Our Development Team.</span>
                </h1>
                <p className="mt-6 text-base sm:text-xl leading-relaxed text-white/85 max-w-2xl">
                  Expand your service offering without building an entire in-house software development team. Bogglet works quietly behind the scenes to help agencies deliver websites, custom applications, business systems, AI solutions, and automation under their own brand.
                </p>

                <div className="mt-8 flex flex-wrap gap-3.5">
                  <Link
                    href="/contact?type=agency"
                    className="rounded-full bg-red px-7 py-4 text-sm font-semibold text-white shadow-md hover:bg-red-deep"
                  >
                    Discuss a White-Label Partnership
                  </Link>
                  <a
                    href={whatsappLink(
                      "Hi Bogglet, I run an agency and would like to explore a white-label software development partnership."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20"
                  >
                    <span>Chat on WhatsApp</span>
                    <span aria-hidden>↗</span>
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-6 border-t border-white/15 pt-6 text-xs text-white/70">
                  <span>✓ 100% Strict NDA Protection</span>
                  <span>✓ Fixed Scopes & Predictable Margins</span>
                  <span>✓ Complete IP Handover to Agency</span>
                  <span>✓ Aligned GCC & European Working Hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Interactive White-Label Simulator */}
        <section className="px-4 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[32px] border border-line bg-[#fbf8f7] p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red">
                    Interactive Agency Demo
                  </span>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                    See How Your Agency Appears in Front of Clients
                  </h2>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft">
                    Type your agency or studio name below. Our engineering team acts as your invisible back-office software department, allowing you to pitch custom software with total confidence.
                  </p>

                  <div className="mt-6">
                    <label htmlFor="agency-input" className="block text-xs font-bold text-ink mb-1.5">
                      Your Agency / Studio Name:
                    </label>
                    <input
                      id="agency-input"
                      value={agencyName}
                      onChange={(e) => setAgencyName(e.target.value.slice(0, 30))}
                      placeholder="e.g. Apex Digital, North Studio"
                      className="w-full max-w-md rounded-2xl border border-line bg-white px-4 py-3 text-sm font-medium shadow-sm outline-none focus:border-red"
                    />
                  </div>
                </div>

                {/* Live Mockup */}
                <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-md">
                  <div className="flex items-center justify-between border-b border-line bg-[#faf6f5] px-4 py-3 text-xs text-ink-soft">
                    <div className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-red/40" />
                      <span className="size-2.5 rounded-full bg-butter" />
                      <span className="size-2.5 rounded-full bg-mint" />
                    </div>
                    <span className="font-mono text-[11px]">app.yourclientcompany.com</span>
                    <span className="text-[10px] font-semibold text-[#14733e]">Production Ready</span>
                  </div>

                  <div className="p-6 bg-[#14342B] text-[#E9DCC4]">
                    <div className="flex items-center justify-between text-xs opacity-75">
                      <span className="font-display font-bold">Client Enterprise Portal</span>
                      <span>Milestone 04 Delivered</span>
                    </div>
                    <p className="mt-6 font-display text-xl font-bold text-white">
                      Custom ERP & Booking Automation System
                    </p>
                    <p className="mt-2 text-xs text-[#E9DCC4]/80">
                      Multi-branch database sync, customer accounts, payment gateway webhooks.
                    </p>
                    <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-4 text-xs">
                      <span>Client Account: Yours</span>
                      <span>
                        Engineering Partner:{" "}
                        <strong className="text-[#C9A55C] font-display font-bold">
                          {displayAgency}
                        </strong>
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#faf6f5] px-6 py-3 text-center text-xs text-ink-soft border-t border-line">
                    🔒 Zero Bogglet branding. All commit logs, repos, and deliverables belong to you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red">
                Why Partner With Us
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                Built Around the Needs of Modern Agencies
              </h2>
              <p className="mt-3 text-base text-ink-soft leading-relaxed">
                We understand agency margins, client management pressures, and the friction of fluctuating project workloads.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whiteLabelBenefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-3xl border border-line bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <h3 className="font-display text-base font-bold text-ink">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Supported on White-Label Basis */}
        <section className="px-4 py-16 bg-[#fbf8f7]">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red">
                White-Label Scope
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                Technical Capabilities You Can Offer Today
              </h2>
              <p className="mt-3 text-base text-ink-soft leading-relaxed">
                Add full-stack software development to your agency&apos;s credentials without expanding payroll.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div
                  key={s.slug}
                  className="rounded-2xl border border-line bg-white p-5 shadow-sm"
                >
                  <h3 className="font-display text-sm font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft line-clamp-3">
                    {s.shortDesc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {s.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#fbf8f7] px-2 py-0.5 text-[10px] font-semibold text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Partnership Process */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <span className="text-xs font-bold uppercase tracking-wider text-red">
              Frictionless Process
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
              How We Work Together
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {whiteLabelSteps.map((st) => (
                <div
                  key={st.step}
                  className="rounded-3xl border border-line bg-white p-6 shadow-sm"
                >
                  <span className="font-display text-3xl font-black text-red">{st.step}</span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">{st.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft">{st.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Agency Concerns FAQ */}
        <section className="px-4 py-16 bg-[#fbf8f7]">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red">
                Common Agency Questions
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                Addressing Agency Concerns
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                Straightforward answers to the questions agency founders and operations leads frequently ask.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {whiteLabelFaqs.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-line bg-white p-6 shadow-sm"
                >
                  <h3 className="font-display text-base font-bold text-ink">{f.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner CTA */}
        <section className="px-4 mt-20">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-red p-8 sm:p-14 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-butter">
                  Start Collaborating
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-4xl font-bold">
                  Have a client project brief ready to scope?
                </h3>
                <p className="mt-3 text-white/90 text-sm sm:text-base max-w-xl leading-relaxed">
                  Send over your client&apos;s requirements. Within 24 hours, we will review the scope and provide a confidential, fixed quotation.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/contact?type=agency"
                  className="rounded-full bg-white px-8 py-4 font-display text-sm font-bold text-red hover:bg-blush"
                >
                  Send a Client Brief
                </Link>
                <a
                  href={whatsappLink(
                    "Hi Bogglet, I run an agency and have a client project requirement to quote."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
