import React from 'react';
import { Quote } from 'lucide-react';

export const PersonalBrandQuote: React.FC = () => {
  return (
    <section
      id="brand-philosophy"
      className="py-20 lg:py-28 bg-[#1A1A1A] text-white relative overflow-hidden"
    >
      {/* Background subtle dots */}
      <div className="absolute inset-0 bg-artistic-dots-dark pointer-events-none opacity-35"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Quote Icon */}
        <div className="w-12 h-12 rounded-lg bg-[#003366] text-white mx-auto flex items-center justify-center mb-8 shadow-xs">
          <Quote className="w-5 h-5" />
        </div>

        {/* Main Philosophy Quote in Serif */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic tracking-tight leading-snug text-white/95 max-w-4xl mx-auto font-normal">
          "Transformation is not about moving work from one place to another. It is about <span className="text-blue-300 not-italic font-sans font-bold">redesigning how work gets done."</span>
        </blockquote>

        {/* Attribution */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="text-lg font-bold text-white tracking-tight">
            Sachin Jadhav
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mt-1">
            Personal Transformation Philosophy
          </div>
        </div>

      </div>
    </section>
  );
};
