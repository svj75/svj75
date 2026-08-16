import React from 'react';
import { GraduationCap, Award, CheckCircle2, Shield } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section
      id="education"
      className="py-16 lg:py-20 bg-[#F9F9F7] border-t border-black/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-2">
              Credentials
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight">
              Education & <span className="italic font-serif text-[#003366] font-normal">Certifications</span>
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md font-normal">
            Academic rigor combined with certified operational excellence standards.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATION_ITEMS.map((item, idx) => {
            const isDegree = item.type === 'degree';
            return (
              <div
                key={idx}
                id={`edu-card-${idx}`}
                className="p-6 rounded-2xl bg-white border border-black/5 border-l-2 border-l-[#003366] hover:border-black/15 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-black/5 text-[#003366]">
                      {isDegree ? <GraduationCap className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                    </div>
                    {item.year && (
                      <span className="text-[10px] font-mono font-bold text-[#1A1A1A]/40">
                        {item.year}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#1A1A1A] tracking-tight">
                    {item.degree}
                  </h3>

                  <div className="text-xs font-bold text-[#003366] mt-1">
                    {item.institution}
                  </div>

                  {item.detail && (
                    <p className="mt-3 text-xs text-[#1A1A1A]/70 leading-relaxed font-normal">
                      {item.detail}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 flex items-center gap-1.5 text-[10px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest">
                  <Shield className="w-3.5 h-3.5 text-[#003366]" />
                  <span>Verified Credential</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
