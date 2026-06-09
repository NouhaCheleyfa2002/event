"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "@/components/RegistrationModal";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className="w-full border-b border-white/[0.08] sticky top-0 bg-[#021326]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-2xl font-serif text-white font-medium tracking-tight hover:opacity-80 transition-opacity"
              >
                MOBILITY<span className="text-[#14E8F0]">2026</span>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('video')}
                className="text-white/65 hover:text-white uppercase text-sm tracking-[0.15em] transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('agenda')}
                className="text-white/65 hover:text-white uppercase text-sm tracking-[0.15em] transition-colors"
              >
                Agenda
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-white/65 hover:text-white uppercase text-sm tracking-[0.15em] transition-colors"
              >
                Pricing
              </button>
            </div>

            {/* CTA Button */}
            <div className="flex items-center">
              <Button 
                onClick={() => setModalOpen(true)}
                className="bg-[#14E8F0] text-[#021326] hover:bg-[#14E8F0]/90 font-medium px-6 rounded-full shadow-[0_0_20px_rgba(20,232,240,0.35)] transition-all"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageType="student"
        packageName="Student Package"
      />
    </>
  );
}
