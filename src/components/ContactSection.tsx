import React, { useState } from 'react';
import { Mail, Linkedin, ArrowUpRight, Copy, Check, Send, Sparkles, MessageSquare, Clock, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('GCC & Captive Setup');

  const topics = [
    'GCC & Captive Setup',
    'Enterprise Operating Model Design',
    'Multi-Country F&A Transition',
    'AI & Automation Roadmap',
    'Pre-Sales & RFP Solutioning',
    'Executive Advisory & Speaking'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sachinvj@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const emailSubject = encodeURIComponent(`Inquiry: ${selectedTopic} - Transformation Engagement`);
  const emailBody = encodeURIComponent(`Hello Sachin,\n\nI would like to discuss potential collaboration regarding ${selectedTopic}.\n\nBest regards,`);
  const mailtoHref = `mailto:sachinvj@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#F9F9F7] border-t border-black/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Contact Container */}
        <div className="rounded-3xl bg-white border border-black/5 shadow-2xs p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading & Contact Channels */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-block px-3 py-1 bg-[#003366] text-white text-[9px] font-bold tracking-[0.2em] uppercase">
                Get In Touch
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
                Let's create the <span className="italic font-serif text-[#003366] font-normal">next transformation.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#1A1A1A]/70 font-normal leading-relaxed">
                Whether you're building a GCC, transforming shared services, redesigning an operating model or exploring AI-enabled transformation, let's connect.
              </p>

              {/* Two Primary Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  id="contact-linkedin-btn"
                  href="https://www.linkedin.com/in/sachinjadhav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-none sm:rounded-xs bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs uppercase tracking-wider shadow-2xs transition-all cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  id="contact-email-btn"
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-none sm:rounded-xs bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-2xs transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>
              </div>

              {/* Copy Email Helper */}
              <div className="pt-2 flex items-center gap-3">
                <div className="text-xs text-[#1A1A1A]/50 font-medium">Direct Email:</div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none sm:rounded-xs bg-[#F9F9F7] border border-black/5 text-xs font-mono font-medium text-[#1A1A1A]">
                  <span>sachinvj@gmail.com</span>
                  <button
                    id="copy-email-btn"
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-[#1A1A1A]/60 hover:text-[#003366] transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#003366]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-xs text-[#003366] font-bold animate-in fade-in">
                    Copied!
                  </span>
                )}
              </div>

              {/* Availability Badges */}
              <div className="pt-6 border-t border-black/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#1A1A1A]/70">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#003366] shrink-0" />
                  <span>Direct response within 24 business hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#003366] shrink-0" />
                  <span>Global Transformation Advisory</span>
                </div>
              </div>

            </div>

            {/* Right Column: Topic Selector & Pre-Formatted Dispatcher */}
            <div className="lg:col-span-5 bg-[#F9F9F7] p-6 sm:p-8 rounded-2xl border border-black/5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4 text-[#003366]" />
                <span>Select Engagement Topic</span>
              </div>
              <p className="text-xs text-[#1A1A1A]/60 mb-4 font-normal">
                Choose an area to pre-format your inquiry email directly to Sachin:
              </p>

              <div className="space-y-2">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`w-full p-3 rounded-xl text-left text-xs font-medium flex items-center justify-between border transition-all cursor-pointer ${
                      selectedTopic === topic
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-2xs'
                        : 'bg-white border-black/5 text-[#1A1A1A] hover:bg-black/5'
                    }`}
                  >
                    <span>{topic}</span>
                    {selectedTopic === topic ? (
                      <Check className="w-3.5 h-3.5 text-blue-300" />
                    ) : (
                      <span className="text-black/30">→</span>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-black/5">
                <a
                  id="direct-send-topic-btn"
                  href={mailtoHref}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-none sm:rounded-xs bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold uppercase tracking-wider shadow-2xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry for "{selectedTopic}"</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
