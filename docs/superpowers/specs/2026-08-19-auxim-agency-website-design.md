# Auxim Agency Website - Design Specification

## 1. Executive Summary & Context
- **Brand Name**: Auxim
- **Tagline**: UK Local Business Conversion System
- **Niche**: UK Local Service & Trade Businesses (Plumbers, Electricians, Roofers, Remodelers, HVAC, Dental/Clinics, Auto, etc.)
- **Core Value Proposition**: Stop losing local trade jobs to unanswered calls and outdated websites. Turn existing Google search traffic into booked jobs using an integrated conversion system (GMB + Sleek Website + Missed Call TextBack AI + 24/7 WhatsApp Chatbot + Google Review Automation).
- **Positioning Strategy**: Early-stage agency focusing on **Live Interactive System Demos**, **The 5 Call Leaks Framework**, an **Interactive ROI Calculator**, and a **Risk-Free UK Founder's Pilot Program**.

---

## 2. Technical Stack & Location
- **Target Folder**: `C:\Users\TechnoTrade\Documents\Precision\localbizsystems\personal-website\auxim-agency`
- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Semantic CSS Custom Properties (OKLCH color mapping)
- **Icons**: Lucide React
- **Notifications**: Sonner Toast
- **Design Tokens Mapped to DESIGN.md**:
  - `Background`: Warm Tinted Off-White (`#F8F9FA` / `oklch(0.98 0.005 85)`)
  - `Ink` (Text): Deep Slate Navy (`#0F172A` / `oklch(0.18 0.02 260)`)
  - `Primary`: Deep Royal Slate (`#1E293B` / `oklch(0.25 0.02 260)`)
  - `Accent`: Warm Bronze / Copper (`#B45309` / `oklch(0.55 0.12 55)`)
  - `Muted`: Slate (`#64748B`)
  - `Display Font`: Fraunces / Sora (tight tracking `-0.02em`, weight 400-500)
  - `Body Font`: Inter Tight / Manrope

---

## 3. Site Structure & Components Architecture

```
auxim-agency/
├── index.html
├── package.json
├── vite.config.ts
├── src/
│   ├── index.css               (CSS Variables & semantic design tokens)
│   ├── main.tsx
│   ├── data/
│   │   ├── agency.ts           (UK Phone, email, address, stats, default ROI settings)
│   │   ├── services.ts         (6 Core conversion modules)
│   │   └── leaks.ts            (The 5 Call Leaks breakdown data)
│   ├── components/
│   │   ├── Header.tsx          (Sticky blur nav + UK Phone + Pilot CTA)
│   │   ├── Hero.tsx            (Asymmetric split layout + Interactive Missed Call AI Simulator)
│   │   ├── TrustStrip.tsx      (5 micro-labels: UK Dedicated · 24/7 AI · Zero Ad Spend Required)
│   │   ├── FiveLeaks.tsx       (Interactive 5 Call Leaks comparison component)
│   │   ├── ServicesGrid.tsx    (6 Core offerings with Lucide icons & outcome blurbs)
│   │   ├── LiveDemo.tsx        (Interactive WhatsApp & Missed Call SMS Sandbox)
│   │   ├── RoiCalculator.tsx   (Interactive slider: Job Value x Missed Calls = Lost Revenue)
│   │   ├── Process.tsx         (4-Step Auxim Protocol: Audit → Build → Automate → Scale)
│   │   ├── PilotOffer.tsx      (Founder's Guarantee & UK Pilot Charter signup)
│   │   ├── AuditModal.tsx      (Global modal for "Request Free 5-Leak UK Audit")
│   │   ├── MobileCallBar.tsx   (Fixed bottom bar for mobile visitors)
│   │   └── Footer.tsx          (UK business details, legal links, contact block)
│   └── App.tsx
```

---

## 4. Key Sections Specification

### 4.1 Header (`Header.tsx`)
- Logo: Auxim SVG mark + display-font wordmark.
- Center Nav (Desktop): *The 5 Leaks*, *Our System*, *Live Demo*, *ROI Calculator*.
- Right CTA: Direct UK call link (`020 8090 4120`) + Primary Bronze Pill `"Claim Pilot Spot"`.
- Mobile Drawer: Responsive hamburger menu with sticky bottom action buttons.

