"use client";

import { CheckCircle2 } from "lucide-react";

export default function StatsSection() {
  const outcomes = [
    "A personalized roadmap of international opportunities that fit your profile",
    "A stronger application strategy for scholarships, internships, and international programs",
    "Motivation letter templates and application resources",
    "Access to international cooperation experts",
    "A network of ambitious students, researchers, entrepreneurs, and professionals",
    "Access to future opportunities through the PCN database",
    "Direct email notifications when opportunities matching your profile become available",
    "Clear understanding of how to access startup funding, grants, and international programs worth thousands or even millions of euros"
  ];

  return (
    <section className="relative w-full py-20 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,255,255,0.12), transparent 60%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#F5F5F5] leading-[1.2] tracking-tight">
            What You'll{" "}
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 12px rgba(20,232,240,0.45),
                  0 0 30px rgba(20,232,240,0.2)
                `
              }}
            >
              Leave With
            </span>
          </h2>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.08] hover:border-[#14E8F0]/30 hover:bg-white/[0.04] transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-[#14E8F0] flex-shrink-0 mt-0.5" />
              <p className="text-white/80 text-base leading-relaxed">
                {outcome}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
