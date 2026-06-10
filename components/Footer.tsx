"use client";

import { Phone } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    event: [
      { label: "About", href: "#about" },
      { label: "Speakers", href: "#speakers" },
      { label: "Agenda", href: "#agenda" },
      { label: "Pricing", href: "#pricing" }
    ],
    resources: [
      { label: "FAQ", href: "#faq" },
      { label: "Venue", href: "#venue" },
      { label: "Accommodation", href: "#accommodation" },
      { label: "Travel Info", href: "#travel" }
    ],
    connect: [
      { label: "Contact", href: "#contact" },
      { label: "Press Kit", href: "#press" },
      { label: "Partners", href: "#partners" },
      { label: "Newsletter", href: "#newsletter" }
    ]
  };

  return (
    <footer className="relative w-full border-t border-white/[0.08] bg-[#011222]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <span className="text-2xl font-serif text-white font-medium tracking-tight">
                MOBILITY<span className="text-[#14E8F0]">2026</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Unlocking international opportunities through Erasmus+, Horizon Europe, 
              and 175+ mobility programs. Your global future starts here.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              <a href="tel:+21696640530" className="flex items-center gap-2 text-white/60 hover:text-[#14E8F0] transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>+216 96 640 530</span>
              </a>
              <a href="tel:+21620824559" className="flex items-center gap-2 text-white/60 hover:text-[#14E8F0] transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>+216 20 824 559</span>
              </a>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/company/study-internship-abroad-programs/?viewAsMember=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#14E8F0]/20 border border-white/10 hover:border-[#14E8F0]/40 flex items-center justify-center transition-all group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white/60 group-hover:text-[#14E8F0]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/mobility.programs.2026/?hl=en" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#14E8F0]/20 border border-white/10 hover:border-[#14E8F0]/40 flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white/60 group-hover:text-[#14E8F0]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-[#14E8F0] text-sm uppercase tracking-[0.2em] font-semibold">
                Event
              </h3>
              <ul className="space-y-4">
                {footerLinks.event.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-[#14E8F0] text-sm uppercase tracking-[0.2em] font-semibold">
                Resources
              </h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-[#14E8F0] text-sm uppercase tracking-[0.2em] font-semibold">
                Connect
              </h3>
              <ul className="space-y-4">
                {footerLinks.connect.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 International Mobility Experience. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
