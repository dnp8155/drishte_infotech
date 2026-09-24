import React from "react";
import { ArrowRight, Globe, Cloud, Sparkles, TrendingUp, Server, Check } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: "100+", label: "Happy Clients" },
  { value: "250+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime Focus" },
  { value: "10+", label: "Years Experience" },
];

const featureCards = [
  { icon: Globe, title: "Web Platforms", desc: "WordPress, Shopify & Wix Studio builds that load fast and convert." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS architecture, migration and CI/CD pipelines that scale." },
];

function DashboardMockup() {
  return (
    <div className="relative">
      {/* glow behind */}
      <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-purple-500/10 blur-3xl rounded-full" />

      {/* main browser card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden"
      >
        {/* browser bar */}
        <div className="flex items-center gap-2 px-4 h-10 border-b border-border bg-muted/40">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <div className="ml-3 h-5 flex-1 max-w-[200px] rounded-md bg-background border border-border" />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">System status</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-display font-semibold text-sm">All systems operational</span>
              </div>
            </div>
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary/10 text-primary">
              <Server className="w-5 h-5" />
            </span>
          </div>

          {/* mini chart */}
          <div className="mt-5 rounded-xl border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Uptime · 30 days</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500">
                <TrendingUp className="w-3.5 h-3.5" /> 99.98%
              </span>
            </div>
            <div className="mt-3 flex items-end gap-1.5 h-16">
              {[40, 65, 50, 80, 60, 90, 70, 95, 75, 88, 100, 92].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/30 to-primary"
                />
              ))}
            </div>
          </div>

          {/* checklist */}
          <div className="mt-4 space-y-2.5">
            {["CI/CD pipeline healthy", "SSL renewed", "Backup verified"].map((t) => (
              <div key={t} className="flex items-center gap-2.5 text-sm">
                <span className="grid place-items-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-500">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className="text-foreground/80">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* floating badge 1 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -left-6 sm:-left-10 top-16 animate-float"
      >
        <div className="rounded-2xl border border-border bg-card shadow-xl shadow-primary/10 px-4 py-3 flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-500">
            <Check className="w-5 h-5" strokeWidth={3} />
          </span>
          <div>
            <div className="text-xs text-muted-foreground">Deploy</div>
            <div className="font-display font-semibold text-sm">Shipped ✓</div>
          </div>
        </div>
      </motion.div>

      {/* floating badge 2 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -right-4 sm:-right-8 bottom-12 animate-float-slow"
      >
        <div className="rounded-2xl border border-border bg-card shadow-xl shadow-primary/10 px-4 py-3 flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary/15 text-primary">
            <TrendingUp className="w-5 h-5" />
          </span>
          <div>
            <div className="text-xs text-muted-foreground">Conversion</div>
            <div className="font-display font-semibold text-sm">+18.2%</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="absolute -top-24 -right-24 -z-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-40 -left-32 -z-10 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                Your Growth. Our Technology.
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display font-bold tracking-tight text-balance text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05]">
                Digital infrastructure with{" "}
                <span className="gradient-text">one team.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 text-base sm:text-lg text-muted-foreground text-pretty max-w-xl leading-relaxed">
                Drishti Infotech helps businesses move faster with modern websites,
                cloud systems, mobile apps, ERP solutions, SEO, and digital marketing
                built around measurable outcomes.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-accent transition-colors"
                >
                  Explore Services
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right - dashboard mockup */}
          <div className="hidden lg:block">
            <DashboardMockup />
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid sm:grid-cols-2 gap-4 max-w-3xl lg:max-w-none lg:grid-cols-4">
          {featureCards.concat([
            { icon: Server, title: "Custom Systems", desc: "ERP, workflows and integrations tailored to your team." },
            { icon: TrendingUp, title: "Growth Marketing", desc: "SEO, PPC and content engineered around pipeline." },
          ]).map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 card-hover hover:-translate-y-1">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <card.icon className="w-6 h-6" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display font-semibold text-lg">{card.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="bg-card px-6 py-8 text-center h-full">
                <div className="font-display font-bold text-3xl sm:text-4xl text-primary">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="mt-1.5 text-xs sm:text-sm text-muted-foreground font-medium">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}