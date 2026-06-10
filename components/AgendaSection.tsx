"use client";

export default function AgendaSection() {
  const agenda = {
    day01: {
      title: "Discovering Opportunities",
      items: [
        "The World of International Mobility",
        "Types of opportunities: Exchanges, scholarships, internships, research",
        "How successful candidates position themselves",
        "Interactive workshop: Mapping your goals",
        "Identifying opportunities matching your profile"
      ]
    },
    day02: {
      title: "Building Your Application",
      items: [
        "What selection committees look for",
        "Standing out from other applicants",
        "Common mistakes that cause rejections",
        "Interview preparation techniques",
        "International networking strategies",
        "Accessing startup & project funding"
      ]
    }
  };

  return (
    <section id="agenda" className="relative w-full py-20 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.2] tracking-tight">
            <span className="text-[#F5F5F5]">Two Days. </span>
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 10px rgba(20,232,240,0.4),
                  0 0 25px rgba(20,232,240,0.15)
                `
              }}
            >
              175+ Opportunities.
            </span>
          </h2>
        </div>

        {/* Agenda Card */}
        <div 
          className="rounded-[28px] border border-white/[0.08] bg-white/[0.01] backdrop-blur-sm p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Day 01 */}
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-[#14E8F0] text-xs uppercase tracking-[0.25em] font-semibold">
                  Day 01
                </p>
                <h3 className="font-serif text-3xl lg:text-4xl font-medium text-[#F5F5F5] tracking-tight">
                  {agenda.day01.title}
                </h3>
                <p className="text-white/50 text-sm uppercase tracking-wider">
                  {agenda.day01.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {agenda.day01.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-[#14E8F0] mt-2 flex-shrink-0">—</span>
                    <p className="text-white/75 text-base lg:text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-px bg-white/[0.06]" />

            {/* Day 02 */}
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-[#14E8F0] text-xs uppercase tracking-[0.25em] font-semibold">
                  Day 02
                </p>
                <h3 className="font-serif text-3xl lg:text-4xl font-medium text-[#F5F5F5] tracking-tight">
                  {agenda.day02.title}
                </h3>
                <p className="text-white/50 text-sm uppercase tracking-wider">
                  {agenda.day02.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {agenda.day02.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-[#14E8F0] mt-2 flex-shrink-0">—</span>
                    <p className="text-white/75 text-base lg:text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
