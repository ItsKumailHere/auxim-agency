import React, { useState } from "react";
import {
  Calculator,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  PoundSterling,
  AlertCircle,
} from "lucide-react";
import { agencyData } from "../data/agency";
import { useAudit } from "../context/AuditContext";

export const RoiCalculator: React.FC = () => {
  const { openAuditModal } = useAudit();
  const { roiDefaults } = agencyData;

  const [jobValue, setJobValue] = useState<number>(roiDefaults.defaultJobValue);
  const [missedCalls, setMissedCalls] = useState<number>(roiDefaults.defaultMissedCalls);

  // Calculations
  const weeklyLost = jobValue * missedCalls;
  const monthlyLost = Math.round(weeklyLost * 4.333);
  const annualLost = weeklyLost * 52;
  const annualRecovered = Math.round(annualLost * roiDefaults.conversionRecoveryRate);
  const monthlyRecovered = Math.round(monthlyLost * roiDefaults.conversionRecoveryRate);

  // Presets
  const handlePreset = (val: number, calls: number) => {
    setJobValue(val);
    setMissedCalls(calls);
  };

  return (
    <section className="py-20 md:py-28 bg-secondary/30 border-b border-border/40">
      <div className="container-x">
        {/* Section Header (DESIGN.md 5.3) */}
        <div className="grid md:grid-cols-12 md:items-end gap-6 mb-12">
          <div className="md:col-span-7 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              ROI & Revenue Recovery Calculator
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-normal tracking-tight leading-[1.08]">
              How Much Revenue Are You <br />
              Leaving on the Jobsite?
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base text-stone leading-relaxed">
              Adjust the sliders below to calculate the real cost of missed customer calls
              and see how much annual profit Auxim recovers for your trade business.
            </p>
          </div>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-sm border border-border bg-card p-6 md:p-8 space-y-8 shadow-xs flex flex-col justify-between">
            <div>
              {/* Presets */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone block">
                  Quick Trade Presets:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handlePreset(280, 6)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all cursor-pointer"
                  >
                    Emergency Plumber (£280 / 6 calls)
                  </button>
                  <button
                    onClick={() => handlePreset(450, 4)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all cursor-pointer"
                  >
                    Electrician (£450 / 4 calls)
                  </button>
                  <button
                    onClick={() => handlePreset(1200, 3)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all cursor-pointer"
                  >
                    Roofer / Builder (£1,200 / 3 calls)
                  </button>
                </div>
              </div>

              {/* Slider 1: Average Job Value */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Average Job Value
                  </label>
                  <div className="font-display text-2xl md:text-3xl text-foreground font-medium flex items-center">
                    <span>£</span>
                    <span>{jobValue.toLocaleString()}</span>
                  </div>
                </div>

                <input
                  type="range"
                  min={roiDefaults.minJobValue}
                  max={roiDefaults.maxJobValue}
                  step={50}
                  value={jobValue}
                  onChange={(e) => setJobValue(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                />

                <div className="flex justify-between text-[11px] text-stone">
                  <span>£{roiDefaults.minJobValue} (Small repair)</span>
                  <span>£{roiDefaults.maxJobValue.toLocaleString()} (Major installation)</span>
                </div>
              </div>

              {/* Slider 2: Missed Calls per Week */}
              <div className="space-y-3 pt-6 border-t border-border/60">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Missed Calls Per Week
                  </label>
                  <div className="font-display text-2xl md:text-3xl text-accent font-medium">
                    {missedCalls} <span className="text-sm font-normal text-stone">calls/wk</span>
                  </div>
                </div>

                <input
                  type="range"
                  min={roiDefaults.minMissedCalls}
                  max={roiDefaults.maxMissedCalls}
                  step={1}
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                />

                <div className="flex justify-between text-[11px] text-stone">
                  <span>1 call / week</span>
                  <span>20 calls / week (High volume)</span>
                </div>
              </div>
            </div>

            {/* Note at bottom of left column */}
            <div className="p-3.5 rounded-sm bg-secondary text-xs text-stone flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-accent shrink-0" />
              <span>
                Based on UK industry benchmark of 62% unanswered jobsite calls and an 80% customer rebound rate.
              </span>
            </div>
          </div>

          {/* Results Column (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-sm border border-border bg-ink text-background p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            {/* Subtle ambient light */}
            <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-background/15">
                <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  <span>Your Revenue Impact</span>
                </div>
                <span className="text-[11px] text-background/60">Auxim Recovery Suite</span>
              </div>

              {/* Annual Lost Revenue */}
              <div className="space-y-1">
                <span className="text-xs text-background/70 uppercase tracking-wider block">
                  Current Revenue Silently Leaked
                </span>
                <div className="font-display text-3xl sm:text-4xl text-destructive font-normal tracking-tight">
                  £{annualLost.toLocaleString()} <span className="text-sm font-normal text-background/50">/ year</span>
                </div>
                <div className="text-xs text-background/60">
                  ≈ £{monthlyLost.toLocaleString()} leaking away every single month
                </div>
              </div>

              {/* Auxim 80% Recovery Result */}
              <div className="p-4 rounded-sm bg-background/5 border border-accent/30 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-wider text-accent flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Auxim 80% Recovery Rate
                  </span>
                  <span className="text-[11px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-medium">
                    Recovered Profit
                  </span>
                </div>
                <div className="font-display text-3xl sm:text-4xl text-accent font-normal tracking-tight">
                  +£{annualRecovered.toLocaleString()}{" "}
                  <span className="text-sm font-normal text-background/70">/ year</span>
                </div>
                <p className="text-xs text-background/70 leading-relaxed">
                  Adds approximately <strong className="text-background font-semibold">+£{monthlyRecovered.toLocaleString()}</strong> in
                  recovered trade bookings to your business every month.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-8 relative z-10 space-y-3">
              <button
                onClick={() => openAuditModal(`Revenue Recovery (${jobValue} Job Value)`)}
                className="w-full rounded-full bg-accent text-ink font-medium px-6 py-3.5 text-sm md:text-base hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md"
              >
                <span>Recover This Revenue (Claim Pilot Spot)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-background/60 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Zero financial risk · Backed by 30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
