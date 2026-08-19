import React, { useEffect } from "react";
import { ShieldCheck, Scale, PhoneCall } from "lucide-react";
import { pagesContent } from "../data/pagesContent";
import { agencyData } from "../data/agency";
import { FinalCTA } from "../components/FinalCTA";

export const TermsPage: React.FC = () => {
  const content = pagesContent.terms;

  useEffect(() => {
    document.title = "Terms of Service & 30-Day Guarantee · Auxim Digital Ltd";
  }, []);

  return (
    <div className="w-full">
      {/* 1. HERO HEADER */}
      <section className="py-16 md:py-20 bg-background border-b border-border/40">
        <div className="container-x max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-accent bg-accent/10 mb-6 border border-accent/20">
            <Scale className="w-3.5 h-3.5" />
            Client Agreement & Guarantee
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground font-normal tracking-tight leading-[1.05]">
            Terms of Service
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone">
            <span>Last Updated: {content.lastUpdated}</span>
            <span>·</span>
            <span>Effective Date: {content.effectiveDate}</span>
            <span>·</span>
            <span>Governing Law: England & Wales</span>
          </div>

          <p className="mt-6 text-base md:text-lg text-stone leading-relaxed">
            {content.introduction}
          </p>
        </div>
      </section>

      {/* 2. GUARANTEE CALLOUT */}
      <section className="py-8 bg-secondary/40 border-b border-border">
        <div className="container-x max-w-4xl">
          <div className="p-6 sm:p-8 rounded-sm bg-card border-2 border-accent/40 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-accent">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span>30-Day 100% Risk-Free Guarantee Summary</span>
            </div>
            <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
              {agencyData.guarantee}
            </p>
            <p className="text-xs text-stone">
              If our system does not demonstrably increase your inbound call capture rate within 30 days of live launch, we will refund your initial setup fee in full with zero dispute.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TERMS SECTIONS */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container-x max-w-4xl space-y-10">
          {content.sections.map((section, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-sm border border-border bg-background space-y-4 shadow-xs"
            >
              <h2 className="font-display text-xl sm:text-2xl text-foreground font-normal tracking-tight">
                {section.title}
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-foreground/85 leading-relaxed">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Direct Support Card */}
          <div className="p-6 sm:p-8 rounded-sm border border-border bg-secondary/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-display text-lg text-foreground font-normal">
                Questions Regarding Terms & Conditions?
              </h3>
              <p className="text-xs text-stone">
                Our support team is available during standard UK business hours to clarify any agreement details.
              </p>
            </div>
            <a
              href={agencyData.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs font-medium hover:bg-primary/90 transition-all shrink-0 shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call {agencyData.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. FINAL FULL-BLEED CTA BAND */}
      <FinalCTA
        eyebrow="2026 Founder's Charter · 3 of 5 Pilot Spots Left"
        headline="Ready to partner with Auxim under our 100% Risk-Free Guarantee?"
        subheadline="Secure your UK trade territory today with zero long-term lock-in and a 30-day performance refund guarantee."
        primaryCtaText="Claim Your Pilot Spot"
      />
    </div>
  );
};

export default TermsPage;
