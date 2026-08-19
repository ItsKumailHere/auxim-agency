import React from "react";
import { Phone, Sparkles } from "lucide-react";
import { agencyData } from "../data/agency";
import { useAudit } from "../context/AuditContext";

export const MobileCallBar: React.FC = () => {
  const { openAuditModal } = useAudit();

  return (
    <div
      className="fixed bottom-0 inset-x-0 lg:hidden z-40 bg-background/95 backdrop-blur-md border-t border-border p-3 grid grid-cols-2 gap-3 shadow-lg"
      role="region"
      aria-label="Mobile quick actions"
    >
      {/* Left button: Direct Telephone Call */}
      <a
        href={agencyData.phoneHref}
        className="flex items-center justify-center gap-2 rounded-full border border-border bg-secondary text-foreground py-3 px-4 text-sm font-medium hover:bg-secondary/80 active:scale-95 transition-all shadow-xs"
        aria-label={`Call ${agencyData.phone}`}
      >
        <Phone className="w-4 h-4 text-primary shrink-0" />
        <span className="truncate">Call Now</span>
      </a>

      {/* Right button: Trigger Audit Modal */}
      <button
        onClick={() => openAuditModal()}
        className="flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3 px-4 text-sm font-medium hover:bg-primary/90 active:scale-95 transition-all shadow-xs cursor-pointer"
        aria-label="Request free territory audit"
      >
        <Sparkles className="w-4 h-4 text-accent shrink-0" />
        <span className="truncate">Free Audit</span>
      </button>
    </div>
  );
};

export default MobileCallBar;
