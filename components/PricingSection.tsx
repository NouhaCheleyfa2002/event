"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "@/components/RegistrationModal";

type PackageType = "group" | "student" | "professional";

export default function PricingSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    type: PackageType;
    name: string;
  } | null>(null);

  const handleRegister = (type: PackageType, name: string) => {
    setSelectedPackage({ type, name });
    setModalOpen(true);
  };

  const pricingPlans = [
    {
      name: "Group Package",
      type: "group" as PackageType,
      description: "Ideal for universities, clubs, and associations seeking collective opportunities",
      price: "350",
      currency: "DT",
      subtitle: "per participant (min. 28)",
      features: [
        "Full program access",
        "Workshops and networking sessions",
        "Participation certificate",
        "Event materials",
        "Preferential group rate",
        "One night accommodation",
        "Lunch and dinner included"
      ],
      featured: false
    },
    {
      name: "Student Package",
      type: "student" as PackageType,
      description: "Perfect for students and recent graduates starting their international journey",
      price: "850",
      currency: "DT",
      features: [
        "Full program access",
        "Interactive workshops",
        "Networking sessions",
        "Participation certificate",
        "Event materials & templates",
        "One night accommodation",
        "Lunch and dinner included",
        "Post-event guidance access"
      ],
      featured: true,
      badge: "Most Popular"
    },
    {
      name: "Professional Package",
      type: "professional" as PackageType,
      description: "Premium experience for professionals, entrepreneurs, and project managers",
      price: "1,850",
      currency: "DT",
      features: [
        "All Student Package benefits",
        "Premium networking opportunities",
        "Dedicated professional sessions",
        "Priority expert consultations",
        "Extended post-event support",
        "Startup funding guidance",
        "One night accommodation",
        "All meals included"
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="relative w-full py-20 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.2] tracking-tight">
            <span className="text-[#F5F5F5]">Pick the pass that </span>
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 10px rgba(20,232,240,0.4),
                  0 0 25px rgba(20,232,240,0.15)
                `
              }}
            >
              fits you.
            </span>
          </h2>
          <p className="text-white/75 text-base lg:text-lg leading-relaxed font-light">
            Choose the experience that aligns with your goals. All passes include 
            access to our international mobility experts and funding opportunities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative">
              
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-2 rounded-full bg-[#14E8F0] shadow-[0_0_20px_rgba(20,232,240,0.4)]">
                    <span className="text-[#021326] text-xs uppercase tracking-[0.15em] font-bold">
                      {plan.badge}
                    </span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div 
                className={`
                  relative rounded-[28px] bg-[#03182D] p-10 lg:p-12 space-y-8 h-full
                  ${plan.featured 
                    ? 'border border-[#14E8F0]/80 shadow-[0_0_30px_rgba(20,232,240,0.25)]' 
                    : 'border border-white/[0.06]'
                  }
                `}
              >
                {/* Background glow for featured card */}
                {plan.featured && (
                  <div 
                    className="absolute inset-0 rounded-[28px] -z-10"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(20,232,240,0.12), transparent 70%)',
                      filter: 'blur(40px)'
                    }}
                  />
                )}

                {/* Package Name */}
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[#F5F5F5] tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="py-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-5xl lg:text-6xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-[#14E8F0] text-xl font-medium">
                      {plan.currency}
                    </span>
                  </div>
                  {plan.subtitle && (
                    <p className="text-white/50 text-sm mt-2">{plan.subtitle}</p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-[#14E8F0] mt-1 flex-shrink-0">—</span>
                      <p className="text-white/75 text-sm lg:text-base">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  {plan.featured ? (
                    <Button 
                      onClick={() => handleRegister(plan.type, plan.name)}
                      className="w-full bg-[#14E8F0] text-[#021326] hover:bg-[#14E8F0]/90 font-medium py-6 rounded-full shadow-[0_0_20px_rgba(20,232,240,0.35)] transition-all"
                    >
                      Get Started
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => handleRegister(plan.type, plan.name)}
                      variant="outline"
                      className="w-full bg-white/5 text-white border-white/20 hover:bg-white/10 font-medium py-6 rounded-full backdrop-blur-sm transition-all"
                    >
                      Select Plan
                    </Button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Registration Modal */}
      {selectedPackage && (
        <RegistrationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          packageType={selectedPackage.type}
          packageName={selectedPackage.name}
        />
      )}
    </section>
  );
}
