import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { agencyData } from "../data/agency";
import { pagesContent } from "../data/pagesContent";

export const ContactPage: React.FC = () => {
  const content = pagesContent.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    contactName: "",
    businessName: "",
    trade: "Plumbing & Heating",
    phone: "",
    email: "",
    postcode: "",
    primaryGoal: "Full 5-Leak Conversion Suite (Recommended)",
    notes: "",
  });

  useEffect(() => {
    document.title = "Contact & Free Territory Audit · Auxim UK Trades";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Audit Request Received!", {
        description:
          "Thank you. Our UK trade specialists will analyze your local territory and contact you within 15 minutes during business hours.",
        duration: 6500,
      });

      // Reset form
      setFormData({
        contactName: "",
        businessName: "",
        trade: "Plumbing & Heating",
        phone: "",
        email: "",
        postcode: "",
        primaryGoal: "Full 5-Leak Conversion Suite (Recommended)",
        notes: "",
      });
    }, 700);
  };

  return (
    <div className="w-full">
      {/* 1. HERO HEADER */}
      <section className="py-16 md:py-20 bg-background border-b border-border/40">
        <div className="container-x">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-accent bg-accent/10 mb-6 border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              {content.eyebrow}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground font-normal tracking-tight leading-[1.04] text-balance">
              Ready to stop losing jobs to <br />
              <em className="not-italic text-accent">unanswered calls</em>?
            </h1>

            <p className="mt-6 text-base md:text-xl text-stone max-w-3xl leading-relaxed">
              {content.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN CONTACT & AUDIT SECTION */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* LEFT COLUMN: Direct channels, Phone, Response Promise, Coverage Areas (col-span-5) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Giant Display Phone Card */}
              <div className="p-7 rounded-sm bg-primary text-primary-foreground space-y-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                  Direct Line for UK Trades
                </div>
                <div>
                  <a
                    href={agencyData.phoneHref}
                    className="font-display text-3xl sm:text-4xl text-primary-foreground hover:text-accent transition-colors block tracking-tight"
                  >
                    {agencyData.phone}
                  </a>
                  <p className="text-xs text-primary-foreground/75 mt-2">
                    Mon - Fri: 8:00 AM - 6:00 PM GMT · 24/7 AI System Monitoring
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={agencyData.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-accent text-ink font-medium px-5 py-2.5 text-xs hover:bg-accent/90 transition-all shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Us Now</span>
                  </a>
                </div>
              </div>

              {/* Response Promise Card */}
              <div className="p-6 rounded-sm bg-secondary/70 border border-border space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-accent">
                  <Zap className="w-4 h-4" />
                  <span>{content.responsePromise.headline}</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  {content.responsePromise.description}
                </p>
                <div className="text-xs text-stone space-y-1 pt-1 border-t border-border/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span>Hours: {content.responsePromise.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-stone">
                  Direct Inquiries & Messaging
                </h3>

                <div className="space-y-2.5">
                  <a
                    href={`mailto:${agencyData.email}`}
                    className="p-4 rounded-sm border border-border bg-background hover:bg-secondary/40 transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-sm bg-accent/10 text-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-stone">Email Briefs & Inquiries</div>
                      <div className="text-sm font-medium text-foreground">{agencyData.email}</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/442080904120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-sm border border-border bg-background hover:bg-secondary/40 transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-sm bg-accent/10 text-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-stone">WhatsApp Interactive Demo</div>
                      <div className="text-sm font-medium text-foreground">Message On WhatsApp</div>
                    </div>
                  </a>

                  <div className="p-4 rounded-sm border border-border bg-background flex items-center gap-3">
                    <div className="w-9 h-9 rounded-sm bg-accent/10 text-accent flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-stone">Headquarters & Territory</div>
                      <div className="text-sm font-medium text-foreground">{agencyData.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* UK Coverage Regions */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-stone">
                  Active UK Trade Coverage Territories
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {content.coverageRegions.map((region, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-sm border border-border bg-background text-xs"
                    >
                      <div className="font-semibold text-foreground">{region.name}</div>
                      <div className="text-[11px] text-stone truncate mt-0.5">
                        {region.majorTowns.slice(0, 3).join(", ")}...
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Full Audit Inquiry Form (col-span-7) */}
            <div className="lg:col-span-7">
              <div className="rounded-sm border border-border bg-background p-6 sm:p-10 shadow-md">
                <div className="border-b border-border pb-6 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    5-Leak Territory Audit
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
                    Apply for 1 of 5 UK Pilot Charter Spots
                  </h2>
                  <p className="text-xs sm:text-sm text-stone mt-2">
                    Fill out your trade details below. We will analyze your Google Map Pack ranking, website speed, and missed call vulnerability within 15 minutes.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-foreground">
                      Audit Request Received!
                    </h3>
                    <p className="text-sm text-stone max-w-md mx-auto leading-relaxed">
                      Thank you. We have logged your request and our UK lead conversion specialists are currently assessing your trade territory. We will contact you via phone or email shortly.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="rounded-full bg-secondary text-foreground font-medium px-6 py-2.5 text-xs hover:bg-secondary/70 transition-all cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Contact Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Davies"
                          value={formData.contactName}
                          onChange={(e) =>
                            setFormData({ ...formData, contactName: e.target.value })
                          }
                          className="w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Apex Heating Ltd"
                          value={formData.businessName}
                          onChange={(e) =>
                            setFormData({ ...formData, businessName: e.target.value })
                          }
                          className="w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Trade & UK Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                          Primary Trade *
                        </label>
                        <select
                          value={formData.trade}
                          onChange={(e) =>
                            setFormData({ ...formData, trade: e.target.value })
                          }
                          className="w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        >
                          <option value="Plumbing & Heating">Plumbing & Heating</option>
                          <option value="Electrical & Smart Home">Electrical & Smart Home</option>
                          <option value="Roofing & Cladding">Roofing & Cladding</option>
                          <option value="Building & Joinery">Building & Joinery</option>
                          <option value="HVAC & Air Conditioning">HVAC & Air Conditioning</option>
                          <option value="Drainage & Sewerage">Drainage & Sewerage</option>
                          <option value="Landscaping & Tree Care">Landscaping & Tree Care</option>
                          <option value="Painting & Decorating">Painting & Decorating</option>
                          <option value="Other Trade Service">Other Trade Service</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                          UK Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 07123 456789"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Email & Postcode */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. john@apexheating.co.uk"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                          Postcode / Target Territory *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. SW19, Manchester, Leeds"
                          value={formData.postcode}
                          onChange={(e) =>
                            setFormData({ ...formData, postcode: e.target.value })
                          }
                          className="w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 4: Primary Goal Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                        Primary Focus / Biggest Revenue Leak
                      </label>
                      <select
                        value={formData.primaryGoal}
                        onChange={(e) =>
                          setFormData({ ...formData, primaryGoal: e.target.value })
                        }
                        className="w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      >
                        <option value="Full 5-Leak Conversion Suite (Recommended)">
                          Full 5-Leak Suite (Web + SMS Textback + WhatsApp AI + Reviews + GMB)
                        </option>
                        <option value="Missed Call TextBack AI">
                          Missed Call TextBack AI (Stop Dropping Emergency Calls)
                        </option>
                        <option value="GMB Map Pack Rank Engine">
                          GMB Map Pack Rank Engine (Dominate Local 3-Pack)
                        </option>
                        <option value="High-Converting Trade Website">
                          High-Converting Trade Website (Replace Slow WordPress Site)
                        </option>
                        <option value="24/7 WhatsApp AI Assistant">
                          24/7 WhatsApp AI Assistant (Capture Evening & Weekend Leads)
                        </option>
                        <option value="Automated Google Review Engine">
                          Automated Google Review Engine (Build 5-Star Reputation)
                        </option>
                      </select>
                    </div>

                    {/* Row 5: Notes / Situation */}
                    <div>
                      <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                        Current Setup & Goals (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your current call volume, website, or specific challenges with missed trade inquiries..."
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 rounded-full bg-primary text-primary-foreground font-medium py-3.5 px-6 text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shadow-xs"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Trade Territory Data...</span>
                        </>
                      ) : (
                        <>
                          <span>Claim Pilot Spot & Request Free Audit</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Guarantee / Privacy Note */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between gap-4 text-xs text-stone">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                    <span>30-Day Money-Back Guarantee</span>
                  </div>
                  <span>100% GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
