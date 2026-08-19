export interface CoreValue {
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
}

export interface FounderMessage {
  name: string;
  role: string;
  title: string;
  paragraphs: string[];
  quote: string;
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  story: {
    title: string;
    paragraphs: string[];
  };
  values: CoreValue[];
  founder: FounderMessage;
  promise: {
    title: string;
    description: string;
    commitments: string[];
  };
}

export interface AgencyComparisonRow {
  feature: string;
  traditional: string;
  auxim: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ServicesPageContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  comparison: {
    eyebrow: string;
    headline: string;
    description: string;
    rows: AgencyComparisonRow[];
  };
  faqs: FaqItem[];
}

export interface CoverageRegion {
  name: string;
  majorTowns: string[];
  responseGuarantee: string;
}

export interface ContactPageContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  responsePromise: {
    headline: string;
    businessHours: string;
    emergency: string;
    description: string;
  };
  coverageRegions: CoverageRegion[];
  channels: {
    type: string;
    label: string;
    value: string;
    href: string;
    description: string;
    icon: string;
  }[];
}

export interface LegalSection {
  title: string;
  content: string[];
}

export interface PrivacyPolicyContent {
  lastUpdated: string;
  effectiveDate: string;
  introduction: string;
  sections: LegalSection[];
}

export interface TermsOfServiceContent {
  lastUpdated: string;
  effectiveDate: string;
  introduction: string;
  sections: LegalSection[];
}

export const aboutContent: AboutContent = {
  eyebrow: "About Auxim",
  headline: "Engineered specifically for British trade businesses.",
  subheadline:
    "We don't sell generic marketing retainers or vanity redesigns. We install high-performance conversion infrastructure that turns missed calls and Google searches into booked local jobs.",
  story: {
    title: "Why We Built Auxim",
    paragraphs: [
      "The traditional digital agency model is broken for UK trades. Local plumbers, electricians, roofers, and builders are sold £3,000 WordPress websites that take three months to deliver, load in four seconds on mobile, and bury the contact number behind five menus.",
      "Meanwhile, tradespeople spend their days on ladders, in crawlspaces, or on the M25. When high-intent local customers call, 62% of those calls go straight to voicemail. In the trade business, the first competent professional to respond gets the job. Voicemails are rarely left; homeowners simply dial the next company on Google Maps.",
      "Auxim was built to solve this exact leak. We combine ultra-fast React websites, Google 3-Pack rank architecture, automated 5-second missed call textbacks, and 24/7 WhatsApp AI qualification into one cohesive conversion engine. No fluff, no jargon, and zero wasted ad spend.",
    ],
  },
  values: [
    {
      number: "01",
      title: "Conversion Focus",
      shortDescription: "Every pixel and automation exists to book jobs.",
      description:
        "We don't design for design awards. We build systems optimized for phone calls, quote requests, and immediate response speed.",
      icon: "Target",
    },
    {
      number: "02",
      title: "Speed Over Everything",
      shortDescription: "Sub-second load times and 5-second auto-responses.",
      description:
        "In local trade services, speed is the ultimate trust signal. Our websites load in under 0.5s and our textback automation responds before a homeowner can switch tabs.",
      icon: "Zap",
    },
    {
      number: "03",
      title: "Total Transparency",
      shortDescription: "No lock-in retainers, no hidden fees, clear metrics.",
      description:
        "We operate with 100% upfront clarity. You own your assets, you track real call volume, and our 30-day performance guarantee puts the risk entirely on us.",
      icon: "ShieldCheck",
    },
    {
      number: "04",
      title: "UK Trade Literacy",
      shortDescription: "Built with real knowledge of British trade workflows.",
      description:
        "We understand NAP consistency, Checkatrade dynamics, Part P & Gas Safe positioning, and how UK homeowners evaluate local contractors.",
      icon: "Wrench",
    },
  ],
  founder: {
    name: "Auxim Architecture Team",
    role: "Lead Conversion Specialists",
    title: "A Message to UK Business Owners",
    paragraphs: [
      "If you are already getting calls or search visibility in your area, you don't need more expensive PPC ads. You need a system that captures the leads you are currently dropping.",
      "When we implement the Auxim system, we typically recover 4 to 8 high-ticket jobs every month that previously slipped through missed calls and slow mobile pages. For most trades, that represents £2,000 to £10,000 in recovered monthly profit.",
      "We stand behind our work with our 30-Day Conversion Guarantee: if our system doesn't demonstrably increase your call capture rate within your first 30 days, you pay nothing.",
    ],
    quote:
      "Our mission is simple: ensure no hardworking UK trade business ever loses a high-value customer to an unanswered phone call.",
  },
  promise: {
    title: "The Auxim Standard",
    description:
      "When you partner with Auxim, we make four concrete operational commitments:",
    commitments: [
      "7-Day Turnkey Delivery from onboarding to live system deployment.",
      "100% Mobile Optimized with verified Core Web Vitals score above 90.",
      "Instant 5-Second Missed Call TextBack configured on your dedicated line.",
      "Full 30-Day Risk-Free Trial backed by our written money-back guarantee.",
    ],
  },
};

