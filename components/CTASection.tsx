"use client";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative w-full py-32 px-6 lg:px-8">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0,255,255,0.2), transparent 65%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto">
        <div 
          className="rounded-[40px] border border-[#14E8F0]/30 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm p-12 lg:p-20 text-center space-y-10 shadow-[0_0_60px_rgba(20,232,240,0.2)]"
        >
          {/* Heading */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] tracking-tight">
              <span className="text-[#F5F5F5]">Ready to unlock </span>
              <span 
                className="italic text-[#14E8F0]"
                style={{
                  textShadow: `
                    0 0 10px rgba(20,232,240,0.5),
                    0 0 30px rgba(20,232,240,0.2)
                  `
                }}
              >
                175+ opportunities?
              </span>
            </h2>
            <p className="text-white/75 text-lg lg:text-2xl leading-relaxed max-w-2xl mx-auto font-light">
              Join ambitious individuals taking their first step toward international 
              mobility through Erasmus+, Horizon Europe, and beyond.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/[0.08]">
            <div className="space-y-2">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-[#14E8F0]">
                1,800+
              </p>
              <p className="text-white/60 text-sm uppercase tracking-wider">
                Students Annually
              </p>
            </div>
            <div className="space-y-2 border-x border-white/[0.08]">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-[#14E8F0]">
                175+
              </p>
              <p className="text-white/60 text-sm uppercase tracking-wider">
                Opportunities
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-[#14E8F0]">
                2 Days
              </p>
              <p className="text-white/60 text-sm uppercase tracking-wider">
                Transform Future
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              className="bg-[#14E8F0] text-[#021326] hover:bg-[#14E8F0]/90 font-medium px-10 py-7 text-lg rounded-full shadow-[0_0_25px_rgba(20,232,240,0.4)] transition-all"
            >
              Secure Your Spot
            </Button>
            <Button 
              variant="outline"
              className="bg-transparent text-white border-white/30 hover:bg-white/10 font-medium px-10 py-7 text-lg rounded-full backdrop-blur-sm transition-all"
            >
              Download Brochure
            </Button>
          </div>

          {/* Trust Signal */}
          <p className="text-white/50 text-sm pt-4">
            📅 Deadline: 17/06/2026 • 💳 Payment: 20/06/2026 • 📧 Instant confirmation
          </p>
        </div>
      </div>
    </section>
  );
}
