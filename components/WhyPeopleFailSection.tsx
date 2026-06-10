"use client";

import { X, CheckCircle2 } from "lucide-react";

export default function WhyPeopleFailSection() {
  const mistakes = [
    "Don't know where to find opportunities",
    "Apply too late",
    "Use weak applications",
    "Don't understand what selection committees want",
    "Have nobody to guide them"
  ];

  return (
    <section className="relative w-full py-20 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,0,80,0.08), transparent 60%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#F5F5F5] leading-[1.2] tracking-tight">
            Why Most People{" "}
            <span 
              className="italic text-red-400"
              style={{
                textShadow: `
                  0 0 12px rgba(248,113,113,0.4),
                  0 0 30px rgba(248,113,113,0.2)
                `
              }}
            >
              Never Get Accepted
            </span>
          </h2>
        </div>

        {/* Mistakes List */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-xl mb-6">Because they:</h3>
            {mistakes.map((mistake, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 rounded-[16px] bg-red-500/5 border border-red-500/20"
              >
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-base leading-relaxed">
                  {mistake}
                </p>
              </div>
            ))}
          </div>

          {/* Solution */}
          <div className="flex flex-col justify-center p-8 lg:p-10 rounded-[24px] bg-gradient-to-br from-[#14E8F0]/10 to-purple-600/10 border border-[#14E8F0]/30">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#14E8F0]/20 border border-[#14E8F0]/40 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#14E8F0]" />
              </div>
              
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[#F5F5F5] leading-tight">
                During this experience, you'll work directly with experts who help participants avoid these mistakes and increase their chances of success.
              </h3>

              <div className="pt-4 border-t border-white/[0.1]">
                <p className="text-[#14E8F0] font-semibold text-lg">
                  And unlike most events…
                </p>
                <p className="text-white/80 text-base mt-2">
                  The support doesn't stop after the event ends.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
