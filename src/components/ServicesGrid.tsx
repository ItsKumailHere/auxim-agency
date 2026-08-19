import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Globe,
  PhoneCall,
  MessageSquare,
  Star,
  Search,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { servicesData, ServiceItem } from "../data/services";
import { useAudit } from "../context/AuditContext";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin: MapPin,
  Globe: Globe,
  PhoneCall: PhoneCall,
  MessageSquare: MessageSquare,
  Star: Star,
  Search: Search,
};

export const ServicesGrid: React.FC = () => {
  const { openAuditModal } = useAudit();

  return (
    <section className="py-20 md:py-28 bg-secondary/30 border-b border-border/40">
      <div className="container-x">
        {/* Section Header (DESIGN.md 5.3) */}
        <div className="grid md:grid-cols-12 md:items-end gap-6 mb-12">
          <div className="md:col-span-7 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              Conversion Engines
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-normal tracking-tight leading-[1.08]">
              Six Dedicated Engines <br />
              Engineered for British Trades.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base text-stone leading-relaxed">
              Every engine is built to solve one specific point of lead loss in local trade operations.
              Modular, turnkey, and live in 7 days.
            </p>
          </div>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.icon] || MapPin;

            return (
              <div
                key={service.id}
                className="rounded-sm border border-border bg-card p-6 md:p-7 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div>
                  {/* Card Top: Eyebrow + Icon + Metric Pill */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-border/60">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-sm bg-accent/10 text-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                        {service.eyebrow}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold text-foreground bg-secondary px-2.5 py-1 rounded-full border border-border/80">
                      <TrendingUp className="w-3 h-3 text-accent" />
                      <span>{service.metric.value}</span>
                    </div>
                  </div>

                  {/* Title & Blurb */}
                  <h3 className="font-display text-xl sm:text-2xl text-foreground font-normal tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone leading-relaxed mb-6">
                    {service.blurb}
                  </p>

                  {/* Deliverables / Bullets */}
                  <div className="space-y-2.5 pt-2 mb-6">
                    {service.bullets.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3 text-xs">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-stone hover:text-foreground font-medium flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => openAuditModal(service.title)}
                    className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground px-3.5 py-1.5 font-medium transition-all cursor-pointer text-xs"
                  >
                    Audit Engine
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
