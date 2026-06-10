"use client";

import { Plane, Building2, Users, Globe } from "lucide-react";

export default function ItalyBonusSection() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at center, rgba(20,232,240,0.15), transparent 60%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#14E8F0]/10 to-purple-600/10 rounded-[32px] border border-[#14E8F0]/30 p-10 lg:p-14 shadow-[0_0_60px_rgba(20,232,240,0.2)]">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14E8F0]/20 border border-[#14E8F0]/40 mb-6">
            <Plane className="w-4 h-4 text-[#14E8F0]" />
            <span className="text-[#14E8F0] text-xs uppercase tracking-[0.2em] font-semibold">
              Bonus Opportunity
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-medium text-[#F5F5F5] leading-[1.2] tracking-tight mb-4">
            Italy Immersion{" "}
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 12px rgba(20,232,240,0.5),
                  0 0 25px rgba(20,232,240,0.3)
                `
              }}
            >
              Experience
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            Participants won't only learn about opportunities.{" "}
            <span className="text-[#14E8F0] font-semibold">50 selected participants</span> will have the chance to join an international visit to Italy.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#14E8F0]/10 border border-[#14E8F0]/30 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-[#14E8F0]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1">
                  Visit Universities & Institutions
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Explore educational institutions and meet admissions teams firsthand
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#14E8F0]/10 border border-[#14E8F0]/30 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-[#14E8F0]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1">
                  Explore Study Opportunities
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Discover international study programs and application processes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#14E8F0]/10 border border-[#14E8F0]/30 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#14E8F0]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1">
                  Meet Experts & Professionals
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Network with professionals working in international environments
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#14E8F0]/10 border border-[#14E8F0]/30 flex items-center justify-center flex-shrink-0">
                <Plane className="w-6 h-6 text-[#14E8F0]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1">
                  Real International Exposure
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Your first direct step toward studying or building a career abroad
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 pt-8 border-t border-white/[0.1]">
            <p className="text-white/70 text-base lg:text-lg italic">
              For many participants, this may be their first direct step toward studying or building a career abroad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
