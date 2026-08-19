import React, { useState, useEffect } from "react";
import {
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  PhoneMissed,
  MessageSquare,
} from "lucide-react";
import { agencyData } from "../data/agency";
import { useAudit } from "../context/AuditContext";

interface SimulationStep {
  id: number;
  time: string;
  sender: "caller" | "system" | "customer" | "ai";
  label: string;
  type: "missed_call" | "sms_out" | "sms_in" | "sms_confirm";
  title: string;
  message: string;
  badge: string;
}

const simulationSteps: SimulationStep[] = [
  {
    id: 1,
    time: "14:32:02",
    sender: "caller",
    label: "Step 1 · 0 Secs",
    type: "missed_call",
    title: "Missed Call · Mrs. Davies (SW19)",
    message: "Inbound call missed while engineer was on a roof.",
    badge: "Unanswered Call",
  },
  {
    id: 2,
    time: "14:32:07",
    sender: "system",
    label: "Step 2 · 5 Secs",
    type: "sms_out",
    title: "Automated SMS Dispatched",
    message:
      "Hi Mrs. Davies, sorry we missed your call! What plumbing or heating emergency do you need help with today? — Apex Heating",
    badge: "5s TextBack",
  },
  {
    id: 3,
    time: "14:32:28",
    sender: "customer",
    label: "Step 3 · 26 Secs",
    type: "sms_in",
    title: "Homeowner Replied",
    message:
      "Boiler flashing F22 error code and pressure is zero. Freezing water leaking under unit.",
    badge: "Job Captured",
  },
  {
    id: 4,
    time: "14:32:34",
    sender: "ai",
    label: "Step 4 · 32 Secs",
    type: "sms_confirm",
    title: "AI Triage & Booking Confirmed",
    message:
      "Understood. Emergency engineer Dave has SW19 slot at 15:30. Fixed £85 diagnostic callout. Confirmation text sent.",
    badge: "£450 Job Secured",
  },
];

