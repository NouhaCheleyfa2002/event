import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// import VideoSection from "@/components/VideoSection";
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
      {/* <VideoSection /> */}
      <StatsSection />
      <AgendaSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <Footer />
    </div>
  );
}
