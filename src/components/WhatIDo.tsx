import React, { useState } from 'react';
import {
  Compass,
  Building2,
  FileSpreadsheet,
  Workflow,
  LayoutGrid,
  Sparkles,
  ArrowUpRight,
  Check,
  X,
  Target
} from 'lucide-react';
import { WHAT_I_DO } from '../data/portfolioData';
import { ServiceCard } from '../types';

export const WhatIDo: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#F9F9F7] border-t border-black/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            What <span className="italic font-serif text-[#003366] font-normal">I Do</span>
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/70 font-normal leading-relaxed">
            Strategic advisory and hands-on transformation leadership across operating models, captive setups, pre-sales architecture, and intelligent automation.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHAT_I_DO.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => setSelectedService(service)}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-black/5 border-l-2 border-l-[#003366] hover:border-black/15 shadow-2xs hover:shadow-sm transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Top Bar: Icon, Number & Hover Arrow */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-lg bg-black/5 text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#1A1A1A]/40">
                      0{index + 1}
                    </span>
                    <div className="w-7 h-7 rounded-sm bg-black/5 text-[#003366] flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#003366] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-3 text-sm text-[#1A1A1A]/70 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Bullet Preview */}
                <div className="mt-6 pt-5 border-t border-black/5 space-y-2">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#003366] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA text */}
              <div className="mt-6 pt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#003366]">
                <span>View Full Scope</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Deep-Dive Drawer for Selected Service */}
        {selectedService && (
          <div
            id="service-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-[#F9F9F7] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-black/10 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-4 border-b border-black/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[#003366] text-white">
                    {getIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
                      {selectedService.title}
                    </h3>
                    <p className="text-[10px] text-[#003366] font-bold uppercase tracking-widest mt-0.5">
                      Executive Domain Capability
                    </p>
                  </div>
                </div>
                <button
                  id="close-service-modal-btn"
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/5 rounded-sm transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-2">
                    Strategic Scope
                  </h4>
                  <p className="text-[#1A1A1A]/80 text-sm sm:text-base leading-relaxed">
                    {selectedService.shortDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-3">
                    Key Workstreams & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white border border-black/5 text-xs font-medium text-[#1A1A1A] flex items-start gap-2 shadow-2xs"
                      >
                        <Check className="w-4 h-4 text-[#003366] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-black/5 border-l-2 border-l-[#003366] shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#003366] uppercase tracking-wider">
                    <Target className="w-4 h-4" />
                    <span>Business Outcome</span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                    {selectedService.keyOutcomes}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-none sm:rounded-xs border border-black/20 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:bg-black/5 cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-none sm:rounded-xs bg-[#1A1A1A] hover:bg-[#003366] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Inquire on this Capability
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
