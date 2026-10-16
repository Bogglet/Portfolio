"use client";

import { useState, type FormEvent } from "react";
import { Clay } from "./Clay";
import { site, whatsappLink } from "@/lib/site";

const projectTypes = ["Website", "Web app", "Mobile app", "E-commerce", "UI/UX design", "AI & automation", "Something else"];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

// TODO: no backend yet. Submitting opens a pre-filled email to the team.
// Swap `submit` for a POST to an API route (e.g. Resend) when ready.
export function Contact() {
  const [kind, setKind] = useState<"agency" | "business">("agency");
  const [types, setTypes] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const toggleType = (t: string) =>
    setTypes((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (!get("name")) next.name = "Enter your name so we know who to reply to.";
    if (!/^\S+@\S+\.\S+$/.test(get("email"))) next.email = "Enter an email address like you@agency.com.";
    if (get("message").length < 10) next.message = "Tell us a little about the project, even one line helps.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = `${kind === "agency" ? "Partnership" : "Project"} enquiry from ${get("company") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company") || "-"}`,
      `Email: ${get("email")}`,
      `WhatsApp / phone: ${get("phone") || "-"}`,
      `I am: ${kind === "agency" ? "An agency looking for a white-label partner" : "A business with a project"}`,
      `Interested in: ${types.join(", ") || "-"}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-2xl border bg-white px-4 py-3.5 text-base outline-none transition-colors placeholder:text-ink-soft/50 focus:border-red";

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <h2 className="font-display text-[clamp(2.1rem,5vw,3.8rem)] font-bold leading-[1.02] tracking-[-0.035em]">
            Send us your next project
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Share a brief, a rough idea or a deadline. Our rates are competitive for outsourcing, and you&apos;ll
            get a clear quote within 24 hours.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl bg-[#e7f8ee] px-5 py-4 transition-colors hover:bg-[#d6f2e1]"
            >
              <span>
                <span className="block text-sm text-ink-soft">WhatsApp</span>
                <span className="font-semibold">+91 98959 14090</span>
              </span>
              <span className="rounded-full bg-[#1f9d55] px-4 py-2 text-sm font-semibold text-white">Open chat</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center justify-between rounded-2xl bg-blush px-5 py-4 transition-colors hover:bg-[#f7dfd9]"
            >
              <span>
                <span className="block text-sm text-ink-soft">Email</span>
                <span className="font-semibold">{site.email}</span>
              </span>
              <span className="rounded-full bg-red px-4 py-2 text-sm font-semibold text-white">Write to us</span>
            </a>
          </div>

          <Clay tone="butter" shape="sphere" className="-bottom-4 right-10 hidden w-20 lg:block" />
          <Clay tone="sky" shape="donut" className="-bottom-16 right-36 hidden w-24 lg:block" />
        </div>

        <form
          noValidate
          onSubmit={submit}
          className="rounded-[32px] border border-line bg-[#fbf8f7] p-6 sm:p-10"
          aria-describedby="form-note"
        >
          <fieldset>
            <legend className="mb-3 text-sm font-semibold">I&apos;m reaching out as</legend>
            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white p-1.5">
              {(
                [
                  ["agency", "An agency"],
                  ["business", "A business"],
                ] as const
              ).map(([v, label]) => (
                <label
                  key={v}
                  className={`cursor-pointer rounded-xl px-4 py-3 text-center font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-red ${kind === v ? "bg-red text-white" : "text-ink-soft hover:text-ink"}`}
                >
                  <input
                    type="radio"
                    name="kind"
                    value={v}
                    checked={kind === v}
                    onChange={() => setKind(v)}
                    className="sr-only"
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                Your name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-err" : undefined}
                className={`${field} ${errors.name ? "border-red" : "border-line"}`}
              />
              {errors.name && <p id="name-err" className="mt-1.5 text-sm text-red">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-semibold">
                {kind === "agency" ? "Agency name" : "Company name"} <span className="font-normal text-ink-soft">(optional)</span>
              </label>
              <input id="company" name="company" autoComplete="organization" className={`${field} border-line`} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-err" : undefined}
                className={`${field} ${errors.email ? "border-red" : "border-line"}`}
              />
              {errors.email && <p id="email-err" className="mt-1.5 text-sm text-red">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                WhatsApp or phone <span className="font-normal text-ink-soft">(optional)</span>
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={`${field} border-line`} />
            </div>
          </div>

          <fieldset className="mt-6">
            <legend className="mb-3 text-sm font-semibold">What do you need?</legend>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((t) => {
                const on = types.includes(t);
                return (
                  <label
                    key={t}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-red ${on ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink/40"}`}
                  >
                    <input type="checkbox" checked={on} onChange={() => toggleType(t)} className="sr-only" />
                    {t}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold">
              About the project
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Scope, references, deadline, anything that helps us quote."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-err" : undefined}
              className={`${field} resize-y ${errors.message ? "border-red" : "border-line"}`}
            />
            {errors.message && <p id="message-err" className="mt-1.5 text-sm text-red">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-red px-7 py-4 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgb(180_19_20/0.7)] transition-colors hover:bg-red-deep"
          >
            Send enquiry
          </button>
          <p id="form-note" role="status" className="mt-4 text-center text-sm text-ink-soft">
            {sent
              ? "Your email app should open with the enquiry filled in. Press send there to reach us."
              : "We reply within one working day. Your details stay private."}
          </p>
        </form>
      </div>
    </section>
  );
}
