import { site } from "@/lib/site";

// Sends quote-form enquiries to the team inbox through Resend.
// Env: RESEND_API_KEY (required). RESEND_FROM once bogglet.com is verified in
// Resend, e.g. "Bogglet website <enquiry@bogglet.com>". Until then Resend's
// shared sender only delivers to the Resend account's own email address.
// ENQUIRY_TO overrides the recipients (comma-separated).

const from = process.env.RESEND_FROM ?? "Bogglet website <onboarding@resend.dev>";
const to = process.env.ENQUIRY_TO
  ? process.env.ENQUIRY_TO.split(",").map((e) => e.trim()).filter(Boolean)
  : site.enquiryInboxes;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const text = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ error: "Email is not set up yet." }, { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden "website" field; pretend it worked.
  if (text(body.website)) return Response.json({ ok: true });

  const kind = body.kind === "business" ? "business" : "agency";
  const name = text(body.name);
  const company = text(body.company);
  const email = text(body.email);
  const phone = text(body.phone, 40);
  const message = text(body.message, 5000);
  const types = Array.isArray(body.types) ? body.types.map((t) => text(t, 40)).filter(Boolean).slice(0, 10) : [];

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
    return Response.json({ error: "Please fill in your name, email and a short message." }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Company", company || "-"],
    ["Email", email],
    ["WhatsApp / phone", phone || "-"],
    ["I am", kind === "agency" ? "An agency looking for a white-label partner" : "A business with a project"],
    ["Interested in", types.join(", ") || "-"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#1C1717;max-width:600px">
      <h2 style="margin:0 0 16px;color:#B41314">New ${kind === "agency" ? "partnership" : "project"} enquiry</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows.map(([k, v]) => `<tr><td style="color:#5B5151;vertical-align:top">${k}</td><td><b>${escape(v)}</b></td></tr>`).join("")}
      </table>
      <p style="margin:20px 0 6px;color:#5B5151">About the project</p>
      <p style="margin:0;white-space:pre-wrap;line-height:1.5">${escape(message)}</p>
      <p style="margin:24px 0 0;font-size:12px;color:#5B5151">Sent from the quote form on ${site.url}. Reply to this email to answer ${escape(name)} directly.</p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `${kind === "agency" ? "Partnership" : "Project"} enquiry from ${company || name}`,
      html,
      text: [...rows.map(([k, v]) => `${k}: ${v}`), "", message].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "We couldn't send your enquiry right now." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