export const servicesPageContent: ServicesPageContent = {
  eyebrow: "Our Conversion Modules",
  headline: "Six integrated engines built to secure more local jobs.",
  subheadline:
    "Explore how each component of the Auxim system solves a specific revenue leak in your daily trade operations.",
  comparison: {
    eyebrow: "Why Auxim Wins",
    headline: "Traditional Agencies vs. Auxim Conversion Infrastructure",
    description:
      "See how our dedicated conversion system compares to standard digital agency retainers.",
    rows: [
      {
        feature: "Implementation Speed",
        traditional: "6 to 12 weeks of endless meetings",
        auxim: "7 days complete turnkey setup",
      },
      {
        feature: "Mobile Loading Speed",
        traditional: "3.5s – 6.0s (Heavy WordPress / Elementor)",
        auxim: "< 0.5s (High-performance React 19)",
      },
      {
        feature: "Missed Call Protection",
        traditional: "None — calls go to generic voicemail",
        auxim: "Instant 5-second SMS auto-response & triage",
      },
      {
        feature: "After-Hours Inquiries",
        traditional: "Ignored until next business day",
        auxim: "24/7 WhatsApp AI qualification & booking",
      },
      {
        feature: "Google Review Collection",
        traditional: "Manual awkward asking or forgotten",
        auxim: "Automated 1-tap post-job SMS triggers",
      },
      {
        feature: "Guarantee & Risk",
        traditional: "3 to 6 month lock-in contracts, zero guarantee",
        auxim: "30-Day 100% Risk-Free Performance Guarantee",
      },
    ],
  },
  faqs: [
    {
      question: "Do I need to change my current business phone number?",
      answer:
        "No. You keep your existing mobile or landline number. We simply configure call forwarding or connect our tracking overlay so that when a call is unanswered, the instant textback fires seamlessly without interrupting your normal carrier service.",
      category: "Setup",
    },
    {
      question: "How does the WhatsApp AI know my pricing and services?",
      answer:
        "During our 15-minute onboarding audit, we document your service catalogue, hourly call-out rates, emergency charges, and service areas. The AI is customized specifically with your rules and will never quote outside your parameters.",
      category: "AI Technology",
    },
    {
      question: "What happens if I already have an existing website?",
      answer:
        "We can either upgrade your current domain with our high-speed React architecture or integrate our conversion modules (Missed Call TextBack, WhatsApp AI, GMB engine) directly into your existing setup.",
      category: "Website",
    },
    {
      question: "How long does the entire setup take?",
      answer:
        "Our standard deployment takes 7 business days from the moment we receive your onboarding details to full live operation.",
      category: "Timeline",
    },
    {
      question: "Is there a long-term contract or lock-in?",
      answer:
        "No. We operate on a rolling monthly agreement. If you ever wish to cancel, you can do so with 30 days notice. All domain assets and customer data remain 100% yours.",
      category: "Billing",
    },
    {
      question: "How does the 30-Day Guarantee work?",
      answer:
        "If our system does not demonstrably improve your call capture rate and generate qualified customer inquiries within 30 days of going live, you simply let us know and receive a full 100% refund of your setup fee.",
      category: "Guarantee",
    },
  ],
};

