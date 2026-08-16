import React, { useState } from 'react';
import { Sparkles, Bot, Layers, Network, Cpu, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export const AITransformation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      title: 'AI + Process',
      subtitle: 'Intelligent Process Redesign',
      desc: 'Process redesign supported by GenAI and automation.',
      details: [
        'GenAI-assisted SOP generation and real-time knowledge base synthesis',
        'Intelligent Document Processing (IDP) across unstructured invoices, contracts, and POs',
        'Automated exception categorization and contextual routing algorithms',
        'End-to-end process telemetry with automated bottleneck discovery'
      ],
      icon: Sparkles
    },
    {
      title: 'AI + Operations',
      subtitle: 'Operational Velocity & Scale',
      desc: 'Improving productivity, decision-making and scalability.',
      details: [
        'Augmented decision-support systems for complex shared services operations',
        'Predictive volume forecasting and dynamic FTE capacity balancing',
        'Continuous quality assurance with automated SLA risk alerting',
        'Human-in-the-loop (HITL) validation checkpoints ensuring audit compliance'
      ],
      icon: Bot
    },
    {
      title: 'AI + Transformation',
      subtitle: 'Embedded Operating Models',
      desc: 'Embedding AI into operating models rather than treating it as a standalone technology initiative.',
      details: [
        'Target Operating Model (TOM) redesigned with cognitive digital workers',
        'AI governance, compliance, and enterprise data security protocols',
        'Transformation roadmaps prioritized by measurable business ROI',
        'Workforce reskilling and change management for AI-augmented teams'
      ],
      icon: Network
    }
  ];

  return (
    <section
      id="ai-transformation"
      className="py-20 lg:py-28 bg-[#1A1A1A] text-white relative overflow-hidden"
    >
      {/* Subtle artistic dark dots */}
      <div className="absolute inset-0 bg-artistic-dots-dark pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
            Next-Gen Operating Models
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            The next chapter: <span className="italic font-serif text-blue-300 font-normal">AI-enabled transformation.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 font-normal leading-relaxed">
            Business transformation leader leveraging AI, automation and technology to create measurable business impact.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === index;
            return (
              <div
                key={pillar.title}
                id={`ai-pillar-card-${index}`}
                onClick={() => setActiveTab(index)}
                className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#242424] border-white/30 shadow-lg ring-1 ring-[#003366]'
                    : 'bg-[#222222]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-lg transition-colors ${
                      isSelected ? 'bg-[#003366] text-white' : 'bg-white/10 text-blue-300'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white/40">
                      PILLAR 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <div className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mt-1">
                    {pillar.subtitle}
                  </div>

                  <p className="mt-4 text-sm text-white/70 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5">
                    {pillar.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/80 font-normal">
                        <Check className="w-3.5 h-3.5 text-blue-300 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-blue-300">
                  <span>{isSelected ? 'Active Model' : 'Explore Framework'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Executive Positioning Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#242424] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#003366] text-white shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white tracking-tight">
                Pragmatic Enterprise AI Governance
              </h4>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-2xl font-normal leading-relaxed">
                Rather than viewing AI as speculative code, Sachin approaches AI as a force-multiplier inside institutionalized operating models—integrating data pipelines, risk management, and human expertise into sustainable enterprise capabilities.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3.5 rounded-none sm:rounded-xs bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
          >
            Discuss AI Strategy
          </a>
        </div>

      </div>
    </section>
  );
};
