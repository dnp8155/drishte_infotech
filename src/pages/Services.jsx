import React from "react";
import Navbar from "@/components/landing/Navbar";
import ServicesHero from "@/components/landing/ServicesHero";
import LogoCloud from "@/components/landing/LogoCloud";
import CapabilityStack from "@/components/landing/CapabilityStack";
import HowWeHelp from "@/components/landing/HowWeHelp";
import FeaturedService from "@/components/landing/FeaturedService";
import CustomSolution from "@/components/landing/CustomSolution";
import ServicesCTA from "@/components/landing/ServicesCTA";
import Footer from "@/components/landing/FooterNew";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ServicesHero />
        <LogoCloud />
        <CapabilityStack />
        <HowWeHelp />
        <FeaturedService />
        <CustomSolution />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}