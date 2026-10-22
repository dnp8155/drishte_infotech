import React, { useState } from "react";
import { ArrowRight, Hexagon, Send } from "lucide-react";

const company = ["About Us", "Our Team", "Careers", "Contact"];
const services = [
  "Custom Software",
  "Web & Mobile Apps",
  "Cloud & DevOps",
  "SEO & Marketing",
  "ERP Solutions",
  "Support",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <footer id="footer" className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
        {/* Top: brand + newsletter */}
        <div className="grid lg:grid-cols-2 gap-10 pb-12 border-b border-white/10">
          <div className="max-w-md">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
                <Hexagon className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="font-display font-bold tracking-tight text-base">
                Drishti<span className="text-primary"> Infotech</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Your growth, our technology. We help businesses move faster with
              modern websites, cloud, mobile apps and digital marketing built
              around measurable outcomes.
            </p>
          </div>

          <div className="lg:justify-self-end w-full max-w-md">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider">
              Subscribe to our newsletter
            </h4>
            <p className="mt-2 text-sm text-white/60">
              Insights on growth, tech and launches — once a month, no spam.
            </p>
            <form onSubmit={subscribe} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 rounded-full bg-white/10 border border-white/15 px-5 py-3 text-sm placeholder:text-white/40 outline-none focus:border-primary focus:bg-white/15 transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {done ? "Joined ✓" : "Join"}
                {!done && <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="grid sm:grid-cols-3 gap-10 py-12">
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {company.map((l) => (
                <li key={l}>
                  <a href="#home" className="text-sm text-white/60 hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80">
              Services
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-y-3 gap-x-4">
              {services.map((l) => (
                <li key={l}>
                  <a href="#services" className="text-sm text-white/60 hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80">
              Get in touch
            </h4>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Ready to move faster? Let's talk about your next launch.
            </p>
            <a
              href="#home"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © 2026 Drishti Infotech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Security"].map((l) => (
              <a key={l} href="#home" className="text-xs text-white/50 hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}