"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import { Clay } from "./Clay";
import { contactPerson, site, whatsappLink } from "@/lib/site";

const projectTypes = [
  "Website",
  "Web app",
  "Mobile app",
  "E-commerce",
  "UI/UX design",
  "AI & automation",
  "Something else",
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

// Submitting posts to /api/enquiry, which emails the team through Resend.
type Kind = "agency" | "business";

export function Contact({ defaultKind = "agency" }: { defaultKind?: Kind }) {
  const [kind, setKind] = useState<Kind>(defaultKind);

  // Links like /?for=business#contact open the form with "A business" selected.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("for");
    if (param === "business" || param === "agency") setKind(param);
  }, []);
  const [types, setTypes] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [failure, setFailure] = useState("");

  const toggleType = (t: string) =>
    setTypes((cur) =>
      cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t],
    );

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (!get("name")) next.name = "Enter your name so we know who to reply to.";
    if (!/^\S+@\S+\.\S+$/.test(get("email")))
      next.email = "Enter an email address like you@agency.com.";
    if (get("message").length < 10)
      next.message = "Tell us a little about the project, even one line helps.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          name: get("name"),
          company: get("company"),
          email: get("email"),
          phone: get("phone"),
          types,
          message: get("message"),
          website: get("website"),
        }),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "" }));
        throw new Error(error || "We couldn't send your enquiry.");
      }
      form.reset();
      setTypes([]);
      setStatus("sent");
    } catch (err) {
      setFailure(
        err instanceof Error ? err.message : "We couldn't send your enquiry.",
      );
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-2xl border bg-white px-4 py-3.5 text-base outline-none transition-colors placeholder:text-ink-soft/50 focus:border-red";

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <h2 className="font-display text-[clamp(2.1rem,5vw,3.8rem)] font-bold leading-[1.02] tracking-[-0.035em]">
            Send us your next brief
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Share a brief, a rough idea or a deadline. Our rates are
            competitive, and you&apos;ll get a clear quote within 24 hours.
          </p>

          {/* talk to a person */}
          <div className="relative mt-10 overflow-hidden rounded-[32px] bg-red p-6 text-white shadow-[0_30px_60px_-30px_rgb(180_19_20/0.8)] sm:p-7">
            <Clay
              tone="butter"
              shape="sphere"
              className="-right-5 -top-5 w-20 sm:w-24"
            />
            <Clay
              tone="blush"
              shape="donut"
              className="-bottom-12 -right-6 w-24 opacity-90 sm:-bottom-10 sm:right-20"
              style={{ transform: "rotate(-12deg)" }}
            />

            <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <figure className="w-40 shrink-0 -rotate-3 rounded-[24px] bg-white p-2 text-ink shadow-[0_24px_40px_-20px_rgb(40_10_10/0.7)]">
                <Image
                  src={contactPerson.photo}
                  alt={`${contactPerson.name}, ${contactPerson.role}`}
                  width={320}
                  height={400}
                  className="aspect-[4/5] w-full rounded-[18px] object-cover"
                />
                <figcaption className="px-1.5 pb-1 pt-2.5">
                  <span className="block font-display text-sm font-bold tracking-tight">
                    {contactPerson.name}
                  </span>
                  <span className="block text-xs text-ink-soft">
                    {contactPerson.role}
                  </span>
                </figcaption>
              </figure>

              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
                  <span className="size-2 rounded-full bg-[#4ade80] shadow-[0_0_0_3px_rgb(74_222_128/0.25)]" />
                  Talk to a real person
                </span>
                <p className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.03em]">
                  Rather talk it through?
                </p>
                <p className="mt-2 max-w-xs leading-relaxed text-white/80">
                  Message us on WhatsApp for a quick answer on scope, timing or
                  where to start.
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 font-semibold text-ink transition-colors hover:bg-blush"
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="size-5 fill-[#25D366]"
                  >
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.5 3.9 1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center justify-between rounded-2xl bg-blush px-5 py-4 transition-colors hover:bg-[#f7dfd9]"
            >
              <span>
                <span className="block text-sm text-ink-soft">Email</span>
                <span className="font-semibold">{site.email}</span>
              </span>
              <span className="rounded-full bg-red px-4 py-2 text-sm font-semibold text-white">
                Write to us
              </span>
            </a>
          </div>

          <Clay
            tone="butter"
            shape="sphere"
            className="-bottom-4 right-10 hidden w-20 lg:block"
          />
          <Clay
            tone="sky"
            shape="donut"
            className="-bottom-16 right-36 hidden w-24 lg:block"
          />
        </div>

        <form
          noValidate
          onSubmit={submit}
          className="rounded-[32px] border border-line bg-[#fbf8f7] p-6 sm:p-10"
          aria-describedby="form-note"
        >
          <fieldset>
            <legend className="mb-3 text-sm font-semibold">
              I&apos;m reaching out as
            </legend>
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
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold"
              >
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
              {errors.name && (
                <p id="name-err" className="mt-1.5 text-sm text-red">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-semibold"
              >
                {kind === "agency" ? "Agency name" : "Company name"}{" "}
                <span className="font-normal text-ink-soft">(optional)</span>
              </label>
              <input
                id="company"
                name="company"
                autoComplete="organization"
                className={`${field} border-line`}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
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
              {errors.email && (
                <p id="email-err" className="mt-1.5 text-sm text-red">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold"
              >
                WhatsApp or phone{" "}
                <span className="font-normal text-ink-soft">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={`${field} border-line`}
              />
            </div>
          </div>

          <fieldset className="mt-6">
            <legend className="mb-3 text-sm font-semibold">
              What do you need?
            </legend>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((t) => {
                const on = types.includes(t);
                return (
                  <label
                    key={t}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-red ${on ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink/40"}`}
                  >
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggleType(t)}
                      className="sr-only"
                    />
                    {t}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold"
            >
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
            {errors.message && (
              <p id="message-err" className="mt-1.5 text-sm text-red">
                {errors.message}
              </p>
            )}
          </div>

          {/* spam trap: hidden from people, bots fill it in */}
          <div
            aria-hidden
            className="absolute -left-[9999px] size-px overflow-hidden"
          >
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-8 w-full rounded-full bg-red px-7 py-4 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgb(180_19_20/0.7)] transition-colors hover:bg-red-deep disabled:cursor-wait disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Send enquiry"}
          </button>
          <p
            id="form-note"
            role="status"
            className={`mt-4 text-center text-sm ${status === "sent" ? "font-semibold text-[#1f9d55]" : status === "error" ? "text-red" : "text-ink-soft"}`}
          >
            {status === "sent" ? (
              "Thanks, your enquiry is with us. We'll reply within one working day."
            ) : status === "error" ? (
              <>
                {failure} You can also reach us on{" "}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  WhatsApp
                </a>{" "}
                or at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold underline"
                >
                  {site.email}
                </a>
                .
              </>
            ) : (
              "We reply within one working day. Your details stay private."
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
