import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustStrip from "@/components/landing/TrustStrip";
import ServicesSection from "@/components/landing/ServicesSection";
import ServicesGrid from "@/components/landing/ServicesGrid";
import FeaturedCapability from "@/components/landing/FeaturedCapability";
import ProcessSection from "@/components/landing/ProcessSection";
import TechStack from "@/components/landing/TechStack";
import WhyChooseUs from "@/components/landing/WhyChooseUsNew";
import CTASection from "@/components/landing/CTASectionNew";
import Footer from "@/components/landing/FooterNew";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <ServicesGrid />
        <FeaturedCapability />
        <ProcessSection />
        <TechStack />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}