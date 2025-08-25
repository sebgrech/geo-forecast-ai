import React from 'react';
import { MessageSquare, Brain, Workflow } from 'lucide-react';

const ValueProps = () => {
  const props = [
    {
      icon: MessageSquare,
      title: "Query-driven forecasting",
      description: "Ask a question, get a forecast with context. Natural language queries return structured insights with confidence intervals."
    },
    {
      icon: Brain,
      title: "Explainable by design",
      description: "Each figure ships with rationale & sources. Understand the 'why' behind every prediction with transparent methodology."
    },
    {
      icon: Workflow,
      title: "Built for workflows",
      description: "Exports, API, and Slack/Teams share cards. Integrate seamlessly into your existing decision-making processes."
    }
  ];

  return (
    <section id="product" className="py-20 bg-gradient-to-b from-bg-navy to-bg-navy/90">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Forecasting that fits your workflow
          </h2>
          <p className="text-xl text-ink-dim max-w-3xl mx-auto">
            Purpose-built for professionals who need reliable regional insights without the overhead.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-14 h-14 mb-6 rounded-xl accent-gradient flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ink">
                  {prop.title}
                </h3>
                <p className="text-ink-dim leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;