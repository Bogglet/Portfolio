import { businessGroups, markets, services, site } from "@/lib/site";

// A plain-text summary for AI tools (https://llmstxt.org). Optional and not
// read by every crawler; the pages, sitemap and robots.txt are what count.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.name} is a web, app and software development company in Bengaluru, India. Digital agencies use us as their white-label development team: the agency keeps the client and the brand, and we build under the agency's name. We also build directly for businesses.

## Pages

- [Home](${site.url}/): white-label development for agencies, services, recent work, FAQ and quote form
- [For businesses](${site.url}/for-business): websites, apps, ERP/CRM and custom software for businesses

## Services

${services.map((s) => `- ${s.title}: ${s.body}`).join("\n")}

## For businesses

${businessGroups.map((g) => `- ${g.title}: ${g.items.join(", ")}`).join("\n")}

## Markets

${markets.join(", ")}

## Contact

- Email: ${site.email}
- WhatsApp: ${site.whatsapp}
- India: ${site.phone}
- UAE: ${site.phoneUae}
- Office: ${site.address}
- Pricing: competitive rates, fixed quote per project. Ask for a quote.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
