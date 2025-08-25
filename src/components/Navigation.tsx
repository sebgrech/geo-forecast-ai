import React from 'react';
import { Button } from '@/components/ui/button';
import regioniqLogoFull from '@/assets/regioniq-logo-full.png';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={regioniqLogoFull} 
            alt="RegionIQ" 
            className="h-8 w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#product" className="text-ink-dim hover:text-ink transition-colors">
            Product
          </a>
          <a href="#how-it-works" className="text-ink-dim hover:text-ink transition-colors">
            How it works
          </a>
          <a href="#pricing" className="text-ink-dim hover:text-ink transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-ink-dim hover:text-ink transition-colors">
            About
          </a>
        </div>
        
        <Button variant="hero" size="lg">
          Get Early Access
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;