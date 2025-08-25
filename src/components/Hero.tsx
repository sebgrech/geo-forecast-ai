import React from 'react';
import { Button } from '@/components/ui/button';
import MapboxMap from './MapboxMap';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-1/20 via-transparent to-brand-4/20 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Smarter subnational<br />
              economic <span className="text-gradient">forecasts</span>.<br />
              Built for decision-makers.
            </h1>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-xl text-ink-dim leading-relaxed max-w-lg">
              AI-native insights for regions, cities, and communities — faster to update, 
              clearer to justify, easier to use.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Button variant="hero" size="xl">
              Get Early Access
            </Button>
            <Button variant="hero-outline" size="xl">
              See Demo
            </Button>
          </div>
          
          {/* Micro-metrics */}
          <div className="flex items-center space-x-6 text-sm text-ink-dim animate-fade-in-up animation-delay-600">
            <span><strong className="text-ink font-semibold">12</strong> UK regions</span>
            <span>•</span>
            <span><strong className="text-ink font-semibold">500+</strong> indicators</span>
            <span>•</span>
            <span>Horizon: <strong className="text-ink font-semibold">2026</strong></span>
          </div>
        </div>
        
        {/* Right Column - Map */}
        <div className="relative animate-scale-in animation-delay-400">
          <div className="glass-card p-6 rounded-2xl shadow-2xl">
            <div className="h-[520px] w-full">
              <MapboxMap 
                id="hero-map"
                className="shadow-inner"
                interactive={true}
              />
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-3/20 to-brand-4/20 blur-xl rounded-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;