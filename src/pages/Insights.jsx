import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/FooterNew";
import Seo from "@/components/Seo";
import Reveal from "@/components/landing/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Globe, ShoppingCart, Search, Server, Smartphone } from "lucide-react";

const SITE_URL = "https://drishti-vision-labs.base44.app";

const topics = [
  { icon: Globe, title: "Website Performance", text: "Core Web Vitals, image optimisation, code splitting and CDN strategy that turn slow sites into fast ones." },
  { icon: ShoppingCart, title: "E-commerce Conversion", text: "Checkout flow design, payment gateway integration and product page structure that lifts conversion rates." },
  { icon: Search, title: "Local SEO for Indian Businesses", text: "Google Business Profile optimisation, local citations and region-specific content for cities like Vadodara, Ahmedabad and Surat." },
  { icon: Server, title: "Cloud Migration", text: "Moving legacy workloads to AWS with minimal downtime, cost control and security best practices." },
  { icon: Smartphone, title: "Mobile-First Design", text: "Responsive and PWA strategies that serve the majority-Indian audience browsing on mobile data." },
  { icon: Gauge, title: "Analytics & Measurement", text: "Event tracking, funnel analysis and dashboards that connect technical work to business outcomes." },
];

export default function Insights() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Web Development Insights — Drishte Infotech, Vadodara"
        description="Practical insights on web development, e-commerce, SEO, cloud migration and mobile-first design for businesses in Vadodara, Gujarat and across India. Learn what actually moves the needle."
        canonical={`${SITE_URL}/insights`}
        keywords="web development insights India, e-commerce conversion tips, local SEO Vadodara, cloud migration strategy, mobile-first design India"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Web Development Insights for Indian Businesses",
          author: { "@type": "Organization", name: "Drishte Infotech" },
          publisher: { "@type": "Organization", name: "Drishte Infotech" },
          description: "Practical guidance on web development, e-commerce, SEO, cloud and mobile-first design for businesses in India.",
          mainEntityOfPage: `${SITE_URL}/insights`,
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
                Insights
              </span>
              <h1 className="mt-6 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl leading-[1.1]">
                Web development insights for businesses that depend on the internet.
              </h1>
              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-pretty">
                <p>
                  Most businesses in India do not need more technology — they need the
                  right technology, applied well. A website that loads in under two
                  seconds, an e-commerce checkout that does not abandon customers, a
                  Google ranking that actually brings enquiries — these are not
                  mysteries. They are the result of deliberate, measurable work. This
                  page collects the insights Drishte Infotech shares with clients across
                  Vadodara, Gujarat and the wider Indian market.
                </p>
                <p>
                  Speed is the foundation. Google's Core Web Vitals — Largest
                  Contentful Paint, Interaction to Next Paint and Cumulative Layout
                  Shift — are not abstract metrics. They directly affect search ranking
                  and conversion. A site that takes four seconds to load loses a large
                  share of visitors before they see anything. We routinely cut load
                  times by half or more through image compression, code splitting,
                  caching and CDN configuration. The result is a site that feels
                  instant, ranks better and converts more.
                </p>
                <p>
                  E-commerce success in India hinges on trust and friction. Customers
                  want UPI, cash on delivery, clear returns and a checkout that works
                  on a slow mobile connection. We build Shopify and custom stores that
                  prioritise these realities — streamlined checkout, reliable payment
                  gateways, and product pages structured for both search engines and
                  human buyers. Conversion optimisation is not about adding pop-ups;
                  it is about removing obstacles.
                </p>
                <p>
                  Local SEO matters more than ever for Indian service businesses. A
                  dental clinic in Vadodara, a manufacturer in Ahmedabad, a retailer in
                  Surat — each can capture nearby demand through a well-optimised
                  Google Business Profile, consistent local citations and content that
                  speaks to the region. We help businesses appear in the local pack and
                  map results, where the majority of nearby searches convert.
                </p>
                <p>
                  Cloud migration, when done right, reduces cost and improves
                  reliability. But many teams rush it and end up with higher bills and
                  more downtime. The key is incremental migration, right-sizing
                  instances, and proper monitoring from day one. The same discipline
                  applies to mobile-first design: most Indian users arrive on mobile
                  data, so responsive layouts, progressive web app techniques and lean
                  assets are not optional — they are the baseline.
                </p>
                <p>
                  Finally, measurement closes the loop. Without event tracking and
                  clear dashboards, you cannot know whether your website or app is
                  working. We set up analytics that connect technical performance to
                  business outcomes — enquiries, orders, sign-ups — so decisions are
                  based on evidence, not guesswork.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-card border-y border-border">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl text-balance">
                Topics we work on every day
              </h2>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {topics.map((t) => (
                <Reveal key={t.title}>
                  <div className="group h-full rounded-2xl border border-border bg-background p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 card-hover">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <t.icon className="w-5 h-5" strokeWidth={2} />
                    </span>
                    <h3 className="mt-4 font-display font-semibold text-lg">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
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
                Have a project in mind?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Share what you want to build, improve or grow — we will point you
                toward the right next step.
              </p>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                Talk to us
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