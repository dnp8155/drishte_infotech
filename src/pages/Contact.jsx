import React from "react";
import Navbar from "@/components/landing/Navbar";
import ContactHero from "@/components/landing/ContactHero";
import ContactBenefits from "@/components/landing/ContactBenefits";
import ContactProcess from "@/components/landing/ContactProcess";
import ServicesCTA from "@/components/landing/ServicesCTA";
import Footer from "@/components/landing/FooterNew";
import Seo from "@/components/Seo";

const SITE_URL = "https://drishti-vision-labs.base44.app";

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Drishte Infotech",
  description:
    "Web development, cloud & DevOps, custom ERP systems, mobile apps, SEO and digital marketing company in Vadodara, Gujarat, India.",
  url: SITE_URL,
  telephone: "+91-8469811808",
  email: "tmaharshi7@gmail.com",
  image: `${SITE_URL}/og-contact.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.3072,
    longitude: 73.1812,
  },
  areaServed: [
    { "@type": "City", name: "Vadodara" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.linkedin.com/",
    "https://twitter.com/",
    "https://github.com/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & DevOps" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom ERP Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
    ],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contact Drishte Infotech — Web, Cloud, ERP, SEO in Vadodara, Gujarat"
        description="Contact Drishte Infotech in Vadodara, Gujarat for web development, cloud & DevOps, custom ERP systems, mobile apps, SEO and digital marketing. Call +91 84698 11808 or send a project inquiry."
        canonical={`${SITE_URL}/contact`}
        keywords="contact Drishte Infotech, web development Vadodara, SEO company Gujarat, software company India, ERP development, mobile app development, cloud DevOps services"
        jsonLd={[localBusinessLd, breadcrumbLd]}
      />
      <Navbar />
      <main>
        <ContactHero />
        <ContactBenefits />
        <ContactProcess />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}