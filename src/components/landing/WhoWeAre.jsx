import React from "react";
import { Globe, Cloud, Boxes, ArrowRight } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const bullets = [
  { icon: Globe, title: "Business websites & e-commerce", desc: "Fast, conversion-focused platforms on WordPress, Shopify and Wix." },
  { icon: Cloud, title: "AWS / Cloud / DevOps", desc: "Architecture, migration and CI/CD that scales with demand." },
  { icon: Boxes, title: "ERP / Custom systems / SEO", desc: "Tailored software, integrations and growth marketing that compounds." },
];

const flow = ["Strategy", "Design", "Development", "Deployment", "Growth"];

export default function WhoWeAre() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Who We Are
            </span>
            <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              A hands-on team across the digital stack.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty max-w-xl">
              We work where websites, cloud infrastructure, software systems, and
              growth marketing meet. Instead of handing you a stack of disconnected
              tools, we own the whole journey — from first idea to the system that
              runs your business every day.
            </p>

            {/* Capability flow */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {flow.map((step, i) => (
                <React.Fragment key={step}>
                  <span className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground">
                    {step}
                  </span>
                  {i < flow.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />}
                </React.Fragment>
              ))}
            </div>
          </Reveal>

          {/* Right - capability cards */}
          <Stagger className="flex flex-col gap-4" gap={0.08}>
            {bullets.map((b) => (
              <StaggerItem key={b.title}>
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 card-hover hover:-translate-y-1">
                  <span className="grid place-items-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <b.icon className="w-6 h-6" strokeWidth={1.75} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}