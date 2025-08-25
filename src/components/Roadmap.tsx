import React from 'react';
import { MapPin, Globe, Sparkles } from 'lucide-react';

const Roadmap = () => {
  const milestones = [
    {
      year: "2025",
      title: "UK ITL1 live",
      description: "Complete UK regional coverage with real-time updates",
      icon: MapPin,
      status: "current"
    },
    {
      year: "2026", 
      title: "EU NUTS2/3",
      description: "European expansion with detailed sub-regional data",
      icon: Globe,
      status: "planned"
    },
    {
      year: "2027",
      title: "Global coverage",
      description: "Worldwide regional economic intelligence platform",
      icon: Sparkles,
      status: "future"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-bg-navy/90 to-bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Product roadmap
          </h2>
          <p className="text-xl text-ink-dim">
            Expanding global coverage while deepening regional insights.
          </p>
        </div>

        {/* Horizontal Scrollable Timeline */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-8 min-w-max px-4">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div 
                  key={index}
                  className={`flex-shrink-0 w-80 glass-card p-8 rounded-2xl transition-all duration-300 hover:bg-white/10 animate-fade-in-up ${
                    milestone.status === 'current' ? 'border-brand-3 border-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      milestone.status === 'current' 
                        ? 'accent-gradient' 
                        : 'bg-white/10 border border-white/20'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-ink">{milestone.year}</div>
                      <div className={`text-sm font-medium ${
                        milestone.status === 'current' ? 'text-brand-3' : 'text-ink-dim'
                      }`}>
                        {milestone.status === 'current' ? 'Live Now' : 
                         milestone.status === 'planned' ? 'In Development' : 'Planned'}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-ink">
                    {milestone.title}
                  </h3>
                  <p className="text-ink-dim leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;