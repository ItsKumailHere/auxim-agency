import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { agencyData } from "../data/agency";
import { servicesData } from "../data/services";
import { useAudit } from "../context/AuditContext";

export const Footer: React.FC = () => {
  const { openAuditModal } = useAudit();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-background pt-16 pb-12 border-t border-border/20">
      <div className="container-x">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-background/15">
          {/* Column 1: Brand & Purpose (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none">
              <div className="h-9 w-9 rounded-sm bg-accent text-ink flex items-center justify-center font-display text-lg font-medium tracking-tight group-hover:scale-105 transition-transform">
                A
              </div>
              <span className="font-display text-2xl font-normal tracking-tight text-background">
                {agencyData.name}
              </span>
            </Link>

            <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
              {agencyData.tagline}
            </p>

            <p className="text-sm text-background/70 leading-relaxed max-w-sm">
              {agencyData.shortDescription}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-background/60">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span>{agencyData.address}</span>
            </div>
          </div>

          {/* Column 2: Conversion Engines (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-lg text-background font-normal tracking-tight">
              Conversion Engines
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-background/70 hover:text-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-lg text-background font-normal tracking-tight">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-background/70 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-background/70 hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-background/70 hover:text-accent transition-colors"
                >
                  About Auxim
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-background/70 hover:text-accent transition-colors"
                >
                  Contact & Audit
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-background/70 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-background/70 hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Territory Audit (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-lg text-background font-normal tracking-tight">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={agencyData.phoneHref}
                className="flex items-center gap-2.5 text-background/80 hover:text-accent transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-background/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-ink transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium tracking-tight">{agencyData.phone}</span>
              </a>

              <a
                href={`mailto:${agencyData.email}`}
                className="flex items-center gap-2.5 text-background/80 hover:text-accent transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-background/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-ink transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{agencyData.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-background/60 text-xs pt-1">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>{agencyData.hours}</span>
              </div>
            </div>

            {/* Quick Action in Footer */}
            <div className="pt-2">
              <button
                onClick={() => openAuditModal()}
                className="w-full rounded-full bg-accent text-ink font-medium px-4 py-2.5 text-xs hover:bg-accent/90 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Claim Free Territory Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Hairline Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/60">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {agencyData.legalName}. Registered in England & Wales.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <div className="hidden sm:flex items-center gap-1.5 text-background/50 pl-2 border-l border-background/20">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>UK Trade Conversion System</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
