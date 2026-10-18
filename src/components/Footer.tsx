import Link from "next/link";
import { Logo } from "./Logo";
import { services, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink px-4 pb-12 pt-20 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Top Call to Action Banner */}
        <div className="rounded-[32px] bg-red p-8 sm:p-12 text-white shadow-xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-butter">
                Let&apos;s Build Together
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Technology built around your business.
              </h2>
              <p className="mt-3 text-base text-white/90 leading-relaxed">
                Custom software, websites, mobile apps, AI tools, and white-label engineering — let&apos;s talk.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 font-display text-sm font-bold text-red shadow-md transition-all hover:bg-blush"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/white-label"
                className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                White-Label Partnership
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/15 pb-14 text-sm">
          {/* Col 1: Brand & Positioning */}
          <div className="space-y-4">
            <Link href="/" className="inline-block text-white" aria-label="Bogglet Home">
              <Logo className="h-6 text-white" />
            </Link>
            <p className="text-xs leading-relaxed text-white/70">
              Software development and technology partner for businesses and agencies across the GCC and internationally.
            </p>
            <p className="pt-2 text-xs text-white/60">📍 {site.address}</p>
          </div>

          {/* Col 2: Services Directory */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Software Services
            </h3>
            <ul className="mt-4 space-y-2 text-xs text-white/75">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-white hover:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Solutions */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Solutions & Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-white/75">
              <li>
                <Link href="/white-label" className="transition-colors hover:text-white hover:underline">
                  White-Label Development for Agencies
                </Link>
              </li>
              <li>
                <Link href="/industries" className="transition-colors hover:text-white hover:underline">
                  Industry-Specific Solutions
                </Link>
              </li>
              <li>
                <Link href="/work" className="transition-colors hover:text-white hover:underline">
                  Case Studies & Work Showcase
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white hover:underline">
                  About Bogglet Innovations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white hover:underline">
                  Project Enquiry & Quotes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Connect With Us
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-white/75">
              <li>
                <span className="block text-[11px] text-white/50">Email</span>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-white hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-[11px] text-white/50">WhatsApp</span>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#a6e6c8] hover:underline"
                >
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="block text-[11px] text-white/50">Social Media</span>
                <div className="mt-1 flex gap-3 text-xs font-semibold">
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-butter"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-butter"
                  >
                    Instagram ↗
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Logo Mask */}
        <div className="mt-14 opacity-90">
          <Logo full className="h-auto w-full text-white/80" />
        </div>

        {/* Bottom Metadata & Legal */}
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-white/60 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-4">
            <span>Client Confidentiality Guaranteed (Strict NDA)</span>
            <span>•</span>
            <span>Kochi, Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