export const contactPageContent: ContactPageContent = {
  eyebrow: "Get In Touch",
  headline: "Ready to stop losing jobs to unanswered calls?",
  subheadline:
    "Schedule your free 5-Leak UK Trade Audit or apply for 1 of our 5 Founder's Charter pilot spots today.",
  responsePromise: {
    headline: "Our 15-Minute Response Promise",
    businessHours: "Monday – Friday: 8:00 AM – 6:00 PM GMT",
    emergency: "24/7 AI System Monitoring & SMS Response",
    description:
      "We practice what we preach. Inquiries submitted during UK business hours receive a personalized response within 15 minutes.",
  },
  coverageRegions: [
    {
      name: "Greater London & South East",
      majorTowns: [
        "Central London",
        "Croydon",
        "Bromley",
        "Watford",
        "Guildford",
        "Reading",
        "Brighton",
      ],
      responseGuarantee: "< 15 Mins",
    },
    {
      name: "Midlands & Central",
      majorTowns: [
        "Birmingham",
        "Coventry",
        "Leicester",
        "Nottingham",
        "Derby",
        "Stoke-on-Trent",
      ],
      responseGuarantee: "< 15 Mins",
    },
    {
      name: "North West & Yorkshire",
      majorTowns: [
        "Manchester",
        "Liverpool",
        "Leeds",
        "Sheffield",
        "Bradford",
        "Preston",
        "Warrington",
      ],
      responseGuarantee: "< 15 Mins",
    },
    {
      name: "South West & Wales",
      majorTowns: [
        "Bristol",
        "Bath",
        "Cardiff",
        "Swansea",
        "Exeter",
        "Plymouth",
        "Gloucester",
      ],
      responseGuarantee: "< 15 Mins",
    },
    {
      name: "Scotland & North East",
      majorTowns: [
        "Glasgow",
        "Edinburgh",
        "Newcastle upon Tyne",
        "Sunderland",
        "Middlesbrough",
        "Aberdeen",
      ],
      responseGuarantee: "< 15 Mins",
    },
  ],
  channels: [
    {
      type: "phone",
      label: "Direct UK Line",
      value: "020 8090 4120",
      href: "tel:02080904120",
      description: "Speak directly with our UK trade conversion specialists.",
      icon: "Phone",
    },
    {
      type: "whatsapp",
      label: "WhatsApp Support",
      value: "020 8090 4120",
      href: "https://wa.me/442080904120",
      description: "Message our team or test our live WhatsApp bot workflow.",
      icon: "MessageSquare",
    },
    {
      type: "email",
      label: "Email Inquiries",
      value: "hello@auxim.co.uk",
      href: "mailto:hello@auxim.co.uk",
      description: "Send project briefs, RFP inquiries, and audit requests.",
      icon: "Mail",
    },
    {
      type: "address",
      label: "Headquarters",
      value: "London & Nationwide, UK",
      href: "#",
      description: "Serving trade and service businesses across England, Scotland, and Wales.",
      icon: "MapPin",
    },
  ],
};

export const privacyPolicyContent: PrivacyPolicyContent = {
  lastUpdated: "19 August 2026",
  effectiveDate: "19 August 2026",
  introduction:
    "Auxim Digital Ltd ('Auxim', 'we', 'our', or 'us') is committed to protecting the privacy and security of personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This Privacy Policy explains how we collect, use, process, and safeguard information when you visit our website or engage our conversion services.",
  sections: [
    {
      title: "1. Data Controller Information",
      content: [
        "Auxim Digital Ltd is the data controller responsible for personal information collected through our website and services.",
        "Registered Office: London, United Kingdom.",
        "Data Protection Contact: privacy@auxim.co.uk",
      ],
    },
    {
      title: "2. Information We Collect",
      content: [
        "Directly Provided Data: Contact information including your name, business name, trade/industry, UK telephone number, email address, and postcode submitted via contact forms, audit requests, or pilot applications.",
        "Communication Data: Records of correspondence, SMS responses, WhatsApp chat logs, and telephone inquiries facilitated through our demonstration and client triage systems.",
        "Technical & Usage Data: IP addresses, browser types, device specifications, operating systems, and page interaction metrics collected automatically via privacy-first analytics.",
      ],
    },
    {
      title: "3. Lawful Basis for Processing",
      content: [
        "Contractual Necessity (Article 6(1)(b) UK GDPR): Processing required to deliver our conversion system, pilot charter onboarding, and customer support.",
        "Legitimate Interests (Article 6(1)(f) UK GDPR): Processing necessary to improve website performance, monitor lead generation efficacy, and prevent fraud.",
        "Consent (Article 6(1)(a) UK GDPR): Explicit consent obtained for optional marketing communications or non-essential analytical cookies.",
      ],
    },
    {
      title: "4. How We Use Your Information",
      content: [
        "To conduct our free 5-Leak UK Trade Audits and deliver performance recommendations.",
        "To configure virtual SMS lines, WhatsApp AI chatbots, and Google Business Profile rank automations.",
        "To respond promptly to customer service requests and verify pilot charter qualification.",
        "To maintain the technical integrity, security, and sub-second performance of our web infrastructure.",
      ],
    },
    {
      title: "5. Third-Party Service Providers & Sub-Processors",
      content: [
        "We engage vetted UK and international service providers under strict Data Processing Agreements compliant with UK GDPR Article 28, including:",
        "Telephony & Messaging: Twilio Ireland / UK for SMS routing and Meta Platforms Ireland Ltd for WhatsApp Business API services.",
        "Hosting & Infrastructure: Vercel Inc. and Amazon Web Services (AWS) for secure, encrypted cloud hosting.",
        "Analytics & Error Tracking: Privacy-first analytics adhering to UK PECR regulations without storing invasive cross-site tracking cookies.",
      ],
    },
    {
      title: "6. Data Subject Rights",
      content: [
        "Under the UK GDPR, you have the following enforceable rights:",
        "Right of Access: Request copies of personal data held about you.",
        "Right to Rectification: Request correction of inaccurate or incomplete information.",
        "Right to Erasure ('Right to be Forgotten'): Request deletion of personal data where no overriding lawful basis applies.",
        "Right to Restrict or Object to Processing: Restrict processing under certain statutory circumstances.",
        "Right to Data Portability: Receive your personal data in a structured, commonly used, and machine-readable format.",
        "To exercise any of these rights, contact us at privacy@auxim.co.uk. We respond to all verified requests within one calendar month.",
      ],
    },
    {
      title: "7. Data Retention & Security",
      content: [
        "We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, regulatory, and accounting requirements.",
        "Lead inquiry data is retained for 12 months unless a client contract is established.",
        "We implement robust technical and organizational measures, including TLS 1.3 encryption in transit and AES-256 encryption at rest, to prevent unauthorized access or disclosure.",
      ],
    },
    {
      title: "8. Supervisory Authority",
      content: [
        "You have the right to lodge a complaint with the UK Information Commissioner's Office (ICO):",
        "Website: https://ico.org.uk | Helpline: 0303 123 1113 | Address: Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF.",
      ],
    },
  ],
};

