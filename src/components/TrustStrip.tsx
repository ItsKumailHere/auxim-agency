import React from "react";
import { ShieldCheck, Target, FileCheck, Clock, CheckCircle2 } from "lucide-react";

interface TrustItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const trustItems: TrustItem[] = [
  { label: "UK Dedicated", icon: ShieldCheck },
  { label: "100% Conversion Focus", icon: Target },
  { label: "No Long-Term Contracts", icon: FileCheck },
  { label: "24/7 AI Response", icon: Clock },
  { label: "Done-For-You Setup", icon: CheckCircle2 },
];

export const TrustStrip: React.FC = () => {
  return (
    <section
      className="border-y border-border bg-secondary/50 py-4 overflow-hidden"
      aria-label="Trust highlights"
    >
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs uppercase tracking-widest text-stone font-medium">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2">
                <Icon className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-foreground/90 whitespace-nowrap">{item.label}</span>
                {idx < trustItems.length - 1 && (
                  <span
                    className="hidden lg:inline-block w-1 h-1 rounded-full bg-border ml-6"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
