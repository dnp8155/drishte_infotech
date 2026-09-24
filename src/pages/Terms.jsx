import React from "react";
import { FileText, Mail, Globe } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import FooterNew from "@/components/landing/FooterNew";
import PageHero from "@/components/landing/PageHero";
import Reveal from "@/components/landing/Reveal";

const sections = [
  {
    title: "Services",
    paragraphs: [
      "Drishte Infotech provides technology, software development, website development, mobile application development, e-commerce, digital marketing, cloud, AI, data, design, testing, and related services. The exact scope, deliverables, timeline, pricing, and responsibilities for a project will be agreed upon separately through a quotation, proposal, agreement, purchase order, or other written communication.",
    ],
  },
  {
    title: "Project Requirements",
    paragraphs: [
      "Clients are responsible for providing accurate information, content, credentials, approvals, branding materials, access, and other resources reasonably required to complete a project. Delays in receiving required information, approvals, payments, or access may affect project timelines.",
    ],
  },
  {
    title: "Pricing and Payment",
    paragraphs: [
      "Project pricing is based on the agreed scope and requirements. Payment terms will be specified in the applicable quotation, invoice, proposal, or agreement. Additional features or requirements outside the agreed scope may result in additional charges.",
    ],
  },
  {
    title: "Changes to Project Scope",
    paragraphs: [
      "Any request that changes or expands the original project scope may require additional time and charges. Drishte Infotech may provide a revised quotation or estimate before implementing additional requirements.",
    ],
  },
  {
    title: "Delivery",
    paragraphs: [
      "Estimated delivery timelines will be communicated based on the project scope. Timelines may change due to client-side delays, third-party dependencies, changes in requirements, technical issues, or circumstances beyond our reasonable control.",
    ],
  },
  {
    title: "Client Responsibilities",
    paragraphs: [
      "The client is responsible for ensuring that materials, content, images, trademarks, documents, data, and other information supplied to Drishte Infotech are legally permitted to be used. The client remains responsible for obtaining necessary licenses and permissions for third-party content supplied by them.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "Ownership and usage rights for project deliverables will depend on the terms agreed in the relevant quotation, proposal, invoice, or agreement. Unless otherwise agreed, third-party software, libraries, plugins, APIs, themes, fonts, stock assets, and platforms remain subject to their respective licenses and terms.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "Projects may depend on third-party platforms such as Shopify, AWS, Google services, payment gateways, hosting providers, APIs, social media platforms, domain providers, or other services. Drishte Infotech does not control third-party platforms and cannot guarantee uninterrupted availability or changes made by those providers.",
    ],
  },
  {
    title: "Website and Software Availability",
    paragraphs: [
      "We aim to provide reliable services, but we do not guarantee that websites, applications, servers, APIs, or other systems will always be uninterrupted, error-free, or available.",
    ],
  },
  {
    title: "Support and Maintenance",
    paragraphs: [
      "Support and maintenance will be provided according to the package or agreement selected by the client. Any support outside the agreed scope may be charged separately.",
    ],
  },
  {
    title: "Cancellation and Refunds",
    paragraphs: [
      "Cancellation and refund terms will depend on the applicable quotation, agreement, work completed, expenses incurred, and payment terms agreed with the client. Work already completed or costs already incurred may not be refundable.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, Drishte Infotech will not be responsible for indirect, incidental, consequential, or business losses arising from the use of our website, software, services, or third-party platforms.",
    ],
  },
  {
    title: "Confidentiality",
    paragraphs: [
      "We respect confidential business and project information shared by clients. Where required, confidentiality obligations may be governed by a separate Non-Disclosure Agreement or project agreement.",
    ],
  },
  {
    title: "Acceptable Use",
    paragraphs: [
      "Users must not use our website or services for unlawful activities, fraud, malicious activities, unauthorized access, distribution of harmful software, or activities that violate applicable laws.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "Drishte Infotech may suspend or terminate access to services where there is a material breach of these Terms, non-payment, misuse of services, or other legitimate business or legal reasons.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms shall be governed by the applicable laws of India. Any dispute shall be subject to the jurisdiction of the appropriate courts having jurisdiction over the applicable location.",
    ],
  },
  {
    title: "Changes to Terms",
    paragraphs: [
      "Drishte Infotech may update these Terms from time to time. Updated Terms will be published on this page.",
    ],
  },
  {
    title: "Contact",
    paragraphs: ["For questions regarding these Terms:"],
    bullets: [
      "Drishte Infotech",
      "Email: drishteinfotech@gmail.com",
      "Website: www.drishteinfotech.com",
    ],
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lastUpdated="September 10, 2026"
        subtitle="These Terms govern your use of the Drishte Infotech website and the services we provide. By accessing our website or engaging our services, you agree to these Terms."
      />
      <main className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="grid gap-6">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i * 0.02, 0.15)}>
                <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 shrink-0 rounded-lg bg-primary/10 text-primary font-display font-bold text-sm tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display font-semibold tracking-tight text-xl sm:text-2xl">{s.title}</h2>
                  </div>
                  <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {s.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
                    {s.bullets && (
                      <ul className="mt-2 space-y-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-lg">Have questions about our Terms?</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">We're happy to clarify any part of these Terms before you engage our services.</p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <a href="mailto:drishteinfotech@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                      <Mail className="w-4 h-4" /> drishteinfotech@gmail.com
                    </a>
                    <a href="https://www.drishteinfotech.com" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                      <Globe className="w-4 h-4" /> www.drishteinfotech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <FooterNew />
    </div>
  );
}