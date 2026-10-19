// Checks the SEO basics on a running server: node scripts/seo-check.mjs [baseUrl]
// Defaults to http://localhost:3000. Exits 1 if anything fails.

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const canonicalHost = "https://www.bogglet.com";
const errors = [];
const fail = (msg) => errors.push(msg);

async function get(path) {
  const res = await fetch(base + path, { redirect: "manual" });
  return { status: res.status, type: res.headers.get("content-type") ?? "", text: await res.text() };
}

const meta = (html, re) => html.match(re)?.[1];

// Sitemap: valid entries, production host only.
const sitemap = await get("/sitemap.xml");
if (sitemap.status !== 200 || !sitemap.type.includes("xml")) fail(`sitemap.xml: ${sitemap.status} ${sitemap.type}`);
const urls = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) fail("sitemap.xml has no URLs");
for (const u of urls) if (!u.startsWith(canonicalHost)) fail(`sitemap URL not on ${canonicalHost}: ${u}`);

// robots.txt: never block everything, points at the sitemap.
const robots = await get("/robots.txt");
if (/^Disallow:\s*\/\s*$/m.test(robots.text)) fail("robots.txt blocks the whole site");
if (!robots.text.includes(`${canonicalHost}/sitemap.xml`)) fail("robots.txt doesn't list the sitemap");

// Every sitemap page: 200, title, description, canonical, no noindex, valid JSON-LD, alt text, one h1.
const titles = new Map();
for (const url of urls) {
  const path = url.slice(canonicalHost.length) || "/";
  const { status, text: html } = await get(path);
  if (status !== 200) { fail(`${path}: status ${status}`); continue; }

  const title = meta(html, /<title>([^<]*)<\/title>/);
  if (!title) fail(`${path}: missing <title>`);
  else if (titles.has(title)) fail(`${path}: same title as ${titles.get(title)}`);
  else titles.set(title, path);

  const desc = meta(html, /<meta name="description" content="([^"]*)"/);
  if (!desc || desc.length < 50) fail(`${path}: missing or short meta description`);

  const canonical = meta(html, /<link rel="canonical" href="([^"]*)"/);
  if (canonical?.replace(/\/$/, "") !== url.replace(/\/$/, "")) fail(`${path}: canonical is ${canonical}, expected ${url}`);

  const ogUrl = meta(html, /<meta property="og:url" content="([^"]*)"/);
  if (ogUrl?.replace(/\/$/, "") !== url.replace(/\/$/, "")) fail(`${path}: og:url is ${ogUrl}, expected ${url}`);

  if (/<meta name="robots" content="[^"]*noindex/.test(html)) fail(`${path}: has noindex`);

  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) fail(`${path}: ${h1s} h1 tags`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { fail(`${path}: invalid JSON-LD`); }
  }

  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    if (!/\balt="/.test(img)) fail(`${path}: <img> without alt: ${img.slice(0, 80)}`);
  }

  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const link = m[1];
    if (link.startsWith("/_next") || link.includes(".")) continue;
    const res = await fetch(base + link, { method: "HEAD", redirect: "manual" });
    if (res.status !== 200) fail(`${path}: internal link ${link} returns ${res.status}`);
  }
}

// Unknown URLs must 404, not redirect home.
const missing = await get("/this-page-does-not-exist");
if (missing.status !== 404) fail(`unknown URL returns ${missing.status}, expected 404`);

if (errors.length) {
  console.error(`SEO check failed (${errors.length}):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`SEO check passed: ${urls.length} pages from ${base}`);
