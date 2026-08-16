import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { Briefcase, CheckCircle2, ChevronRight, Layers, Tag } from 'lucide-react';

export const SelectedExperiences: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Finance Transformation', 'Operating Model Design', 'Digital Enablement', 'Source-to-Pay (S2P)', 'Captive Strategy'];

  const filteredCases = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === selectedCategory || c.tags.includes(selectedCategory));

  return (
    <section
      id="experiences"
      className="py-20 lg:py-28 bg-[#F9F9F7] border-t border-black/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
            Case Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            Selected <span className="italic font-serif text-[#003366] font-normal">Transformation Experiences</span>
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/70 font-normal leading-relaxed">
            Representative enterprise programs across finance consolidation, shared services design, technology enablement, and captive setup.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/[\s\(\)\/]+/g, '-')}`}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-none sm:rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1A1A1A] text-white shadow-2xs'
                  : 'bg-[#F4F4F0] text-[#1A1A1A]/70 hover:bg-black/5 hover:text-[#1A1A1A] border border-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((study) => (
            <div
              key={study.id}
              id={`case-card-${study.id}`}
              className="group flex flex-col justify-between p-7 rounded-2xl bg-white border border-black/5 border-l-2 border-l-[#003366] hover:border-black/15 shadow-2xs hover:shadow-sm transition-all duration-300"
            >
              <div>
                {/* Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/5 text-[#003366] text-[10px] font-bold uppercase tracking-widest rounded-none sm:rounded-xs">
                    <Layers className="w-3 h-3 text-[#003366]" />
                    {study.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#003366] transition-colors">
                  {study.title}
                </h3>

                {/* Structured Sections: Challenge, Approach, Impact */}
                <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
                  
                  {/* Challenge */}
                  <div className="p-3.5 rounded-xl bg-[#F9F9F7] border border-black/5">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-1">
                      Challenge
                    </span>
                    <p className="text-[#1A1A1A]/80 leading-relaxed font-normal">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="p-3.5 rounded-xl bg-[#F9F9F7] border border-black/5">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#003366] mb-1">
                      Approach & Strategy
                    </span>
                    <p className="text-[#1A1A1A]/80 leading-relaxed font-normal">
                      {study.approach}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="p-3.5 rounded-xl bg-white border border-black/10 border-l-2 border-l-[#003366] shadow-2xs">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#003366] mb-1">
                      Transformation Impact
                    </span>
                    <p className="text-[#1A1A1A] leading-relaxed font-medium">
                      {study.impact}
                    </p>
                  </div>

                </div>
              </div>

              {/* Tags at bottom */}
              <div className="mt-6 pt-4 border-t border-black/5 flex flex-wrap gap-1.5">
                {study.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-none sm:rounded-xs bg-[#F4F4F0] text-[#1A1A1A]/70"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
