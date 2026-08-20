# Auxim Agency Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold and build `Auxim` — a sleek, conversion-oriented React 19 website for a UK local business web design & conversion agency following the guidelines in `DESIGN.md`.

**Architecture:** A modern single-page React app with modular components built under `auxim-agency/src/components/`, data models in `auxim-agency/src/data/`, semantic OKLCH styling in `index.css`, Lucide icons, Sonner toast notifications, interactive ROI calculator, interactive missed-call simulator, and audit modal.

**Tech Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4 + Lucide React + Sonner

**Spec:** `docs/superpowers/specs/2026-08-19-auxim-agency-website-design.md`

## Global Constraints

- **Folder**: `C:\Users\TechnoTrade\Documents\Precision\localbizsystems\personal-website\auxim-agency`
- **Target OS**: Windows (PowerShell compatible commands)
- **Do not touch or visit**: `elegant-plumbing` directory
- **Design Guidelines**: Adhere to `DESIGN.md` rules (no pure black/white, semantic variables, oversized display font, asymmetric split hero, real UK trade copy, zero emoji, zero stock clipart).

---

## Tasks Breakdown

### Task 1: Initialize Project & Setup Semantic Tokens

**Files:**
- Create: `auxim-agency/package.json`
- Create: `auxim-agency/vite.config.ts`
- Create: `auxim-agency/index.html`
- Create: `auxim-agency/src/index.css`
- Create: `auxim-agency/src/main.tsx`

**Interfaces:**
- Consumes: None
- Produces: Base Vite + React + Tailwind v4 project environment with OKLCH theme variables and Google Fonts (`Fraunces` + `Inter Tight`).

- [ ] **Step 1: Scaffold Vite project directory `auxim-agency` and `package.json`**

Create `auxim-agency/package.json`:
```json
{
  "name": "auxim-agency",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "lucide-react": "^0.475.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "sonner": "^2.0.1",
    "tailwind-merge": "^3.0.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.6",
    "@types/node": "^22.13.1",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.0.6",
    "typescript": "^5.7.3",
    "vite": "^6.1.0"
  }
}
```

- [ ] **Step 2: Create Vite Configuration**

Create `auxim-agency/vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

- [ ] **Step 3: Create index.html with Google Fonts links**

Create `auxim-agency/index.html`:
```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Auxim | UK Local Business Conversion System</title>
    <meta name="description" content="Turn existing Google search traffic into booked calls with GMB optimization, high-converting websites, WhatsApp AI, and missed-call textbacks." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Inter+Tight:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-background text-foreground antialiased selection:bg-brand selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Configure Semantic CSS Variables in `src/index.css`**

Create `auxim-agency/src/index.css`:
```css
@import "tailwindcss";

@layer base {
  :root {
    --cream: oklch(0.98 0.005 85);
    --ink: oklch(0.18 0.02 260);
    --brand: oklch(0.25 0.02 260);
    --accent: oklch(0.55 0.12 55);
    --stone: oklch(0.55 0.02 260);

    --background: var(--cream);
    --foreground: var(--ink);
    --card: oklch(1 0 0);
    --card-foreground: var(--ink);
    --primary: var(--brand);
    --primary-foreground: oklch(0.98 0.005 85);
    --accent-color: var(--accent);
    --muted: oklch(0.94 0.01 260);
    --muted-foreground: var(--stone);
    --border: oklch(0.88 0.01 260);
  }
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-accent-brand: var(--accent-color);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);

  --font-display: "Fraunces", Georgia, serif;
  --font-sans: "Inter Tight", system-ui, sans-serif;
}

@utility container-x {
  width: 100%;
  margin-inline: auto;
  padding-inline: 1.25rem;
  max-width: 80rem;
  @media (min-width: 768px) {
    padding-inline: 2rem;
  }
}

h1, h2, h3, h4, .font-display {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
}

body {
  font-family: var(--font-sans);
  background-color: var(--background);
  color: var(--foreground);
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  animation: fade-up 0.7s ease-out forwards;
}
```

- [ ] **Step 5: Create `src/main.tsx`**

Create `auxim-agency/src/main.tsx`:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### Task 2: Data Models & Core Business Content

