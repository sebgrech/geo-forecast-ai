import React, { useEffect, useRef } from 'react';
import MapboxMap from './MapboxMap';

const LiveMapSection = () => {
  const mapRef = useRef<any>(null);
  const waypointRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cameraPositions = [
    { center: [-3, 54.5], zoom: 4.5, pitch: 0 },
    { center: [-0.1, 51.5], zoom: 7.5, pitch: 0 },
    { center: [-1.6, 54.9], zoom: 6.5, pitch: 0 }
  ];

  const steps = [
    {
      title: "UK Overview",
      description: "See the signal at a glance. Hover any region for the latest forecast and confidence score.",
      tooltip: "Wales: +1.4% GVA, Employment 94.3%"
    },
    {
      title: "London Focus",
      description: "Dive deeper into metropolitan areas with productivity and employment metrics.",
      tooltip: "London: Productivity +2.8%, Jobs +15k"
    },
    {
      title: "North East Detail",
      description: "Regional insights including GDHI per head and sector-specific forecasts.",
      tooltip: "North East: GDHI £18,540 per head"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && mapRef.current) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            const camera = cameraPositions[index];
            
            if (camera) {
              mapRef.current.easeTo({
                ...camera,
                duration: 1200,
                essential: true
              });
            }
          }
        });
      },
      { 
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.6 
      }
    );

    waypointRefs.current.forEach((waypoint) => {
      if (waypoint) observer.observe(waypoint);
    });

    return () => observer.disconnect();
  }, []);

  const handleMapLoad = (map: any) => {
    mapRef.current = map;
  };

  return (
    <section id="live-map" className="py-20 bg-gradient-to-b from-bg-navy/95 to-bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Scrolling Content */}
          <div className="space-y-24">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Live regional intelligence
              </h2>
              <p className="text-xl text-ink-dim">
                Interactive maps with real-time economic indicators and forecasts.
              </p>
            </div>

            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => waypointRefs.current[index] = el}
                data-index={index}
                className="space-y-6"
              >
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-4 text-ink">
                    {step.title}
                  </h3>
                  <p className="text-ink-dim leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="glass-card p-4 rounded-lg border border-brand-3/20">
                    <p className="text-sm text-brand-3 font-medium">
                      {step.tooltip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Sticky Map */}
          <div className="lg:sticky lg:top-32">
            <div className="glass-card p-6 rounded-2xl shadow-2xl">
              <div className="h-[560px] w-full">
                <MapboxMap 
                  id="story-map"
                  className="shadow-inner"
                  interactive={false}
                  onMapLoad={handleMapLoad}
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-1/10 to-brand-4/10 blur-xl rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMapSection;