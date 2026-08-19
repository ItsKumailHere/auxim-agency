import React, { useState } from "react";
import {
  PhoneMissed,
  ZapOff,
  MapPinOff,
  Clock,
  StarOff,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";
import { leaksData, LeakItem } from "../data/leaks";
import { useAudit } from "../context/AuditContext";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PhoneMissed: PhoneMissed,
  ZapOff: ZapOff,
  MapPinOff: MapPinOff,
  Clock: Clock,
  StarOff: StarOff,
};

export const FiveLeaks: React.FC = () => {
  const [selectedLeakIndex, setSelectedLeakIndex] = useState(0);
  const { openAuditModal } = useAudit();
  const currentLeak = leaksData[selectedLeakIndex];
  const CurrentIcon = iconMap[currentLeak.icon] || ShieldAlert;

  return (
    <section className="py-20 md:py-28 bg-background border-b border-border/40">
      <div className="container-x">
        {/* Section Header (DESIGN.md 5.3) */}
        <div className="grid md:grid-cols-12 md:items-end gap-6 mb-12">
          <div className="md:col-span-7 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              The 5 Inbound Revenue Leaks
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-normal tracking-tight leading-[1.08]">
              Where UK Trade Businesses <br />
              Silently Drop £2,000+ Every Month.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base text-stone leading-relaxed">
              Most plumbers, electricians, and local contractors do not need more ad clicks.
              They need to stop leaking high-ticket jobs they are already paying to attract.
            </p>
          </div>
        </div>

        {/* Leak Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {leaksData.map((leak, idx) => {
            const isSelected = idx === selectedLeakIndex;
            const LeakIcon = iconMap[leak.icon] || ShieldAlert;

            return (
              <button
                key={leak.number}
                onClick={() => setSelectedLeakIndex(idx)}
                className={`text-left p-4 rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-card-foreground border-border hover:bg-secondary/60 hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`font-display text-lg font-medium ${
                      isSelected ? "text-accent" : "text-stone"
                    }`}
                  >
                    {leak.number}
                  </span>
                  <LeakIcon
                    className={`w-4 h-4 ${
                      isSelected ? "text-accent" : "text-stone"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-display text-sm md:text-base font-normal line-clamp-1 ${
                      isSelected ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {leak.title}
                  </h3>
                  <p
                    className={`text-[11px] mt-1 line-clamp-1 ${
                      isSelected ? "text-primary-foreground/75" : "text-stone"
                    }`}
                  >
                    {leak.impact}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Comparison Panel */}
        <div className="rounded-sm border border-border bg-card p-6 md:p-10 shadow-xs">
          {/* Header row of selected leak */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-sm bg-accent/15 text-accent flex items-center justify-center font-display text-xl shrink-0">
                {currentLeak.number}
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground font-normal">
                  {currentLeak.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-accent font-medium mt-0.5">
                  {currentLeak.subtitle}
                </p>
              </div>
            </div>

            {/* Metric pill */}
            <div className="flex items-center gap-3 self-start md:self-auto bg-secondary px-4 py-2.5 rounded-sm border border-border">
              <TrendingUp className="w-4 h-4 text-accent shrink-0" />
              <div>
                <div className="font-display text-xl text-foreground leading-none">
                  {currentLeak.metric}
                </div>
                <div className="text-[10px] text-stone uppercase tracking-wider">
                  {currentLeak.metricLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid md:grid-cols-2 gap-8 py-8 border-b border-border">
            {/* The Problem */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-destructive bg-destructive/10">
                <AlertTriangle className="w-3.5 h-3.5" />
                The Silent Revenue Leak
              </div>
              <p className="text-sm md:text-base text-stone leading-relaxed">
                {currentLeak.problem}
              </p>
              <div className="p-4 rounded-sm bg-destructive/5 border border-destructive/15 text-xs text-stone space-y-1">
                <span className="font-semibold text-destructive block">Real Trade Scenario:</span>
                <p>{currentLeak.tradeExample}</p>
              </div>
            </div>

            {/* The Auxim Fix */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                The Auxim 7-Day Fix
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {currentLeak.solution}
              </p>
              <div className="p-4 rounded-sm bg-emerald-500/5 border border-emerald-500/20 text-xs text-foreground space-y-1">
                <span className="font-semibold text-emerald-700 dark:text-emerald-400 block">
                  Measured Recovery Result:
                </span>
                <p className="font-medium text-foreground">{currentLeak.impact}</p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone text-center sm:text-left">
              Plug this leak across your trade territory with our 7-day turnkey setup.
            </div>
            <button
              onClick={() => openAuditModal(currentLeak.title)}
              className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xs"
            >
              <span>Audit This Leak For Your Business</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiveLeaks;
