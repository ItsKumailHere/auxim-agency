import React, { useEffect, useState } from "react";
import {
  MapPin,
  Globe,
  PhoneCall,
  MessageSquare,
  Star,
  Search,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { servicesData, ServiceItem } from "../data/services";
import { pagesContent } from "../data/pagesContent";
import { agencyData } from "../data/agency";
import { useAudit } from "../context/AuditContext";
import { FinalCTA } from "../components/FinalCTA";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin: MapPin,
  Globe: Globe,
  PhoneCall: PhoneCall,
  MessageSquare: MessageSquare,
  Star: Star,
  Search: Search,
};

export const ServicesPage: React.FC = () => {
  const { openAuditModal } = useAudit();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const content = pagesContent.servicesPage;

  useEffect(() => {
    document.title = "Conversion Infrastructure & Engines · Auxim UK Trades";
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      {/* 1. HERO HEADER */}
      <section className="py-16 md:py-24 bg-background border-b border-border/40">
        <div className="container-x">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-accent bg-accent/10 mb-6 border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              {content.eyebrow}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground font-normal tracking-tight leading-[1.04] text-balance">
              The Complete Auxim <br />
              <em className="not-italic text-accent">Conversion Infrastructure</em>.
            </h1>

            <p className="mt-6 text-base md:text-xl text-stone max-w-3xl leading-relaxed">
              {content.headline} {content.subheadline}
            </p>

            {/* Quick Navigation Anchor Bar */}
            <div className="mt-10 pt-8 border-t border-border flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone mr-2">
                Jump to Engine:
              </span>
              {servicesData.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <span>{service.eyebrow}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALTERNATING 2-COLUMN ZIGZAG BLOCKS FOR ALL 6 SERVICES */}
      <section className="py-16 md:py-24 space-y-16 md:space-y-28">
        <div className="container-x space-y-16 md:space-y-28">
          {servicesData.map((service: ServiceItem, index: number) => {
            const Icon = iconMap[service.icon] || MapPin;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-sm border border-border bg-card p-6 sm:p-8 md:p-12 shadow-xs transition-shadow duration-300 hover:shadow-md"
              >
                <div
                  className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Text Column (lg:col-span-7) */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:col-start-6"}`}>
                    {/* Header: Icon badge + Eyebrow */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-accent/10 text-accent flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                        Engine 0{index + 1} · {service.eyebrow}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground font-normal tracking-tight leading-tight">
                      {service.title}
                    </h2>

                    {/* Outcome Paragraph 1: Blurb */}
                    <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-normal">
                      {service.blurb}
                    </p>

                    {/* Deliverables List with Checkmarks */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-stone">
                        Included Deliverables & Turnkey Setup:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-3.5">
                      <button
                        onClick={() => openAuditModal(service.title)}
                        className="rounded-full bg-primary text-primary-foreground font-medium px-6 py-3 text-sm hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer shadow-xs group"
                      >
                        <span>Claim Pilot Spot for {service.eyebrow}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      <a
                        href={agencyData.phoneHref}
                        className="rounded-full border border-border bg-secondary text-foreground font-medium px-5 py-3 text-sm hover:bg-secondary/70 transition-all inline-flex items-center gap-2"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-primary" />
                        <span>Discuss with Specialist</span>
                      </a>
                    </div>
                  </div>

                  {/* Operational Breakdown Column (lg:col-span-5) */}
                  <div className={`lg:col-span-5 space-y-4 ${isEven ? "" : "lg:col-start-1"}`}>
                    {/* Metric Highlight Card */}
                    <div className="rounded-sm bg-secondary/80 border border-border p-6 text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Key Benchmark
                      </div>
                      <div className="font-display text-4xl sm:text-5xl text-foreground font-normal tracking-tight">
                        {service.metric.value}
                      </div>
                      <div className="text-xs sm:text-sm text-stone mt-1 font-medium">
                        {service.metric.label}
                      </div>
                    </div>

                    {/* Before vs After Scenario Cards */}
                    <div className="space-y-3">
                      {/* Before (Leak) */}
                      <div className="rounded-sm border border-destructive/20 bg-destructive/5 p-4">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-destructive mb-1.5">
                          <XCircle className="w-4 h-4 shrink-0" />
                          <span>The Revenue Leak (Before)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                          {service.scenario.before}
                        </p>
                      </div>

                      {/* After (Auxim Solution) */}
                      <div className="rounded-sm border border-accent/30 bg-accent/5 p-4">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-accent mb-1.5">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>The Auxim Resolution (After)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                          {service.scenario.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. TRADITIONAL AGENCY VS AUXIM COMPARISON TABLE */}
      <section className="py-16 md:py-24 bg-secondary/40 border-y border-border/60">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-accent bg-accent/10 mb-4 border border-accent/20">
              <Zap className="w-3.5 h-3.5" />
              {content.comparison.eyebrow}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-normal tracking-tight leading-tight">
              {content.comparison.headline}
            </h2>
            <p className="mt-4 text-base text-stone leading-relaxed">
              {content.comparison.description}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-sm border border-border bg-card shadow-xs">
              <thead>
                <tr className="border-b border-border bg-secondary/60 text-xs uppercase tracking-wider text-stone">
                  <th className="py-4 px-5 font-semibold">Operational Feature</th>
                  <th className="py-4 px-5 font-semibold text-stone/80">Traditional Agency Retainers</th>
                  <th className="py-4 px-5 font-semibold text-accent bg-accent/10">Auxim Conversion Suite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                {content.comparison.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-5 font-semibold text-foreground">{row.feature}</td>
                    <td className="py-4 px-5 text-stone flex-1">
                      <div className="flex items-center gap-2 text-destructive/90">
                        <XCircle className="w-4 h-4 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 font-medium text-foreground bg-accent/5">
                      <div className="flex items-center gap-2 text-foreground font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>{row.auxim}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-x max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-accent bg-accent/10 mb-4 border border-accent/20">
              <HelpCircle className="w-3.5 h-3.5" />
              UK Trade Inquiries
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-normal tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone leading-relaxed">
              Clear answers on setup timelines, phone number routing, AI accuracy, and our 30-day performance guarantee.
            </p>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;

              return (
                <div
                  key={fIdx}
                  className="rounded-sm border border-border bg-card transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-secondary/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {faq.category && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full hidden sm:inline-block">
                          {faq.category}
                        </span>
                      )}
                      <span className="font-display text-base sm:text-lg text-foreground font-normal">
                        {faq.question}
                      </span>
                    </div>
                    <div className="text-stone">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone leading-relaxed border-t border-border/40 bg-secondary/10 animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Callout */}
          <div className="mt-10 p-6 rounded-sm bg-secondary/50 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-display text-lg text-foreground font-normal">
                Have a specific question about your trade setup?
              </h4>
              <p className="text-xs text-stone mt-1">
                Call our direct line to speak with a UK conversion specialist today.
              </p>
            </div>
            <a
              href={agencyData.phoneHref}
              className="shrink-0 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs font-medium hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{agencyData.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. FINAL FULL-BLEED CTA BAND */}
      <FinalCTA
        eyebrow="2026 Founder's Charter · 3 of 5 Pilot Spots Left"
        headline="Ready to install the complete Auxim conversion infrastructure?"
        subheadline="Schedule your free 5-Leak UK Trade Audit today. Turnkey 7-day delivery backed by our 100% Risk-Free Guarantee."
        primaryCtaText="Claim Your Territory Pilot"
      />
    </div>
  );
};

export default ServicesPage;
