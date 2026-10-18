// Central data model for Bogglet website
// All positioning, service offerings, industry solutions, portfolio, and contact details.

export const site = {
  name: "Bogglet Innovations",
  shortName: "Bogglet",
  legalName: "Bogglet Innovations",
  url: "https://www.bogglet.com",
  email: "team.bogglet@gmail.com",
  whatsapp: "+919895914090",
  whatsappDisplay: "+91 98959 14090",
  phone: "+91 98959 14090",
  address: "Kochi, Kerala, India",
  tagline: "Technology built around your business.",
  primaryPositioning:
    "Bogglet helps businesses build better digital solutions through custom software development, business systems, websites, AI solutions, and workflow automation.",
  supportingPositioning:
    "From business websites and internal management systems to custom enterprise software and AI-powered applications, Bogglet turns business requirements into scalable technology solutions.",
  whiteLabelTagline: "Your technology team behind the scenes. Your brand in the spotlight.",
  whiteLabelDescription:
    "Bogglet partners with digital agencies, marketing companies, branding studios, and technology consultants to deliver software projects under their own brand.",
  description:
    "Bogglet is a software development and technology solutions partner delivering custom software, ERP & CRM systems, web & mobile applications, AI solutions, and white-label engineering for businesses and agency partners across the GCC and internationally.",
  socials: {
    linkedin: "https://www.linkedin.com/company/bogglet",
    instagram: "https://www.instagram.com/bogglet",
  },
};

