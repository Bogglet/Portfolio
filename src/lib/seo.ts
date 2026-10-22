// Structured data (JSON-LD) built from the same copy the pages show, so the
// markup never says anything the visitor can't see.

import { businessFaqs, businessGroups, faqs, markets, services, site } from "./site";

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

type Faq = { q: string; a: string };

const organization = {
  "@type": "Organization",
  "@id": orgId,
  name: site.name,
  legalName: site.name,
  alternateName: [site.shortName, "Bogglet Innovations"],
  url: site.url,
  logo: `${site.url}/brand/logo-full.png`,
  email: site.email,
  description: site.description,
  knowsAbout: [
    "White-label software development",
    "White-label web development",
    "White-label mobile app development",
    "Custom software development",
    "Business tools development",
    "Business software solutions",
    "Enterprise web applications",
    "Mobile app development",
    "Full-stack software engineering",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "BHIVE Workspace, AKR Tech Park, Hosur Road",
    addressLocality: "Bengaluru",
    postalCode: "560068",
    addressCountry: "IN",
  },
  areaServed: [
    ...markets.map((name) => ({ "@type": "Country", name })),
    { "@type": "AdministrativeArea", name: "Kerala" },
  ],
  contactPoint: [
    { "@type": "ContactPoint", telephone: site.phone.replace(/\s/g, ""), contactType: "sales", areaServed: "IN" },
    {
      "@type": "ContactPoint",
      telephone: site.phoneUae.replace(/\s/g, ""),
      contactType: "sales",
      areaServed: ["AE", "QA", "OM", "SA", "BH", "KW"],
    },
    { "@type": "ContactPoint", email: site.email, contactType: "customer support" },
  ],
  sameAs: ["https://github.com/Bogglet"],
};

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  publisher: { "@id": orgId },
  inLanguage: "en",
};

const faqPage = (items: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const service = (name: string, description: string, audience: string) => ({
  "@type": "Service",
  name,
  description,
  provider: { "@id": orgId },
  audience: { "@type": "Audience", audienceType: audience },
  areaServed: markets.map((m) => ({ "@type": "Country", name: m })),
});

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...organization,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web, app and software development",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: service(s.title, s.body, "Digital agencies and businesses"),
        })),
      },
    },
    website,
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: "Bogglet Innovations | White-label software, web & app development",
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      inLanguage: "en",
    },
    service(
      "White-label software development",
      "Custom software, portals and backend systems engineered under digital agency brands. Bogglet Innovations builds quietly while agencies manage their clients.",
      "Digital agencies",
    ),
    service(
      "White-label web and app development",
      "Websites, mobile apps and custom software built under a digital agency's brand. The agency keeps the client relationship; Bogglet builds and stays out of sight.",
      "Digital agencies",
    ),
    faqPage([...faqs, ...businessFaqs]),
    ...[
      { name: "For businesses", url: `${site.url}/for-business` },
      { name: "Services", url: `${site.url}/#services` },
      { name: "Work", url: `${site.url}/#work` },
      { name: "For agencies", url: `${site.url}/#partners` },
      { name: "FAQ", url: `${site.url}/#faq` },
      { name: "Contact", url: `${site.url}/#contact` },
    ].map((item, index) => ({
      "@type": "SiteNavigationElement",
      "@id": `${site.url}/#nav-${index + 1}`,
      name: item.name,
      url: item.url,
    })),
  ],
};

export const forBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    website,
    {
      "@type": "WebPage",
      "@id": `${site.url}/for-business#webpage`,
      url: `${site.url}/for-business`,
      name: "Websites, apps & custom software for businesses",
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      inLanguage: "en",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "For businesses", item: `${site.url}/for-business` },
        ],
      },
    },
    ...businessGroups.flatMap((g) =>
      g.items.map((item) => service(item, g.body, "Small businesses, startups and established companies")),
    ),
    faqPage(businessFaqs),
  ],
};
