export interface StatItem {
  label: string;
  value: string;
  subtext?: string;
}

export interface AgencySocial {
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface RoiDefaults {
  defaultJobValue: number;
  minJobValue: number;
  maxJobValue: number;
  defaultMissedCalls: number;
  minMissedCalls: number;
  maxMissedCalls: number;
  conversionRecoveryRate: number;
}

export interface AgencyInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  city: string;
  country: string;
  postcode: string;
  hours: string;
  guaranteeHeadline: string;
  guarantee: string;
  stats: StatItem[];
  areasServed: string[];
  social: AgencySocial;
  roiDefaults: RoiDefaults;
}

export const agencyData: AgencyInfo = {
  name: "Auxim",
  legalName: "Auxim Digital Ltd",
  tagline: "UK Local Business Conversion System",
  shortDescription:
    "Turn existing Google search traffic into booked calls with GMB optimization, high-converting websites, WhatsApp AI, and missed-call textbacks.",
  fullDescription:
    "Auxim builds dedicated conversion infrastructure for UK plumbers, electricians, roofers, builders, and local service specialists. We replace slow templates and missed customer calls with instant lead capture, automated reviews, and local search dominance.",
  phone: "020 8090 4120",
  phoneHref: "tel:02080904120",
  email: "hello@auxim.co.uk",
  address: "London & Nationwide, UK",
  city: "London",
  country: "United Kingdom",
  postcode: "EC1A 1BB",
  hours: "Mon - Fri: 8:00 AM - 6:00 PM (24/7 AI Response)",
  guaranteeHeadline: "100% Risk-Free Conversion Guarantee",
  guarantee:
    "100% Risk-Free Guarantee: If we don't increase your call capture rate in 30 days, you pay zero.",
  stats: [
    {
      label: "Implementation Time",
      value: "7 Days",
      subtext: "From audit to live system",
    },
    {
      label: "After-Hours Response",
      value: "< 5 Secs",
      subtext: "Automated SMS & WhatsApp",
    },
    {
      label: "UK Pilot Spots Left",
      value: "3 of 5",
      subtext: "2026 Founder's Charter",
    },
  ],
  areasServed: [
    "Greater London & Home Counties",
    "Birmingham & West Midlands",
    "Manchester & Greater Manchester",
    "Leeds & West Yorkshire",
    "Bristol & South West England",
    "Glasgow & Edinburgh",
    "Newcastle & North East",
    "Cardiff & South Wales",
    "Nationwide UK Local Trades",
  ],
  social: {
    linkedin: "https://linkedin.com/company/auxim-uk",
    twitter: "https://twitter.com/auxim_uk",
  },
  roiDefaults: {
    defaultJobValue: 350,
    minJobValue: 100,
    maxJobValue: 3500,
    defaultMissedCalls: 5,
    minMissedCalls: 1,
    maxMissedCalls: 20,
    conversionRecoveryRate: 0.8,
  },
};
