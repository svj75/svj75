import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, CheckCircle2, ArrowRight, Building, Sparkles } from 'lucide-react';
import { CAREER_ROLES, EARLY_CAREER } from '../data/portfolioData';

export const CareerJourney: React.FC = () => {
  const [expandedEarlyCareer, setExpandedEarlyCareer] = useState(false);
  const [activeRoleDetails, setActiveRoleDetails] = useState<string>('quintes');

  return (
    <section
      id="journey"
      className="py-20 lg:py-28 bg-[#F9F9F7] border-t border-black/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
            Career Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            A 27-year trajectory across <span className="italic font-serif text-[#003366] font-normal">global transformation leadership.</span>
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/70 font-normal leading-relaxed">
            From foundational process engineering and shared services transitions to executive-level GCC incubation and AI-driven operating model architecture.
          </p>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative">
          {/* Vertical central line (desktop) / left line (mobile) */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-black/10"></div>

          <div className="space-y-10">
            {CAREER_ROLES.map((role) => {
              const isExpanded = activeRoleDetails === role.id;
              return (
                <div
                  key={role.id}
                  id={`career-role-${role.id}`}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline node icon */}
                  <div
                    className={`absolute left-4 md:left-8 -translate-x-1/2 top-1.5 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      role.badge
                        ? 'bg-[#003366] border-[#003366] text-white shadow-2xs'
                        : 'bg-white border-black/20 group-hover:border-[#003366] text-[#1A1A1A]/70 group-hover:text-[#003366]'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Role Card Container */}
                  <div
                    onClick={() => setActiveRoleDetails(isExpanded ? '' : role.id)}
                    className={`p-6 sm:p-8 rounded-2xl bg-white border border-l-2 border-l-[#003366] transition-all duration-300 cursor-pointer shadow-2xs ${
                      isExpanded
                        ? 'border-black/20 ring-1 ring-[#003366]/20 shadow-sm'
                        : 'border-black/5 hover:border-black/15'
                    }`}
                  >
                    {/* Top Row: Company, Role & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-black/5">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
                            {role.company}
                          </h3>
                          {role.badge && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-none sm:rounded-xs text-[10px] uppercase font-bold tracking-widest bg-black/5 text-[#003366] border border-black/10">
                              <Sparkles className="w-3 h-3 text-[#003366]" />
                              {role.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-bold uppercase tracking-wider text-[#003366] mt-1">
                          {role.role}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold text-[#1A1A1A]/70 bg-[#F4F4F0] px-3 py-1.5 rounded-none sm:rounded-xs border border-black/5 self-start sm:self-auto">
                        <Calendar className="w-3.5 h-3.5 text-[#1A1A1A]/40" />
                        <span>{role.period}</span>
                      </div>
                    </div>

                    {/* Summary text */}
                    <p className="mt-4 text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-normal">
                      {role.summary}
                    </p>

                    {/* Focus Area Pill Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {role.focusAreas.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-none sm:rounded-xs text-[11px] font-semibold bg-[#F4F4F0] text-[#1A1A1A]/80 border border-black/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Key Highlights */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-black/5 animate-in fade-in duration-300">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-3">
                          Executive Scope & Key Accomplishments
                        </h4>
                        <div className="space-y-2.5">
                          {role.keyHighlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A1A1A]/80 font-normal">
                              <CheckCircle2 className="w-4 h-4 text-[#003366] shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expand/Collapse Trigger Helper */}
                    <div className="mt-4 pt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#003366]">
                      <span>{isExpanded ? 'Hide detailed deliverables' : 'Click to view key accomplishments'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Collapsible Early Career Section */}
          <div className="relative pl-12 md:pl-20 mt-10">
            <div className="absolute left-4 md:left-8 -translate-x-1/2 top-4 w-8 h-8 rounded-full border border-dashed border-black/20 bg-white flex items-center justify-center text-[#1A1A1A]/40">
              <Building className="w-3.5 h-3.5" />
            </div>

            <div className="rounded-2xl border border-black/5 bg-white overflow-hidden shadow-2xs">
              <button
                id="early-career-toggle-btn"
                type="button"
                onClick={() => setExpandedEarlyCareer(!expandedEarlyCareer)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-black/5 transition-colors cursor-pointer"
                aria-expanded={expandedEarlyCareer}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#1A1A1A] tracking-tight">
                      Earlier Career (1997 – 2006)
                    </span>
                    <span className="text-xs text-[#1A1A1A]/50 font-medium">
                      • 5 Organizations
                    </span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/60 mt-1">
                    AOL India → Customer First Services → BPL Bespro → Ganesh Metal Industries → Excel Soft Technologies
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none sm:rounded-xs bg-[#F4F4F0] text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                  <span>{expandedEarlyCareer ? 'Collapse' : 'Expand'}</span>
                  {expandedEarlyCareer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {expandedEarlyCareer && (
                <div className="p-6 pt-0 border-t border-black/5 bg-[#F9F9F7]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {EARLY_CAREER.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white border border-black/5 shadow-2xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-[#003366]">
                            {item.domain}
                          </div>
                          <div className="text-base font-bold text-[#1A1A1A] mt-0.5">
                            {item.name}
                          </div>
                          <div className="text-xs font-medium text-[#1A1A1A]/70 mt-1">
                            {item.role}
                          </div>
                        </div>
                        <div className="mt-3 text-[11px] font-mono font-semibold text-[#1A1A1A]/40">
                          {item.period}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
