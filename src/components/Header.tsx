import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, ArrowUpRight, Menu, X, ShieldCheck, Sun, Moon } from "lucide-react";
import { agencyData } from "../data/agency";
import { useAudit } from "../context/AuditContext";
import { useTheme } from "../context/ThemeContext";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openAuditModal } = useAudit();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Handle scroll detection for glass backdrop blur & border transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-background/80 backdrop-blur-xs border-b border-border/40"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        {/* Left: Brand Identity */}
        <Link
          to="/"
          className="flex items-center gap-3 group transition-transform focus:outline-none"
        >
          <div className="h-10 w-10 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-medium tracking-tight shadow-xs group-hover:scale-105 transition-transform duration-300">
            A
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-normal tracking-tight text-foreground">
                {agencyData.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full hidden sm:inline-block">
                UK Trades
              </span>
            </div>
            <span className="text-[10px] text-stone tracking-wide hidden sm:block">
              Conversion Systems
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors py-1 relative ${
                  isActive
                    ? "text-foreground font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-stone hover:text-foreground"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Desktop Phone & Pilot CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary text-foreground hover:scale-105 transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <a
            href={agencyData.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="tracking-tight">{agencyData.phone}</span>
          </a>

          <button
            onClick={() => openAuditModal()}
            className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-all shadow-xs flex items-center gap-1.5 cursor-pointer group"
          >
            <span>Claim Pilot Spot</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile: Hamburger Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href={agencyData.phoneHref}
            aria-label="Call Auxim"
            className="p-2.5 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2.5 rounded-sm text-foreground hover:bg-secondary transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-6 space-y-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-sm text-base font-medium transition-colors ${
                    isActive
                      ? "bg-secondary text-foreground font-semibold"
                      : "text-stone hover:text-foreground hover:bg-secondary/50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-border space-y-3">
            <a
              href={agencyData.phoneHref}
              className="w-full flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/80 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call {agencyData.phone}</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openAuditModal();
              }}
              className="w-full rounded-full bg-primary text-primary-foreground py-3 text-sm font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Claim Pilot Spot (3 Left)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-stone">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>30-Day Money-Back Conversion Guarantee</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
