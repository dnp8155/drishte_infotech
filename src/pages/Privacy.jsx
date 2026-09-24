import React from "react";
import { ShieldCheck, Mail, Globe } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import FooterNew from "@/components/landing/FooterNew";
import PageHero from "@/components/landing/PageHero";
import Reveal from "@/components/landing/Reveal";

const sections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "We may collect information that you voluntarily provide to us, including:",
    ],
    bullets: [
      "Name",
      "Email address",
      "Phone number",
      "Company or organization name",
      "Project requirements",
      "Business information",
      "Information submitted through contact forms",
      "Any other information you voluntarily provide to us",
    ],
    after: "We may also collect limited technical information such as browser type, device information, IP address, website usage information, and similar analytics information.",
  },
  {
    title: "How We Use Your Information",
    paragraphs: ["We may use collected information to:"],
    bullets: [
      "Respond to inquiries and requests",
      "Provide quotations and proposals",
      "Understand project requirements",
      "Deliver and manage our services",
      "Communicate regarding projects and services",
      "Provide customer support",
      "Improve our website and services",
      "Maintain website security",
      "Comply with applicable legal requirements",
    ],
  },
  {
    title: "Information Sharing",
    paragraphs: [
      "We do not sell or rent your personal information. We may share information with trusted third-party service providers when reasonably necessary to provide our services, operate our website, process payments, provide hosting, analytics, communication, or other business functions.",
      "We may also disclose information where required by applicable law or legal proceedings.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We take reasonable technical and organizational measures to protect information against unauthorized access, loss, misuse, alteration, or disclosure. However, no method of internet transmission or electronic storage can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "Our website or services may use third-party platforms, tools, hosting providers, analytics services, payment providers, APIs, or other external services. These third parties may have their own privacy policies and terms. Drishte Infotech is not responsible for the privacy practices of independent third-party websites or services.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "Our website may use cookies or similar technologies to improve functionality, understand website usage, remember preferences, and improve user experience. You may be able to control cookies through your browser settings.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain information only for as long as reasonably necessary for business, contractual, legal, security, or operational purposes.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Depending on applicable law, you may have rights relating to your personal information, including requesting access, correction, or deletion of certain information. To make a privacy-related request, contact us at drishteinfotech@gmail.com.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "Our website and services are not specifically directed toward children. We do not knowingly collect personal information from children for purposes that are prohibited by applicable law.",
    ],
  },
  {
    title: "Policy Updates",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any updated version will be published on this page with a revised \u201cLast Updated\u201d date.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have questions about this Privacy Policy, contact:",
    ],
    bullets: [
      "Drishte Infotech",
      "Email: drishteinfotech@gmail.com",
      "Website: www.drishteinfotech.com",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lastUpdated="September 10, 2026"
        subtitle="Drishte Infotech respects your privacy and is committed to protecting the information you provide when using our website and services."
      />
      <main className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="grid gap-8">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i * 0.03, 0.2)}>
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
                    {s.after && <p className="mt-3">{s.after}</p>}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-lg">Questions about your privacy?</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">We're happy to help with any privacy-related questions or requests.</p>
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