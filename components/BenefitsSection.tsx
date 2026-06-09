"use client";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "🎯",
      title: "Understand the Ecosystem",
      description: "Master how international mobility programs work and the landscape of global opportunities"
    },
    {
      icon: "🔍",
      title: "Discover Programs",
      description: "Find scholarships, internships, exchanges, grants, and startup funding that match your profile"
    },
    {
      icon: "📝",
      title: "Winning Applications",
      description: "Build application strategies with templates and documents from successful candidates"
    },
    {
      icon: "👥",
      title: "Expert Guidance",
      description: "Direct access to international cooperation experts during and after the event"
    },
    {
      icon: "💼",
      title: "Startup Funding",
      description: "Learn how to access funding for your projects, startups, and initiatives"
    },
    {
      icon: "🌍",
      title: "Continued Support",
      description: "Receive guidance for future applications with alerts, resources, and recommendations"
    }
  ];

  const deliverables = [
    "Motivation letter frameworks",
    "Personalized opportunity roadmap",
    "Application templates & documents",
    "Access to experts for future guidance",
    "Network of ambitious participants"
  ];

  return (
    <section className="relative w-full py-32 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 30% 60%, rgba(0,255,255,0.12), transparent 60%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto space-y-20">
        
        {/* Section Heading */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.2] tracking-tight">
            <span className="text-[#F5F5F5]">What you'll </span>
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 10px rgba(20,232,240,0.4),
                  0 0 25px rgba(20,232,240,0.15)
                `
              }}
            >
              gain.
            </span>
          </h2>
          <p className="text-white/75 text-lg lg:text-xl leading-relaxed font-light">
            Most participants spend months trying to find this information. 
            You'll leave with it organized, explained, and ready to use.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative rounded-[24px] bg-white/[0.02] border border-white/[0.08] p-8 hover:border-[#14E8F0]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(20,232,240,0.15)]"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{benefit.icon}</div>

              {/* Benefit Info */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-medium text-[#F5F5F5] group-hover:text-[#14E8F0] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What You'll Leave With */}
        <div className="rounded-[28px] border border-white/[0.1] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm p-12 lg:p-16">
          <div className="space-y-8">
            <h3 className="font-serif text-3xl lg:text-4xl font-medium text-[#F5F5F5] tracking-tight text-center">
              What You'll <span className="italic text-[#14E8F0]">Leave With</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#14E8F0] text-xl mt-0.5">✓</span>
                  <p className="text-white/80 text-base lg:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
