import React from "react";
import { HelpCircle, Mail, Globe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/landing/Navbar";
import FooterNew from "@/components/landing/FooterNew";
import PageHero from "@/components/landing/PageHero";
import Reveal from "@/components/landing/Reveal";

const faqs = [
  { q: "What is Drishte Infotech?", a: "Drishte Infotech is a technology and digital solutions company providing website, software, mobile application, e-commerce, digital marketing, AI, cloud, data, design, and related services." },
  { q: "What services does Drishte Infotech provide?", a: "We provide 11+ services including website development, mobile application development, software development, Shopify, WordPress, DecoNetwork, Wix Studio, social media marketing, AI solutions, data and privacy solutions, AWS/cloud services, big data, UI/UX, software testing, and support." },
  { q: "Do you work with startups and small businesses?", a: "Yes. We work with startups, small businesses, established businesses, and organizations." },
  { q: "Can you build a custom website?", a: "Yes. We can develop customized websites based on your business requirements, branding, features, integrations, and target audience." },
  { q: "Do you develop mobile applications?", a: "Yes. We provide mobile application development solutions based on project requirements and platform needs." },
  { q: "Do you provide Shopify development?", a: "Yes. We provide Shopify store development, customization, integration, and related e-commerce solutions." },
  { q: "Do you provide WordPress development?", a: "Yes. We provide WordPress website development, customization, maintenance, and related solutions." },
  { q: "Can you develop custom software?", a: "Yes. We develop customized software and business applications based on specific operational requirements." },
  { q: "Do you provide digital marketing services?", a: "Yes. We provide social media marketing and other digital marketing solutions designed according to the client's business goals." },
  { q: "Do you provide AI solutions?", a: "Yes. We can help businesses explore and implement AI-based solutions depending on their specific requirements." },
  { q: "Do you provide AWS and cloud services?", a: "Yes. We provide AWS and cloud-related solutions based on project requirements." },
  { q: "Do you provide software testing?", a: "Yes. Software testing and quality assurance services can be provided based on the project scope." },
  { q: "How can I request a quotation?", a: "You can contact Drishte Infotech through our website or email us at drishteinfotech@gmail.com. Please provide your requirements, and our team can review them and discuss the appropriate solution." },
  { q: "How much do your services cost?", a: "Pricing depends on the service, project scope, features, complexity, integrations, timeline, and support requirements. We provide customized quotations based on individual project requirements." },
  { q: "How long does a project take?", a: "Project timelines vary depending on scope and complexity. A timeline will be discussed and agreed upon before development begins." },
  { q: "Can I request additional features after the project starts?", a: "Yes. Additional requirements can be discussed. Features outside the original scope may require additional charges and development time." },
  { q: "Do you provide maintenance and support?", a: "Yes. Maintenance and support can be provided depending on the service package or project agreement." },
  { q: "Do you sign agreements or NDAs?", a: "Yes. Where required, project agreements and confidentiality arrangements can be discussed and executed between the parties." },
  { q: "Do you work with clients outside India?", a: "Yes. We can work with clients from different locations depending on project requirements, payment arrangements, applicable laws, and service availability." },
  { q: "How can I contact Drishte Infotech?", a: "Website: www.drishteinfotech.com | Email: drishteinfotech@gmail.com" },
];

export default function Faq() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow="Support"
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our services, process, pricing, and how we work with clients."
      />
      <main className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-b-0">
                    <AccordionTrigger className="px-6 py-5 hover:no-underline text-left">
                      <div className="flex items-start gap-3 pr-4">
                        <span className="grid place-items-center w-7 h-7 shrink-0 rounded-lg bg-primary/10 text-primary font-display font-bold text-xs tabular-nums mt-0.5">
                          {i + 1}
                        </span>
                        <span className="font-display font-medium text-sm sm:text-base">{item.q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base pl-10">{item.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-lg">Still have questions?</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">We're happy to help with any questions not covered here.</p>
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