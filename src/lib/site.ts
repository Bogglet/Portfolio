// Central place for everything that's likely to change: contact details,
// markets, services, sample work and FAQ copy. Edit here, not in components.

export const site = {
  name: "Bogglet Innovations",
  shortName: "Bogglet",
  url: "https://bogglet.com",
  description:
    "White-label web and app development for digital agencies, plus websites, apps and custom software for businesses across the GCC and India.",
  email: "team.bogglet@gmail.com",
  whatsapp: "+919895914090",
  // TODO: replace placeholders below with real details.
  phone: "+91 00000 00000",
  address: "Kochi, Kerala, India",
  socials: {
    linkedin: "https://www.linkedin.com/company/bogglet",
    instagram: "https://www.instagram.com/bogglet",
  },
};

export const whatsappLink = (text = "Hi Bogglet, I'd like to talk about a project.") =>
  `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

export const markets = [
  "Qatar",
  "United Arab Emirates",
  "Oman",
  "Saudi Arabia",
  "Bahrain",
  "Kuwait",
  "India",
  "United Kingdom",
];

export type Service = {
  title: string;
  body: string;
  tags: string[];
  tone: "red" | "butter" | "sky" | "mint" | "blush" | "ink";
};

export const services: Service[] = [
  {
    title: "Websites",
    body: "Corporate sites, landing pages and multi-language marketing sites that load fast and rank well.",
    tags: ["Next.js", "WordPress", "Webflow"],
    tone: "red",
  },
  {
    title: "Mobile apps",
    body: "iOS and Android apps from one codebase, published to both stores and maintained after launch.",
    tags: ["Flutter", "React Native"],
    tone: "sky",
  },
  {
    title: "Web apps & dashboards",
    body: "Booking engines, portals, CRMs and admin panels built around how your client's business actually runs.",
    tags: ["React", "Node.js", "PostgreSQL"],
    tone: "butter",
  },
  {
    title: "E-commerce",
    body: "Shopify and custom stores with local payment gateways, delivery integrations and Arabic-ready layouts.",
    tags: ["Shopify", "WooCommerce", "Stripe"],
    tone: "mint",
  },
  {
    title: "UI/UX design",
    body: "Wireframes, design systems and clickable prototypes your client can sign off before a line of code.",
    tags: ["Figma", "Prototyping"],
    tone: "blush",
  },
  {
    title: "AI & automation",
    body: "Chatbots, AI search, document processing and workflow automation plugged into existing tools.",
    tags: ["OpenAI", "Claude", "n8n"],
    tone: "ink",
  },
  {
    title: "SEO & performance",
    body: "Technical SEO, Core Web Vitals and analytics setup so the marketing team can prove results.",
    tags: ["GA4", "Search Console"],
    tone: "sky",
  },
  {
    title: "Custom software",
    body: "APIs, integrations and backend systems for problems an off-the-shelf tool doesn't solve.",
    tags: ["TypeScript", "Python", "AWS"],
    tone: "butter",
  },
  {
    title: "Care & maintenance",
    body: "Hosting, updates, backups, security patches and small changes on a monthly plan.",
    tags: ["Vercel", "Cloudflare"],
    tone: "mint",
  },
];

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Flutter",
  "React Native",
  "WordPress",
  "Shopify",
  "Webflow",
  "Tailwind CSS",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "AWS",
  "Vercel",
  "Figma",
  "OpenAI",
  "Claude",
];

// TODO: sample projects — replace with real case studies, screenshots and links.
export type Project = {
  client: string;
  where: string;
  kind: string;
  summary: string;
  palette: [string, string, string];
  layout: "site" | "app" | "shop" | "dash";
};

export const projects: Project[] = [
  {
    client: "Boutique hotel group",
    where: "Doha, Qatar",
    kind: "Website + booking engine",
    summary: "A bilingual site with a direct booking engine that cut their reliance on OTAs.",
    palette: ["#14342B", "#E9DCC4", "#C9A55C"],
    layout: "site",
  },
  {
    client: "Real estate developer",
    where: "Dubai, UAE",
    kind: "Mobile app",
    summary: "Off-plan listings, payment plans and site-visit booking in one iOS and Android app.",
    palette: ["#0F2A4A", "#F2F5FA", "#3D7BFD"],
    layout: "app",
  },
  {
    client: "Fashion retailer",
    where: "Muscat, Oman",
    kind: "Shopify store",
    summary: "A Shopify store with local payment gateways, COD and same-day delivery integration.",
    palette: ["#2B1B17", "#F6EFEA", "#D9826B"],
    layout: "shop",
  },
  {
    client: "Logistics company",
    where: "Kochi, India",
    kind: "Operations dashboard",
    summary: "A fleet and shipment dashboard that replaced six spreadsheets and a WhatsApp group.",
    palette: ["#111827", "#F3F4F6", "#22C55E"],
    layout: "dash",
  },
];

export const steps = [
  {
    title: "Send the brief",
    body: "Share the scope, references and deadline over WhatsApp or email. A rough brief is fine.",
  },
  {
    title: "Get a fixed quote",
    body: "Within 24 hours you get a clear quote, timeline and the list of what's included.",
  },
  {
    title: "We build, you review",
    body: "Staging links at every milestone and weekly updates you can forward to your client as-is.",
  },
  {
    title: "Launch under your name",
    body: "We hand over code, logins and documentation. Your agency gets the credit.",
  },
];

export const promises = [
  {
    title: "Your brand, not ours",
    body: "We sign an NDA, never contact your client and never put our name in the footer or the code.",
  },
  {
    title: "Fixed quotes",
    body: "One price agreed upfront. No hourly surprises, so your margin stays where you set it.",
  },
  {
    title: "Your working hours",
    body: "India is only 1.5 hours ahead of the UAE, so we're online for your whole working day.",
  },
  {
    title: "One project manager",
    body: "A single point of contact who speaks English fluently and replies the same day.",
  },
  {
    title: "Room to grow",
    body: "A large in-house team of designers, developers and QA, so we can take several projects at once.",
  },
  {
    title: "You own everything",
    body: "Full source code, design files and admin access are yours at handover.",
  },
  {
    title: "Revisions included",
    body: "Design and build revisions are part of every quote, so client feedback doesn't stall the job.",
  },
  {
    title: "Support after launch",
    body: "Free bug fixes for 30 days after go-live, then optional monthly maintenance.",
  },
];

export const faqs = [
  {
    q: "Will my client ever find out you built it?",
    a: "No. We work under an NDA, deploy to your or your client's accounts, and leave no Bogglet credits in the site, code or emails. You stay the only point of contact.",
  },
  {
    q: "How do you price white-label projects?",
    a: "We give a fixed quote per project based on scope. Our rates are competitive for outsourcing, so you have room to add your margin. Send us a brief and you'll have a number within 24 hours.",
  },
  {
    q: "We're a business, not an agency. Can we work with you directly?",
    a: "Yes. We build websites, apps and custom software for small businesses, startups and established companies, and handle everything from design to launch and support.",
  },
  {
    q: "Can you start with a small project first?",
    a: "Yes. Most partners start with a single landing page or a small site to see how we work before sending larger builds.",
  },
  {
    q: "What do you need from us to start?",
    a: "A brief, any brand assets and a deadline. If the brief is rough, we'll help turn it into a scope your client can sign off.",
  },
  {
    q: "How do we communicate during a project?",
    a: "Through WhatsApp, email, Slack or whatever your team already uses, with weekly progress updates and staging links at each milestone.",
  },
];

// Direct-to-business offer, used on the homepage and /for-business.
export const businessGroups = [
  {
    title: "Get online and win customers",
    body: "Everything a business needs to be found, trusted and contacted online.",
    tone: "blush" as const,
    items: [
      "Business websites",
      "Online booking & appointments",
      "WhatsApp ordering & enquiries",
      "Online stores",
      "Google Business profile setup",
      "SEO & analytics",
    ],
  },
  {
    title: "Run your business better",
    body: "Software built around how your team actually works, so less happens on paper and in spreadsheets.",
    tone: "butter" as const,
    items: [
      "Custom software",
      "ERP & CRM systems",
      "Mobile apps",
      "Customer & staff portals",
      "Dashboards & reports",
      "AI assistants & automation",
    ],
  },
];

export const businessAudiences = [
  {
    title: "Small businesses",
    body: "Restaurants, clinics, salons, shops and service firms that need to look professional and get more enquiries.",
    builds: ["Website", "Booking", "WhatsApp ordering"],
  },
  {
    title: "Growing companies",
    body: "Teams that have outgrown spreadsheets and need their tools to talk to each other.",
    builds: ["Portals", "Dashboards", "Automation"],
  },
  {
    title: "Startups",
    body: "Founders who need a first version in front of real users quickly, without hiring a full team.",
    builds: ["MVP", "Mobile app", "Web app"],
  },
  {
    title: "Established companies",
    body: "Businesses replacing old systems or connecting new ones across departments and branches.",
    builds: ["ERP & CRM", "Integrations", "AI tools"],
  },
];

export const businessSteps = [
  {
    title: "Understand",
    body: "We learn how your business runs today, what slows your team down and what your customers expect.",
  },
  {
    title: "Plan",
    body: "You get a clear scope, timeline and fixed quote, so you know exactly what you're paying for.",
  },
  {
    title: "Design",
    body: "Screens and flows you can click through and approve before development starts.",
  },
  {
    title: "Build & test",
    body: "We build in milestones and share a working preview at each one, tested against real use cases.",
  },
  {
    title: "Launch & support",
    body: "We go live, train your team and stay on hand for fixes, updates and new features.",
  },
];

export const businessPromises = [
  {
    title: "A fixed quote",
    body: "One price agreed upfront, with everything included listed clearly.",
  },
  {
    title: "One point of contact",
    body: "A project manager who replies the same day and keeps you updated weekly.",
  },
  {
    title: "You own it",
    body: "Full source code, designs, domains and admin access belong to you.",
  },
  {
    title: "Support after launch",
    body: "Free bug fixes for 30 days, then optional monthly care and improvements.",
  },
];

export const businessFaqs = [
  {
    q: "Do we need custom software, or will an existing tool do?",
    a: "Often an existing tool is enough, and we'll tell you if so. Custom software makes sense when your process is specific to your business or several tools need to work together.",
  },
  {
    q: "How much does a website or app cost?",
    a: "It depends on scope. We give a fixed quote after a short call about what you need. Our rates are competitive, and there are no hourly surprises.",
  },
  {
    q: "Can you work with the systems we already use?",
    a: "Yes. We regularly connect websites and software to accounting tools, payment gateways, WhatsApp, Google services and existing databases.",
  },
  {
    q: "Will we be able to update the website ourselves?",
    a: "Yes. We set up an easy admin area so your team can change text, images, products and prices without a developer.",
  },
  {
    q: "Can you take over a project another developer started?",
    a: "Yes. We review the existing code first, tell you honestly what state it's in, then fix, finish or improve it.",
  },
];
