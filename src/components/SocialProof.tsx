import React from 'react';
import { Quote } from 'lucide-react';

const SocialProof = () => {
  const logos = [
    { name: "Gov UK", width: "120px" },
    { name: "McKinsey", width: "140px" },
    { name: "Deloitte", width: "130px" },
    { name: "PwC", width: "100px" },
    { name: "KPMG", width: "110px" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-bg-navy/95 to-bg-navy/90">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Client Logos */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-center text-ink-dim mb-8">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="h-8 flex items-center justify-center text-ink-dim font-semibold tracking-wide"
                style={{ width: logo.width }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-2xl text-center animate-fade-in-up animation-delay-200">
            <Quote className="w-12 h-12 text-brand-3 mx-auto mb-8 opacity-80" />
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-ink leading-relaxed mb-8">
              "Finally, forecasts that match how we actually make investment decisions."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center text-white font-semibold">
                JS
              </div>
              <div className="text-left">
                <div className="font-semibold text-ink">Jane Smith</div>
                <div className="text-ink-dim">Head of Strategy, London</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;