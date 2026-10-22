import React from "react";
import { Link } from "react-router-dom";
import { Globe, Smartphone, Boxes, Cloud, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const tiles = [
  { icon: Globe, title: "Web", desc: "Websites & Web Applications" },
  { icon: Smartphone, title: "Mobile", desc: "Mobile Applications" },
  { icon: Boxes, title: "Business", desc: "ERP & Custom Software" },
  { icon: Cloud, title: "Cloud", desc: "Cloud & DevOps" },
  { icon: Sparkles, title: "AI", desc: "Automation & AI" },
  { icon: TrendingUp, title: "Growth", desc: "SEO & Digital Marketing" },
];

export default function WhatWeBuild() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What We Build
          </span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            From digital experiences to business infrastructure.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" gap={0.05}>
          {tiles.map((t) => (
            <StaggerItem key={t.title}>
              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 card-hover hover:-translate-y-0.5 hover:border-primary/40">
                <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <t.icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-sm">{t.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Explore all services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}