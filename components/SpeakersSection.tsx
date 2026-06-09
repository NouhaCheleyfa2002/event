"use client";

export default function SpeakersSection() {
  const attendees = [
    {
      icon: "🎓",
      title: "Students",
      description: "University & Master's students seeking international opportunities",
    },
    {
      icon: "👨‍🎓",
      title: "Graduates",
      description: "Recent graduates & PhD candidates exploring global programs",
    },
    {
      icon: "🔬",
      title: "Researchers",
      description: "Academics seeking research funding and international collaboration",
    },
    {
      icon: "💼",
      title: "Professionals",
      description: "Project managers and professionals pursuing international careers",
    },
    {
      icon: "🚀",
      title: "Entrepreneurs",
      description: "Startup founders seeking funding and global expansion opportunities",
    },
    {
      icon: "👥",
      title: "Organizations",
      description: "Youth organizations, student clubs, and institutional representatives",
    }
  ];

  return (
    <section id="speakers" className="relative w-full py-32 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(0,255,255,0.12), transparent 60%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto space-y-20">
        
        {/* Section Heading */}
        <div className="space-y-6 max-w-3xl">
          <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.2] tracking-tight">
            <span className="text-[#F5F5F5]">Who should </span>
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 10px rgba(20,232,240,0.4),
                  0 0 25px rgba(20,232,240,0.15)
                `
              }}
            >
              attend?
            </span>
          </h2>
          <p className="text-white/75 text-lg lg:text-xl leading-relaxed font-light">
            This experience is designed for anyone seeking international opportunities—
            from students to entrepreneurs, researchers to professionals.
          </p>
        </div>

        {/* Attendees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attendees.map((attendee, index) => (
            <div 
              key={index}
              className="group relative rounded-[24px] bg-white/[0.02] border border-white/[0.08] p-8 hover:border-[#14E8F0]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(20,232,240,0.15)]"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="text-5xl">{attendee.icon}</div>
              </div>

              {/* Attendee Info */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-medium text-[#F5F5F5] group-hover:text-[#14E8F0] transition-colors">
                  {attendee.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {attendee.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