**Files:**
- Create: `auxim-agency/src/data/agency.ts`
- Create: `auxim-agency/src/data/services.ts`
- Create: `auxim-agency/src/data/leaks.ts`

**Interfaces:**
- Consumes: None
- Produces: Authoritative UK agency contact info, service descriptions, and 5 Leaks data structures.

- [ ] **Step 1: Create Agency Data `src/data/agency.ts`**

```typescript
export interface AgencyInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  guarantee: string;
  stats: { label: string; value: string }[];
}

export const agencyData: AgencyInfo = {
  name: "Auxim",
  tagline: "UK Local Business Conversion System",
  phone: "020 8090 4120",
  phoneHref: "tel:02080904120",
  email: "hello@auxim.co.uk",
  address: "London & Nationwide, UK",
  guarantee: "100% Risk-Free Guarantee: If we don't increase your call capture rate in 30 days, you pay zero.",
  stats: [
    { label: "Implementation Time", value: "7 Days" },
    { label: "After-Hours Response", value: "< 5 Secs" },
    { label: "UK Pilot Spots Left", value: "3 of 5" }
  ]
};
```

- [ ] **Step 2: Create Services Data `src/data/services.ts`**

```typescript
export interface ServiceItem {
  id: string;
  title: string;
  eyebrow: string;
  blurb: string;
  bullets: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "gmb-optimization",
    title: "GMB Map Pack Rank Engine",
    eyebrow: "Google Business Profile",
    blurb: "Rank in the Google Local 3-Pack where 80% of UK trade calls originate.",
    bullets: [
      "Geo-targeted keyword & category optimization",
      "Automated photo & updates posting schedule",
      "Local citation audit & NAP synchronization",
      "Spam removal targeting illegitimate competitors"
    ],
    icon: "MapPin"
  },
  {
    id: "conversion-website",
    title: "High-Converting Trade Website",
    eyebrow: "Website Architecture",
    blurb: "Ultra-fast, mobile-first React site engineered specifically for UK local trades.",
    bullets: [
      "Sub-second load times on mobile 4G/5G",
      "Asymmetric split design with sticky contact bars",
      "Clear 1-tap call buttons on every screen",
      "UK localized trust signals and copy"
    ],
    icon: "Globe"
  },
  {
    id: "missed-call-textback",
    title: "Missed Call TextBack AI",
    eyebrow: "Lead Protection",
    blurb: "Never lose a customer to a competitor just because you were on a ladder or driving.",
    bullets: [
      "Triggers an automated SMS within 5 seconds of a missed call",
      "Asks the caller what job they need done",
      "Captures job location and urgency",
      "Notifies your phone instantly with full details"
    ],
    icon: "PhoneCall"
  },
  {
    id: "whatsapp-chatbot",
    title: "24/7 WhatsApp AI Assistant",
    eyebrow: "After-Hours Conversion",
    blurb: "Capture evening and weekend inquiries when customers search after work.",
    bullets: [
      "Answers common questions about your services",
      "Collects job details & photo uploads via WhatsApp",
      "Offers instant quote booking slots",
      "Runs seamlessly 24 hours a day, 365 days a year"
    ],
    icon: "MessageSquare"
  },
  {
    id: "google-review-system",
    title: "Automated Google Review Engine",
    eyebrow: "Reputation Growth",
    blurb: "Turn every completed job into 5-star Google reviews on autopilot.",
    bullets: [
      "Automated post-job SMS review requests",
      "1-tap review link sent directly to customer phones",
      "Filters feedback before it reaches Google",
      "Outrank local competitors with steady review growth"
    ],
    icon: "Star"
  },
  {
    id: "local-seo-schema",
    title: "Local SEO & Geo Schema Engine",
    eyebrow: "Organic Visibility",
    blurb: "Structured data and local search foundations built for UK search engine algorithms.",
    bullets: [
      "Rich snippet LocalBusiness JSON-LD markup",
      "UK postal code & town landing page structure",
      "Google Maps API deep integration",
      "Search Console & Analytics real-time tracking"
    ],
    icon: "Search"
  }
];
```

- [ ] **Step 3: Create The 5 Leaks Data `src/data/leaks.ts`**

