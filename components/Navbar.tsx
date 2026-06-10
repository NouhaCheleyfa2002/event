"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadSchedule = async () => {
    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });

      const pages = [
        '/programme/1.png',
        '/programme/2.png',
        '/programme/3.png'
      ];

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < pages.length; i++) {
        if (i > 0) {
          pdf.addPage();
        }

        // Add image to PDF
        pdf.addImage(pages[i], 'PNG', 0, 0, pageWidth, pageHeight);
      }

      // Download the PDF
      pdf.save('Event-Schedule.pdf');
    } catch (error) {
      console.error('Error creating PDF:', error);
    }
  };

  return (
    <nav className="w-full border-b border-white/[0.08] sticky top-0 bg-[#021326]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl sm:text-2xl font-serif text-white font-medium tracking-tight hover:opacity-80 transition-opacity"
            >
              MOBILITY<span className="text-[#14E8F0]">2026</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sponsors')}
              className="text-white/65 hover:text-white uppercase text-sm tracking-[0.15em] transition-colors"
            >
              Sponsors
            </button>
            <button 
              onClick={() => scrollToSection('agenda')}
              className="text-white/65 hover:text-white uppercase text-sm tracking-[0.15em] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-white/65 hover:text-white uppercase text-sm tracking-[0.15em] transition-colors"
            >
              Pricing
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Button 
              onClick={downloadSchedule}
              variant="outline"
              size="icon"
              className="bg-white/5 text-white border-white/20 hover:bg-white/10 rounded-full backdrop-blur-sm transition-all w-10 h-10 sm:w-auto sm:h-auto sm:px-5"
            >
              <Download className="w-4 h-4" />
              <span className="hidden lg:inline lg:ml-2">Schedule</span>
            </Button>
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-[#14E8F0] text-[#021326] hover:bg-[#14E8F0]/90 font-medium px-4 sm:px-6 text-sm sm:text-base rounded-full shadow-[0_0_20px_rgba(20,232,240,0.35)] transition-all"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
