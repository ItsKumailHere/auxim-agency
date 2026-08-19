import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Lock,
  Clock,
  Zap,
} from "lucide-react";
import { agencyData } from "../data/agency";
import { useAudit } from "../context/AuditContext";

export const PilotOffer: React.FC = () => {
  const { openAuditModal } = useAudit();

  const charterInclusions = [
    {
      title: "Complete 6-Engine Conversion Suite",
      description: "Full setup of React website, Missed Call AI, GMB 3-Pack engine, WhatsApp bot, review system, and geo schema.",
    },
    {
      title: "Exclusive Territory Lockdown",
      description: "Strict 1-trade-per-territory policy. We will not take on a direct competitor in your primary postcodes.",
    },
    {
      title: "7-Day Turnkey Implementation",
      description: "Zero work required from your team. We configure virtual SMS lines, WhatsApp APIs, and map citations for you.",
    },
    {
      title: "100% Risk-Free 30-Day Guarantee",
      description: "If we don't measurably increase your captured calls and lead volume in 30 days, you receive a full 100% refund.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background border-b border-border/40">
      <div className="container-x">
        {/* Section Header (DESIGN.md 5.3) */}
        <div className="grid md:grid-cols-12 md:items-end gap-6 mb-12">
          <div className="md:col-span-7 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              2026 Founder's Charter
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-normal tracking-tight leading-[1.08]">
              Lock In Your Postcode Territory <br />
              With Zero Risk.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base text-stone leading-relaxed">
              We only partner with 5 ambitious UK trade businesses for our 2026 Founder's Charter
              to guarantee maximum focus, dedicated technical support, and local market dominance.
            </p>
          </div>
        </div>

        {/* Founder's Charter Main Card */}
        <div className="rounded-sm border-2 border-primary/20 bg-card p-6 md:p-12 shadow-md relative overflow-hidden">
          {/* Top Banner Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-sm bg-accent text-ink flex items-center justify-center font-display text-2xl font-semibold">
                FC
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent block">
                  Exclusive Invitation
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-foreground font-normal">
                  2026 UK Trade Founder's Charter
                </h3>
              </div>
            </div>

            {/* Pilot Spots Remaining Pill */}
            <div className="flex items-center gap-2.5 bg-accent/15 border border-accent/30 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                3 of 5 Pilot Spots Remaining
              </span>
            </div>
          </div>

          {/* 4 Inclusions Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {charterInclusions.map((inc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-sm border border-border/80 bg-secondary/30 space-y-2"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="font-display text-lg text-foreground font-normal">
                    {inc.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-stone leading-relaxed pl-6">
                  {inc.description}
                </p>
              </div>
            ))}
          </div>

          {/* Guarantee Highlight Box */}
          <div className="rounded-sm bg-ink text-background p-6 md:p-8 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display text-xl text-background font-normal">
                  {agencyData.guaranteeHeadline}
                </h4>
                <p className="text-xs sm:text-sm text-background/75 leading-relaxed max-w-xl">
                  {agencyData.guarantee}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-1.5 text-xs text-accent font-semibold uppercase tracking-wider bg-background/10 px-3.5 py-2 rounded-full">
              <Lock className="w-3.5 h-3.5" />
              <span>Written Agreement</span>
            </div>
          </div>

          {/* Bottom Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
            <div className="flex items-center gap-4 text-xs text-stone">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Onboarding takes 15 minutes</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-accent" />
                <span>Live in 7 business days</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => openAuditModal("2026 Founder's Charter Pilot")}
                className="rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xs"
              >
                <span>Claim 1 of 3 Remaining Spots</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={agencyData.phoneHref}
                className="rounded-full border border-border bg-card text-foreground px-6 py-3.5 text-sm font-medium hover:bg-secondary transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call {agencyData.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotOffer;