```typescript
export interface LeakItem {
  number: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
}

export const leaksData: LeakItem[] = [
  {
    number: "01",
    title: "The Unanswered Jobsite Call",
    problem: "When you are driving or working on a job, 62% of calls go unanswered. 8 out of 10 callers hang up and call your competitor immediately.",
    solution: "Auxim Missed Call TextBack fires an instant SMS in 5 seconds asking how you can help.",
    impact: "+35% Captured Calls"
  },
  {
    number: "02",
    title: "Slow, Cluttered Mobile Sites",
    problem: "Most trade websites take 4+ seconds to load on mobile and bury the call button under generic text blocks.",
    solution: "Auxim builds high-speed, asymmetric React sites with fixed 1-tap call & quote bars.",
    impact: "+50% Faster Lead Capture"
  },
  {
    number: "03",
    title: "Invisible Google Map Ranking",
    problem: "If your Google Business Profile isn't in the top 3 map results, you are missing 80% of high-intent local searches.",
    solution: "Auxim optimizes your GMB listing, citations, and reviews to push you into the 3-Pack.",
    impact: "Top 3 Map Pack Visibility"
  },
  {
    number: "04",
    title: "The 6 PM - 10 PM Silence",
    problem: "Homeowners search for trades after work. If no one answers their evening inquiry, they book someone else by morning.",
    solution: "Our 24/7 WhatsApp AI answers questions, takes job photos, and books consultations overnight.",
    impact: "24/7 Booking Engine"
  },
  {
    number: "05",
    title: "Low Google Review Count",
    problem: "Having fewer reviews than competitors makes homeowners hesitate, even if your work is superior.",
    solution: "Our automated review engine sends post-job SMS triggers that double your 5-star review rate.",
    impact: "Consistent 5-Star Growth"
  }
];
```

---

### Task 3: UI Shell Components (Header, Trust Strip, Footer, Mobile Bar)

**Files:**
- Create: `auxim-agency/src/components/Header.tsx`
- Create: `auxim-agency/src/components/TrustStrip.tsx`
- Create: `auxim-agency/src/components/Footer.tsx`
- Create: `auxim-agency/src/components/MobileCallBar.tsx`

**Interfaces:**
- Consumes: `agencyData` from `src/data/agency.ts`
- Produces: Header, Navigation, Sticky Mobile Call Bar, and Footer components.

- [ ] **Step 1: Create `Header.tsx`**

```tsx
import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { agencyData } from '../data/agency';

interface HeaderProps {
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border transition-all">
      <div className="container-x flex items-center justify-between h-20">
        {/* Brand Mark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl group-hover:bg-accent-brand transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-normal tracking-tight text-foreground">
              {agencyData.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground -mt-1 font-sans">
              Conversion System
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#leaks" className="hover:text-foreground transition-colors">The 5 Leaks</a>
          <a href="#services" className="hover:text-foreground transition-colors">Our System</a>
          <a href="#demo" className="hover:text-foreground transition-colors">Live Demo</a>
          <a href="#calculator" className="hover:text-foreground transition-colors">ROI Calculator</a>
          <a href="#pilot" className="hover:text-foreground transition-colors">Pilot Charter</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <a 
            href={agencyData.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-brand transition-colors"
          >
            <Phone className="w-4 h-4 text-accent-brand" />
            <span>{agencyData.phone}</span>
          </a>
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 rounded-full bg-accent-brand px-6 py-3 text-sm font-medium text-white hover:bg-accent-brand/90 transition-all cursor-pointer shadow-sm hover:translate-y-[-1px]"
          >
            <span>Claim Pilot Spot</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-4">
          <a 
            href="#leaks" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-2 border-b border-border/50"
          >
            The 5 Leaks
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-2 border-b border-border/50"
          >
            Our System
          </a>
          <a 
            href="#demo" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-2 border-b border-border/50"
          >
            Live Demo
          </a>
          <a 
            href="#calculator" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-2 border-b border-border/50"
          >
            ROI Calculator
          </a>
          <a 
            href="#pilot" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-2 border-b border-border/50"
          >
            Pilot Charter
          </a>

          <div className="pt-2 flex flex-col gap-3">
            <a 
              href={agencyData.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-accent-brand" />
              <span>Call {agencyData.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="rounded-full bg-accent-brand text-white py-3 text-sm font-medium"
            >
              Claim Pilot Spot
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
```

