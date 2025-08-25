import React from 'react';
import { Database, Lock, TrendingUp, FileCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Database,
      title: "Ingest",
      description: "Official stats + client feeds consolidated in real-time"
    },
    {
      number: "02", 
      icon: Lock,
      title: "Constrain",
      description: "Macro consistency + regional priors ensure reliable bounds"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Nowcast", 
      description: "Monthly inference adjusts faster than old quarterly cycles"
    },
    {
      number: "04",
      icon: FileCheck,
      title: "Justify",
      description: "Narratives + deltas that stand up in the room"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-bg-navy/90 to-bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How it works
          </h2>
          <p className="text-xl text-ink-dim max-w-2xl mx-auto">
            Four steps from raw data to decision-ready insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative glass-card p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full accent-gradient flex items-center justify-center text-sm font-bold text-white">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Icon className="w-8 h-8 text-brand-3" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-ink">
                  {step.title}
                </h3>
                <p className="text-ink-dim leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;