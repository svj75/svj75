import React, { useState } from 'react';
import { ArrowRight, Compass, Layers, Cpu, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { HERO_METRICS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(3);

  const stages = [
    { name: 'Business', desc: 'Diagnose challenges & organizational bottlenecks', color: 'slate' },
    { name: 'Strategy', desc: 'Architect Target Operating Models & roadmaps', color: 'blue' },
    { name: 'Technology', desc: 'Infuse GenAI, RPA, workflows & ERP', color: 'indigo' },
    { name: 'Transformation', desc: 'Disciplined stage-gated transition PMO', color: 'blue' },
    { name: 'Value', desc: 'Scalable steady-state operations & sustained ROI', color: 'emerald' }
  ];

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#F9F9F7]"
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-artistic-dots-subtle pointer-events-none opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6">
          
          {/* Left Column: Executive Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Small Solid Eyebrow Badge */}
            <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase rounded-none sm:rounded-xs">
              TRANSFORMATION • SOLUTIONING • AI • GCC
            </div>

            {/* Main Headline with Serif Italic Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] font-bold tracking-tight text-[#1A1A1A]">
              Turning complex <br className="hidden sm:inline" />
              business challenges into <span className="italic font-serif text-[#003366] font-normal">scalable transformation.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#1A1A1A]/70 font-normal leading-relaxed max-w-xl font-sans">
              27+ years of experience across solutioning, transformation, and large-scale transitions. Architecting the next generation of AI-enabled operating models.
            </p>

            {/* Two Action Buttons with Artistic Flair styling */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-explore-journey-btn"
                type="button"
                onClick={() => handleScrollTo('#journey')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#1A1A1A] hover:bg-[#003366] rounded-none sm:rounded-xs transition-colors cursor-pointer"
              >
                <span>Explore Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <button
                id="hero-connect-btn"
                type="button"
                onClick={() => handleScrollTo('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] border border-black/20 hover:bg-black/5 rounded-none sm:rounded-xs transition-colors cursor-pointer"
              >
                <span>Connect With Me</span>
              </button>
            </div>

            {/* Executive Proof Indicators */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] uppercase tracking-wider text-[#1A1A1A]/70 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#003366]" />
                <span>Enterprise GCC / GBS Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#003366]" />
                <span>Zero-Disruption Transition PMO</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#003366]" />
                <span>AI-Enabled Operating Models</span>
              </div>
            </div>

          </div>

          {/* Right Column: Artistic Approach & Continuum Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-white/70 border border-black/5 shadow-2xs p-6 sm:p-7 overflow-hidden">
              <div className="absolute inset-0 bg-artistic-dots-subtle pointer-events-none opacity-40"></div>
              
              <div className="relative z-10 space-y-6">
                {/* The Approach Quote Callout */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-black/20"></div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#003366]">The Approach</h4>
                    <p className="text-sm italic font-serif text-[#1A1A1A]">"Redesigning how work gets done, not just where it happens."</p>
                  </div>
                </div>

                {/* Left-Border Accent Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 border-l-2 border-[#003366] bg-white rounded-r-lg shadow-2xs">
                    <h5 className="font-bold text-xs uppercase tracking-wider text-[#1A1A1A] mb-1">Strategy</h5>
                    <p className="text-[10px] text-[#1A1A1A]/60 leading-relaxed">GCC setup, transformation roadmaps, and business cases.</p>
                  </div>
                  <div className="p-3.5 border-l-2 border-[#003366] bg-white rounded-r-lg shadow-2xs">
                    <h5 className="font-bold text-xs uppercase tracking-wider text-[#1A1A1A] mb-1">Execution</h5>
                    <p className="text-[10px] text-[#1A1A1A]/60 leading-relaxed">Large-scale transitions, PMO, and change governance.</p>
                  </div>
                </div>

                {/* Dark AI Container */}
                <div className="p-4 bg-[#1A1A1A] text-white rounded-lg">
                  <h4 className="text-[9px] uppercase tracking-[0.2em] mb-1.5 text-white/60 font-bold">AI-Enabled Future</h4>
                  <p className="text-xs leading-relaxed text-white/85">
                    Embedding GenAI and ML into operating models to drive measurable productivity and institutional scalability.
                  </p>
                </div>

                {/* Interactive Continuum Stages */}
                <div className="pt-2 border-t border-black/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003366]">Transformation Continuum</span>
                    <span className="text-[10px] font-semibold text-[#1A1A1A]/50">Phase 0{activeStage + 1} / 05</span>
                  </div>
                  <div className="space-y-1.5">
                    {stages.map((stage, idx) => {
                      const isSelected = activeStage === idx;
                      return (
                        <div
                          key={stage.name}
                          id={`hero-flow-stage-${stage.name.toLowerCase()}`}
                          onClick={() => setActiveStage(idx)}
                          className={`p-2.5 rounded-md border transition-all cursor-pointer flex items-center justify-between text-xs ${
                            isSelected
                              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                              : 'bg-white/80 hover:bg-white border-black/5 text-[#1A1A1A]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              isSelected ? 'bg-[#003366] text-white' : 'bg-black/5 text-[#1A1A1A]/60'
                            }`}>
                              0{idx + 1}
                            </span>
                            <span className="font-bold tracking-tight">{stage.name}</span>
                            <span className={`text-[11px] hidden sm:inline ${isSelected ? 'text-white/70' : 'text-[#1A1A1A]/50'}`}>
                              — {stage.desc}
                            </span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-300' : 'text-black/30'}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Below the Hero: Artistic Metric Strip */}
        <div className="mt-12 border-t border-black/5 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HERO_METRICS.map((metric, idx) => (
              <div
                key={metric.id}
                id={`hero-metric-${metric.id}`}
                className={`flex flex-col ${idx < 3 ? 'md:border-r md:border-black/5 md:pr-4' : ''}`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
                  {metric.suffix}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/80 mt-1">
                  {metric.label}
                </div>
                {metric.sublabel && (
                  <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/50 mt-0.5">
                    {metric.sublabel}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