- [ ] **Step 2: Create `TrustStrip.tsx`**

```tsx
import React from 'react';

export const TrustStrip: React.FC = () => {
  const labels = [
    "UK Dedicated",
    "100% Conversion Focus",
    "No Long-Term Contracts",
    "24/7 AI Response",
    "Done-For-You Setup"
  ];

  return (
    <section className="border-y border-border bg-muted/40 py-4 overflow-x-auto">
      <div className="container-x flex items-center justify-between min-w-[640px] text-xs uppercase tracking-widest text-muted-foreground font-medium">
        {labels.map((label, idx) => (
          <React.Fragment key={idx}>
            <span>{label}</span>
            {idx < labels.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-accent-brand/40" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
```

- [ ] **Step 3: Create `Footer.tsx`**

```tsx
import React from 'react';
import { agencyData } from '../data/agency';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground py-16">
      <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-accent-brand text-white flex items-center justify-center font-display font-bold text-lg">
              A
            </div>
            <span className="font-display text-2xl">{agencyData.name}</span>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-sm">
            The conversion infrastructure engineered for UK local trade businesses. Turning existing Google searches into booked phone calls.
          </p>
          <span className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} {agencyData.name} Digital Ltd. All rights reserved.
          </span>
        </div>

        <div className="md:col-span-3 flex flex-col gap-3 text-sm">
          <span className="text-xs uppercase tracking-widest text-accent-brand font-semibold mb-1">
            System Modules
          </span>
          <a href="#services" className="hover:text-accent-brand transition-colors">GMB 3-Pack Engine</a>
          <a href="#services" className="hover:text-accent-brand transition-colors">High-Converting Website</a>
          <a href="#services" className="hover:text-accent-brand transition-colors">Missed Call TextBack AI</a>
          <a href="#services" className="hover:text-accent-brand transition-colors">24/7 WhatsApp Assistant</a>
          <a href="#services" className="hover:text-accent-brand transition-colors">Automated Reviews</a>
        </div>

        <div className="md:col-span-4 flex flex-col gap-3 text-sm">
          <span className="text-xs uppercase tracking-widest text-accent-brand font-semibold mb-1">
            UK Headquarters
          </span>
          <p className="text-primary-foreground/80">{agencyData.address}</p>
          <p className="text-primary-foreground/80 font-mono font-medium">{agencyData.phone}</p>
          <p className="text-primary-foreground/80">{agencyData.email}</p>
        </div>
      </div>
    </footer>
  );
};
```

- [ ] **Step 4: Create `MobileCallBar.tsx`**

```tsx
import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { agencyData } from '../data/agency';

interface MobileCallBarProps {
  onOpenAudit: () => void;
}

export const MobileCallBar: React.FC<MobileCallBarProps> = ({ onOpenAudit }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-background/95 backdrop-blur border-t border-border p-3 grid grid-cols-2 gap-3 shadow-lg">
      <a
        href={agencyData.phoneHref}
        className="flex items-center justify-center gap-2 rounded-full border border-foreground/20 py-3 text-xs font-semibold text-foreground"
      >
        <Phone className="w-3.5 h-3.5 text-accent-brand" />
        <span>Call Now</span>
      </a>
      <button
        onClick={onOpenAudit}
        className="flex items-center justify-center gap-1.5 rounded-full bg-accent-brand py-3 text-xs font-semibold text-white shadow-sm"
      >
        <span>Free Audit</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
```

---

### Task 4: Main Content Components (Hero, FiveLeaks, ServicesGrid, LiveDemo, RoiCalculator, PilotOffer, AuditModal)

**Files:**
- Create: `auxim-agency/src/components/Hero.tsx`
- Create: `auxim-agency/src/components/FiveLeaks.tsx`
- Create: `auxim-agency/src/components/ServicesGrid.tsx`
- Create: `auxim-agency/src/components/LiveDemo.tsx`
- Create: `auxim-agency/src/components/RoiCalculator.tsx`
- Create: `auxim-agency/src/components/PilotOffer.tsx`
- Create: `auxim-agency/src/components/AuditModal.tsx`

