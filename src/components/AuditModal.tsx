import React, { useState, useEffect } from "react";
import { X, Sparkles, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useAudit } from "../context/AuditContext";
import { servicesData } from "../data/services";

export const AuditModal: React.FC = () => {
  const { isAuditModalOpen, closeAuditModal, selectedService } = useAudit();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    businessName: "",
    trade: "Plumbing & Heating",
    phone: "",
    postcode: "",
    selectedGoal: "Full 5-Leak Conversion Suite (Recommended)",
  });

  useEffect(() => {
    if (selectedService) {
      // Find matching service title if available
      const match = servicesData.find(
        (s) =>
          s.id.toLowerCase() === selectedService.toLowerCase() ||
          s.title.toLowerCase().includes(selectedService.toLowerCase())
      );
      setFormData((prev) => ({
        ...prev,
        selectedGoal: match ? match.title : selectedService,
      }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (isAuditModalOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeAuditModal();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
      setIsSubmitted(false);
    }
  }, [isAuditModalOpen, closeAuditModal]);

  if (!isAuditModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Free Territory Audit Requested!", {
        description:
          "We will analyze your trade territory and deliver your custom 5-Leak Audit within 24 hours.",
        duration: 6000,
      });

      setTimeout(() => {
        closeAuditModal();
        setFormData({
          businessName: "",
          trade: "Plumbing & Heating",
          phone: "",
          postcode: "",
          selectedGoal: "Full 5-Leak Conversion Suite (Recommended)",
        });
        setIsSubmitted(false);
      }, 1800);
    }, 650);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-xs overflow-y-auto animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAuditModal();
      }}
    >
      <div className="relative w-full max-w-lg bg-card text-card-foreground rounded-sm border border-border p-6 md:p-8 shadow-2xl my-8 max-h-[92vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={closeAuditModal}
          aria-label="Close audit modal"
          className="absolute top-4 right-4 p-2 rounded-full text-stone hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground">
              Audit Scheduled!
            </h3>
            <p className="text-sm text-stone max-w-sm mx-auto">
              We have received your business details. Our UK trade specialists will review your
              local Google presence and send your 5-Leak territory report within 24 hours.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 mb-2">
                <Sparkles className="w-3 h-3" />
                Free 5-Leak UK Trade Audit
              </div>
              <h2
                id="audit-modal-title"
                className="font-display text-2xl md:text-3xl text-foreground leading-tight"
              >
                Claim Your Free Territory Audit & Pilot Spot
              </h2>
              <p className="text-xs md:text-sm text-stone mt-2 leading-relaxed">
                Discover exactly how many calls your trade business is dropping each month and how our
                7-day turnkey system secures them. No hard pitch. 100% free.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Heating & Plumbing Ltd"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  className="w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Primary Trade *
                  </label>
                  <select
                    value={formData.trade}
                    onChange={(e) =>
                      setFormData({ ...formData, trade: e.target.value })
                    }
                    className="w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  >
                    <option value="Plumbing & Heating">Plumbing & Heating</option>
                    <option value="Electrical & Smart Home">Electrical & Smart Home</option>
                    <option value="Roofing & Cladding">Roofing & Cladding</option>
                    <option value="Building & Joinery">Building & Joinery</option>
                    <option value="HVAC & Air Conditioning">HVAC & Air Conditioning</option>
                    <option value="Drainage & Sewerage">Drainage & Sewerage</option>
                    <option value="Landscaping & Tree Care">Landscaping & Tree Care</option>
                    <option value="Painting & Decorating">Painting & Decorating</option>
                    <option value="Other Local Trade Service">Other Local Trade Service</option>
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
                    className="w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Postcode / City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SW19 or Birmingham"
                    value={formData.postcode}
                    onChange={(e) =>
                      setFormData({ ...formData, postcode: e.target.value })
                    }
                    className="w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Primary Goal
                  </label>
                  <select
                    value={formData.selectedGoal}
                    onChange={(e) =>
                      setFormData({ ...formData, selectedGoal: e.target.value })
                    }
                    className="w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  >
                    <option value="Full 5-Leak Conversion Suite (Recommended)">
                      Full 5-Leak Suite (All Engines)
                    </option>
                    <option value="Missed Call TextBack AI">
                      Missed Call TextBack AI
                    </option>
                    <option value="GMB Map Pack Rank Engine">
                      GMB Map Pack Rank Engine
                    </option>
                    <option value="High-Converting Trade Website">
                      High-Converting Trade Website
                    </option>
                    <option value="24/7 WhatsApp AI Assistant">
                      24/7 WhatsApp AI Assistant
                    </option>
                    <option value="Automated Google Review Engine">
                      Automated Google Review Engine
                    </option>
                    <option value="Local SEO & Geo Schema Engine">
                      Local SEO & Geo Schema Engine
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 rounded-full bg-primary text-primary-foreground font-medium py-3 px-6 text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shadow-xs"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Trade Territory...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Free Territory Audit</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            {/* Footer Trust Note */}
            <div className="mt-5 pt-4 border-t border-border flex items-center justify-center gap-2 text-xs text-stone">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>
                100% confidential. No spam. Backed by our 30-Day Conversion Guarantee.
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuditModal;
