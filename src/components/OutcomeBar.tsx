import React, { useEffect, useRef, useState } from 'react';
import { Zap, Wrench, FileText } from 'lucide-react';

const OutcomeBar = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animations
            setTimeout(() => setVisibleItems(prev => [true, ...prev.slice(1)]), 100);
            setTimeout(() => setVisibleItems(prev => [prev[0], true, ...prev.slice(2)]), 300);
            setTimeout(() => setVisibleItems(prev => [prev[0], prev[1], true]), 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const outcomes = [
    {
      icon: Zap,
      title: "80% faster updates",
      description: "from quarterly delays to on-query forecasts"
    },
    {
      icon: Wrench,
      title: "90% less busywork",
      description: "automation replaces manual EViews edits"
    },
    {
      icon: FileText,
      title: "Decision-ready",
      description: "built-in rationale you can paste into board decks"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-bg-navy to-bg-navy/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div 
                key={index}
                className={`glass-card p-8 rounded-2xl text-center transition-all duration-600 ${
                  visibleItems[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full accent-gradient flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-ink">
                  {outcome.title}
                </h3>
                <p className="text-ink-dim leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OutcomeBar;