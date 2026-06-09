"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes this experience different from other information sessions?",
      answer: "Most events stop after giving information. This experience includes hands-on workshops, personalized guidance, application templates from successful candidates, and continued support after the event. You'll leave with practical tools ready to use, not just information."
    },
    {
      question: "When and where will the event take place?",
      answer: "The event will be held in Sousse over three sessions: Group 1 (29/06-30/06), Group 2 (30/06-01/07), and Group 3 (01/07-02/07). Each participant will be assigned to one group. One night accommodation is included, along with lunch and dinner."
    },
    {
      question: "What will I receive at the end of the 2 days?",
      answer: "You'll receive motivation letter frameworks, a personalized international opportunity roadmap, application templates and documents, access to experts for future guidance, and a network of ambitious participants. Most importantly, you'll have actionable knowledge ready to use immediately."
    },
    {
      question: "I'm not a student—can I still attend?",
      answer: "Absolutely! This experience is designed for university students, recent graduates, Master's and PhD candidates, researchers, entrepreneurs, startup founders, youth organizations, project managers, and professionals seeking international opportunities."
    },
    {
      question: "What are the registration deadlines?",
      answer: "Registration closes on 17/06/2026, and the payment deadline is 20/06/2026. Applications are accepted on a first-come, first-served basis until all seats are filled, so we recommend registering early."
    },
    {
      question: "Will I get support after the event?",
      answer: "Yes! You'll receive continued application guidance, access to useful resources, templates and documents, opportunity alerts and recommendations, and support during your future application processes. This is not a one-time event—it's the beginning of your international journey."
    }
  ];

  return (
    <section className="relative w-full py-32 px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-6">
          <h2 className="font-serif text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight">
            <span className="text-[#F5F5F5]">Questions? </span>
            <span 
              className="italic text-[#14E8F0]"
              style={{
                textShadow: `
                  0 0 10px rgba(20,232,240,0.4),
                  0 0 25px rgba(20,232,240,0.15)
                `
              }}
            >
              We've got answers.
            </span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`
                rounded-[20px] border transition-all duration-300
                ${openIndex === index 
                  ? 'border-[#14E8F0]/40 bg-white/[0.03] shadow-[0_0_20px_rgba(20,232,240,0.1)]' 
                  : 'border-white/[0.08] bg-white/[0.01] hover:border-white/[0.15]'
                }
              `}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 lg:p-8 flex items-start justify-between gap-4"
              >
                <span className="font-serif text-lg lg:text-xl font-medium text-white leading-relaxed pr-4">
                  {faq.question}
                </span>
                <div 
                  className={`
                    flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                    ${openIndex === index ? 'bg-[#14E8F0] rotate-45' : 'bg-white/10'}
                  `}
                >
                  <svg 
                    className={`w-4 h-4 ${openIndex === index ? 'text-[#021326]' : 'text-white'}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <p className="text-white/70 text-base leading-relaxed border-t border-white/[0.08] pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center pt-8">
          <p className="text-white/60 text-base mb-4">
            Still have questions?
          </p>
          <button className="text-[#14E8F0] font-medium hover:underline underline-offset-4 transition-all">
            Contact our support team →
          </button>
        </div>

      </div>
    </section>
  );
}
