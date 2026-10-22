import Link from "next/link";
import { Logo } from "./Logo";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-red px-4 pb-10 pt-20 text-white">
      <div className="mx-auto max-w-site">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="max-w-sm font-display text-2xl font-bold leading-snug tracking-tight">
              You manage the client, we handle the build. Or bring us your own project.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-red transition-colors hover:bg-blush"
            >
              Get a quote
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white/70">Work with us</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#partners" className="hover:underline">
                  For agencies
                </Link>
              </li>
              <li>
                <Link href="/for-business" className="hover:underline">
                  For businesses
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:underline">
                  Recent work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white/70">Contact</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp {site.whatsapp}
                </a>
              </li>
              {[
                ["India", site.phone],
                ["UAE", site.phoneUae],
              ].map(([where, number]) => (
                <li key={where}>
                  <a href={`tel:${number.replace(/\s/g, "")}`} className="hover:underline">
                    <span className="text-white/70">{where}</span> {number}
                  </a>
                </li>
              ))}
              <li className="text-white/80">{site.address}</li>
            </ul>
          </div>
        </div>

        <Logo full className="mt-20 h-auto w-full text-white/95" />

        <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-white/20 pt-6 text-sm text-white/70">
          <span>© {new Date().getFullYear()} Bogglet Innovations. Bengaluru, India.</span>
          <span>Serving the GCC, India and beyond</span>
        </div>
      </div>
    </footer>
  );
}
