import React, { useEffect } from "react";
import { ShieldCheck, Sparkles, Mail, Lock } from "lucide-react";
import { pagesContent } from "../data/pagesContent";
import { agencyData } from "../data/agency";
import { FinalCTA } from "../components/FinalCTA";

export const PrivacyPage: React.FC = () => {
  const content = pagesContent.privacy;

  useEffect(() => {
    document.title = "Privacy Policy & GDPR Compliance · Auxim Digital Ltd";
  }, []);

  return (
    <div className="w-full">
      {/* 1. HERO HEADER */}
      <section className="py-16 md:py-20 bg-background border-b border-border/40">
        <div className="container-x max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-accent bg-accent/10 mb-6 border border-accent/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            UK Data Protection & Compliance
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground font-normal tracking-tight leading-[1.05]">
            Privacy Policy
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone">
            <span>Last Updated: {content.lastUpdated}</span>
            <span>·</span>
            <span>Effective Date: {content.effectiveDate}</span>
            <span>·</span>
            <span>UK GDPR / Data Protection Act 2018</span>
          </div>

          <p className="mt-6 text-base md:text-lg text-stone leading-relaxed">
            {content.introduction}
          </p>
        </div>
      </section>

      {/* 2. POLICY SECTIONS CONTENT */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container-x max-w-4xl space-y-12">
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

          {/* Contact Data Controller Card */}
          <div className="p-6 sm:p-8 rounded-sm border border-accent/30 bg-accent/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-display text-lg text-foreground font-normal">
                Questions Regarding Your Data?
              </h3>
              <p className="text-xs text-stone">
                Contact our appointed Data Protection Officer directly at {agencyData.email}.
              </p>
            </div>
            <a
              href={`mailto:${agencyData.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs font-medium hover:bg-primary/90 transition-all shrink-0 shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Privacy Officer</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. FINAL FULL-BLEED CTA BAND */}
      <FinalCTA
        eyebrow="2026 Founder's Charter · 3 of 5 Pilot Spots Left"
        headline="Ready to secure your local trade leads with complete data security?"
        subheadline="Join UK tradespeople scaling inbound call capture with full GDPR and UK privacy protection."
        primaryCtaText="Claim Your Pilot Spot"
      />
    </div>
  );
};

export default PrivacyPage;
