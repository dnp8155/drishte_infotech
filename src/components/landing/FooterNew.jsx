import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Twitter, Linkedin, Github } from "lucide-react";
import Logo from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Team", to: "/about" },
      { label: "Careers", to: "/contact" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software", to: "/services" },
      { label: "Web Development", to: "/services" },
      { label: "Mobile Apps", to: "/services" },
      { label: "Cloud & DevOps", to: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", to: "/about" },
      { label: "Insights", to: "/insights" },
      { label: "FAQs", to: "/faq" },
      { label: "Support", to: "/contact" },
    ],
  },
];

const socials = [Twitter, Linkedin, Github];

export default function FooterNew() {
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
    <footer className="relative z-0 overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute inset-0 bg-grid-dark [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Large statement */}
        <div className="pt-20 pb-16 border-b border-slate-800">
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
            Let's build what's next.
          </h2>
          <p className="mt-6 text-slate-400 max-w-md leading-relaxed">
            Your growth, our technology. We build digital products, business systems
            and technology solutions designed to move businesses forward.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center w-9 h-9 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links + newsletter */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 py-12 border-b border-slate-800">
          <div className="grid sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-semibold text-sm text-white">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-slate-400 hover:text-primary transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:justify-self-end w-full max-w-md">
            <h4 className="font-display font-semibold text-sm text-white">Stay ahead of what's next.</h4>
            <p className="mt-2 text-sm text-slate-400">
              Insights on growth, tech and launches — once a month, no spam.
            </p>
            <form onSubmit={subscribe} className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:flex-1 rounded-lg bg-slate-900 border border-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground whitespace-nowrap shrink-0 hover:bg-primary/90 transition-colors"
              >
                {done ? "Joined ✓" : "Subscribe"}
                {!done && <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo to="/" light />
          <p className="text-xs text-slate-500">© 2026 Drishte Infotech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-slate-500 hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-slate-500 hover:text-primary transition-colors">Terms</Link>
            <Link to="/faq" className="text-xs text-slate-500 hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}