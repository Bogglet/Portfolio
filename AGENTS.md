# Bogglet portfolio site: agent handbook

Read this before changing anything. It covers what the site is for, the decisions the owners have already made, the design system, and how to work in this repo without breaking things. Keep it up to date when decisions change.

Last updated: 2026-10-19.

---

## 1. What this is

The marketing site for **Bogglet Innovations**, a web, app and software development company in Bengaluru, India (office: BHIVE Workspace, AKR Tech Park, Hosur Road).

- **Live site:** https://www.bogglet.com (`bogglet.com` redirects to `www`)
- **Repo:** https://github.com/Bogglet/Portfolio (branch `main`)
- **Hosting:** Vercel, which deploys automatically on every push to `main`
- **Domain and DNS:** Namecheap. An A record `@` → `76.76.21.21`, and a CNAME `www` → `79e52426deb4360d.vercel-dns-017.com`. Vercel recommends switching the A record to `216.198.79.1`, but the current value works.

### Who the site is for (in priority order)

1. **Digital agencies, especially in the GCC.** Bogglet is their **white-label** development team. The agency keeps the client, the brand and the margin, and Bogglet builds quietly under the agency's name. This matches the company's outreach emails ("You manage the client. We handle the build.").
2. **Businesses that come to Bogglet directly.** This covers small and local businesses (websites, booking, WhatsApp ordering), growing companies (portals, dashboards, automation), startups (MVPs, apps) and established companies (ERP/CRM, integrations, AI).

**Agencies come first** on the homepage. Businesses get a clear second path: a homepage section and the `/for-business` page.

### End goal

A site that a GCC agency owner (or a business owner) can open from a cold email and, within one scroll, understand three things:

- **What we do:** websites, apps, software, white-label.
- **Why we're safe to hire:** NDA, fixed quotes, code ownership, time-zone overlap.
- **How to start:** WhatsApp, email or the quote form.

Real case studies will replace the placeholder projects later.

---

## 2. Decisions the owners have made (don't undo these)

- **Language:** English only, with no Arabic or RTL version. The clients are marketing teams who read English.
- **Visual direction:** inspired by Clay.com. Light, playful 3D "clay" shapes, bold type, using Bogglet's own red (see §4).
- **No numbers we can't prove.** Never state project counts, client counts, years in business or team size. Describe the team as "a large in-house team" without a number.
- **Pricing copy:** always "competitive rates, get a quote". No prices or "starting from".
- **Tech stack shown on the site:** everything except **Laravel**, which was explicitly removed.
- **Contact details:** email `support@bogglet.com`, WhatsApp `+91 98959 14090` (same as the India phone; the old WhatsApp number was removed on 2026-10-22). Phones `+91 98959 14090` (India) and `+971 54 584 1215` (UAE), shown in the footer. No social links on the site for now (removed 2026-10-18); add them back to `site` in `src/lib/site.ts` and the footer when the owners send real profiles.
- **Projects:** all four on the homepage are real work, shown with the owners' screenshots composed into images in `public/work/` (personal emails and dev URLs cropped out): **HolaBakes** (cake-ordering app, Kochi), **HomeDec** (furniture e-commerce website), **Student Management System** (college ERP) and **Sugar and Slice** (inventory & management system). City is still to confirm for the last three. Never invent client names or testimonials.
- **Contact form:** posts to `src/app/api/enquiry/route.ts`, which emails the enquiry to `support@bogglet.com` and `team.bogglet@gmail.com` (`site.enquiryInboxes`) through Resend, with reply-to set to the visitor. Env vars: `RESEND_API_KEY` (required), `RESEND_FROM` (e.g. `Bogglet website <enquiry@bogglet.com>`, needs `bogglet.com` verified in Resend), `ENQUIRY_TO` (optional, comma-separated override of the recipients). Keep keys in `.env.local` and Vercel, never in the repo.
- **Promises still to be confirmed by the owners:** quote within 24 hours, free bug fixes for 30 days after launch, same-day replies, NDA, team training at launch, Google Business profile setup. Don't add new promises without asking.
- **Layout width (2026-10-18):** content is 80% of the screen width, at least 1152px and at most 1536px (`max-w-site` in `globals.css`). On wide laptops (1920px) the owners wanted less empty margin but **not** a scaled-up "zoomed" look. Don't scale the root font size.

