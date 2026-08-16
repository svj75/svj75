import React, { useState } from 'react';
import { PHILOSOPHY_STAGES } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const TransformationPhilosophy: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('understand');

  const selectedStage = PHILOSOPHY_STAGES.find((s) => s.id === activeStageId) || PHILOSOPHY_STAGES[0];

  return (
    <section
      id="philosophy"
      className="py-20 lg:py-28 bg-[#F9F9F7] border-t border-black/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
            Transformation Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            My approach to <span className="italic font-serif text-[#003366] font-normal">transformation</span>
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/70 font-normal leading-relaxed">
            A disciplined five-stage continuum balancing rigorous due diligence, operating model design, governance, and technology enablement.
          </p>
        </div>

        {/* 5 Stages Horizontal Progression Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PHILOSOPHY_STAGES.map((stage, idx) => {
            const isSelected = stage.id === activeStageId;
            return (
              <div
                key={stage.id}
                id={`philosophy-step-${stage.id}`}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md'
                    : 'bg-white border-black/5 text-[#1A1A1A] hover:border-black/15 shadow-2xs'
                }`}
              >
                <div>
                  {/* Step number badge & indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-none sm:rounded-xs ${
                        isSelected ? 'bg-[#003366] text-white' : 'bg-black/5 text-[#1A1A1A]/70'
                      }`}
                    >
                      {stage.step}
                    </span>
                    {idx < 4 && (
                      <span className={`hidden md:block text-xs ${isSelected ? 'text-white/40' : 'text-black/20'}`}>
                        →
                      </span>
                    )}
                  </div>

                  {/* Stage Title */}
                  <h3 className={`text-xl font-bold tracking-tight ${isSelected ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    {stage.title}
                  </h3>

                  {/* Concise quote with serif font */}
                  <p className={`mt-3 text-xs sm:text-sm font-serif italic leading-relaxed ${isSelected ? 'text-white/80' : 'text-[#1A1A1A]/70'}`}>
                    "{stage.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className={isSelected ? 'text-blue-300' : 'text-[#003366]'}>
                    {isSelected ? 'Active Phase' : 'Explore'}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-blue-300' : 'text-black/30'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Deep-Dive Stage Detail Box */}
        <div className="mt-8 p-8 rounded-2xl bg-white border border-black/5 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-2.5 py-1 bg-black/5 text-[#003366] text-[9px] font-bold uppercase tracking-widest rounded-none sm:rounded-xs">
                Phase {selectedStage.step} Execution Deep-Dive
              </div>
              <h4 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
                {selectedStage.title}: <span className="font-serif italic font-normal text-[#003366]">"{selectedStage.quote}"</span>
              </h4>
              <p className="text-[#1A1A1A]/70 text-sm sm:text-base leading-relaxed">
                {selectedStage.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#F9F9F7] p-6 rounded-xl border border-black/5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-3">
                Phase Deliverables & Governance Gates
              </div>
              <div className="space-y-2.5">
                {selectedStage.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1A1A1A]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#003366] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
