import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Cloud,
  Boxes,
  Smartphone,
  Search,
  Megaphone,
  Check,
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Globe,
    title: "Web Platforms",
    desc: "Business websites, e-commerce stores, and CMS platforms that are fast, secure, and easy to manage.",
    badges: ["WordPress", "Shopify", "Wix Studio"],
    color: "bg-blue-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable cloud infrastructure, migrations, automation, and reliable DevOps practices on AWS.",
    badges: ["AWS Cloud", "Migration", "DevOps"],
    color: "bg-sky-500",
  },
  {
    icon: Boxes,
    title: "Custom Systems",
    desc: "ERP, internal platforms, and workflow-first applications that reduce manual work and improve productivity.",
    badges: ["ERP Solutions", "Workflows", "Integrations"],
    color: "bg-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Cross-platform mobile apps for iOS and Android that deliver smooth experiences and real business value.",
    badges: ["iOS App", "Android App", "Flutter"],
    color: "bg-violet-500",
  },
  {
    icon: Search,
    title: "SEO Services",
    desc: "Technical SEO, on-page, off-page, and content strategies that improve rankings and bring qualified traffic.",
    badges: ["On-Page SEO", "Technical SEO", "Link Building"],
    color: "bg-amber-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven campaigns and content strategies that increase visibility, leads, and conversions.",
    badges: ["PPC Campaigns", "Social Media", "Content Marketing"],
    color: "bg-pink-500",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Header row */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-blue-100 bg-white px-3.5 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-semibold text-blue-600">
                Our Services
              </span>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            >
              View all 11+ services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-balance text-slate-900 max-w-3xl">
            Expert solutions for every{" "}
            <span className="text-primary">digital challenge</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed max-w-2xl text-pretty">
            From web platforms to cloud infrastructure, custom systems to growth
            marketing — we cover the full digital stack under one roof.
          </p>
        </Reveal>

        {/* 3x2 service grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:shadow-blue-100/50 hover:border-blue-200 transition-all">
                {/* Decorative gradient */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-blue-50/60 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  {/* Icon */}
                  <span
                    className={`grid place-items-center w-11 h-11 rounded-full ${s.color} text-white shadow-sm`}
                  >
                    <s.icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 font-display font-semibold text-lg text-slate-900">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {s.desc}
                  </p>

                  {/* Sub-service badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.badges.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        <Check className="w-3 h-3 text-slate-400" strokeWidth={2.5} />
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}