---

## 3. History: what's been done so far

1. **2026-10-16:** first version built. Single page, Next.js, Clay-inspired, agency-first. Logo files were cut from the owner's PNG. Deployed to Vercel and connected to bogglet.com.
2. **2026-10-17:** git history rewritten so commits are authored by `TheAfsal <afsaldesktop@gmail.com>`. That identity is set in this repo's local git config.
3. **2026-10-18:** a teammate (Akshay) pushed a large multi-page redesign (commit `d3b7c44`) with Services, White-label, Industries, Work, About and Contact pages. **The owners chose to go back to the original design.** His version is kept on the **`akshay-redesign`** branch on GitHub, and `main` reverts it with a normal revert commit (no history rewrite). His unused business copy can be borrowed from that branch if useful.
4. **2026-10-18:** added the direct-to-business offer while keeping agencies first. Changes:
   - Hero subtext now mentions businesses, and the second button is "For businesses".
   - The business card was rewritten.
   - New homepage section "Building for businesses directly".
   - New `/for-business` page.
   - Nav and footer links added.
   - The contact form can preselect "A business".
   - Business FAQ added.
5. **2026-10-18:** widened the layout on large screens (cap 1536px). Fixed a hydration warning for reduced-motion users with `MotionConfig reducedMotion="user"` in the hero.

