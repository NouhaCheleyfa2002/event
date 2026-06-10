"use client";

import Image from "next/image";

export default function SponsorsSection() {
  const sponsors = [
    { name: "Milanda", logo: "/milanda.png" },
    { name: "Knowvaris", logo: "/knowvaris logo.PNG" },
    { name: "AVS", logo: "/avs.PNG" },
    { name: "Synergia", logo: "/synergia.webp" },
    { name: "Tari", logo: "/tari.png?v=2" },
    { name: "TASTFID", logo: "/TASTFID.jpg" },
  ];

  return (
    <section id="sponsors" className="relative w-full py-20 px-6 lg:px-8 border-t border-white/[0.08]">
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
            Trusted by{" "}
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 12px rgba(20,232,240,0.45),
                  0 0 30px rgba(20,232,240,0.2)
                `
              }}
            >
              Leading Partners
            </span>
          </h2>
          <p className="text-white/60 text-base lg:text-lg max-w-2xl mx-auto">
            Collaborating with top organizations to bring you world-class opportunities
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="group relative aspect-[3/2] rounded-[20px] bg-white/[0.95] border border-white/[0.2] hover:border-[#14E8F0]/50 hover:bg-white transition-all duration-300 overflow-hidden p-4 sm:p-6 lg:p-8 flex items-center justify-center"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(20,232,240,0.15), transparent 70%)'
                }}
              />
              
              {/* Logo Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain p-2 sm:p-3 lg:p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center pt-8">
          <p className="text-white/40 text-sm">
            Join 1,800+ participants who've unlocked global opportunities
          </p>
        </div>

      </div>
    </section>
  );
}
