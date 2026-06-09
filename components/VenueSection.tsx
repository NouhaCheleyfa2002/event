"use client";

export default function VenueSection() {
  const sessions = [
    {
      group: "Group 1",
      dates: "29/06 → 30/06",
    },
    {
      group: "Group 2",
      dates: "30/06 → 01/07",
      featured: true
    },
    {
      group: "Group 3",
      dates: "01/07 → 02/07",
    }
  ];

  const includes = [
    { icon: "🏨", text: "One night accommodation" },
    { icon: "🍽️", text: "Lunch & dinner included" },
    { icon: "📍", text: "Venue in Sousse" },
    { icon: "📜", text: "Participation certificate" }
  ];

  return (
    <section className="relative w-full py-32 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0,255,255,0.15), transparent 60%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto space-y-20">
        
        {/* Section Heading */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.2] tracking-tight">
            <span className="text-[#F5F5F5]">Venue & </span>
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 10px rgba(20,232,240,0.4),
                  0 0 25px rgba(20,232,240,0.15)
                `
              }}
            >
              Experience.
            </span>
          </h2>
          <p className="text-white/75 text-lg lg:text-xl leading-relaxed font-light">
            Choose your session—each participant will be assigned to one group 
            for a comprehensive 2-day experience.
          </p>
        </div>

        {/* Session Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sessions.map((session, index) => (
            <div 
              key={index}
              className={`
                relative rounded-[24px] p-8 text-center transition-all duration-300
                ${session.featured 
                  ? 'bg-gradient-to-br from-[#14E8F0]/10 to-transparent border-2 border-[#14E8F0]/50 shadow-[0_0_30px_rgba(20,232,240,0.2)]' 
                  : 'bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15]'
                }
              `}
            >
              {session.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 rounded-full bg-[#14E8F0] text-[#021326] text-xs font-bold uppercase tracking-wider">
                    Recommended
                  </div>
                </div>
              )}
              <div className="space-y-4 pt-2">
                <h3 className="font-serif text-2xl font-medium text-[#F5F5F5]">
                  {session.group}
                </h3>
                <p className="text-[#14E8F0] text-lg font-medium">
                  {session.dates}
                </p>
                <p className="text-white/50 text-sm">
                  June 2026
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included Card */}
        <div className="rounded-[28px] border border-white/[0.1] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm p-12 lg:p-16 max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="font-serif text-3xl lg:text-4xl font-medium text-center text-[#F5F5F5] tracking-tight">
              What's <span className="italic text-[#14E8F0]">Included</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {includes.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-[16px] bg-white/[0.02] border border-white/[0.06]"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-white/80 text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Important Dates */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-center space-y-4">
                <p className="text-white/60 text-sm uppercase tracking-wider font-semibold">
                  Important Deadlines
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="text-center">
                    <p className="text-[#14E8F0] font-semibold text-lg">17/06/2026</p>
                    <p className="text-white/50 text-sm">Registration Closes</p>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-white/[0.1]" />
                  <div className="text-center">
                    <p className="text-[#14E8F0] font-semibold text-lg">20/06/2026</p>
                    <p className="text-white/50 text-sm">Payment Deadline</p>
                  </div>
                </div>
                <p className="text-white/40 text-xs pt-2">
                  Applications accepted on a first-come, first-served basis
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
