import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ItalyBonusSection from "@/components/ItalyBonusSection";
import SponsorsSection from "@/components/SponsorsSection";
import StatsSection from "@/components/StatsSection";
import AgendaSection from "@/components/AgendaSection";
import WhyPeopleFailSection from "@/components/WhyPeopleFailSection";
import WhatMakesDifferentSection from "@/components/WhatMakesDifferentSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#021326]">
      <Navbar />
      <HeroSection />
      <ItalyBonusSection />
      <SponsorsSection />
      <StatsSection />
      <AgendaSection />
      <WhyPeopleFailSection />
      <WhatMakesDifferentSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
