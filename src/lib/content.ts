import type { Metric, Service, CaseStudy, WorkStep, NavItem } from "@/types";

// Text patterns that should be rendered as links
export const textLinks: Record<string, string> = {
  Inline: "https://getinline.io",
};

// Set to true when the services PDF is ready to show
const SHOW_SERVICES_PDF_CTA = false;

// Set to true to show the Process section and nav link
export const SHOW_PROCESS_SECTION = false;

export const siteConfig = {
  name: "Greg Bekher",
  title: "Principal Platform Engineer",
  location: "NYC",
  email: null,
  calendlyUrl: "https://calendly.com/bekher/30min",
  linkedinUrl: "https://linkedin.com/in/bekher",
  githubUrl: "https://github.com/bekher",
  servicessPdfUrl: "/greg-bekher-services.pdf",
  showServicesPdfCta: SHOW_SERVICES_PDF_CTA,
};

export const navItems: NavItem[] = [
  { label: "Proof", href: "/#proof" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Services", href: "/#services" },
  ...(SHOW_PROCESS_SECTION ? [{ label: "Process", href: "/#process" }] : []),
  { label: "About", href: "/#about" },
  // { label: "Contact", href: "/#contact" },
];

export const hero = {
  headline: "The person CTOs call when the replatform can't fail.",
  subheadline: "Principal-level execution with a founder's perspective. Greg Bekher architects, builds, ships, and scales platforms on AWS.",
  trustLine: "Founder/CTO @ Inline · Ex-Amazon, PillPack, Tripadvisor · Trusted by CTOs & technology leaders",
  primaryCta: "Book a 30-min intro call",
  secondaryCta: "Download services brief",
  badge: "Built & Scaling 30M+ PV/mo",
};

export const proofLogos = [
  { name: "Amazon", logo: "amazon" },
  { name: "Tripadvisor", logo: "tripadvisor" },
  { name: "Caring", logo: "caring" },
  { name: "Inline", logo: "inline" },
  { name: "Tenable", logo: "tenable" },
  { name: "Thrasio", logo: "thrasio" },
  { name: "Northrop Grumman", logo: "northrop-grumman" },
];

/** Links for case study headlines (company name → URL). Only entries with a URL become links. */
export const caseStudyUrls: Record<string, string> = {
  "Amazon Pharmacy": "https://pharmacy.amazon.com",
  "Inline (Founder/CTO)": "https://getinline.io",
  "Caring.com": "https://caring.com",
};

export const metrics: Metric[] = [
  {
    value: "30M+",
    label: "Monthly pageviews served",
    context: "Inline Technologies",
  },
  {
    value: ">560",
    label: "Developer weeks saved",
    context: "Amazon"
  },
  {
    value: "50+",
    label: "Services & microservices operationalized",
    context: "Production systems",
  },
  {
    value: ">1M",
    label: "Questions answered by agentic AI",
    context: "Inline Technologies",
  },
  {
    value: "10+ Years",
    label: "Experience building software",
    context: "Across many business domains",
  },
  {
    value: "150+",
    label: "High-sev incidents mitigated",
    context: "Amazon Pharmacy",
  },
  {
    value: ">90%",
    label: "Deploy time reduction",
    context: "Thrasio",
  },
  {
    value: "10% → 99%",
    label: "Good Core Web Vitals",
    context: "Caring",
  },
];

export const services: Service[] = [
  {
    title: "Migration & Replatform",
    bestFor:
      "High-traffic sites stuck on legacy CMS, third-party hosting risk, SEO/performance emergencies",
    proof: [
      "Caring: Next.js multi-tenant migration from third-party CMS to ECS & k8s on AWS",
      "Amazon: Legacy multi-tenant PillPack Pharmacy UI migration from Rails monolith to AWS",
      "Tripadvisor: Revenue-critical legacy system migrations",
      "Result: CWV from 10%→99% Good",
    ],
    deliverables: [
      "Architecture assessment & migration roadmap",
      "Risk analysis and rollback strategy",
      "Hands-on execution & cutover",
      "Performance budgets & observability",
      "Post-migration stabilization (2-4 weeks)",
    ],
    // timeline: "4-20+ weeks depending on complexity",
  },
  {
    title: "Platform Acceleration",
    bestFor:
      "Teams with platform drag, reliability/cost issues, velocity problems, or need senior architectural guidance without a full-time hire",
    proof: [
      "Amazon PHIRE: Architected pharmacy operations web platform (microfrontend container, 28 shared components, GraphQL service)",
      "Thrasio: Operationalized 25 k8s microservices, trained 30+ engineers",
      "Thrasio: Event-driven architecture for 200k+ daily events",
      "Caring: Cross-team leadership on platform initiatives",
    ],
    deliverables: [
      "Architecture, designs, code, and infrastructure",
      "CI/CD, observability, reliability",
      "Developer tooling & velocity improvements",
      "Team mentorship & upskilling",
    ],
    // engagement: "5-20 hrs/week, async-friendly",
  },
  {
    title: "Agentic AI in Production",
    bestFor:
      "Companies ready to ship AI features beyond demos; need streaming UX, safety guardrails, evals, and production reliability",
    proof: [
      "Inline: Designed, built, and operationalized entire agentic AI platform",
      "Scale: ~30M pageviews, ~500k MAUs, ~50-100M monthly requests",
      "Stack: AWS Bedrock streaming, publisher admin tools, monetization customization",
      "Business: 0→1 to $120k ARR",
    ],
    deliverables: [
      "Agentic architecture design",
      "Streaming AI implementation (Bedrock/OpenAI/Anthropic)",
      "Safety guardrails & evaluation framework",
      "Instrumentation, metrics, observability",
      "Production rollout & iteration support",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    company: "Amazon Pharmacy",
    context:
      "PHIRE - Amazon Pharmacy needed a unified web platform for clinical operations tooling across many teams",
    challenge: [
      "Fragmented UI tooling across pharmacy operations",
      "No standard architecture for internal tools",
      "Clinical workflows impacting patient safety",
      "Needed org-wide adoption",
    ],
    solution: [
      "Architected, launched, and drove cross-org alignment for the PHIRE Web Platform ",
      "Built React microfrontends, reference architecture, data-connected widget library with 28 shared components",
      "Launched multi-tenant TypeScript GraphQL service and AWS infrastructure supporting plug-and-play widgets",
      "Designed a multi-tenant authentication and authorization service approved by Amazon HealthSec enabling third-party IDP deprecation", 
      "Drove Pharmacy-wide adoption by hosting weekly office hours, roadshows with 100+ attendees, and demos",
    ],
    results: [
      "PHIRE adopted as official Amazon Pharmacy Operations UI service with 'App Store' of widgets",
      "Onboarded 10+ microfrontends across several teams and organizations",
      "Reduced build-out time for planned Pharmacy tooling by ~560 developer weeks through 2027",
      "Saved ~200 developer weeks by building multi-tenant GraphQL service and authN/Z"
    ],
  },
  {
    company: "Inline (Founder/CTO)",
    context:
      "Building an embeddable agentic AI chat experience for digital media publishers from scratch",
    challenge: [
      "0→1 platform build with no existing infrastructure",
      "Needed to scale to serve major publishers",
      "Required streaming AI, admin tooling, monetization flexibility, and robust analytics",
    ],
    solution: [
      "Agentic streaming AI on AWS Bedrock",
      "End-user widget serving ~50-100M monthly requests",
      "Publisher admin tool with agent/widget/monetization customization",
      "Engagement and revenue metrics dashboard",
      "Data warehouse and automated content ingestion",
    ],
    results: [
      "~30M monthly pageviews across ~dozen publishers",
      "~500k monthly active end-users",
      ">1M queries answered by Inline's agentic AI",
      "Production-grade agentic AI at scale",
    ],
  },
  {
    company: "Caring.com",
    context:
      "Leading eldercare marketplace with multi-tenant Next.js web service and Java CMS, operated in third-party infrastructure",
    challenge: [
      "Core Web Vitals at ~10% 'Good' across tens of thousands of pages (SEO risk)",
      "Third-party infrastructure dependency (cost, control, risk)",
      "No A/B testing capability (blocked revenue optimization)",
      "Frequent regressions, inconsistent test practices, monitoring challenges, scaling challenges (revenue, resilience risk)",
    ],
    solution: [
      "Architected and migrated Next.js service from third-party CMS hosting to internally-managed AWS at scale",
      "Migrated Java k8s CMS from third-party environment to internally-managed AWS",
      "Led cross-team execution across multiple engineering teams",
      "Integrated company's first A/B test platform",
      "Provide technical guidance and operational excellence upskilling across the technology team",
    ],
    results: [
      "50% decrease in costs by migrating to internally-managed AWS",
      "CWV: ~10% → ~99% 'Good' across all pages",
      "A/B testing live, unlocking revenue wins",
      "Multiple revenue-impacting regressions per quarter reduced to 1 or fewer",
    ],
  },
];

export const workSteps: WorkStep[] = [
  {
    title: "Requirement collection & discovery",
    description:
      "Understand problems, risks, systems,  work with stakeholders to define and quantify success",
  },
  {
    title: "Design & architecture",
    description:
      "Work backwards from problems and success criteria, craft a timeline, iterate on designs, alignment across stakeholders",
  },
  {
    title: "Build & integrate",
    description:
      "Hands-on execution alongside your team, POC → tracer bullet → feature completeness",
  },
  {
    title: "Launch & harden",
    description:
      "QA, performance validation, observability, on-call readiness, cutover",
  },
  {
    title: "Enablement",
    description:
      "Operational excellence upskilling & training, documentation, ongoing support options",
  },
];

export const idealFit = {
  goodFit: [
    "Scaling startups, marketplaces, healthtech/regulated, agentic AI, media/adtech, e-commerce",
    "Cloud services at scale; High-traffic web properties; 0→1 platform builds",
    "Pain: AWS development, agentic AI architecture, legacy migrations, re-platforming, cloud migration, reliability, scaling",
  ],
  notFit: [
    "Full-time engagements",
    "Staff augmentation without architectural scope",
    "Competitive engagements",
  ],
};

export const about = {
  bio: [
    "Based in NYC (Lower Manhattan)",
    // "Previously: Boston, Chicago, DC area",
    "Principal-level execution + founder perspective",
    "Building Inline AI as Founder & CTO",
    "Selectively advising companies on platform modernization and AI",
    "Experience across a broad and unique set of business domains",
    "Trusted by CTOs, engineering leaders, and founders",
    "Builds end-to-end: architecture → implementation → operations",
  ],
  education: "University of Maryland, College Park, Computer Science, Honors in Cybersecurity (ACES); Johns Hopkins University Computer Science Certificates",
};

export const finalCta = {
  headline: "Let's talk about your platform",
  availability: "Book a call today",
};
