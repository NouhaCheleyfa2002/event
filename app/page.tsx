import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";
import StatsSection from "@/components/StatsSection";
import AgendaSection from "@/components/AgendaSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#021326]">
      <Navbar />
      <HeroSection />
      <SponsorsSection />
      <StatsSection />
      <AgendaSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <Footer />
    </div>
  );
}
