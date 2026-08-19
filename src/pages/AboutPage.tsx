import React, { useEffect } from "react";
import {
  Target,
  Zap,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Quote,
  Clock,
  Award,
} from "lucide-react";
import { pagesContent } from "../data/pagesContent";
import { agencyData } from "../data/agency";
import { useAudit } from "../context/AuditContext";
import { FinalCTA } from "../components/FinalCTA";

const valueIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target: Target,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Wrench: Wrench,
};

export const AboutPage: React.FC = () => {
  const { openAuditModal } = useAudit();
  const content = pagesContent.about;

  useEffect(() => {
    document.title = "About Auxim · UK Local Trade Conversion Specialists";
  }, []);

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
              Engineered specifically for <br />
              <em className="not-italic text-accent">British trade businesses</em>.
            </h1>

            <p className="mt-6 text-base md:text-xl text-stone max-w-3xl leading-relaxed">
              {content.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. AGENCY ORIGIN & STORY */}
      <section className="py-16 md:py-24 bg-card border-b border-border/60">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading & Key Trade Reality */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                Our Mission & Origins
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground font-normal tracking-tight leading-tight">
                {content.story.title}
              </h2>
              <div className="p-6 rounded-sm bg-secondary/70 border border-border space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-accent">
                  <Clock className="w-4 h-4" />
                  <span>The 62% Call-Loss Reality</span>
                </div>
                <p className="text-xs sm:text-sm text-stone leading-relaxed">
                  When a boiler fails or a roof leaks in the UK, homeowners call the top 3 Google listings. If nobody answers within 3 rings, they simply hang up and dial the next business. Voicemails are rarely left.
                </p>
              </div>

              {/* Founder Stats Mini-strip */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-sm border border-border bg-background">
                  <div className="font-display text-3xl text-foreground">7 Days</div>
                  <div className="text-xs text-stone mt-1">Live Turnkey Setup</div>
                </div>
                <div className="p-4 rounded-sm border border-border bg-background">
                  <div className="font-display text-3xl text-foreground">&lt; 5 Secs</div>
                  <div className="text-xs text-stone mt-1">Missed-Call Auto Response</div>
                </div>
              </div>
            </div>

            {/* Right Column: In-depth Story Paragraphs */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-foreground/85 leading-relaxed">
              {content.story.paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openAuditModal()}
                  className="rounded-full bg-primary text-primary-foreground font-medium px-6 py-3 text-sm hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Request Free 5-Leak Territory Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={agencyData.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call {agencyData.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE VALUES */}
      <section className="py-16 md:py-24 bg-background border-b border-border/40">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-accent bg-accent/10 mb-4 border border-accent/20">
              <Award className="w-3.5 h-3.5" />
              Core Operating Principles
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-normal tracking-tight">
              Four Standards That Govern Everything We Build
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone leading-relaxed">
              We reject the wasteful, opaque practices of traditional web design agencies in favor of verifiable lead capture and technical speed.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.values.map((val) => {
              const Icon = valueIconMap[val.icon] || Target;

              return (
                <div
                  key={val.number}
                  className="rounded-sm border border-border bg-card p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
                      <span className="font-display text-2xl text-accent font-normal">
                        {val.number}
                      </span>
                      <div className="w-9 h-9 rounded-sm bg-accent/10 text-accent flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl text-foreground font-normal tracking-tight mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                      {val.shortDescription}
                    </p>
                    <p className="text-xs sm:text-sm text-stone leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FOUNDER MESSAGE & GUARANTEE CARD */}
      <section className="py-16 md:py-24 bg-secondary/30 border-b border-border/60">
        <div className="container-x max-w-5xl">
          <div className="rounded-sm border border-border bg-card p-8 sm:p-12 shadow-md relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent">
                    {content.founder.title}
                  </div>
                  <div className="text-xs text-stone">
                    {content.founder.name} · {content.founder.role}
                  </div>
                </div>
              </div>

              {/* Quote text in display font */}
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-foreground font-normal leading-snug border-l-2 border-accent pl-6 italic">
                "{content.founder.quote}"
              </blockquote>

              {/* Message Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-3xl">
                {content.founder.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Written 100% Risk-Free Guarantee Statement */}
              <div className="p-6 rounded-sm bg-accent/10 border border-accent/30 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-accent">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                  <span>The Auxim 30-Day Money-Back Guarantee</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground font-medium leading-relaxed">
                  {agencyData.guarantee}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE AUXIM STANDARD / COMMITMENTS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-x max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-accent bg-accent/10 mb-4 border border-accent/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Operational Commitments
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-normal tracking-tight">
              {content.promise.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone leading-relaxed">
              {content.promise.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {content.promise.commitments.map((commitment, idx) => (
              <div
                key={idx}
                className="p-5 rounded-sm border border-border bg-card flex items-start gap-3 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-foreground font-medium leading-relaxed">
                  {commitment}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL FULL-BLEED CTA BAND */}
      <FinalCTA
        eyebrow="2026 Founder's Charter · 3 of 5 Pilot Spots Left"
        headline="Partner with Auxim to protect and grow your trade revenue."
        subheadline="Join UK plumbers, electricians, and tradespeople who converted missed calls into verified monthly profits."
        primaryCtaText="Claim Your Pilot Spot"
      />
    </div>
  );
};

export default AboutPage;