### 4.2 Hero Section (`Hero.tsx`)
- **Left Column**:
  - Eyebrow: `UK LOCAL BUSINESS CONVERSION SYSTEM · LONDON & NATIONWIDE`
  - H1: *"Stop losing UK trade jobs to unanswered calls & slow websites."*
  - Subhead: *"We equip UK plumbers, electricians, roofers, and local trades with high-converting websites, GMB rank engines, 24/7 WhatsApp AI, and instant missed-call textbacks."*
  - CTAs: Primary Bronze Pill `"Claim 1 of 5 UK Pilot Spots →"` + Secondary Outline `"Call 020 8090 4120"`.
  - Micro Stats: `15-Min Setup · 100% Risk-Free Guarantee · UK Dedicated`.
- **Right Column (Interactive Missed Call Simulator)**:
  - Live animated phone card showing a simulated customer calling at 7:30 PM.
  - Call missed → 3 seconds later: Automatic SMS sent: *"Hi, sorry we missed your call! What job do you need done? Tap here for an instant quote."*

### 4.3 Trust Strip (`TrustStrip.tsx`)
- 5 uppercase micro-labels with separator dots:
  `UK Dedicated · 100% Conversion Focus · No Long-Term Contracts · 24/7 AI Response · Done-For-You Setup`

### 4.4 The 5 Call Leaks (`FiveLeaks.tsx`)
- Interactive card grid highlighting the 5 places UK local trade businesses bleed revenue:
  1. **Leak #1: The Unanswered Jobsite Call** (Customers switch to the next listing instantly).
  2. **Leak #2: The Slow Mobile Site** (Taking >3 seconds to load or lacking 1-tap calling).
  3. **Leak #3: Missing from Google Maps 3-Pack** (Losing 80% of high-intent local calls).
  4. **Leak #4: After-Hours Silence** (Over 35% of searches happen between 6 PM and 10 PM).
  5. **Leak #5: Low Google Review Count** (Competitors with 40+ reviews steal trust).

### 4.5 The 6 Auxim Modules (`ServicesGrid.tsx`)
1. 📍 **Google Business Profile (GMB) Rank Engine**: Local map pack optimization.
2. ⚡ **Sleek Trade Website**: High-speed React site following `DESIGN.md` rules.
3. 📞 **Missed Call TextBack AI**: Instant automated text when a call is missed.
4. 💬 **24/7 WhatsApp Chatbot**: Automated quote qualifying on WhatsApp.
5. ⭐ **Automated Google Review System**: Post-job SMS review triggers.
6. 🔍 **Local SEO & Schema Foundations**: Geo-targeted schema for UK search.

### 4.6 Live Demo Sandbox (`LiveDemo.tsx`)
- Allows visitors to test sending a test inquiry to see how Auxim's WhatsApp & Missed Call automation works live.

### 4.7 Interactive UK ROI Calculator (`RoiCalculator.tsx`)
- Slider 1: *Average Job Value (£100 – £5,000)*
- Slider 2: *Unanswered Calls / Inquiries per Week (1 – 20)*
- Live Calculation: *Estimated Annual Lost Revenue (£)* + *"Auxim Recovers ~80% of This Traffic"*.

### 4.8 The 4-Step Auxim Protocol (`Process.tsx`)
- `01 Audit` → `02 Build` → `03 Automate` → `04 Scale`.

### 4.9 Founder's Pilot Offer & Guarantee (`PilotOffer.tsx`)
- Transparent positioning: *"We are selecting 5 UK local trade businesses for our 2026 Founder's Charter. Full conversion system implementation with a 100% Risk-Free Guarantee."*

### 4.10 Audit Modal (`AuditModal.tsx`)
- Fields: Business Name, Trade/Industry, UK Phone Number, Postcode/City, Main Challenge select.
- Toast feedback: *"Audit request received! We'll review your GMB & call setup within 24 hours."*

### 4.11 Mobile Sticky Bar (`MobileCallBar.tsx`)
- Fixed bottom buttons: `Call Us` & `Free Audit`.

---

## 5. SEO & Performance Requirements
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`).
- Structured JSON-LD metadata for UK Agency.
- Full responsive design (375px mobile to 1440px desktop).
- No hardcoded strings outside `data/agency.ts`.

---

## 6. Verification Plan
- Build application with `npm run build`.
- Verify zero TypeScript or build errors.
- Test interactive ROI calculator, live demo simulator, and audit modal.
