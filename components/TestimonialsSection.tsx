"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      videoId: "YOUR_VIDEO_ID_1", // Replace with actual video ID
      name: "Amira Ben Salem",
      title: "Master's Student",
      program: "Erasmus+ in Germany"
    },
    {
      videoId: "YOUR_VIDEO_ID_2", // Replace with actual video ID
      name: "Karim Mansour",
      title: "Project Manager",
      program: "Horizon Europe Grant"
    },
    {
      videoId: "YOUR_VIDEO_ID_3", // Replace with actual video ID
      name: "Yasmine Trabelsi",
      title: "PhD Candidate",
      program: "Research Fellowship"
    }
  ];

  return (
    <section className="relative w-full py-20 px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(0,255,255,0.15), transparent 60%)'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.2] tracking-tight">
            <span className="text-[#F5F5F5]">Real stories. </span>
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 10px rgba(20,232,240,0.4),
                  0 0 25px rgba(20,232,240,0.15)
                `
              }}
            >
              Real impact.
            </span>
          </h2>
          <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Hear from past participants who transformed their careers through 
            international mobility opportunities.
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative rounded-[24px] bg-white/[0.02] border border-white/[0.08] overflow-hidden hover:border-[#14E8F0]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(20,232,240,0.15)]"
            >
              {/* Video Container */}
              <div className="relative aspect-[9/9] bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950">
                {/* Replace with actual video embed */}
                {/* YouTube Shorts / TikTok / Instagram Reels embed */}
                {/* <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={`${testimonial.name} Testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                /> */}
                
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#14E8F0]/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <svg 
                      className="w-6 h-6 text-[#14E8F0]" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Testimonial Info */}
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-medium text-[#F5F5F5] group-hover:text-[#14E8F0] transition-colors">
                  {testimonial.name}
                </h3>
                <p className="text-white/60 text-sm">
                  {testimonial.title}
                </p>
                <div className="pt-2">
                  <span className="text-[#14E8F0] text-xs font-semibold uppercase tracking-wider">
                    {testimonial.program}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
