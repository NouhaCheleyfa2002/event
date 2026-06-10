"use client";

import { Calendar, TrendingUp } from "lucide-react";

export default function WhatMakesDifferentSection() {
  const duringEvent = [
    "Workshops",
    "Expert Guidance",
    "Networking Opportunities",
    "Opportunity Mapping"
  ];

  const afterEvent = [
    "Application Support",
    "Opportunity Recommendations",
    "Access To Templates & Resources",
    "Inclusion In The PCN Opportunity Database",
    "Email Notifications About Relevant Opportunities",
    "Continued Guidance For Future Applications"
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
      <div className="relative max-w-6xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#F5F5F5] leading-[1.2] tracking-tight">
            What Makes This{" "}
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 12px rgba(20,232,240,0.45),
                  0 0 30px rgba(20,232,240,0.2)
                `
              }}
            >
              Different
            </span>
          </h2>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto">
            Most Events Give Information. We Help You Take Action.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* During The Event */}
          <div className="p-8 lg:p-10 rounded-[28px] bg-white/[0.02] border border-white/[0.08] space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#14E8F0]/10 border border-[#14E8F0]/30 flex items-center justify-center">
                <Calendar className="w-7 h-7 text-[#14E8F0]" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[#F5F5F5]">
                During The Event
              </h3>
            </div>

            <ul className="space-y-4 pt-4">
              {duringEvent.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#14E8F0] text-xl flex-shrink-0 mt-1">✓</span>
                  <span className="text-white/80 text-base lg:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After The Event */}
          <div className="p-8 lg:p-10 rounded-[28px] bg-gradient-to-br from-[#14E8F0]/10 to-purple-600/10 border border-[#14E8F0]/30 space-y-6 shadow-[0_0_40px_rgba(20,232,240,0.15)]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#14E8F0]/20 border border-[#14E8F0]/40 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-[#14E8F0]" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[#F5F5F5]">
                After The Event
              </h3>
            </div>

            <ul className="space-y-4 pt-4">
              {afterEvent.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#14E8F0] text-xl flex-shrink-0 mt-1">✓</span>
                  <span className="text-white/90 text-base lg:text-lg leading-relaxed font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Emphasis */}
        <div className="text-center pt-8">
          <p className="text-[#14E8F0] text-xl lg:text-2xl font-semibold">
            The support doesn't stop after the event ends.
          </p>
        </div>

      </div>
    </section>
  );
}