6. **2026-10-18:** polish and real contact details:
   - Hero: a clay magnifying lens zooms in on the agency name in the preview footer while the visitor types.
   - Services intro and the tools section: butter highlighter (`Highlight` in `Sections.tsx`) and a red "Many more" chip.
   - Promises: "100% confidential" instead of "We sign an NDA" (no NDA document is signed); time-zone copy now covers the whole Gulf.
   - FAQ: "For agencies" / "For businesses" tabs on the homepage, with clay shapes in the background.
   - Contact: a red "talk to a person" card with a photo (`contactPerson` in `site.ts`) and a WhatsApp button; headline is "Send us your next brief" (Unbounded's "j" reads like an "i").
   - The quote form now emails through Resend (`src/app/api/enquiry/route.ts`) instead of opening the visitor's email app.
   - Contact details: `support@bogglet.com`, India `+91 98959 14090`, UAE `+971 54 584 1215`, office at BHIVE Workspace, AKR Tech Park, Bengaluru.
   - `/for-business` process: "Design" removed, "Build" and "Test" are separate steps.

7. **2026-10-18 (later):** footer social links removed (no real profiles yet); nav logo vertically centred; "Recent work" now shows four real projects (HolaBakes, HomeDec, Student Management System, Sugar and Slice) as composed screenshot images instead of wireframes.

8. **2026-10-19:** SEO groundwork, with no visible design changes:
   - Canonical domain is `https://www.bogglet.com` (`site.url`). `bogglet.com` 308-redirects there, so never point canonicals, sitemap or JSON-LD at the bare domain.
   - Added `favicon.ico` (Google's favicon crawler asks for it).
   - FAQ answers and both homepage FAQ tabs are always in the HTML (collapsed with height 0), so crawlers that don't run JavaScript can read them.
   - JSON-LD lives in `src/lib/seo.ts` and is built from `site.ts`: Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage.
   - `/for-business` has its own Open Graph/Twitter tags. Homepage title shortened so Google doesn't cut it off. `keywords` meta removed (search engines ignore it).
   - Sitemap no longer sends a build-time `lastmod`. robots.txt disallows `/api/`. `/llms.txt` is generated from `site.ts`.
   - `npm run seo:check -- <baseUrl>` checks titles, descriptions, canonicals, og:url, noindex, h1 count, JSON-LD syntax, alt text, internal links and the 404 status against a running server.
   - Search Console: domain property `bogglet.com` is verified, and `https://www.bogglet.com/sitemap.xml` was submitted on 2026-10-19.

### Current state

- Steps 3–8 are pushed to `main` and live on bogglet.com.
- **The quote form needs setup in production:** `RESEND_API_KEY` in Vercel, and `bogglet.com` verified in Resend with `RESEND_FROM` set. Until then the form shows its error message with the WhatsApp and email fallbacks.
- The FAQ answer "Will my client ever find out you built it?" still says "We work under an NDA". It should match the "100% confidential" promise once the owners confirm.
- Waiting on the owners for: real projects and screenshots, the contact person's name and role, real social profiles, and confirmation of the promises listed in §2.

---

## 4. Design system

### Principles

- **Agency-first story, business second.** Every page should make the next step obvious: "Get a quote", WhatsApp, or the relevant audience page.
- **One memorable moment per page.** On the homepage it's the interactive hero: the visitor types their agency name and it appears in the footer of a sample client site. That *shows* what white-label means. On `/for-business` it's a booking site next to a dashboard. Everything else stays calm and disciplined.
- **Clay, not corporate.** Soft, matte 3D shapes (spheres, pills, rounded squares, donuts) in playful colors, set against clean white and Bogglet red.
- **Specific, plain copy.** Write from the reader's side, in plain verbs and sentence case. Say what something does, don't sell it.

### Colors (Tailwind tokens in `src/app/globals.css`)

| Token | Hex | Use |
|---|---|---|
| `red` | `#B41314` | Brand red, sampled from the logo. Primary buttons, accents, dots, footer background |
| `red-deep` | `#8C0D0E` | Hover state for red buttons |
| `ink` | `#1C1717` | Text and dark sections (agency process, business process) |
| `ink-soft` | `#5B5151` | Body text and secondary text |
| `paper` | `#FFFFFF` | Page background |
| `blush` | `#FBEDEA` | Soft sections, cards, chips |
| `line` | `#ECDFDC` | Borders and dividers |
| `butter` | `#FFCF5C` | Clay shapes and accent cards |
| `sky` | `#9CC8FF` | Clay shapes and accent cards |
| `mint` | `#A6E6C8` | Clay shapes and accent cards |

The off-white section background is `#FBF8F7`. Avoid generic cream-and-terracotta palettes and acid-green accents. The brand is red on white.

### Typography

- **Display:** *Unbounded* (Google Fonts), weights 500–800. A wide, chunky geometric face that echoes the "B" in the logo. Use it for headings, card titles and big numbers, with tight letter-spacing (`tracking-[-0.03em]` to `-0.035em`).
- **Body:** *Instrument Sans*. Use it for paragraphs, labels and buttons.
- Fonts load through `next/font` in `layout.tsx`. **The font variables must sit on `<html>`, not `<body>`,** because Tailwind's theme variables live on `:root`. Putting them on `<body>` silently breaks the headline font.
- Heading sizes use `clamp()`. H1 is about 2.4rem–4.6rem and H2 about 1.9rem–3.1rem.
- Keep body text lines under about 75 characters (`max-w-md`, `max-w-xl`, `max-w-2xl`).

### Layout

- The container on every section is `mx-auto max-w-site` with `px-4` gutters.
- Sections use generous vertical spacing (`py-24 sm:py-32`). Alternate white, `#fbf8f7` and `ink` sections for rhythm.
- Corner radius follows hierarchy: big cards `rounded-[32px]`, cards `rounded-[28px]`, inputs `rounded-2xl`, buttons and chips `rounded-full`.
- Left-aligned headings with a short intro paragraph, using the shared `Heading` component in `Sections.tsx`.
- Must work at phone width (390px) with no horizontal scroll. Test 390px, 1440px and 1920px.

### Components and patterns

- **Clay shapes** (`src/components/Clay.tsx`): decorative absolute-positioned shapes with gradient and inner shadows (the `.clay` class). Keep them `aria-hidden`, and put text in a `relative z-10` layer above them. They must never cover text, so check on mobile.
- **Logo** (`Logo.tsx`): the PNG wordmark used as a CSS mask, so it takes `currentColor`. Use red in the nav and white in the footer.
- **Buttons:** primary is red with a soft red shadow. Secondary is white with an `ink/15` border. Dark buttons are `ink`.
- **Numbered steps** only for real sequences (the process sections). Don't number lists that aren't sequences.

### Motion

- One orchestrated entrance in the hero (Motion's `motion/react`). The clay shapes float gently (`animate-float`) and the countries strip scrolls (`animate-marquee`).
- Otherwise motion only responds to user actions: the FAQ accordion, the mobile menu, the hero name typing.
- Respect reduced motion. The hero uses `<MotionConfig reducedMotion="user">`, and `globals.css` stops CSS animations under `prefers-reduced-motion`. **Don't** put `useReducedMotion()` inside `initial={...}`, because it causes a server/client hydration mismatch.

### Avoid (these make a page look template-made)

- All-caps tracked-out labels above every heading
- `→` arrows appended to buttons and links
- Coloring or italicizing one word in a headline
- Middle-dot meta strings ("A · B · C")
- Identical cards with the same shadow everywhere
- Invented stats ("98% uptime", "500+ projects")

---

## 5. References

- **Main reference: Clay.com.** Light, playful 3D clay illustration, bold headlines, rounded cards. We borrow the *feel*, not the colors.
- Also shown by the owners: https://capsley.site, https://app.emergent.sh, https://adchitects.co (a dark, premium agency site).
- **Tone reference:** the company's outreach email, which pitches Bogglet as a white-label partner to UAE agencies. Its key line is "You manage the client. We handle the build. Together, we deliver better value."

---

## 6. Code map

```
src/
  app/
    layout.tsx            fonts, metadata/SEO, <html> font variables
    globals.css           design tokens, max-w-site, clay shading, animations, reduced motion
    page.tsx              homepage: section order + JSON-LD
    for-business/page.tsx direct-to-business page
    opengraph-image.tsx   share image (red card with the B mark)
    icon.png, apple-icon.png  favicon from the B mark
    robots.ts, sitemap.ts
  components/
    Nav.tsx               fixed pill nav, mobile menu (links are absolute, e.g. "/#work")
    Hero.tsx              interactive white-label demo
    Sections.tsx          Markets, Audiences, Work, Services, Partners, BusinessGroups, ForBusiness, Stack
    Faq.tsx               accordion; props: title, intro, items
    Contact.tsx           quote form (mailto); prop defaultKind; reads ?for=business
    Footer.tsx            red footer, big logo, links
    Clay.tsx, Logo.tsx
  app/llms.txt/route.ts   plain-text site summary for AI tools, built from site.ts
  lib/
    seo.ts                JSON-LD for the homepage and /for-business
    site.ts               ALL copy and data: contact, markets, services, stack, projects,
                          steps, promises, FAQs, business groups/audiences/steps/promises/FAQs
public/brand/             transparent logo PNGs (logo-full, wordmark, innovations, b-mark)
```

**Edit copy in `src/lib/site.ts`, not in components.** Placeholders are marked `TODO`.

Homepage order: Hero → Markets → Audiences → Work → Services → Partners (agency process + promises) → ForBusiness → Stack → FAQ → Contact → Footer.

---

## 7. Working in this repo

- **Stack:** Next.js 15 (App Router), React 19, Tailwind CSS 4, `motion`, TypeScript.
- **Commands:** `npm run dev`, `npm run lint`, `npx tsc --noEmit`, `npm run build`, `npm run seo:check -- http://localhost:3000` (needs a running server).
- **Don't run `npm run build` while someone's `npm run dev` is running in this folder.** Both use `.next/`, and the build breaks the dev server. Check with `ss -ltnp | grep 3000`. Use `npx tsc --noEmit` and `npm run lint` instead, and view changes on the running dev server.
- Use `next/link` for links between pages (lint enforces it). In-page anchors like `#contact` can stay as `<a>`.
- Don't run code formatters such as Prettier. The project has no formatter config, and it reformats whole files.
- **Screenshots:** Chromium's sandbox doesn't work on this machine. Use the Playwright headless shell directly with `--no-sandbox` against localhost:
  ```
  ~/.cache/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-linux64/chrome-headless-shell \
    --no-sandbox --force-prefers-reduced-motion --hide-scrollbars \
    --window-size=1920,1080 --virtual-time-budget=10000 --screenshot=out.png http://localhost:3000/
  ```
  `--force-prefers-reduced-motion` matters. Without it, headless capture freezes the hero entrance animation halfway.
- **Git:** commits are authored by `TheAfsal <afsaldesktop@gmail.com>` (local repo config). Pushing to `main` deploys to production immediately, so get the owner's OK before every push.
