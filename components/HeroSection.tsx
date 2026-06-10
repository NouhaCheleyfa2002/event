"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const handleViewProgram = () => {
    window.open("https://app.notion.com/p/International-Mobility-Global-Opportunities-Experience-378d7bbf56208068bed8c700168dc3c6?source=copy_link", "_blank");
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    "Scholarships & Erasmus Programs",
    "International Internships & Exchanges",
    "Research & Academic Opportunities",
    "Startup Funding & Innovation Programs",
    "Direct Access to International Cooperation Experts",
    "Guidance Even After The Event",
    "Opportunity Alerts Based On Your Profile"
  ];

  return (
    <section className="relative w-full min-h-[90vh] py-20 px-6 lg:px-8">
      {/* Background Glow Effect */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(0,255,255,0.15), transparent 60%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto">
        <div className="relative bg-[#021326]/40 rounded-[40px] border border-white/[0.12] shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden">
          
          {/* Video Background - ONLY inside the container */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content */}
          <div className="relative z-10 p-10 lg:p-16">
            <div className="space-y-8 text-center">
              
              {/* Hero Headline */}
              <div className="space-y-4">
                <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium text-[#F5F5F5] leading-[1.1] tracking-tight">
                  Discover International Opportunities{" "}
                  <span 
                    className="italic text-[#14E8F0] block mt-2"
                    style={{
                      textShadow: `
                        0 0 10px rgba(20,232,240,0.6),
                        0 0 20px rgba(20,232,240,0.4),
                        0 0 40px rgba(20,232,240,0.25)
                      `
                    }}
                  >
                    Most Tunisians Never Hear About
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl font-serif text-white/95 leading-relaxed max-w-3xl mx-auto">
                Scholarships. Erasmus+. International Internships. Research Programs. Startup Funding. Global Careers.
              </p>

              {/* Supporting Text */}
              <p className="text-white/80 text-base lg:text-lg leading-relaxed font-light max-w-3xl mx-auto">
                In just 2 days, you'll learn how to identify the opportunities that fit your profile, build stronger applications, access international experts, and create your roadmap toward studying, working, researching, or building a business internationally.
              </p>

              {/* Benefits List */}
              <div className="grid sm:grid-cols-2 gap-3 pt-4 max-w-3xl mx-auto text-left">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#021326]/60 rounded-lg p-3 border border-white/[0.08] backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#14E8F0] flex-shrink-0 mt-0.5" />
                    <span className="text-white/85 text-sm lg:text-base">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Event Details Badge */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#14E8F0]/40 bg-[#021326]/70 backdrop-blur-sm">
                  <span className="text-[#14E8F0] text-sm font-semibold">📍 Sousse | June 2026</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-red-500/40 bg-[#021326]/70 backdrop-blur-sm">
                  <span className="text-red-400 text-sm font-semibold">🎯 Limited Seats Available</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Button 
                  onClick={scrollToPricing}
                  className="bg-[#14E8F0] text-[#021326] hover:bg-[#14E8F0]/90 font-semibold px-10 py-7 text-lg rounded-full shadow-[0_0_30px_rgba(20,232,240,0.4)] transition-all"
                >
                  Reserve Your Spot
                </Button>
                <Button 
                  onClick={handleViewProgram}
                  variant="outline"
                  className="bg-[#021326]/70 text-white border-white/30 hover:bg-[#021326]/90 font-semibold px-10 py-7 text-lg rounded-full backdrop-blur-sm transition-all"
                >
                  View Full Program
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
