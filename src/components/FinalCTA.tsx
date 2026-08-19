import React from "react";
import { Phone, ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";
import { agencyData } from "../data/agency";
import { useAudit } from "../context/AuditContext";

export interface FinalCTAProps {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  preselectService?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  eyebrow = "2026 Founder's Charter · 3 of 5 Pilot Spots Left",
  headline = "Ready to stop losing local UK trade jobs to unanswered calls?",
  subheadline = "Claim your dedicated territory pilot with our 30-Day 100% Risk-Free Conversion Guarantee. Turnkey deployment in 7 days.",
  primaryCtaText = "Claim Pilot Spot",
  preselectService,
}) => {
  const { openAuditModal } = useAudit();

  return (
    <section className="relative overflow-hidden bg-ink text-background py-20 md:py-28 border-t border-border/20">
      {/* Subtle background ambient light */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-accent bg-accent/10 mb-6 border border-accent/20">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {eyebrow}
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-background font-normal tracking-tight leading-[1.08] text-balance">
          {headline}
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-base md:text-lg text-background/75 font-normal max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>

        {/* Action Button Pair */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openAuditModal(preselectService)}
            className="w-full sm:w-auto rounded-full bg-accent text-ink font-medium px-8 py-4 text-base hover:bg-accent/90 transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={agencyData.phoneHref}
            className="w-full sm:w-auto rounded-full border border-background/25 bg-background/5 text-background font-medium px-8 py-4 text-base hover:bg-background/15 transition-all flex items-center justify-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Call {agencyData.phone}</span>
          </a>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-12 pt-8 border-t border-background/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-background/70">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
            <span>30-Day Money-Back Guarantee</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-accent shrink-0" />
            <span>7-Day Turnkey Implementation</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-accent shrink-0" />
            <span>24/7 Missed-Call & WhatsApp AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