**Interfaces:**
- Consumes: All data files, toast from `sonner`.
- Produces: Hero section with simulated textback widget, interactive 5 leaks component, services grid, live demo, interactive ROI calculator slider, pilot charter offer, and modal dialog.

- [ ] **Step 1: Create `Hero.tsx`**

```tsx
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { agencyData } from '../data/agency';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 border-b border-border overflow-hidden">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Asymmetric Copy */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-brand font-semibold">
            UK LOCAL BUSINESS CONVERSION SYSTEM · LONDON & NATIONWIDE
          </span>

          <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-balance">
            Stop losing UK trade jobs to <em className="not-italic text-accent-brand">unanswered calls</em>.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            We equip UK plumbers, electricians, roofers, and local trade businesses with high-converting websites, GMB rank engines, 24/7 WhatsApp AI, and instant missed-call textbacks.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-brand px-7 py-4 text-sm font-medium text-white hover:bg-accent-brand/90 transition-all cursor-pointer shadow-md"
            >
              <span>Claim 1 of 5 Pilot Spots</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={agencyData.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-sm font-medium hover:bg-foreground/5 transition-all text-foreground"
            >
              <Phone className="w-4 h-4 text-accent-brand" />
              <span>Call {agencyData.phone}</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 mt-4">
            {agencyData.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-xl md:text-2xl text-foreground font-normal">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground font-sans">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Interactive Missed Call Simulator */}
        <div className="lg:col-span-5 bg-card border border-border rounded-sm p-6 shadow-xl relative">
          <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-medium text-muted-foreground">
                LIVE CONVERSION SYSTEM DEMO
              </span>
            </div>
            <span className="text-xs text-accent-brand font-medium">Auto-Response: ACTIVE</span>
          </div>

          <div className="flex flex-col gap-4 font-sans text-xs">
            {/* Step 1: Incoming Call Missed */}
            <div className={`p-4 rounded-sm border transition-all ${step >= 0 ? 'border-border bg-muted/40 opacity-100' : 'opacity-40'}`}>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">7:42 PM - Incoming Customer Call</span>
                <span className="text-red-500 font-mono font-medium">MISSED CALL (Jobsite)</span>
              </div>
              <p className="text-muted-foreground mt-1">Caller: Homeowner in SW19 looking for emergency boiler repair.</p>
            </div>

            {/* Step 2: Instant Textback Fired */}
            <div className={`p-4 rounded-sm border transition-all ${step >= 1 ? 'border-accent-brand/40 bg-accent-brand/5 opacity-100' : 'opacity-40'}`}>
              <div className="flex items-center justify-between text-accent-brand">
                <span className="font-semibold flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Auxim AI Auto-Text (5 Secs Later)
                </span>
                <span className="font-mono text-[10px]">SENT</span>
              </div>
              <p className="text-foreground mt-1 bg-white p-2.5 rounded border border-border">
                "Hi! Sorry we missed your call — we're currently on a job. What service do you need done today?"
              </p>
            </div>

            {/* Step 3: Customer Responds & Job Secured */}
            <div className={`p-4 rounded-sm border transition-all ${step >= 2 ? 'border-emerald-500/40 bg-emerald-500/5 opacity-100' : 'opacity-40'}`}>
              <div className="flex items-center justify-between text-emerald-600">
                <span className="font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Customer Replied & Job Booked
                </span>
                <span className="font-mono text-[10px]">VALUED @ £350</span>
              </div>
              <p className="text-foreground mt-1">
                "Need a boiler repair tomorrow morning!" → <span className="font-semibold text-emerald-700">Lead Saved from Competitors</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Create `FiveLeaks.tsx`**

```tsx
import React, { useState } from 'react';
import { leaksData } from '../data/leaks';
import { AlertCircle, CheckCircle } from 'lucide-react';

