import React from 'react';
import { Compass, Layers, Cpu, Check, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-900" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-900" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-900" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-900" />;
    }
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#F9F9F7] border-t border-black/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
            Executive Profile
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            Experience built across <span className="italic font-serif text-[#003366] font-normal">transformation, technology and execution.</span>
          </h2>
          <p className="mt-6 text-lg text-[#1A1A1A]/70 font-normal leading-relaxed">
            With an accomplished 27-year journey in the ITES industry, Sachin brings extensive experience across program management, pre-sales, solution design, large-scale transitions, finance and AI-enabled transformation. His career has focused on helping global organizations design better operating models, execute complex transitions and unlock productivity through technology.
          </p>
        </div>

        {/* 3 Strategic Visual Themes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              id={`about-pillar-${pillar.id}`}
              className="group relative flex flex-col p-8 rounded-2xl bg-white border border-black/5 border-l-2 border-l-[#003366] hover:border-black/15 shadow-2xs hover:shadow-sm transition-all duration-300"
            >
              {/* Pillar Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-lg bg-black/5 text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors duration-300">
                  {getIcon(pillar.icon)}
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#1A1A1A]/40">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Core Description */}
              <h3 className="text-2xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#003366] transition-colors">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-[#1A1A1A]/70 leading-relaxed">
                {pillar.description}
              </p>

              {/* Structured Deliverables */}
              <div className="mt-6 pt-6 border-t border-black/5 space-y-2.5 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-2">
                  Key Capabilities
                </div>
                {pillar.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#003366] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 27+ Years Dark Box Container */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#1A1A1A] text-white relative overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-artistic-dots-dark pointer-events-none opacity-30"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight flex items-baseline gap-2">
                <span>27+</span>
                <span className="text-blue-300 text-2xl font-serif italic">Years</span>
              </div>
              <p className="mt-2 text-sm text-white/70 font-normal leading-relaxed">
                Continuous evolution through every epoch of enterprise business process outsourcing, shared services, and intelligent automation.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-blue-300 text-[10px] font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Foundational Roots</span>
                </div>
                <div className="mt-2 text-sm font-bold text-white">BPO & Multi-Country F&A</div>
                <p className="mt-1 text-xs text-white/60">Genpact, WNS, Quatrro & Haribhakti transition leadership.</p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-blue-300 text-[10px] font-bold uppercase tracking-widest">
                  <TrendingUp className="w-4 h-4" />
                  <span>Executive Scale</span>
                </div>
                <div className="mt-2 text-sm font-bold text-white">GCC & Captive Incubation</div>
                <p className="mt-1 text-xs text-white/60">VP at Quintes Global architecting TCAAS & D-Cap™ models.</p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-blue-300 text-[10px] font-bold uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" />
                  <span>Next Frontier</span>
                </div>
                <div className="mt-2 text-sm font-bold text-white">AI-Enabled Operations</div>
                <p className="mt-1 text-xs text-white/60">Embedding GenAI & intelligent workflows into operating blueprints.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