export const termsOfServiceContent: TermsOfServiceContent = {
  lastUpdated: "19 August 2026",
  effectiveDate: "19 August 2026",
  introduction:
    "These Terms of Service ('Terms') constitute a legally binding agreement between Auxim Digital Ltd ('Auxim', 'we', 'us') and the business client ('Client', 'you') governing the use of Auxim's website, marketing systems, software automations, and consulting services.",
  sections: [
    {
      title: "1. Scope of Services & Pilot Charter",
      content: [
        "Auxim provides conversion rate optimization, Google Business Profile enhancement, React website development, missed call textback automation, and WhatsApp AI integration for UK trade and local service businesses.",
        "Clients enrolled in the 2026 Founder's Charter receive full implementation of the Auxim Conversion Suite subject to the agreed setup and monthly management fees outlined in their Statement of Work.",
      ],
    },
    {
      title: "2. The 30-Day Conversion Guarantee",
      content: [
        "Our 100% Risk-Free Guarantee applies to all qualified pilot charter participants.",
        "If Auxim does not increase your verifiable inbound call capture rate within thirty (30) days of live deployment, you are entitled to a 100% refund of your initial onboarding setup fee.",
        "Qualification Requirement: Client must maintain active call forwarding, keep their Google Business Profile in good standing, and provide accurate business pricing details during the 7-day onboarding period.",
      ],
    },
    {
      title: "3. Client Responsibilities & Asset Provision",
      content: [
        "Client agrees to provide timely access to domain registrar settings, existing Google Business Profile manager access, and required trade accreditation badges (e.g. Gas Safe, NICEIC, Checkatrade).",
        "Client is solely responsible for ensuring that all trade claims, certifications, pricing estimates, and customer communications comply with UK advertising standards (ASA/CAP Code).",
      ],
    },
    {
      title: "4. Intellectual Property & Asset Ownership",
      content: [
        "Upon full payment of applicable fees, Client owns all domain names, client-specific copy, custom photography, and direct customer lead databases generated by the system.",
        "Auxim retains proprietary ownership of underlying automation workflows, AI prompt libraries, proprietary React code frameworks, and system architecture templates.",
      ],
    },
    {
      title: "5. Service Levels & Response Commitments",
      content: [
        "Auxim targets 99.9% uptime for web infrastructure and automated messaging pipelines.",
        "Technical support requests submitted during standard UK business hours (Mon-Fri, 8:00 AM - 6:00 PM GMT) receive an initial response within two (2) hours.",
        "Emergency downtime issues receive priority investigation 24/7.",
      ],
    },
    {
      title: "6. Fees, Billing, & Cancellation",
      content: [
        "Monthly management fees are billed in advance on a rolling 30-day billing cycle.",
        "No long-term contracts: Clients may cancel services at any time with thirty (30) calendar days written notice.",
        "All fees quoted are exclusive of UK VAT unless expressly stated otherwise.",
      ],
    },
    {
      title: "7. Limitation of Liability",
      content: [
        "To the maximum extent permitted by English law, Auxim shall not be liable for indirect, incidental, special, or consequential damages, including loss of profits, business interruption, or data loss.",
        "Auxim's total aggregate liability arising under or in connection with these Terms shall not exceed the total fees paid by Client in the preceding three (3) months.",
      ],
    },
    {
      title: "8. Governing Law & Dispute Resolution",
      content: [
        "These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes) shall be governed by and construed in accordance with the laws of England and Wales.",
        "The parties irrevocably submit to the exclusive jurisdiction of the courts of England and Wales.",
      ],
    },
  ],
};

export const pagesContent = {
  about: aboutContent,
  servicesPage: servicesPageContent,
  contact: contactPageContent,
  privacy: privacyPolicyContent,
  terms: termsOfServiceContent,
};