export const Hero: React.FC = () => {
  const { openAuditModal } = useAudit();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < simulationSteps.length - 1) {
          return prev + 1;
        } else {
          return 0; // loop
        }
      });
    }, 3200);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setIsPlaying(true);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-border/40">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-accent bg-accent/10 border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              UK LOCAL BUSINESS CONVERSION SYSTEM · LONDON & NATIONWIDE
            </div>

            {/* H1 */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-foreground font-normal tracking-tight leading-[1.04] text-balance">
              Stop losing UK trade jobs to{" "}
              <em className="not-italic text-accent">unanswered calls</em>.
            </h1>

            {/* Lede Text */}
            <p className="text-base md:text-lg text-stone leading-relaxed max-w-2xl">
              When you're on a job, 62% of customer calls go straight to voicemail and dial your competitor.
              Auxim installs 5-second SMS auto-responses, 24/7 WhatsApp qualification, and Google 3-Pack rank
              systems so you never lose a high-ticket job again.
            </p>

            {/* Dual Pill CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => openAuditModal()}
                className="rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm md:text-base font-medium hover:bg-primary/90 transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Claim Pilot Spot (3 Left)</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={agencyData.phoneHref}
                className="rounded-full border border-border bg-card text-foreground px-6 py-4 text-sm md:text-base font-medium hover:bg-secondary transition-all flex items-center justify-center gap-2.5 shadow-xs"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call {agencyData.phone}</span>
              </a>
            </div>

            {/* Micro Guarantee Note */}
            <div className="flex items-center gap-2 text-xs text-stone pt-1">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>
                100% Risk-Free Guarantee: If we don't increase your captured calls in 30 days, you pay zero.
              </span>
            </div>

            {/* 3 Stat Counters */}
            <div className="pt-6 border-t border-border/80 grid grid-cols-3 gap-4">
              {agencyData.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground font-normal tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {stat.label}
                  </div>
                  {stat.subtext && (
                    <div className="text-[11px] text-stone hidden sm:block">
                      {stat.subtext}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (lg:col-span-5): Missed Call AI Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-border bg-card shadow-lg p-5 sm:p-6 relative overflow-hidden">
              {/* Simulator Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Missed Call AI Simulator
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded-full hover:bg-secondary text-stone hover:text-foreground transition-colors cursor-pointer text-xs flex items-center gap-1"
                    title={isPlaying ? "Pause simulation" : "Play simulation"}
                  >
                    {isPlaying ? (
                      <span className="text-[11px] font-medium text-stone px-1.5">Auto-playing</span>
                    ) : (
                      <Play className="w-3.5 h-3.5 text-accent" />
                    )}
                  </button>
                  <button
                    onClick={handleRestart}
                    className="p-1.5 rounded-full hover:bg-secondary text-stone hover:text-foreground transition-colors cursor-pointer"
                    title="Restart simulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Progress Steps Indicator */}
              <div className="grid grid-cols-4 gap-1.5 py-3 border-b border-border/40">
                {simulationSteps.map((step, idx) => {
                  const isActive = idx <= currentStepIndex;
                  const isCurrent = idx === currentStepIndex;
                  return (
                    <button
                      key={step.id}
                      onClick={() => {
                        setCurrentStepIndex(idx);
                        setIsPlaying(false);
                      }}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-accent"
                          : isActive
                          ? "bg-primary"
                          : "bg-secondary"
                      }`}
                      title={step.title}
                    />
                  );
                })}
              </div>

              {/* Step Messages Stream */}
              <div className="py-4 space-y-3 min-h-[290px] flex flex-col justify-start">
                {simulationSteps.slice(0, currentStepIndex + 1).map((step) => {
                  if (step.type === "missed_call") {
                    return (
                      <div
                        key={step.id}
                        className="rounded-sm border border-destructive/20 bg-destructive/5 p-3.5 space-y-1.5 animate-fade-in"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 font-semibold text-destructive">
                            <PhoneMissed className="w-3.5 h-3.5" />
                            <span>{step.title}</span>
                          </div>
                          <span className="text-[11px] text-stone">{step.time}</span>
                        </div>
                        <p className="text-xs text-stone leading-relaxed">
                          {step.message}
                        </p>
                      </div>
                    );
                  }

                  if (step.type === "sms_out") {
                    return (
                      <div
                        key={step.id}
                        className="rounded-sm border border-accent/30 bg-accent/5 p-3.5 space-y-1.5 animate-fade-in"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 font-semibold text-accent">
                            <Zap className="w-3.5 h-3.5" />
                            <span>{step.title}</span>
                          </div>
                          <span className="text-[11px] text-stone">{step.time}</span>
                        </div>
                        <p className="text-xs text-foreground leading-relaxed font-mono bg-card/60 p-2 rounded-xs border border-border/50">
                          "{step.message}"
                        </p>
                      </div>
                    );
                  }

                  if (step.type === "sms_in") {
                    return (
                      <div
                        key={step.id}
                        className="rounded-sm border border-border bg-secondary/60 p-3.5 space-y-1.5 animate-fade-in"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 font-semibold text-foreground">
                            <MessageSquare className="w-3.5 h-3.5 text-primary" />
                            <span>{step.title}</span>
                          </div>
                          <span className="text-[11px] text-stone">{step.time}</span>
                        </div>
                        <p className="text-xs text-stone leading-relaxed italic">
                          "{step.message}"
                        </p>
                      </div>
                    );
                  }

                  if (step.type === "sms_confirm") {
                    return (
                      <div
                        key={step.id}
                        className="rounded-sm border border-emerald-500/30 bg-emerald-500/10 p-3.5 space-y-1.5 animate-fade-in"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 font-semibold text-emerald-700 dark:text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{step.title}</span>
                          </div>
                          <span className="text-[11px] text-stone">{step.time}</span>
                        </div>
                        <p className="text-xs text-foreground leading-relaxed">
                          {step.message}
                        </p>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              {/* Simulator Footer Status */}
              <div className="pt-3 border-t border-border/70 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-stone">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span>
                    Current: {simulationSteps[currentStepIndex].label}
                  </span>
                </div>
                <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium text-accent bg-accent/10">
                  {simulationSteps[currentStepIndex].badge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
