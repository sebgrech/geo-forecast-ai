import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      subtitle: "Perfect for pilot projects",
      description: "Essential regional insights for getting started",
      features: [
        "5 regions",
        "Core economic indicators", 
        "Quarterly updates",
        "Email support"
      ],
      cta: "Start pilot"
    },
    {
      name: "Team", 
      subtitle: "Built for growing teams",
      description: "Advanced analytics and collaboration features",
      features: [
        "All UK regions",
        "500+ indicators",
        "Real-time updates", 
        "API access",
        "Team collaboration",
        "Priority support"
      ],
      cta: "Contact sales",
      popular: true
    },
    {
      name: "Enterprise",
      subtitle: "Custom solutions at scale", 
      description: "White-glove service and custom integrations",
      features: [
        "Everything in Team",
        "Custom indicators",
        "Dedicated success manager",
        "SLA guarantees",
        "Custom integrations",
        "Training & onboarding"
      ],
      cta: "Talk to us"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-bg-navy to-bg-navy/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-ink-dim">
            Choose the plan that fits your organization's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative glass-card p-8 rounded-2xl transition-all duration-300 hover:bg-white/10 animate-fade-in-up ${
                tier.popular ? 'border-2 border-brand-3 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="accent-gradient text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-ink">{tier.name}</h3>
                <p className="text-brand-3 font-medium mb-3">{tier.subtitle}</p>
                <p className="text-ink-dim">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-brand-3 flex-shrink-0" />
                    <span className="text-ink">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.popular ? "hero" : "hero-outline"} 
                className="w-full" 
                size="lg"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;