import React, { useState } from 'react';
import { EXPERTISE_CATEGORIES } from '../data/portfolioData';
import { CheckCircle2, Sparkles, SlidersHorizontal, Check } from 'lucide-react';

export const CoreExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const displayedCategories = activeCategory === 'All'
    ? EXPERTISE_CATEGORIES
    : EXPERTISE_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section
      id="expertise"
      className="py-20 lg:py-28 bg-[#F9F9F7] border-t border-black/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
            Domain Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            Core <span className="italic font-serif text-[#003366] font-normal">Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/70 font-normal leading-relaxed">
            Multi-disciplinary capabilities spanning executive transformation strategy, commercial solution design, rigorous program execution, and technology enablement.
          </p>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <button
            id="expertise-filter-all"
            type="button"
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-none sm:rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'All'
                ? 'bg-[#1A1A1A] text-white shadow-2xs'
                : 'bg-[#F4F4F0] border border-black/5 text-[#1A1A1A]/70 hover:bg-black/5 hover:text-[#1A1A1A]'
            }`}
          >
            All Competencies
          </button>
          {EXPERTISE_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              id={`expertise-filter-${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
              type="button"
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-none sm:rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.category
                  ? 'bg-[#1A1A1A] text-white shadow-2xs'
                  : 'bg-[#F4F4F0] border border-black/5 text-[#1A1A1A]/70 hover:bg-black/5 hover:text-[#1A1A1A]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.category}
              id={`expertise-card-${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-7 rounded-2xl bg-white border border-black/5 border-l-2 border-l-[#003366] shadow-2xs hover:shadow-sm hover:border-black/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#1A1A1A]/40">
                    {cat.skills.length} Areas
                  </span>
                </div>

                <p className="text-xs text-[#1A1A1A]/60 mb-6 font-normal">
                  {cat.description}
                </p>

                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-[#F9F9F7] border border-black/5 flex items-center justify-between text-xs font-medium text-[#1A1A1A] hover:bg-black/5 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#003366]" />
                        <span>{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
                Enterprise Caliber Delivery
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
