import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
import { FiveLeaks } from "../components/FiveLeaks";
import { ServicesGrid } from "../components/ServicesGrid";
import { LiveDemo } from "../components/LiveDemo";
import { RoiCalculator } from "../components/RoiCalculator";
import { PilotOffer } from "../components/PilotOffer";
import { FinalCTA } from "../components/FinalCTA";
import { agencyData } from "../data/agency";

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `${agencyData.name} · UK Local Business Conversion System | London & Nationwide`;
  }, []);

  return (
    <div className="w-full">
      {/* 1. Hero with Asymmetric Split & Missed Call AI Simulator */}
      <Hero />

      {/* 2. Full-width Trust Strip */}
      <TrustStrip />

      {/* 3. The 5 Revenue Leaks Interactive Comparison */}
      <FiveLeaks />

      {/* 4. Six Dedicated Conversion Engines Grid */}
      <ServicesGrid />

      {/* 5. Interactive Live Chat Sandbox */}
      <LiveDemo />

      {/* 6. Lost Revenue & ROI Calculator */}
      <RoiCalculator />

      {/* 7. 2026 Founder's Charter Pilot Offer */}
      <PilotOffer />

      {/* 8. Full-Bleed Final CTA Band */}
      <FinalCTA
        eyebrow="2026 Founder's Charter · 3 of 5 Pilot Spots Left"
        headline="Ready to stop losing UK trade jobs to unanswered calls?"
        subheadline="Join our exclusive trade pilot with our 30-Day 100% Risk-Free Guarantee. Turnkey setup completed in 7 business days."
        primaryCtaText="Claim Your Territory Spot"
      />
    </div>
  );
};

export default HomePage;
