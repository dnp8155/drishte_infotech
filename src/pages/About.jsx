import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, CheckCircle2, Mail, Globe, Sparkles } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import FooterNew from "@/components/landing/FooterNew";
import PageHero from "@/components/landing/PageHero";
import Reveal from "@/components/landing/Reveal";

const services = [
  "Website Development", "Mobile Application Development", "Custom Software Development",
  "Shopify Store Development", "WordPress Development", "DecoNetwork Solutions",
  "Wix Studio Development", "Social Media Marketing", "Artificial Intelligence Solutions",
  "Data & Privacy Solutions", "AWS & Cloud Services", "Big Data Solutions",
  "UI/UX and Digital Design", "Software Testing and Support",
];

const whyChoose = [
  "Customized solutions based on business requirements",
  "Professional and business-focused approach",
  "Modern technology and development practices",
  "Scalable solutions for growing businesses",
  "Transparent communication",
  "Focus on quality and timely delivery",
  "Post-development support and maintenance",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow="About Us"
        title="Welcome to Drishte Infotech"
        subtitle="A technology and digital solutions company focused on helping businesses build, improve, and grow their digital presence."
      />

      <main className="pb-20">
        {/* Intro */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Reveal>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
                Drishte Infotech provides professional technology solutions for startups, small
                businesses, enterprises, and organizations. Our goal is to combine technology,
                creativity, and business understanding to deliver practical and scalable solutions.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 sm:py-16 bg-muted/30 border-y border-border">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-balance">
                Our Services
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                Drishte Infotech offers 11+ technology and digital services, including:
              </p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((s, i) => (
                <Reveal key={s} delay={Math.min(i * 0.02, 0.15)}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 card-hover">
                    <span className="grid place-items-center w-8 h-8 shrink-0 rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium">{s}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-balance">
                Why Choose Drishte Infotech?
              </h2>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {whyChoose.map((w, i) => (
                <Reveal key={w} delay={Math.min(i * 0.03, 0.15)}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground/90 leading-relaxed">{w}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-12 sm:py-16 bg-slate-950 text-white">
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 h-full">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/15 text-primary mb-5">
                    <Eye className="w-6 h-6" />
                  </span>
                  <h3 className="font-display font-bold text-2xl">Our Vision</h3>
                  <p className="mt-3 text-slate-300 leading-relaxed">
                    To become a trusted technology partner for businesses by delivering innovative,
                    reliable, and cost-effective digital solutions.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 h-full">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/15 text-primary mb-5">
                    <Target className="w-6 h-6" />
                  </span>
                  <h3 className="font-display font-bold text-2xl">Our Mission</h3>
                  <p className="mt-3 text-slate-300 leading-relaxed">
                    To help businesses use technology effectively to improve operations, strengthen
                    their online presence, reach more customers, and achieve sustainable growth.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Reveal>
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 sm:p-12 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Sparkles className="w-3.5 h-3.5" /> Contact Us
                </span>
                <h2 className="mt-5 font-display font-bold tracking-tight text-3xl sm:text-4xl text-balance">
                  Let's discuss your next project
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  For project inquiries, partnerships, or service-related questions, reach out to us.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="mailto:drishteinfotech@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Email Us
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <a href="mailto:drishteinfotech@gmail.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" /> drishteinfotech@gmail.com
                  </a>
                  <a href="https://www.drishteinfotech.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    <Globe className="w-4 h-4" /> www.drishteinfotech.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <FooterNew />
    </div>
  );
}