export const whatsappLink = (
  text = "Hi Bogglet, I'd like to discuss a project requirement."
) =>
  `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

export const markets = [
  "Qatar",
  "United Arab Emirates",
  "Saudi Arabia",
  "Oman",
  "Bahrain",
  "Kuwait",
  "India",
  "United Kingdom",
  "International",
];

// Business Problems We Solve (Section 2)
export const businessProblems = [
  {
    id: "manual-processes",
    title: "Manual Processes",
    problem: "Repetitive daily tasks, disconnected spreadsheets, and paper records that drain time and create bottlenecks.",
    solution: "We build automated workflows and centralized business tools that reduce manual effort and eliminate human error.",
    highlight: "Workflow Automation & Portals",
    badgeTone: "butter" as const,
  },
  {
    id: "disconnected-operations",
    title: "Disconnected Operations",
    problem: "Sales, inventory, finance, customer communication, and operations siloed in separate, uncoordinated tools.",
    solution: "We connect systems and build unified management dashboards so every team works with consistent, real-time data.",
    highlight: "Custom ERP & CRM Integrations",
    badgeTone: "mint" as const,
  },
  {
    id: "digital-growth",
    title: "Digital Growth Requirements",
    problem: "Outdated websites, inflexible software, or off-the-shelf tools that constrain customer acquisition and expansion.",
    solution: "We develop responsive websites, bespoke web applications, and mobile apps built to scale with growing business volume.",
    highlight: "Modern Web & Mobile Platforms",
    badgeTone: "sky" as const,
  },
  {
    id: "ai-opportunities",
    title: "New Opportunities with AI",
    problem: "Wanting to leverage AI to speed up operations or improve service, but unsure where it delivers real commercial value.",
    solution: "We build practical AI assistants, company knowledge retrieval, document extraction, and smart workflow automations.",
    highlight: "Tailored AI & RAG Applications",
    badgeTone: "blush" as const,
  },
];

// 8 Core Services
export type ServiceTone = "red" | "butter" | "sky" | "mint" | "blush" | "ink";

export type ServiceDetail = {
  slug: string;
  title: string;
  shortDesc: string;
  body: string;
  ctaText: string;
  tone: ServiceTone;
  tags: string[];
  problemsSolved: string[];
  capabilities: string[];
  engagementWorkflow: string[];
  technologies: string[];
  faq: { q: string; a: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    shortDesc: "Purpose-built software designed around your business processes, users, and operational requirements.",
    body: "When off-the-shelf software falls short, we engineer custom business applications, employee and client portals, and bespoke operational platforms that reflect exactly how your company operates.",
    ctaText: "Build Custom Software",
    tone: "red",
    tags: ["Custom Web Apps", "Internal Portals", "REST & GraphQL APIs", "SaaS MVPs"],
    problemsSolved: [
      "Rigid SaaS platforms charging per-seat fees without fitting your exact process",
      "Spreadsheets and manual workarounds causing data discrepancies across teams",
      "Fragmented workflows between partners, clients, and internal departments",
      "Legacy software systems that can no longer support modern business volumes",
    ],
    capabilities: [
      "Custom web applications and internal management tools",
      "Customer, vendor, and employee self-service portals",
      "Workflow, approval, and request management systems",
      "Industry-specific operational software",
      "SaaS product development and minimum viable products (MVPs)",
      "Business intelligence dashboards and reporting engines",
      "API development, webhook orchestration, and microservices",
      "Secure database design and data migration",
    ],
    engagementWorkflow: [
      "Process discovery & architectural specification",
      "Interactive wireframing & clickable prototype approval",
      "Iterative sprint development with regular milestone demos",
      "User acceptance testing (UAT) and security review",
      "Production deployment and ongoing technical evolution",
    ],
    technologies: ["Node.js", "TypeScript", "React", "Next.js", "PostgreSQL", "MongoDB", "Python", "Docker"],
    faq: [
      {
        q: "How do we know if we need custom software or an existing SaaS product?",
        a: "If an existing SaaS covers 90% of your workflow without extensive compromises or punitive per-user licensing, an off-the-shelf solution is often sensible. Custom software is the right choice when your competitive advantage or operational process requires bespoke logic, data ownership, or seamless integration across custom tools.",
      },
      {
        q: "Who owns the intellectual property and source code?",
        a: "You do. Upon project completion and milestone settlement, full ownership of source code, database architecture, design assets, and production deployment credentials belongs entirely to your organization.",
      },
    ],
  },
  {
    slug: "erp-crm",
    title: "ERP & Business Management Systems",
    shortDesc: "Centralize business operations with connected systems that improve visibility, coordination, and day-to-day efficiency.",
    body: "We scope, develop, and integrate tailored ERP and CRM solutions that unite inventory, sales pipelines, orders, procurement, accounting workflows, and multi-branch operations under one coordinated system.",
    ctaText: "Discuss Your Business System",
    tone: "butter",
    tags: ["Custom ERP", "CRM Pipelines", "Inventory Tracking", "Multi-Branch Operations"],
    problemsSolved: [
      "Disconnected inventory counts leading to stockouts or lost orders",
      "Sales teams losing track of follow-ups across personal message threads and inboxes",
      "Lack of centralized management visibility into branch-level performance and margins",
      "Excessive manual data re-entry between sales, billing, and fulfillment",
    ],
    capabilities: [
      "Custom enterprise resource planning (ERP) solutions scoped to your workflows",
      "Customer relationship management (CRM) and lead pipeline automation",
      "Inventory, warehouse, and stock replenishment tracking",
      "Order processing, invoicing, and sales cycle management",
      "Staff scheduling, attendance, and role-based permissions",
      "Booking, reservation, and appointment coordination systems",
      "Multi-branch and multi-location consolidated reporting",
      "Executive KPI dashboards and automated financial summaries",
    ],
    engagementWorkflow: [
      "Operational workflow mapping across departments",
      "System architecture, entity-relationship modeling, and role definitions",
      "Modular build: Core data -> Pipelines -> Approvals -> Dashboards",
      "Pilot deployment with staff training and guided data import",
      "Full organization rollout with post-launch tuning",
    ],
    technologies: ["PostgreSQL", "Node.js", "React", "Next.js", "Redis", "TypeScript", "Tailwind CSS"],
    faq: [
      {
        q: "Are your ERP solutions ready-made off-the-shelf products?",
        a: "We do not sell a one-size-fits-all boxed product. Instead, we architect and deploy modular business management software configured and custom-built specifically around your company's processes, operational hierarchy, and required third-party integrations.",
      },
      {
        q: "Can this connect with our existing accounting or payment software?",
        a: "Yes. We regularly integrate custom management systems with third-party platforms like Xero, QuickBooks, regional payment gateways, SMS providers, and logistics APIs.",
      },
    ],
  },
  {
    slug: "websites",
    title: "Website Design & Development",
    shortDesc: "Professional, responsive websites designed to communicate your brand, support your goals, and create better customer experiences.",
    body: "From corporate brand websites and high-converting marketing landing pages to bilingual multilingual platforms, we build modern websites optimized for speed, search engines, mobile devices, and customer enquiries.",
    ctaText: "Build Your Website",
    tone: "red",
    tags: ["Corporate Websites", "Landing Pages", "Next.js & WordPress", "Bilingual / RTL"],
    problemsSolved: [
      "Outdated websites that fail to reflect the professionalism and quality of your business",
      "Slow load times and poor mobile responsiveness hurting conversion rates",
      "Low search visibility due to weak technical SEO fundamentals and poor semantic markup",
      "Difficulty updating content without breaking layouts or relying on expensive retainers",
    ],
    capabilities: [
      "Corporate and company overview websites",
      "Product showcase and startup launch websites",
      "Lead generation and conversion-focused landing pages",
      "Service business websites with quotation and booking integrations",
      "Multilingual and bilingual implementations (English, Arabic, and more with full RTL support)",
      "Headless CMS and easy-to-manage content editing backends",
      "Core Web Vitals performance optimization and accessibility compliance",
      "Technical SEO foundation, structured metadata, and analytics implementation",
    ],
    engagementWorkflow: [
      "Brand & positioning review, site architecture, and wireframing",
      "Visual design system and responsive UI sign-off",
      "Clean, modern front-end engineering with performance checks",
      "Content integration, technical SEO verification, and cross-browser testing",
      "Domain configuration, SSL setup, and launch handover",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "WordPress", "Webflow", "Figma"],
    faq: [
      {
        q: "Can you build bilingual websites with Arabic RTL support?",
        a: "Yes. Having delivered numerous projects for clients in Qatar, the UAE, Saudi Arabia, and Oman, we have extensive experience building seamless bilingual English/Arabic sites with proper typography, RTL CSS layouts, and intuitive language toggles.",
      },
      {
        q: "Will we be able to update text and images ourselves after launch?",
        a: "Absolutely. We configure user-friendly CMS solutions or headless content management tools tailored so your team can easily publish updates, blog posts, and media without touching code.",
      },
    ],
  },
  {
    slug: "web-mobile-apps",
    title: "Web & Mobile Applications",
    shortDesc: "Build useful digital experiences for customers, employees, partners, and business operations across web and mobile platforms.",
    body: "We engineer native-feel cross-platform mobile apps for iOS and Android alongside responsive SaaS web applications, ensuring your users enjoy fluid performance, intuitive interfaces, and dependable synchronization.",
    ctaText: "Build an Application",
    tone: "sky",
    tags: ["iOS & Android Apps", "React Native", "Flutter", "SaaS Platforms"],
    problemsSolved: [
      "Customers needing mobile convenience for ordering, booking, or account management",
      "Field teams and mobile staff unable to update records or capture data on-site",
      "High costs of maintaining separate native iOS and Android engineering teams",
      "Fragile app-to-server sync causing lost updates or poor offline experiences",
    ],
    capabilities: [
      "Customer-facing mobile applications for iOS and Android",
      "Cross-platform development with Flutter and React Native",
      "SaaS web platforms and multi-tenant cloud applications",
      "Client portals and account management dashboards",
      "Real-time notifications, messaging, and push alerts",
      "Mobile commerce, in-app payments, and subscription management",
      "Offline-first data caching and background sync",
      "App Store and Google Play Store submission and compliance support",
    ],
    engagementWorkflow: [
      "User journey mapping, wireframing, and clickable UI prototypes",
      "API backend architecture and data synchronization planning",
      "Iterative mobile and web application sprint engineering",
      "Device lab testing across screen sizes and OS versions",
      "App store listing assistance, production release, and monitoring",
    ],
    technologies: ["Flutter", "React Native", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
    faq: [
      {
        q: "Do you build native apps or cross-platform apps?",
        a: "We primarily utilize industry-standard cross-platform frameworks like Flutter and React Native. This allows you to launch high-performance apps on both iOS and Android from a single shared codebase, significantly reducing both development time and long-term maintenance costs.",
      },
      {
        q: "Do you handle the App Store and Google Play publishing process?",
        a: "Yes. We guide you through developer account setup, bundle signing, store asset preparation, privacy questionnaires, and submission to ensure your app meets Apple and Google store guidelines.",
      },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions & Integration",
    shortDesc: "Use AI where it creates meaningful value, from intelligent assistants and document processing to AI-powered workflows and product features.",
    body: "We help businesses cut through the hype and implement pragmatic artificial intelligence solutions—including document intelligence, internal knowledge search, customer support assistants, and automated data extraction.",
    ctaText: "Explore AI Solutions",
    tone: "ink",
    tags: ["RAG Systems", "Document Intelligence", "OpenAI & Claude APIs", "Smart Assistants"],
    problemsSolved: [
      "Staff spending hours manually reading documents, invoices, or customer queries",
      "Valuable institutional knowledge trapped in static PDFs, spreadsheets, and manuals",
      "Customer support teams overwhelmed with repetitive inquiries outside business hours",
      "Need to build AI features into an existing digital product without hiring full-time ML researchers",
    ],
    capabilities: [
      "Retrieval-Augmented Generation (RAG) applications for company knowledge",
      "Document processing, invoice parsing, and structured data extraction",
      "Intelligent customer support assistants with human escalation handoffs",
      "Internal search and natural language question-answering over proprietary data",
      "AI feature integrations embedded into existing web and mobile applications",
      "Content moderation, categorization, and automated summarization workflows",
      "AI-powered product prototypes and Minimum Viable Products (MVPs)",
      "Evaluation, prompt engineering, and guardrails for brand-safe outputs",
    ],
    engagementWorkflow: [
      "Use-case feasibility, data privacy review, and commercial ROI assessment",
      "Model selection, prompt architecture, and embedding pipeline design",
      "Proof-of-concept prototype validated against real company data samples",
      "Integration into web/mobile frontends or operational workflows",
      "Monitoring for response latency, token cost control, and factual accuracy",
    ],
    technologies: ["OpenAI API", "Claude API", "Python", "LangChain", "Pinecone / pgvector", "Next.js", "n8n"],
    faq: [
      {
        q: "Does AI guarantee 100% factual accuracy in business decisions?",
        a: "No AI model guarantees absolute perfection. We architect solutions with guardrails, retrieval grounding (RAG), and human-in-the-loop validation checkpoints so that AI accelerates high-volume work while critical approvals remain under human oversight.",
      },
      {
        q: "How is our company data protected when using AI models?",
        a: "We strictly implement enterprise-grade API endpoints that explicitly guarantee your proprietary inputs and business documents are not used for public model training. We can also integrate private or hosted models where strict regulatory data residency applies.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation & Integrations",
    shortDesc: "Reduce repetitive work and connect your business tools through well-designed integrations and automated processes.",
    body: "Stop copying and pasting data between tools. We connect your CRM, accounting, form submissions, messaging channels, and databases into reliable automated workflows that trigger instantly.",
    ctaText: "Automate Your Workflow",
    tone: "mint",
    tags: ["API Connectors", "CRM Sync", "Webhook Triggers", "n8n & Custom Scripts"],
    problemsSolved: [
      "Sales leads sitting unattended in inboxes before being manually entered into a CRM",
      "Human errors during manual data transfer between order forms and billing software",
      "Delayed notifications to fulfillment or operations teams when transactions occur",
      "Disconnected third-party SaaS tools creating fragmented customer records",
    ],
    capabilities: [
      "Automated lead capture, qualification, and routing to sales teams",
      "Form-to-database real-time synchronization and notification pipelines",
      "CRM, ERP, and accounting platform automated connectors",
      "Payment gateway webhook processing and automated invoice generation",
      "WhatsApp, SMS, and email transactional notifications and triggers",
      "Scheduled data extract, transform, and load (ETL) routines",
      "Approval queues, task assignments, and escalation workflows",
      "Cross-platform webhook architecture with failure alerts and retry logic",
    ],
    engagementWorkflow: [
      "Audit of manual steps, software tools, and data touchpoints",
      "Workflow logic blueprint and exception-handling design",
      "Connector development, secure authentication, and webhook testing",
      "Dry-run execution and edge-case validation",
      "Live cutover with automated error monitoring and logging",
    ],
    technologies: ["n8n", "Node.js", "TypeScript", "REST APIs", "Webhooks", "Zapier", "PostgreSQL"],
    faq: [
      {
        q: "Do we have to change the tools we already use?",
        a: "Rarely. The primary benefit of workflow automation is connecting your existing software—whether Google Workspace, HubSpot, Zoho, Xero, Stripe, or proprietary databases—without forcing your team to learn a completely new system.",
      },
      {
        q: "What happens if an API or third-party service temporarily goes down?",
        a: "We engineer resilient workflows with queueing, automated retries, and instant failure alerts so data is preserved and re-processed as soon as the service recovers.",
      },
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce & Business Platforms",
    shortDesc: "Develop and integrate digital commerce experiences that support your products, customers, orders, and operational workflows.",
    body: "From custom e-commerce storefronts and Shopify setups to multi-vendor marketplaces and B2B ordering portals, we build commerce solutions equipped with local payment gateways, inventory sync, and localized checkout.",
    ctaText: "Build Your Commerce Solution",
    tone: "blush",
    tags: ["Custom Commerce", "Shopify & WooCommerce", "Regional Gateways", "Marketplaces"],
    problemsSolved: [
      "Generic store templates failing to convert visitors or support regional checkout preferences",
      "Lack of integration with regional GCC payment gateways (PayFort, Tap, Tamara, Tabby)",
      "Stock mismatches between online stores, retail branches, and warehouse inventories",
      "Complex B2B wholesale pricing and credit terms not supported by standard shopping carts",
    ],
    capabilities: [
      "Custom commerce storefronts built with modern headless frontends",
      "Custom Shopify and WooCommerce setup, theme engineering, and apps",
      "Multi-vendor digital marketplaces with merchant dashboards",
      "B2B commerce portals with tiered customer pricing and custom quotes",
      "Integration with regional payment providers (Debit/Credit, Apple Pay, KNET, Mada, Tabby, Tamara)",
      "Real-time inventory, order routing, and fulfillment carrier integrations",
      "Customer accounts, wishlists, and loyalty workflows",
      "E-commerce analytics, abandoned cart recovery, and conversion rate optimization",
    ],
    engagementWorkflow: [
      "Product catalog review, merchant workflows, and gateway selection",
      "Store architecture, UI/UX design, and checkout funnel optimization",
      "Frontend development, payment tokenization, and shipping API integration",
      "End-to-end transaction testing, tax/currency checks, and security audit",
      "Store launch and post-launch conversion tracking",
    ],
    technologies: ["Shopify", "Next.js", "Stripe", "WooCommerce", "PostgreSQL", "Node.js", "Tailwind CSS"],
    faq: [
      {
        q: "Can you integrate local GCC payment gateways and Buy Now Pay Later (BNPL)?",
        a: "Yes. We regularly integrate regional gateways including Tap, Moyasar, PayTabs, Amazon Payment Services, as well as BNPL options like Tabby and Tamara, alongside Apple Pay and Google Pay.",
      },
      {
        q: "Can our store support multi-currency and multi-language shopping?",
        a: "Yes. We configure multi-currency display, automatic geolocation detection, and bilingual English/Arabic layouts to serve local and international shoppers seamlessly.",
      },
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance, Integration & Ongoing Support",
    shortDesc: "Keep your software dependable, up to date, and ready to evolve as your business changes.",
    body: "Software is an operational asset that requires care. We provide proactive maintenance, security patches, performance tuning, cloud monitoring, and feature iteration so your technology continues to deliver value over the long run.",
    ctaText: "Improve Existing Software",
    tone: "mint",
    tags: ["Codebase Audits", "Security Updates", "Cloud Optimization", "Continuous Enhancements"],
    problemsSolved: [
      "Previous developers disappearing or leaving unmaintainable, undocumented code",
      "Websites and apps breaking after third-party API changes or server operating system updates",
      "Slow loading speeds and degrading performance affecting customer experience and SEO",
      "Vulnerability risks due to outdated packages, unpatched libraries, or missing backups",
    ],
    capabilities: [
      "Codebase quality audits, refactoring, and bug troubleshooting",
      "Existing software modernization and feature enhancements",
      "Security patches, dependency updates, and vulnerability scanning",
      "Core Web Vitals and database query performance optimization",
      "Cloud server management, monitoring, and automated daily backups",
      "API maintenance and third-party service version migration",
      "Staging environments and CI/CD automated deployment pipelines",
      "Flexible monthly engineering support retainers",
    ],
    engagementWorkflow: [
      "Repository audit, dependencies review, and environment verification",
      "Remediation plan prioritizing critical security and stability fixes",
      "Establishment of staging environment and automated backup protocols",
      "Execution of scheduled updates, performance audits, and monitoring",
      "Transparent monthly reporting and on-demand feature iterations",
    ],
    technologies: ["AWS", "Vercel", "Cloudflare", "Docker", "GitHub Actions", "Node.js", "PostgreSQL"],
    faq: [
      {
        q: "Can you take over and maintain software built by another developer?",
        a: "Yes. We begin with a code audit to assess architecture, code health, security vulnerabilities, and dependencies. If the foundation is sound, we take over maintenance and roadmap improvements smoothly.",
      },
      {
        q: "Do you offer response times and SLAs for support?",
        a: "For ongoing maintenance contracts, we agree on defined response times, scheduled update windows, and emergency escalation protocols tailored to your system's criticality.",
      },
    ],
  },
];

// White-Label Section Data
export const whiteLabelBenefits = [
  {
    title: "Your Brand, 100% in Front",
    body: "We sign strict non-disclosure agreements (NDAs). We never contact your client, and our name never appears in code, footers, or emails.",
  },
  {
    title: "Expand Beyond Design & Marketing",
    body: "Offer custom web apps, ERP systems, mobile applications, and AI integrations to your existing clients without the overhead of hiring engineers.",
  },
  {
    title: "Predictable Scopes & Fixed Quotes",
    body: "Transparent scoping and milestone-based fixed pricing so your profit margin stays exactly where you set it, without billing surprises.",
  },
  {
    title: "Aligned Working Hours",
    body: "Operating across Gulf Standard Time and IST with minimal time difference, your project manager is accessible throughout your working day.",
  },
  {
    title: "Single Technical Point of Contact",
    body: "Communicate with an experienced technical lead who speaks fluent English and provides weekly updates you can share directly with clients.",
  },
  {
    title: "Complete Code & Asset Handover",
    body: "Full source code ownership, design files, repository access, and deployment credentials are yours upon milestone completion.",
  },
];

export const whiteLabelSteps = [
  {
    step: "01",
    title: "Share the Requirement",
    body: "Provide your client's brief, target objectives, design references, or expected deadline via email or WhatsApp. A rough concept is fine.",
  },
  {
    step: "02",
    title: "Define the Solution",
    body: "We clarify the technical approach, define functional scope, set clear milestones, and provide a fixed quote you can build your margin on.",
  },
  {
    step: "03",
    title: "Develop Behind the Scenes",
    body: "Our engineering team builds the solution. You get staging links and milestone demos to review or share directly with your client.",
  },
  {
    step: "04",
    title: "Deliver & Support",
    body: "We hand over deployment, code repositories, and documentation. You take all credit, with post-launch bug support included.",
  },
];

export const whiteLabelFaqs = [
  {
    q: "Can you work completely under our brand identity?",
    a: "Yes. All work is delivered under a strict Non-Disclosure Agreement (NDA). We do not place Bogglet branding in client deliverables, footers, or source code comments. We deploy directly to accounts owned by you or your client.",
  },
  {
    q: "Can you work alongside our existing designers or project managers?",
    a: "Yes. Many partner agencies have internal creative teams who provide Figma designs, while our engineers handle full-stack implementation. Alternatively, we can provide design and development together.",
  },
  {
    q: "Can you work on a project-by-project basis?",
    a: "Yes. There are no mandatory monthly minimums or lock-in retainers. You can partner with us for a single project to evaluate our quality and scale collaboration as your agency's pipeline grows.",
  },
  {
    q: "How do you handle scope changes or client revisions?",
    a: "Every project quote includes revisions within the agreed scope. If your client requests major functional changes mid-project, we outline the exact scope addition and provide a transparent quote before any work proceeds.",
  },
  {
    q: "What technical categories do you handle on a white-label basis?",
    a: "We support partner agencies with corporate websites, custom web applications, e-commerce stores, iOS/Android mobile apps, custom ERP/CRM systems, AI integrations, and ongoing software maintenance.",
  },
];

// Business-First Discovery Process (Section 7)
export const discoveryStages = [
  {
    num: "01",
    title: "Understand",
    subtitle: "Business Objectives & Current Reality",
    body: "We examine how your business operates, the challenges your team faces, user expectations, and the limitations of your current systems.",
  },
  {
    num: "02",
    title: "Plan",
    subtitle: "Architecture, Scope & Milestones",
    body: "We outline the functional requirements, integration points, technology selection, scope boundaries, and delivery roadmap.",
  },
  {
    num: "03",
    title: "Design",
    subtitle: "User Experience & System Structure",
    body: "We structure clear workflows, intuitive navigation, responsive interface designs, and robust database schemas tailored to your requirements.",
  },
  {
    num: "04",
    title: "Develop & Validate",
    subtitle: "Iterative Build & Quality Assurance",
    body: "We build features in manageable milestones, test edge cases, and validate functionality against real business use cases and workflows.",
  },
  {
    num: "05",
    title: "Launch & Improve",
    subtitle: "Deployment, Training & Evolution",
    body: "We manage production deployment, handover documentation, and provide ongoing enhancements as your business expands.",
  },
];

// Industry-Specific Solutions (Section 8)
export const industries = [
  {
    id: "retail",
    name: "Retail & E-commerce",
    summary: "Connected commerce experiences, stock management, and localized customer journeys.",
    useCases: [
      "Real-time inventory and warehouse tracking across physical stores and web channels",
      "Regional payment gateway integrations (Apple Pay, Tabby, Tamara, KNET, Mada)",
      "Wholesale B2B merchant ordering portals with volume-based pricing",
      "Order routing, dispatch tracking, and fulfillment logistics connectors",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical Services",
    summary: "Reliable patient booking, administrative systems, and secure clinic coordination.",
    useCases: [
      "Patient appointment scheduling and doctor calendar coordination",
      "Secure clinic administration dashboards and patient visit records",
      "Teleconsultation portals with automated appointment reminders via WhatsApp/SMS",
      "Medical inventory, pharmaceuticals tracking, and supplier reordering tools",
    ],
  },
  {
    id: "education",
    name: "Education & Learning",
    summary: "Digital platforms connecting students, educators, and institutional operations.",
    useCases: [
      "Custom learning management systems (LMS) and course delivery platforms",
      "Student enrollment, batch scheduling, and attendance tracking",
      "Automated fee collection, payment receipts, and installment management",
      "Parent and student portals with progress tracking and direct communication",
    ],
  },
  {
    id: "professional-services",
    name: "Professional Services & Consulting",
    summary: "Streamlined client onboarding, document workflows, and project billing.",
    useCases: [
      "Secure client collaboration portals for document exchange and sign-offs",
      "Custom CRM pipelines tracking client proposals and engagement lifecycles",
      "Time logging, milestone billing, and automated invoice delivery",
      "Internal knowledge search and document intelligence assistants",
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Operational Businesses",
    summary: "Real-time visibility into shipments, fleet status, and multi-party coordination.",
    useCases: [
      "Fleet operations and shipment tracking dashboards replacing spreadsheets",
      "Driver and delivery personnel mobile companion applications",
      "Automated customer consignment status notifications via SMS and WhatsApp",
      "Custom dispatch scheduling and proof-of-delivery capture workflows",
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality & Booking Services",
    summary: "Direct booking engines, guest communication, and property operations.",
    useCases: [
      "Direct hotel and resort booking engines reducing third-party commission reliance",
      "Bilingual guest-facing portals with dining, spa, and activity reservations",
      "Housekeeping, maintenance, and room inventory management tools",
      "Automated guest confirmation messaging and digital check-in flows",
    ],
  },
  {
    id: "startups",
    name: "Startups & Digital Products",
    summary: "Scalable technical foundations, rapid MVP delivery, and product engineering.",
    useCases: [
      "Full-stack MVP development built on clean, maintainable architecture",
      "SaaS subscription platforms with automated billing and tiered permissions",
      "AI-enabled product features and intelligent assistant integrations",
      "Scalable cloud infrastructure ready for investor due diligence and user scale",
    ],
  },
];

// Audited Projects & Case Studies (Authentic capabilities, no fabricated claims)
export type Project = {
  id: string;
  clientType: string;
  location: string;
  category: string;
  title: string;
  requirement: string;
  solution: string;
  capabilities: string[];
  technologies: string[];
  palette: [string, string, string];
  layout: "site" | "app" | "shop" | "dash";
};

export const projects: Project[] = [
  {
    id: "boutique-hotel",
    clientType: "Boutique Hospitality Group",
    location: "Doha, Qatar",
    category: "Website & Direct Booking Engine",
    title: "Bilingual Coastal Resort Booking Platform",
    requirement: "A luxury coastal property needed a high-performance, bilingual English/Arabic web platform with direct room and dining reservation capabilities to reduce reliance on high-commission Online Travel Agencies (OTAs).",
    solution: "We engineered an elegant, responsive web platform featuring dynamic room availability, seasonal rate calendars, bilingual RTL typography, and regional payment gateway processing.",
    capabilities: [
      "Bilingual English/Arabic RTL layout with seamless language switching",
      "Direct room, suite, and spa reservation booking workflow",
      "Mobile-optimized guest experience with instant WhatsApp inquiry triggers",
      "Integration with payment gateway for secure reservation deposits",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "REST APIs"],
    palette: ["#14342B", "#E9DCC4", "#C9A55C"],
    layout: "site",
  },
  {
    id: "real-estate",
    clientType: "Real Estate Development Group",
    location: "Dubai, UAE",
    category: "Mobile & Web Application",
    title: "Off-Plan Property Portfolio & Investor App",
    requirement: "A prominent regional property developer required a mobile solution for investors to explore upcoming off-plan developments, view interactive floor plans, calculate installment payment schedules, and schedule on-site VIP viewings.",
    solution: "We developed a cross-platform mobile application and web portal providing interactive master plans, construction milestone progress updates, and a direct broker communication channel.",
    capabilities: [
      "Cross-platform iOS and Android application with unified backend",
      "Interactive unit availability and installment schedule calculator",
      "Site-visit booking and direct WhatsApp broker coordination",
      "Push notifications for new project launches and milestone achievements",
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Firebase", "AWS"],
    palette: ["#0F2A4A", "#F2F5FA", "#3D7BFD"],
    layout: "app",
  },
  {
    id: "fashion-retail",
    clientType: "Regional Retail & Fashion Brand",
    location: "Muscat, Oman",
    category: "E-commerce & Localized Payments",
    title: "Multilingual E-commerce Store with Regional Gateways",
    requirement: "A retail brand sought to transition from physical-only boutiques into regional e-commerce across Oman and the UAE, requiring cash-on-delivery support, localized checkout, and same-day delivery routing.",
    solution: "We built a customized, high-converting digital storefront equipped with regional debit/credit gateways, Arabic language checkout, and real-time inventory synchronization with their physical stores.",
    capabilities: [
      "Optimized bilingual product catalogs with filterable sizes and variants",
      "Integration with regional payment providers and Cash-on-Delivery workflows",
      "Automated customer order confirmation and dispatch notifications",
      "Courier API integration for shipping label generation and tracking",
    ],
    technologies: ["Shopify", "Tailwind CSS", "JavaScript", "Stripe", "Courier APIs"],
    palette: ["#2B1B17", "#F6EFEA", "#D9826B"],
    layout: "shop",
  },
  {
    id: "logistics-hub",
    clientType: "Logistics & Freight Operator",
    location: "Kochi, India",
    category: "Custom Operations Dashboard & ERP",
    title: "Centralized Fleet & Shipment Management System",
    requirement: "A regional freight business was managing multi-vehicle shipments, driver manifests, and client consignments across six disconnected spreadsheets and disorganized chat groups, resulting in delayed updates and missed dispatches.",
    solution: "We engineered a centralized web-based operational dashboard that tracks active consignments, driver assignments, vehicle status, and automated customer tracking links in real time.",
    capabilities: [
      "Consignment lifecycle tracking from pickup through transit to delivery",
      "Driver assignment, vehicle maintenance logs, and fuel tracking",
      "Automated SMS/WhatsApp dispatch alerts sent directly to clients",
      "Executive reporting dashboard tracking weekly turnaround and capacity",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "REST APIs"],
    palette: ["#111827", "#F3F4F6", "#22C55E"],
    layout: "dash",
  },
];

// Why Work With Bogglet (Section 10)
export const whyBoggletReasons = [
  {
    title: "Business-First Solution Planning",
    body: "We start by understanding your commercial model, operational pain points, and workflow goals. We build technology that solves actual business challenges, not technology for its own sake.",
  },
  {
    title: "Tailored Development, No Cookie-Cutter Templates",
    body: "Your business has unique processes. We engineer solutions around how your team and customers actually interact, instead of forcing your operations into an inflexible boxed template.",
  },
  {
    title: "Flexible Collaboration for Businesses & Agencies",
    body: "Whether you are a founder launching a digital product or an agency director seeking an invisible engineering team behind your brand, we adapt to your preferred collaboration model.",
  },
  {
    title: "Full-Stack Software Engineering Capabilities",
    body: "From marketing websites and mobile apps to complex custom ERPs, AI document intelligence, and third-party API automation, you have one coordinated team for your entire technology stack.",
  },
  {
    title: "Maintainable, Modern Technical Foundations",
    body: "We write clean, well-structured, documented code using proven technologies (TypeScript, React, Next.js, Node.js, PostgreSQL). Your software remains scalable, secure, and ready to evolve.",
  },
  {
    title: "Clear Scopes, Milestones & Predictable Delivery",
    body: "No vague promises. We agree on defined deliverables, milestone staging demos, transparent schedules, and responsive communication throughout every phase.",
  },
];

// Technology Stack Organized by Engineering Capability (Section 11)
export const techCapabilities = [
  {
    category: "Frontend & Web Development",
    description: "Responsive, high-performance interfaces built for speed, accessibility, and conversion.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / Semantic UI", "Webflow", "WordPress"],
  },
  {
    category: "Backend & API Engineering",
    description: "Robust, secure server-side logic, data schemas, and API communication layers.",
    items: ["Node.js", "TypeScript", "Python", "RESTful APIs", "GraphQL", "Express", "Microservices"],
  },
  {
    category: "Databases & Data Management",
    description: "Scalable relational, document, and vector databases optimized for integrity and query speed.",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "pgvector", "SQL"],
  },
  {
    category: "Mobile Application Development",
    description: "Fluid cross-platform mobile experiences for iOS and Android devices.",
    items: ["Flutter", "React Native", "iOS / Android Deployment", "Push Notifications"],
  },
  {
    category: "Cloud, DevOps & Hosting",
    description: "Reliable cloud infrastructure, automated deployments, and continuous uptime monitoring.",
    items: ["AWS", "Vercel", "Cloudflare", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    category: "AI, RAG & Workflow Automation",
    description: "Applied machine learning integrations, vector embeddings, and multi-app orchestration.",
    items: ["OpenAI API", "Claude API", "RAG Architecture", "n8n", "LangChain", "Webhook Pipelines"],
  },
];

// General Homepage & Site FAQs
export const generalFaqs = [
  {
    q: "What types of businesses does Bogglet work with?",
    a: "We work directly with small and medium-sized businesses, startups, entrepreneurs, and established companies that need custom software, business systems, websites, or automation. We also partner extensively with digital marketing agencies, design studios, and IT consultants who need a white-label software engineering team.",
  },
  {
    q: "How do you determine pricing and project timelines?",
    a: "We evaluate your functional requirements, technical complexity, integrations, and target milestones to provide a clear, transparent, fixed-scope quote. For ongoing engineering support or phased rollouts, we also offer flexible milestone-based or monthly retainer models.",
  },
  {
    q: "Can Bogglet build solutions for clients in the GCC and internationally?",
    a: "Yes. With team presence in Kerala, India and extensive client project experience across Qatar, the UAE, Saudi Arabia, Oman, Kuwait, and the UK, our team understands regional business workflows, English/Arabic bilingual requirements, and local payment integration standards.",
  },
  {
    q: "How does project communication work during development?",
    a: "We establish a direct communication channel via WhatsApp, email, Slack, or Google Meet, backed by regular milestone demos on private staging servers so you and your team can test functionality as it is built.",
  },
  {
    q: "Do you offer post-launch technical support and maintenance?",
    a: "Yes. Every completed project includes post-launch bug fixes for an initial period. We also provide ongoing maintenance plans covering security patches, cloud hosting monitoring, database backups, and feature improvements as your business evolves.",
  },
  {
    q: "What is the difference between your direct and white-label services?",
    a: "For direct business clients, we handle everything from discovery and design through deployment and long-term support as your visible technology partner. For agencies, we operate entirely behind the scenes under your brand and an NDA, enabling you to deliver technology projects without hiring an in-house engineering team.",
  },
];
