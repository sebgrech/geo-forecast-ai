import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Building2, Home, Construction } from 'lucide-react';

const UseCaseTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      id: "public-sector",
      label: "Public sector",
      icon: Building2,
      title: "Policy impact modeling",
      description: "Model regional effects of policy changes with confidence intervals and clear attribution to underlying factors.",
      metrics: [
        { label: "Employment impact", value: "+2,400 jobs", change: "+1.2%" },
        { label: "GVA multiplier", value: "£1.4M", change: "per £1M invested" },
        { label: "Confidence", value: "87%", change: "High" }
      ]
    },
    {
      id: "real-estate",
      label: "Real estate",
      icon: Home,
      title: "Investment yield optimization", 
      description: "Re-price yield assumptions by region in minutes, not weeks. Factor in local economic forecasts automatically.",
      metrics: [
        { label: "Yield forecast", value: "4.2%", change: "+0.3%" },
        { label: "Risk adjustment", value: "0.8%", change: "Conservative" },
        { label: "Market timing", value: "Q2 2025", change: "Optimal" }
      ]
    },
    {
      id: "infrastructure",
      label: "Infrastructure",
      icon: Construction,
      title: "Project feasibility assessment",
      description: "Validate infrastructure investments with regional economic growth projections and demographic trends.",
      metrics: [
        { label: "Demand growth", value: "+15%", change: "by 2026" },
        { label: "Payback period", value: "8.2 years", change: "Accelerated" },
        { label: "Regional benefit", value: "£340M", change: "NPV" }
      ]
    }
  ];

  const activeCase = useCases[activeTab];
  const Icon = activeCase.icon;

  return (
    <section className="py-20 bg-gradient-to-b from-bg-navy to-bg-navy/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for your use case
          </h2>
          <p className="text-xl text-ink-dim">
            Tailored workflows for different professional contexts.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {useCases.map((useCase, index) => {
            const TabIcon = useCase.icon;
            return (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === index 
                    ? 'accent-gradient text-white shadow-lg' 
                    : 'glass-card text-ink-dim hover:text-ink hover:bg-white/10'
                }`}
              >
                <TabIcon className="w-5 h-5" />
                <span className="font-medium">{useCase.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content */}
        <div className="glass-card p-8 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg accent-gradient flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-ink">
                  {activeCase.title}
                </h3>
              </div>
              
              <p className="text-ink-dim leading-relaxed text-lg">
                {activeCase.description}
              </p>

              <Button variant="hero-outline" size="lg">
                Copy to deck
              </Button>
            </div>

            <div className="space-y-4">
              {activeCase.metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <span className="text-ink-dim">{metric.label}</span>
                  <div className="text-right">
                    <div className="text-ink font-semibold text-lg">{metric.value}</div>
                    <div className="text-sm text-brand-3">{metric.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseTabs;