"use client";

export default function StatsSection() {
  return (
    <section className="relative w-full py-16 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,255,255,0.12), transparent 60%)'
        }}
      />

      {/* Stats Container */}
      <div className="relative max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.08] hover:border-[#14E8F0]/30 transition-all">
            <p className="font-serif text-3xl lg:text-4xl font-bold text-[#14E8F0] mb-2">
              1,800+
            </p>
            <p className="text-white/60 text-sm">
              Annual Participants
            </p>
          </div>
          <div className="text-center p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.08] hover:border-[#14E8F0]/30 transition-all">
            <p className="font-serif text-3xl lg:text-4xl font-bold text-[#14E8F0] mb-2">
              175+
            </p>
            <p className="text-white/60 text-sm">
              Global Programs
            </p>
          </div>
          <div className="text-center p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.08] hover:border-[#14E8F0]/30 transition-all">
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
