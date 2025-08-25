import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-bg-navy/95 to-bg-navy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="glass-card p-12 lg:p-16 rounded-3xl relative overflow-hidden animate-fade-in-up">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 accent-gradient opacity-10 rounded-3xl" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Be first to access the future of regional forecasting
            </h2>
            
            <p className="text-xl text-ink-dim max-w-2xl mx-auto">
              Join leading organizations already using RegionIQ to make smarter, 
              data-driven decisions about regional investments and policy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="min-w-48">
                Get Early Access
              </Button>
              <Button variant="hero-outline" size="xl" className="min-w-48">
                Book a Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-ink-dim pt-8 border-t border-white/10">
              <span>✓ No setup fees</span>
              <span>✓ 30-day trial</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;