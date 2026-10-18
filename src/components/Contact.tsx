"use client";

import { useState, useEffect, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { site, whatsappLink } from "@/lib/site";

const enquiryOptions = [
  "Business software",
  "ERP / CRM",
  "Website",
  "Web or mobile app",
  "AI solution",
  "Workflow automation",
  "E-commerce",
  "White-label partnership",
  "Other",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $35,000",
  "$35,000+",
  "To be defined",
];

type Errors = Partial<Record<"name" | "email" | "message" | "type", string>>;

function ContactInner() {
  const searchParams = useSearchParams();
  const [kind, setKind] = useState<"business" | "agency">("business");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastPayload, setLastPayload] = useState<{ subject: string; body: string } | null>(null);

  useEffect(() => {
    if (searchParams?.get("type") === "agency") {
      setKind("agency");
      setSelectedTypes(["White-label partnership"]);
    }
  }, [searchParams]);

  const toggleType = (t: string) =>
    setSelectedTypes((cur) =>
      cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]
    );

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (!get("name")) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(get("email"))) next.email = "Please enter a valid email.";
    if (get("message").length < 12) next.message = "Please add a brief description.";
    if (selectedTypes.length === 0) next.type = "Please select at least one option.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = `${kind === "agency" ? "[Agency]" : "[Project]"} ${selectedTypes.slice(0, 2).join(" & ")} — ${get("company") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company") || "—"}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "—"}`,
      `Kind: ${kind === "agency" ? "Agency / White-Label" : "Business / Founder"}`,
      `Enquiry: ${selectedTypes.join(", ")}`,
      `Budget: ${budget || "Not specified"}`,
      "",
      get("message"),
    ].join("\n");

    setLastPayload({ subject, body });
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "w-full rounded-2xl border bg-white px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-ink-soft/40 focus:border-red";

  return (
    <section id="contact" className="px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-red">Get in touch</p>
          <h2 className="mt-2 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-bold leading-[1.06] tracking-[-0.03em] text-ink">
            Tell us what you want to build.
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
            Fill in the form or reach us directly — we reply within one business day.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-[#1f9d55]/30 bg-[#e7f8ee] p-5 transition-all hover:bg-[#d6f2e1]"
            >
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#14733e]">WhatsApp</span>
                <span className="mt-0.5 block font-display text-base font-bold text-ink">{site.whatsappDisplay}</span>
              </div>
              <span className="rounded-full bg-[#1f9d55] px-4 py-2 text-xs font-bold text-white">Chat Now</span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center justify-between rounded-2xl border border-line bg-blush p-5 transition-all hover:bg-[#f6dad4]"
            >
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-red">Email</span>
                <span className="mt-0.5 block font-display text-base font-bold text-ink">{site.email}</span>
              </div>
              <span className="rounded-full bg-red px-4 py-2 text-xs font-bold text-white">Write</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          noValidate
          onSubmit={submit}
          className="rounded-[32px] border border-line bg-[#fbf8f7] p-6 sm:p-10"
        >
          {/* Audience switcher */}
          <div className="grid grid-cols-2 gap-2 rounded-2xl border border-line bg-white p-1.5">
            {(["business", "agency"] as const).map((k) => (
              <label
                key={k}
                className={`cursor-pointer rounded-xl px-4 py-2.5 text-center text-xs font-bold transition-all ${
                  kind === k
                    ? k === "business" ? "bg-red text-white shadow-sm" : "bg-ink text-white shadow-sm"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                <input type="radio" name="audience_kind" value={k} checked={kind === k} onChange={() => setKind(k)} className="sr-only" />
                {k === "business" ? "Business / Founder" : "Agency / White-Label"}
              </label>
            ))}
          </div>

          {/* Fields */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="form-name" className="mb-1.5 block text-xs font-bold text-ink">Name <span className="text-red">*</span></label>
              <input id="form-name" name="name" placeholder="Your name" autoComplete="name" className={`${field} ${errors.name ? "border-red" : "border-line"}`} />
              {errors.name && <p className="mt-1 text-xs font-medium text-red">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="form-company" className="mb-1.5 block text-xs font-bold text-ink">{kind === "agency" ? "Agency name" : "Company"} <span className="font-normal text-ink-soft">(optional)</span></label>
              <input id="form-company" name="company" placeholder={kind === "agency" ? "Your studio" : "Your company"} autoComplete="organization" className={`${field} border-line`} />
            </div>

            <div>
              <label htmlFor="form-email" className="mb-1.5 block text-xs font-bold text-ink">Email <span className="text-red">*</span></label>
              <input id="form-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" className={`${field} ${errors.email ? "border-red" : "border-line"}`} />
              {errors.email && <p className="mt-1 text-xs font-medium text-red">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="form-phone" className="mb-1.5 block text-xs font-bold text-ink">WhatsApp / Phone <span className="font-normal text-ink-soft">(optional)</span></label>
              <input id="form-phone" name="phone" type="tel" placeholder="+971 or +91..." autoComplete="tel" className={`${field} border-line`} />
            </div>
          </div>

          {/* Enquiry type */}
          <fieldset className="mt-5">
            <legend className="mb-2 text-xs font-bold text-ink">What do you need? <span className="text-red">*</span></legend>
            <div className="flex flex-wrap gap-2">
              {enquiryOptions.map((opt) => {
                const selected = selectedTypes.includes(opt);
                return (
                  <label key={opt} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${selected ? "border-red bg-red text-white" : "border-line bg-white text-ink-soft hover:border-ink/40 hover:text-ink"}`}>
                    <input type="checkbox" checked={selected} onChange={() => toggleType(opt)} className="sr-only" />
                    {opt}
                  </label>
                );
              })}
            </div>
            {errors.type && <p className="mt-1.5 text-xs font-medium text-red">{errors.type}</p>}
          </fieldset>

          {/* Budget */}
          <div className="mt-5">
            <label htmlFor="form-budget" className="mb-1.5 block text-xs font-bold text-ink">Approximate budget <span className="font-normal text-ink-soft">(optional)</span></label>
            <select id="form-budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={`${field} border-line`}>
              <option value="">Select a range</option>
              {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          {/* Message */}
          <div className="mt-5">
            <label htmlFor="form-message" className="mb-1.5 block text-xs font-bold text-ink">Brief <span className="text-red">*</span></label>
            <textarea id="form-message" name="message" rows={4} placeholder="Tell us what you're building, who it's for, and any specific requirements." className={`${field} resize-y ${errors.message ? "border-red" : "border-line"}`} />
            {errors.message && <p className="mt-1 text-xs font-medium text-red">{errors.message}</p>}
          </div>

          <button type="submit" className="mt-7 w-full rounded-full bg-red px-7 py-4 font-display text-sm font-bold text-white shadow-[0_14px_30px_-12px_rgb(180_19_20/0.7)] transition-all hover:bg-red-deep">
            Send Enquiry
          </button>

          {sent ? (
            <div className="mt-4 rounded-2xl border border-[#1f9d55]/30 bg-[#e7f8ee] p-4">
              <p className="text-xs font-bold text-[#14733e]">✓ Email client opened!</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                If it didn&apos;t open,{" "}
                <button type="button" onClick={() => { navigator.clipboard.writeText(`Subject: ${lastPayload?.subject}\n\n${lastPayload?.body}`); setCopied(true); setTimeout(() => setCopied(false), 3000); }} className="font-semibold text-[#14733e] underline">
                  {copied ? "Copied!" : "copy your enquiry"}
                </button>{" "}
                and email us at <strong>{site.email}</strong>.
              </p>
            </div>
          ) : (
            <p className="mt-3 text-center text-xs text-ink-soft">
              We reply within one business day. Your information is confidential.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-ink-soft">Loading form...</div>}>
      <ContactInner />
    </Suspense>
  );
}
