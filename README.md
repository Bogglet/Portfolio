# bogglet.com

Portfolio site for Bogglet Innovations. Next.js 15, Tailwind CSS 4, Motion.

## Run locally

    npm install
    npm run dev      # http://localhost:3000

## Where to edit content

Everything that changes lives in `src/lib/site.ts`:

- `site`: email, WhatsApp, phone, address, social links (phone, address and socials are placeholders)
- `markets`: countries in the scrolling strip
- `services`, `stack`: services grid and technology list
- `projects`: sample case studies (placeholders, replace with real work)
- `steps`, `promises`, `faqs`: partner process, guarantees and FAQ copy

Logo files are in `public/brand/` (transparent PNGs cut from the original logo).
The favicon and Open Graph image are generated from `src/app/icon.png` and `src/app/opengraph-image.tsx`.

## Contact form

There's no backend yet. Submitting opens the visitor's email app with the enquiry
pre-filled to team.bogglet@gmail.com (`src/components/Contact.tsx`). To send emails
directly, replace `submit` with a POST to an API route using Resend or Formspree.

## Deploy to Vercel

1. Push this repo to GitHub/Bitbucket and import it at vercel.com/new (framework: Next.js, no settings needed).
2. In Project Settings > Domains add `bogglet.com` and `www.bogglet.com`, then set the DNS records Vercel shows at your domain registrar.
