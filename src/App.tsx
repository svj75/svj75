import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CareerJourney } from './components/CareerJourney';
import { TransformationImpact } from './components/TransformationImpact';
import { WhatIDo } from './components/WhatIDo';
import { TransformationPhilosophy } from './components/TransformationPhilosophy';
import { AITransformation } from './components/AITransformation';
import { SelectedExperiences } from './components/SelectedExperiences';
import { CoreExpertise } from './components/CoreExpertise';
import { EducationCertifications } from './components/EducationCertifications';
import { PersonalBrandQuote } from './components/PersonalBrandQuote';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'journey',
      'impact',
      'services',
      'philosophy',
      'ai-transformation',
      'experiences',
      'expertise',
      'education',
      'brand-philosophy',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#003366] selection:text-white">
      {/* Sticky Executive Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 3: Hero Section */}
        <Hero />

        {/* Section 4: About Section */}
        <AboutSection />

        {/* Section 5: Career Journey */}
        <CareerJourney />

        {/* Section 6: Transformation Impact (Scale of Transformation) */}
        <TransformationImpact />

        {/* Section 7: What I Do */}
        <WhatIDo />

        {/* Section 8: Transformation Philosophy */}
        <TransformationPhilosophy />

        {/* Section 9: AI / Digital Transformation (Dark Executive Section) */}
        <AITransformation />

        {/* Section 10: Selected Transformation Experiences */}
        <SelectedExperiences />

        {/* Section 11: Core Expertise */}
        <CoreExpertise />

        {/* Section 12: Education & Certifications */}
        <EducationCertifications />

        {/* Section 13: Personal Brand Statement */}
        <PersonalBrandQuote />

        {/* Section 14: Contact Section */}
        <ContactSection />
      </main>

      {/* Section 20: Minimal Executive Footer */}
      <Footer />

      {/* Section 16: Interactive Back To Top Button */}
      <BackToTop />
    </div>
  );
}
