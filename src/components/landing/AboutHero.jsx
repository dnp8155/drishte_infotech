import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { value: "100+", label: "Happy Clients" },
  { value: "250+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
];

const sparkPoints = "0,18 14,14 28,16 42,8 56,10 70,4 84,6 100,2";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-radial-fade" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h1 className="mt-6 font-display font-bold tracking-tight text-balance text-[2.6rem] sm:text-5xl lg:text-[64px] leading-[1.05]">
              Technology partner for{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                practical business growth
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed max-w-xl">
              Drishte Infotech helps businesses plan, build, launch, and improve
              digital systems that are reliable, scalable, and easy to keep moving
              forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                Work With Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-accent transition-colors"
              >
                View Services
              </Link>
            </div>
          </Reveal>

          {/* Right - company impact dashboard */}
          <Reveal delay={0.15} className="relative">
            <div className="relative">
              <div className="absolute inset-0 -z-10 blur-3xl bg-primary/12 rounded-full" />

              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5">
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
                    <span className="text-xs font-semibold text-foreground">Building for growth</span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">Company Impact</span>
                </div>

                {/* Metrics */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-border bg-muted/40 p-4 text-center">
                      <div className="font-display font-bold text-2xl sm:text-3xl text-primary tabular-nums leading-none">
                        {s.value}
                      </div>
                      <div className="mt-2 text-[10px] sm:text-[11px] text-muted-foreground font-medium leading-tight">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini graph */}
                <div className="mt-4 rounded-xl border border-border bg-muted/40 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      Growth Trajectory
                    </div>
                    <span className="text-xs font-semibold text-emerald-500">+18.2%</span>
                  </div>
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="mt-3 w-full h-12">
                    <defs>
                      <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(219 100% 50%)" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="hsl(219 100% 50%)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polyline
                      points={sparkPoints}
                      fill="none"
                      stroke="hsl(219 100% 50%)"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polygon
                      points={`${sparkPoints} 100,20 0,20`}
                      fill="url(#sparkFill)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}