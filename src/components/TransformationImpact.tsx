import React, { useEffect, useRef, useState } from 'react';
import { TRANSFORMATION_METRICS } from '../data/portfolioData';
import { Award, Globe2, Users2, Cpu, Repeat, FolderKanban } from 'lucide-react';

export const TransformationImpact: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    m1: 0,
    m2: 0,
    m3: 0,
    m4: 0,
    m5: 0,
    m6: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers up smoothly
          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              m1: Math.floor(easeProgress * 27),
              m2: Math.floor(easeProgress * 200),
              m3: Math.floor(easeProgress * 1500),
              m4: Math.floor(easeProgress * 25),
              m5: Math.floor(easeProgress * 70),
              m6: Math.floor(easeProgress * 30)
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                m1: 27,
                m2: 200,
                m3: 1500,
                m4: 25,
                m5: 70,
                m6: 30
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'm1':
        return <Award className="w-5 h-5 text-blue-900" />;
      case 'm2':
        return <FolderKanban className="w-5 h-5 text-blue-900" />;
      case 'm3':
        return <Users2 className="w-5 h-5 text-blue-900" />;
      case 'm4':
        return <Repeat className="w-5 h-5 text-blue-900" />;
      case 'm5':
        return <Cpu className="w-5 h-5 text-blue-900" />;
      case 'm6':
        return <Globe2 className="w-5 h-5 text-blue-900" />;
      default:
        return <Award className="w-5 h-5 text-blue-900" />;
    }
  };

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#F9F9F7] border-t border-black/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
            Quantified Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Scale of <span className="italic font-serif text-[#003366] font-normal">Transformation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1A1A1A]/70 font-normal leading-relaxed">
            Proven execution capacity measured in global programs, operational headcount migrations, and cross-border delivery.
          </p>
        </div>

        {/* 6 Grid Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {TRANSFORMATION_METRICS.map((metric) => {
            const countValue = counts[metric.id] || 0;
            const displayValue = metric.id === 'm3' ? countValue.toLocaleString() : countValue;
            
            return (
              <div
                key={metric.id}
                id={`impact-card-${metric.id}`}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-black/5 border-l-2 border-l-[#003366] hover:border-black/15 shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-black/5 text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors">
                    {getMetricIcon(metric.id)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
                    Track Record
                  </span>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight font-sans flex items-baseline">
                    <span>{displayValue}</span>
                    <span className="text-3xl sm:text-4xl text-[#003366] font-bold ml-0.5">{metric.suffix}</span>
                  </div>
                  
                  <div className="text-base font-bold text-[#1A1A1A] mt-2">
                    {metric.label}
                  </div>

                  {metric.sublabel && (
                    <div className="text-xs text-[#1A1A1A]/60 mt-1 font-normal">
                      {metric.sublabel}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Anchor Executive Statement in Dark Paper */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#1A1A1A] text-white text-center relative overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-artistic-dots-dark pointer-events-none opacity-30"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-lg sm:text-xl lg:text-2xl font-serif italic leading-relaxed tracking-tight text-white/95">
              "From fragmented operations to centralized shared services. From manual processes to technology-enabled operations. From transition to transformation."
            </p>
            <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
              Sachin Jadhav • Executive Operating Creed
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
