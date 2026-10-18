# bogglet.com

Portfolio site for Bogglet Innovations. Next.js 15, Tailwind CSS 4, Motion.

## Run locally

    npm install
    npm run dev      # http://localhost:3000

## Where to edit content

Everything that changes lives in `src/lib/site.ts`:

- `site`: email, WhatsApp, phones, address and the inboxes that receive quote-form enquiries
- `markets`: countries in the scrolling strip
- `services`, `stack`: services grid and technology list
- `projects`: sample case studies (placeholders, replace with real work)
- `steps`, `promises`, `faqs`: partner process, guarantees and FAQ copy

Logo files are in `public/brand/` (transparent PNGs cut from the original logo).
The favicon and Open Graph image are generated from `src/app/icon.png` and `src/app/opengraph-image.tsx`.

## Contact form

The quote form posts to `src/app/api/enquiry/route.ts`, which emails the enquiry to
support@bogglet.com and team.bogglet@gmail.com through [Resend](https://resend.com). Set these in `.env.local`
and in Vercel's environment variables:

- `RESEND_API_KEY` (required)
- `RESEND_FROM`, e.g. `Bogglet website <enquiry@bogglet.com>` (requires bogglet.com to be verified in Resend)
- `ENQUIRY_TO` (optional, comma-separated, overrides the recipients)

## Deploy to Vercel

1. Push this repo to GitHub/Bitbucket and import it at vercel.com/new (framework: Next.js, no settings needed).
2. In Project Settings > Domains add `bogglet.com` and `www.bogglet.com`, then set the DNS records Vercel shows at your domain registrar.
