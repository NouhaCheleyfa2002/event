"use client";

export default function AgendaSection() {
  const categories = [
    {
      title: "Education",
      items: [
        "Scholarships",
        "Erasmus+",
        "Master's Programs",
        "PhD Opportunities",
        "Academic Exchanges"
      ]
    },
    {
      title: "Career Development",
      items: [
        "International Internships",
        "Professional Exchanges",
        "Training Programs",
        "Leadership Programs"
      ]
    },
    {
      title: "Research",
      items: [
        "Research Grants",
        "International Collaborations",
        "Scientific Mobility Programs"
      ]
    },
    {
      title: "Entrepreneurship",
      items: [
        "Startup Funding",
        "Horizon Europe Programs",
        "Innovation Grants",
        "International Accelerators",
        "Investment Opportunities"
      ]
    }
  ];

  return (
    <section id="agenda" className="relative w-full py-20 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.2] tracking-tight">
            <span className="text-[#F5F5F5]">Not Just </span>
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 10px rgba(20,232,240,0.4),
                  0 0 25px rgba(20,232,240,0.15)
                `
              }}
            >
              Scholarships.
            </span>
          </h2>
          <p className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Most people think international mobility is only Erasmus. The reality is much bigger.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="space-y-6 p-8 rounded-[24px] bg-white/[0.02] border border-white/[0.08] hover:border-[#14E8F0]/30 hover:bg-white/[0.04] transition-all"
            >
              <div>
                <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[#14E8F0] tracking-tight mb-1">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#14E8F0] to-transparent rounded-full mt-3" />
              </div>

              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#14E8F0] mt-1 flex-shrink-0">•</span>
                    <span className="text-white/75 text-sm lg:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <p className="text-white/60 text-base lg:text-lg">
            Discover opportunities in <span className="text-[#14E8F0] font-semibold">Education</span>, <span className="text-[#14E8F0] font-semibold">Career Development</span>, <span className="text-[#14E8F0] font-semibold">Research</span>, and <span className="text-[#14E8F0] font-semibold">Entrepreneurship</span>
          </p>
        </div>

      </div>
    </section>
  );
}
