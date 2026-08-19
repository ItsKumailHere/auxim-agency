export interface ServiceScenario {
  before: string;
  after: string;
}

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  eyebrow: string;
  blurb: string;
  bullets: string[];
  icon: string;
  deliverables: string[];
  scenario: ServiceScenario;
  metric: ServiceMetric;
}

export const servicesData: ServiceItem[] = [
  {
    id: "gmb-optimization",
    title: "GMB Map Pack Rank Engine",
    eyebrow: "Google Business Profile",
    blurb:
      "Rank in the Google Local 3-Pack where 80% of high-intent UK trade calls originate.",
    bullets: [
      "Geo-targeted keyword & primary category optimization",
      "Automated photo & weekly updates posting schedule",
      "Local citation audit & NAP synchronization across 40+ UK directories",
      "Spam removal targeting illegitimate keyword-stuffed competitors",
    ],
    icon: "MapPin",
    deliverables: [
      "Full Google Business Profile audit & category hierarchy overhaul",
      "Geo-grid local rank tracking report across your trade territory",
      "Citation synchronization across Yell, Scoot, Thomson Local, and Checkatrade",
      "Automated weekly geo-tagged update and project posting engine",
    ],
    scenario: {
      before:
        "Ranked #14 on Google Maps, invisible to customers searching more than 1 mile away from your registered address.",
      after:
        "Dominating the Top 3 Map Pack across your entire town and target postcodes, generating consistent inbound phone calls.",
    },
    metric: {
      value: "+140%",
      label: "Map Pack Inbound Calls",
    },
  },
  {
    id: "conversion-website",
    title: "High-Converting Trade Website",
    eyebrow: "Website Architecture",
    blurb:
      "Ultra-fast, mobile-first React site engineered specifically for UK local trades and emergency services.",
    bullets: [
      "Sub-second load times on mobile 4G & 5G networks",
      "Asymmetric split layout with sticky 1-tap contact bars",
      "High-visibility calling triggers on every scroll position",
      "UK localized trade trust signals, certifications, and craft copy",
    ],
    icon: "Globe",
    deliverables: [
      "Bespoke React 19 single-page architecture built with Tailwind v4",
      "Sticky mobile bottom call bar for instant tap-to-call conversion",
      "Full OKLCH semantic palette and responsive typography system",
      "Core Web Vitals 95+ score with zero layout shift",
    ],
    scenario: {
      before:
        "A 6-second loading WordPress template with buried phone numbers, broken contact forms, and generic American stock photos.",
      after:
        "Sub-0.5s loading speed with clear pricing transparency, trust proof, and prominent tap-to-call buttons on every screen.",
    },
    metric: {
      value: "0.4s",
      label: "Mobile Load Speed",
    },
  },
  {
    id: "missed-call-textback",
    title: "Missed Call TextBack AI",
    eyebrow: "Lead Protection",
    blurb:
      "Never lose a high-value customer to a competitor just because you were on a ladder, driving, or with a client.",
    bullets: [
      "Triggers an automated SMS within 5 seconds of any missed inbound call",
      "Politely asks the caller what job they need done and their location",
      "Captures job urgency, postcode, and customer contact details",
      "Notifies your mobile phone instantly with full structured details",
    ],
    icon: "PhoneCall",
    deliverables: [
      "Dedicated UK virtual Twilio SMS line integration with call tracking",
      "Custom conversational qualification script tailored to your trade",
      "Instant push notification alert direct to your personal mobile",
      "Live dashboard with conversation transcripts and customer logs",
    ],
    scenario: {
      before:
        "Customer calls with a burst pipe or power failure while you are working in a loft; they hang up and dial the next competitor.",
      after:
        "Within 5 seconds, an automated SMS asks 'Hi, sorry we missed your call! What job do you need done today?' and locks in the lead.",
    },
    metric: {
      value: "< 5s",
      label: "Instant Auto-Response",
    },
  },
  {
    id: "whatsapp-chatbot",
    title: "24/7 WhatsApp AI Assistant",
    eyebrow: "After-Hours Conversion",
    blurb:
      "Capture evening and weekend inquiries when UK homeowners research and book trades after work.",
    bullets: [
      "Answers common questions regarding your services, areas, and availability",
      "Collects job details & photo uploads directly via WhatsApp",
      "Offers instant quote booking slots and site survey scheduling",
      "Runs seamlessly 24 hours a day, 365 days a year without human delay",
    ],
    icon: "MessageSquare",
    deliverables: [
      "Meta WhatsApp Business Cloud API setup and verified business profile",
      "Intelligent AI chat workflow trained on your exact pricing and services",
      "Direct image upload handling for homeowner job photos and diagnostics",
      "Calendar sync for automated survey and site visit scheduling",
    ],
    scenario: {
      before:
        "Homeowner sends a message on Sunday evening at 9:30 PM; no one replies until Monday afternoon, after they've hired someone else.",
      after:
        "Auxim WhatsApp AI responds instantly, collects fault photos, provides standard estimates, and books a survey slot for Monday.",
    },
    metric: {
      value: "24/7",
      label: "Lead Capture Coverage",
    },
  },
  {
    id: "google-review-system",
    title: "Automated Google Review Engine",
    eyebrow: "Reputation Growth",
    blurb:
      "Turn every completed job into verified 5-star Google reviews on autopilot without awkward asking.",
    bullets: [
      "Automated post-job SMS review requests sent upon job sign-off",
      "1-tap review link sent directly to customer smartphone screens",
      "Smart feedback routing safeguards your public Google rating",
      "Outrank local competitors with steady, continuous review velocity",
    ],
    icon: "Star",
    deliverables: [
      "Automated SMS review request trigger linked to completed jobs",
      "Direct-to-Google Review deep-link shortener for maximum friction reduction",
      "Pre-review satisfaction filter to resolve unhappy clients privately",
      "Monthly reputation report tracking review growth and keyword mentions",
    ],
    scenario: {
      before:
        "12 reviews accumulated over 4 years because remembering to ask customers after a tiring workday rarely happens.",
      after:
        "6 to 10 fresh, verified 5-star Google reviews landing every month, elevating your social proof above all local rivals.",
    },
    metric: {
      value: "3.8x",
      label: "Review Velocity Increase",
    },
  },
  {
    id: "local-seo-schema",
    title: "Local SEO & Geo Schema Engine",
    eyebrow: "Organic Visibility",
    blurb:
      "Structured data and local search architecture engineered specifically for UK Google search algorithms.",
    bullets: [
      "Rich snippet LocalBusiness JSON-LD markup with geo-coordinates",
      "UK postal code & town landing page structure",
      "Google Maps API deep integration and driving radius markup",
      "Search Console & Analytics real-time conversion event tracking",
    ],
    icon: "Search",
    deliverables: [
      "Full LocalBusiness, Service, and FAQPage JSON-LD schema implementation",
      "Borough and town service landing page blueprint for UK regions",
      "OpenGraph and Twitter Card social metadata for local trust",
      "Google Search Console sitemap indexing and Core Web Vitals monitoring",
    ],
    scenario: {
      before:
        "Google only indexes your business for your immediate street or town, missing lucrative adjacent boroughs and suburbs.",
      after:
        "Structured geo-schema clearly signals your coverage radius to Google, expanding organic reach across 15+ local postcodes.",
    },
    metric: {
      value: "15+",
      label: "Postcode Territories Ranked",
    },
  },
];
