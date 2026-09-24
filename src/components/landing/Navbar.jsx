import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Approach", to: "/approach" },
  { label: "Insights", to: "/insights" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to) => pathname === to;

  return (
    <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", scrolled ? "py-2" : "py-4")}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className={cn(
          "flex items-center justify-between rounded-lg px-4 sm:px-5 transition-all duration-300",
          scrolled ? "glass border border-border/70 shadow-sm h-14" : "bg-transparent h-16"
        )}>
          <Logo to="/" />

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  isActive(item.to) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:shadow-md hover:shadow-primary/25 hover:-translate-y-0.5 transition-all"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-xl border border-border bg-card"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-lg glass border border-border shadow-lg p-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive(item.to) ? "bg-primary/10 text-primary" : "hover:bg-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}