export const FiveLeaks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="leaks" className="py-20 md:py-28 border-b border-border bg-card">
      <div className="container-x">
        <div className="grid md:grid-cols-12 md:items-end gap-6 mb-12">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-brand font-semibold">
              WHERE UK TRADES LOSE MONEY
            </span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mt-2">
              The 5 Call Leaks Killing UK Trade Businesses
            </h2>
          </div>
          <div className="md:col-span-5 text-muted-foreground text-sm">
            Standard trade websites act like leaky buckets. Auxim seals every hole so no caller escapes to your competitors.
          </div>
        </div>

        {/* Leaks Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {leaksData.map((leak, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-6 rounded-sm border text-left transition-all cursor-pointer flex flex-col justify-between ${
                activeTab === idx
                  ? 'border-accent-brand bg-accent-brand/5 shadow-md'
                  : 'border-border bg-background hover:border-foreground/30'
              }`}
            >
              <div>
                <span className="font-display text-3xl font-normal text-muted-foreground/60 block mb-2">
                  {leak.number}
                </span>
                <h3 className="font-display text-lg text-foreground font-normal leading-snug">
                  {leak.title}
                </h3>
              </div>
              <span className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent-brand">
                {leak.impact}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Breakdown Card */}
        <div className="mt-8 p-8 rounded-sm border border-border bg-background grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem (Without Auxim)</span>
            </div>
            <p className="text-foreground text-base leading-relaxed">
              {leaksData[activeTab].problem}
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider">
              <CheckCircle className="w-4 h-4" />
              <span>The Auxim Solution</span>
            </div>
            <p className="text-foreground text-base leading-relaxed">
              {leaksData[activeTab].solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 3: Create `ServicesGrid.tsx`**

```tsx
import React from 'react';
import { servicesData } from '../data/services';
import * as Icons from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-border">
      <div className="container-x">
        <div className="grid md:grid-cols-12 md:items-end gap-6 mb-12">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-brand font-semibold">
              THE COMPLETE CONVERSION INFRASTRUCTURE
            </span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mt-2">
              6 Modules Built to Capture Every Local Search
            </h2>
          </div>
          <div className="md:col-span-5 text-muted-foreground text-sm">
            We don't sell random one-off services. We deploy a unified system that connects your GMB, website, phone, and reviews into a single revenue engine.
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => {
            // @ts-ignore
            const IconComponent = Icons[service.icon] || Icons.CheckCircle2;

            return (
              <div
                key={service.id}
                className="rounded-sm border border-border bg-card p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-accent-brand/10 text-accent-brand flex items-center justify-center mb-6 group-hover:bg-accent-brand group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-1">
                    {service.eyebrow}
                  </span>

                  <h3 className="font-display text-2xl font-normal text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {service.blurb}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 border-t border-border pt-4 text-xs text-foreground/80">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-brand" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 4: Create `LiveDemo.tsx`**

```tsx
import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export const LiveDemo: React.FC = () => {
  const [userMsg, setUserMsg] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Hi there! Welcome to Auxim Test Demo. What service do you need for your UK home or business?' }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMsg.trim()) return;

    const newMsgs = [...messages, { sender: 'user' as const, text: userMsg }];
    setMessages(newMsgs);
    setUserMsg('');

    setTimeout(() => {
      setMessages([
        ...newMsgs,
        {
          sender: 'bot',
          text: 'Great! Our system automatically logs your job requirements, checks availability, and dispatches an instant quote link via WhatsApp.'
        }
      ]);
      toast.success('Live AI Response Simulated!');
    }, 1000);
  };

  return (
    <section id="demo" className="py-20 md:py-28 border-b border-border bg-card">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-brand font-semibold">
            TRY IT LIVE RIGHT NOW
          </span>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Test the Auxim WhatsApp AI Engine Yourself
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Don't take our word for it. Type a test inquiry in the interactive chatbox on the right to see how fast Auxim qualifies leads and collects job details.
          </p>

          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Instant response in under 3 seconds</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Collects photos, postcodes, and job urgency</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Direct integration with your phone or CRM</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-background border border-border rounded-sm p-6 shadow-md flex flex-col h-[420px]">
          <div className="flex items-center gap-3 border-b border-border pb-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-sm block">Auxim WhatsApp Assistant</span>
              <span className="text-[10px] text-emerald-600 font-mono">ONLINE 24/7</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-3 pr-2 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-sm max-w-[85%] ${
                  m.sender === 'user'
                    ? 'bg-accent-brand text-white self-end'
                    : 'bg-muted text-foreground self-start border border-border'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="mt-4 flex gap-2 pt-3 border-t border-border">
            <input
              type="text"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="e.g. Need boiler quote in London..."
              className="flex-1 rounded-sm border border-border bg-background px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-accent-brand"
            />
            <button
              type="submit"
              className="bg-accent-brand text-white px-4 py-2 rounded-sm text-xs font-medium hover:bg-accent-brand/90 transition-colors flex items-center gap-1"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 5: Create `RoiCalculator.tsx`**

```tsx
import React, { useState } from 'react';

export const RoiCalculator: React.FC = () => {
  const [jobValue, setJobValue] = useState(350);
  const [missedCalls, setMissedCalls] = useState(5);

  const weeklyLost = jobValue * missedCalls;
  const annualLost = weeklyLost * 52;
  const annualRecovered = Math.round(annualLost * 0.75);

  return (
    <section id="calculator" className="py-20 md:py-28 border-b border-border">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-brand font-semibold">
            INTERACTIVE REVENUE CALCULATOR
          </span>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mt-2">
            Calculate How Much Revenue You Bleed Each Month
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Adjust the sliders below to see how missed calls and slow site responses directly affect your annual UK trade income.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 bg-card border border-border rounded-sm p-8 shadow-sm">
          <div className="md:col-span-7 flex flex-col gap-8">
            {/* Slider 1 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span>Average Job Value (£)</span>
                <span className="font-mono text-accent-brand font-bold text-lg">£{jobValue}</span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="w-full accent-accent-brand cursor-pointer"
              />
              <span className="text-xs text-muted-foreground">Range: £100 – £3,000</span>
            </div>

            {/* Slider 2 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span>Unanswered / Missed Calls per Week</span>
                <span className="font-mono text-accent-brand font-bold text-lg">{missedCalls} Calls</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full accent-accent-brand cursor-pointer"
              />
              <span className="text-xs text-muted-foreground">Range: 1 – 20 calls/week</span>
            </div>
          </div>

          {/* Results Summary */}
          <div className="md:col-span-5 bg-primary text-primary-foreground p-6 rounded-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent-brand font-semibold block mb-2">
                ESTIMATED ANNUAL LOSS
              </span>
              <span className="font-display text-4xl text-white font-normal block">
                £{annualLost.toLocaleString()}
              </span>
              <p className="text-xs text-primary-foreground/70 mt-2">
                This is what you lose to local UK competitors every year from unanswered phone calls alone.
              </p>
            </div>

            <div className="border-t border-primary-foreground/20 pt-4 mt-6">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block">
                RECOVERED WITH AUXIM (~75%)
              </span>
              <span className="font-display text-2xl text-emerald-300 font-normal">
                +£{annualRecovered.toLocaleString()} / year
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 6: Create `PilotOffer.tsx`**

```tsx
import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { agencyData } from '../data/agency';

interface PilotOfferProps {
  onOpenAudit: () => void;
}

export const PilotOffer: React.FC<PilotOfferProps> = ({ onOpenAudit }) => {
  return (
    <section id="pilot" className="py-20 md:py-28 border-b border-border bg-card">
      <div className="container-x bg-background border border-accent-brand/40 rounded-sm p-8 md:p-14 shadow-lg grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-brand/10 text-accent-brand px-3.5 py-1 text-xs font-semibold w-max">
            <ShieldCheck className="w-4 h-4" />
            <span>2026 FOUNDER'S PILOT CHARTER</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            Claim 1 of 5 UK Pilot Spots with a 100% Risk-Free Guarantee
          </h2>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            As a newly launched agency, we are accepting just 5 UK local trade partners into our charter program. In exchange for your feedback and a testimonial once your call volume doubles, we deploy our entire system at zero upfront risk.
          </p>

          <p className="text-xs text-foreground/80 font-medium">
            {agencyData.guarantee}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
          <button
            onClick={onOpenAudit}
            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-brand px-8 py-4 text-sm font-medium text-white hover:bg-accent-brand/90 transition-all shadow-md cursor-pointer"
          >
            <span>Request Audit & Reserve Spot</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 7: Create `AuditModal.tsx`**

```tsx
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { toast } from 'sonner';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    trade: '',
    phone: '',
    postcode: '',
    challenge: 'Missed Calls'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Audit Request Received! We'll contact your UK number within 24 hours.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-sm p-6 md:p-8 max-w-lg w-full shadow-2xl relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs uppercase tracking-widest text-accent-brand font-semibold block mb-1">
          FREE 15-MINUTE UK TRAFFIC & CALL AUDIT
        </span>

        <h3 className="font-display text-2xl font-normal mb-2">
          Reserve Your Auxim Pilot Spot
        </h3>

        <p className="text-xs text-muted-foreground mb-6">
          We will analyze your GMB map pack ranking, mobile site load speed, and call capture setup.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
          <div>
            <label className="block text-foreground font-medium mb-1">Your Name / Business Name</label>
            <input
              type="text"
              required
              placeholder="e.g. John's Plumbing Ltd"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-sm border border-border bg-card px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-accent-brand"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-foreground font-medium mb-1">Trade / Industry</label>
              <input
                type="text"
                required
                placeholder="Plumber, Roofer..."
                value={formData.trade}
                onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                className="w-full rounded-sm border border-border bg-card px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-accent-brand"
              />
            </div>

            <div>
              <label className="block text-foreground font-medium mb-1">UK Phone Number</label>
              <input
                type="tel"
                required
                placeholder="07123 456789"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-sm border border-border bg-card px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-accent-brand"
              />
            </div>
          </div>

          <div>
            <label className="block text-foreground font-medium mb-1">Primary Goal / Challenge</label>
            <select
              value={formData.challenge}
              onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              className="w-full rounded-sm border border-border bg-card px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-accent-brand"
            >
              <option value="Missed Calls">Fix Unanswered & Missed Calls</option>
              <option value="GMB Ranking">Rank Higher on Google Maps</option>
              <option value="New Website">Build Sleek High-Converting Website</option>
              <option value="More Reviews">Get More 5-Star Google Reviews</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-accent-brand py-3 text-sm font-medium text-white hover:bg-accent-brand/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Submit Audit Request</span>
            <Send className="w-4 h-4" />
          </button>

          <span className="text-[10px] text-center text-muted-foreground mt-1">
            Strictly confidential. No spam or cold call harassment guarantee.
          </span>
        </form>
      </div>
    </div>
  );
};
```

---

### Task 5: Assemble App & Run Verification

**Files:**
- Modify: `auxim-agency/src/App.tsx`

**Interfaces:**
- Consumes: All UI components & `Toaster` from `sonner`.
- Produces: Assembled Auxim website app.

- [ ] **Step 1: Build `src/App.tsx`**

```tsx
import React, { useState } from 'react';
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { FiveLeaks } from './components/FiveLeaks';
import { ServicesGrid } from './components/ServicesGrid';
import { LiveDemo } from './components/LiveDemo';
import { RoiCalculator } from './components/RoiCalculator';
import { PilotOffer } from './components/PilotOffer';
import { AuditModal } from './components/AuditModal';
import { MobileCallBar } from './components/MobileCallBar';
import { Footer } from './components/Footer';

export function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const handleOpenAudit = () => setAuditModalOpen(true);
  const handleCloseAudit = () => setAuditModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground pb-16 lg:pb-0">
      <Toaster position="top-right" richColors />

      <Header onOpenAudit={handleOpenAudit} />

      <main className="flex-1">
        <Hero onOpenAudit={handleOpenAudit} />
        <TrustStrip />
        <FiveLeaks />
        <ServicesGrid />
        <LiveDemo />
        <RoiCalculator />
        <PilotOffer onOpenAudit={handleOpenAudit} />
      </main>

      <Footer />

      <MobileCallBar onOpenAudit={handleOpenAudit} />

      <AuditModal isOpen={auditModalOpen} onClose={handleCloseAudit} />
    </div>
  );
}

export default App;
```

- [ ] **Step 2: Install dependencies & Build Verification**

Run in `auxim-agency`:
```bash
npm install
npm run build
```
Verify zero build or TypeScript errors.
