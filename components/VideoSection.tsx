"use client";

export default function VideoSection() {
  const partners = [
    "Erasmus+",
    "Horizon Europe",
    "SALTO",
    "Eurodesk",
    "Youth Pass"
  ];

  return (
    <section id="video" className="relative w-full py-20 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Glow - from bottom */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at center bottom, rgba(0,255,255,0.18), transparent 65%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* Partners Strip */}
        <div className="border-b border-white/[0.08] pb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <h3 className="text-[#14E8F0] text-sm uppercase tracking-[0.2em] font-medium whitespace-nowrap">
              Global Partners
            </h3>
            <div className="flex flex-wrap items-center gap-6 md:gap-10 flex-1">
              {partners.map((partner, index) => (
                <span 
                  key={index}
                  className="font-serif text-lg text-white/55 hover:text-white/75 transition-colors cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium text-[#F5F5F5] leading-[1.2] tracking-tight">
              The experience{" "}
              <span 
                className="italic text-[#14E8F0]"
                style={{
                  textShadow: `
                    0 0 12px rgba(20,232,240,0.45),
                    0 0 30px rgba(20,232,240,0.2)
                  `
                }}
              >
                in action.
              </span>
            </h2>
          </div>

          <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-2xl font-light">
            See how past participants transformed their futures through international opportunities. 
            Over 1,800 students unlock global mobility programs each year—and you could be next.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative">
          <div 
            className="relative rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950"
          >
            {/* Video Placeholder - Replace with actual video embed */}
            <div className="aspect-video w-full flex items-center justify-center">
              {/* YouTube/Vimeo Embed Example */}
              {/* <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Event Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
              
              {/* Placeholder */}
              <div className="text-center space-y-4 p-12">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#14E8F0]/20 flex items-center justify-center backdrop-blur-sm">
                  <svg 
                    className="w-8 h-8 text-[#14E8F0]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/60 text-lg">Video Preview</p>
                <p className="text-white/40 text-sm max-w-md">
                  Replace this placeholder with your actual video embed code
                </p>
              </div>
            </div>
          </div>

          {/* Ambient Cyan Lighting under video */}
          <div 
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[70%] h-[200px] rounded-full pointer-events-none"
            style={{
              background: 'rgba(20,232,240,0.25)',
              filter: 'blur(120px)',
              zIndex: -1
            }}
          />
        </div>

        {/* Stats Bar Below Video */}
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
          <div className="text-center p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.08]">
            <p className="font-serif text-3xl lg:text-4xl font-bold text-[#14E8F0] mb-2">
              1,800+
            </p>
            <p className="text-white/60 text-sm">
              Annual Participants
            </p>
          </div>
          <div className="text-center p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.08]">
            <p className="font-serif text-3xl lg:text-4xl font-bold text-[#14E8F0] mb-2">
              175+
            </p>
            <p className="text-white/60 text-sm">
              Global Programs
            </p>
          </div>
          <div className="text-center p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.08]">
            <p className="font-serif text-3xl lg:text-4xl font-bold text-[#14E8F0] mb-2">
              90%+
            </p>
            <p className="text-white/60 text-sm">
              Success Rate
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
