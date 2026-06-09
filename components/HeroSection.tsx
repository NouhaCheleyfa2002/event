"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const handleViewProgram = () => {
    window.open("https://app.notion.com/p/International-Mobility-Global-Opportunities-Experience-378d7bbf56208068bed8c700148dc3c6?source=copy_link", "_blank");
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] py-16 px-6 lg:px-8">
      {/* Background Glow Effect */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 65% 40%, rgba(0,255,255,0.18), transparent 60%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="bg-[#021326]/40 rounded-[40px] border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Event Badge */}
              <div className="inline-block">
                <div className="px-4 py-2 rounded-full border border-[#14E8F0] bg-transparent">
                  <span className="text-[#14E8F0] text-xs uppercase tracking-[0.2em] font-medium">
                    Sousse • June 2026
                  </span>
                </div>
              </div>

              {/* Hero Headline */}
              <div className="space-y-2">
                <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-medium text-[#F5F5F5] leading-[1.1] tracking-tight">
                  2 Days That Could
                </h1>
                <h1 
                  className="font-serif italic text-5xl lg:text-6xl xl:text-7xl font-medium text-[#14E8F0] leading-[1.1] tracking-tight"
                  style={{
                    textShadow: `
                      0 0 10px rgba(20,232,240,0.5),
                      0 0 20px rgba(20,232,240,0.4),
                      0 0 40px rgba(20,232,240,0.25)
                    `
                  }}
                >
                  Change Your Future.
                </h1>
              </div>

              {/* Supporting Text */}
              <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-xl font-light">
                Unlock access to international opportunities through Erasmus+, Horizon Europe, 
                and 175+ mobility programs. Learn how to find them, apply successfully, and fund your global journey.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={scrollToPricing}
                  className="bg-[#14E8F0] text-[#021326] hover:bg-[#14E8F0]/90 font-medium px-8 py-6 text-base rounded-full shadow-[0_0_20px_rgba(20,232,240,0.35)] transition-all"
                >
                  Get Your Ticket
                </Button>
                <Button 
                  onClick={handleViewProgram}
                  variant="outline"
                  className="bg-white/5 text-white border-white/20 hover:bg-white/10 font-medium px-8 py-6 text-base rounded-full backdrop-blur-sm transition-all"
                >
                  View Program
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Video */}
            <div className="relative">
              <div 
                className="relative rounded-[30px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                style={{
                  filter: 'brightness(0.85) contrast(1.1)'
                }}
              >
                {/* Video Background */}
                <div className="aspect-[4/5] relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Optional: Add a subtle cyan overlay for brand consistency */}
                  <div className="absolute inset-0 bg-[#14E8F0]/10 mix-blend-overlay" />
                </div>
              </div>

              {/* Ambient Lighting Effect */}
              <div 
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-[200px] rounded-full"
                style={{
                  background: 'rgba(20,232,240,0.25)',
                  filter: 'blur(120px)',
                  zIndex: -1
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
