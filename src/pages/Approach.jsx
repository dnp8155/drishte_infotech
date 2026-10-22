import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/FooterNew";
import Seo from "@/components/Seo";
import Reveal from "@/components/landing/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cloud, Smartphone, Search, Workflow, ShieldCheck } from "lucide-react";

const SITE_URL = "https://drishti-vision-labs.base44.app";

const capabilities = [
  { icon: Code2, title: "Web Platforms", text: "WordPress, Shopify, Wix and custom-built websites engineered for speed, accessibility and conversion." },
  { icon: Cloud, title: "Cloud & DevOps", text: "AWS architecture, CI/CD pipelines, containerisation and zero-downtime migration strategies." },
  { icon: Smartphone, title: "Mobile Apps", text: "Native iOS, Android and cross-platform Flutter apps with offline-first design." },
  { icon: Workflow, title: "Custom Systems", text: "ERP, internal tools and business software shaped around your exact workflows." },
  { icon: Search, title: "SEO & Marketing", text: "Technical SEO, local SEO, content strategy and performance marketing that drives measurable growth." },
  { icon: ShieldCheck, title: "Support & Monitoring", text: "Ongoing maintenance, security patching and proactive monitoring long after launch day." },
];

export default function Approach() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Our Approach — How Drishte Infotech Builds Software in Vadodara, India"
        description="Drishte Infotech's approach to software development: discovery, design, build, launch and growth. Learn how a Vadodara-based team delivers web platforms, cloud systems, mobile apps and SEO with measurable outcomes."
        canonical={`${SITE_URL}/approach`}
        keywords="software development approach India, web development methodology, Vadodara software company, custom software process, ERP development approach"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Our Approach to Software Development",
          author: { "@type": "Organization", name: "Drishte Infotech" },
          publisher: { "@type": "Organization", name: "Drishte Infotech" },
          description: "How Drishte Infotech plans, builds, launches and grows digital systems for businesses in India.",
          mainEntityOfPage: `${SITE_URL}/approach`,
        }}
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="absolute inset-0 -z-10 bg-grid [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)]" />
          <div className="absolute inset-0 -z-10 bg-radial-fade" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
                Our Approach
              </span>
              <h1 className="mt-6 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl leading-[1.1]">
                How Drishte Infotech builds software that businesses actually rely on.
              </h1>
              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-pretty">
                <p>
                  Drishte Infotech is a software development company based in Vadodara,
                  Gujarat, India. We help businesses plan, build, launch and improve
                  digital systems — from websites and e-commerce platforms to custom
                  ERP, mobile apps, cloud infrastructure and SEO. Our work is guided by
                  a single principle: technology should move your business forward, not
                  slow it down.
                </p>
                <p>
                  Every engagement begins with a discovery conversation. Before writing
                  a single line of code, we work to understand the business goal, the
                  current context and the constraints — budget, timeline, team
                  capacity and existing systems. This upfront clarity is what separates
                  a project that ships on time from one that drifts. We have seen too
                  many businesses invest in software that looked impressive in a demo
                  but never fit the real workflow. Our discovery step exists to prevent
                  that.
                </p>
                <p>
                  Once the goal is clear, we move into design and build. We favour
                  incremental delivery over big-bang launches — working in short cycles,
                  showing progress early and adjusting based on feedback. Whether we
                  are building a WordPress site, a Shopify store, a custom React
                  application, a Flutter mobile app or an AWS-hosted microservice, the
                  rhythm stays the same: build a little, validate, refine. This keeps
                  the project grounded in reality rather than assumption.
                </p>
                <p>
                  Launch is not the end — it is the beginning of the growth phase. A
                  website or app that nobody finds adds no value. That is why our
                  approach treats SEO, performance and analytics as first-class
                  concerns from day one, not an afterthought bolted on after launch.
                  We structure content for search engines, optimise Core Web Vitals,
                  set up local SEO signals for businesses serving specific cities or
                  regions, and instrument the right events so you can see what is
                  working and what is not.
                </p>
                <p>
                  Finally, we stay. Software needs maintenance, security patching,
                  monitoring and periodic improvement. We offer ongoing support
                  arrangements so the systems we build keep running reliably long
                  after launch day. For businesses in Vadodara, across Gujarat and
                  throughout India, that continuity is what makes the difference between
                  a vendor and a technology partner.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-card border-y border-border">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl text-balance">
                What we build
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                A summary of the capabilities we bring to every project.
              </p>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c) => (
                <Reveal key={c.title}>
                  <div className="group h-full rounded-2xl border border-border bg-background p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 card-hover">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <c.icon className="w-5 h-5" strokeWidth={2} />
                    </span>
                    <h3 className="mt-4 font-display font-semibold text-lg">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <Reveal>
              <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl text-balance">
                Want to discuss your project?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tell us what you want to build, improve, automate or grow. We will
                help you choose a sensible next step.
              </p>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                Start a project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}