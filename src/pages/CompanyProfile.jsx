import React from 'react';
import KeyObjectives from '../components/KeyObjectives';

const timelineData = [
  { year: '2013', title: 'Founded by Nick Bringuer', align: 'left' },
  { year: '2019', title: 'Foundation & Setup', align: 'right' },
  { year: '2020', title: 'Production & Optimization', align: 'left' },
  { year: '2023', title: 'Innovation & Sustainability', align: 'right' },
  { year: '2024', title: 'Long-Term Impact', align: 'left' },
];

const scienceHighlights = [
  { id: "1", title: "Founded by Nick J. Bringuer", text: "Owner and Certified Chemist with 25+ years of scientific expertise." },
  { id: "2", title: "Co-Founded by Joy Angeli C. Estremos", text: "Co-Owner and Operations Manager with 12+ years in organic fertiliser production." },
  { id: "3", title: "Two flagship products", text: "Megamate and Bio Luy-a — developed through years of applied research." },
  { id: "4", title: "Core mission", text: "Collective effort creates true progress. NIBO invests in training and community prosperity." },
  { id: "5", title: "EU-aligned", text: "Meeting EU Regulation 2019/1009 and German DLG standards." }
];

// 1. PROJECT BUTTON COMPONENT (Lifted outside for clean scope)
const ExecutiveGlassButton = ({ children, href }) => {
  return (
    <a 
      href={href} 
      className="inline-flex items-center justify-center mt-12 px-16 py-6 rounded-full font-black uppercase tracking-[0.5em] text-[11px] transition-all duration-500 shadow-xl overflow-hidden group relative border border-[#D4CBB8]/40"
      style={{
        backgroundColor: 'rgba(212, 203, 184, 0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        color: '#FFFFF0'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
      <span className="relative z-10 group-hover:text-[#4A443F] transition-colors duration-500">{children}</span>
      <style dangerouslySetInnerHTML={{ __html: `
        .group:hover {
          box-shadow: 0 0 50px rgba(212, 203, 184, 0.6), inset 0 0 20px rgba(255, 255, 240, 0.3);
          border-color: rgba(255, 255, 240, 0.8);
          transform: translateY(-3px) scale(1.01);
        }
      `}} />
    </a>
  );
};

export default function CompanyProfile() {
  return (
    <div className="min-h-screen bg-transparent pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 space-y-40">
        
        {/* 1. BUILT ON SCIENCE */}
        <section className="max-w-5xl">
          <h1 className="text-[#4A5D23] text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Built on Science. <br />
            <span className="text-[#FFFFF0]">Proven in the Field.</span>
          </h1>
          <p className="text-[#FFFFF0]/80 text-xl font-light mb-16 max-w-3xl">
            NIBO Fertilizer Manufacturing is a Philippine-based agri-biotech company producing organic soil conditioners using a proprietary blend of 175 bacterial strains.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {scienceHighlights.map((item) => (
              <div key={item.id} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[#E7E1DA]/10 flex items-center justify-center text-[#4A5D23] font-bold shrink-0 border border-white/5">{item.id}</div>
                <div>
                  <h3 className="text-[#FFFFF0] font-bold text-lg mb-2 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-[#FFFFF0]/60 font-light leading-relaxed text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. OUR STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#FFFFF0] uppercase tracking-tighter leading-[0.85]">
              Our<br /><span className="text-[#4A5D23]">Story</span>
            </h2>
            <div className="h-1 w-24 bg-[#E7E1DA] opacity-50"></div>
          </div>
          <div className="p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl" style={{ backgroundColor: 'rgba(231, 225, 218, 0.12)', backdropFilter: 'blur(20px)' }}>
            <p className="text-lg md:text-xl leading-relaxed font-light text-[#FFFFF0]">
              <span className="font-black">MEGAMATE</span> started from humble beginnings but has quickly grown into a recognized leader in agricultural solutions.
            </p>
          </div>
        </div>

        {/* 3. TIMELINE */}
        <section className="relative">
          <div className="text-center mb-16">
            <h2 className="text-[#4A5D23] text-4xl md:text-5xl font-black uppercase tracking-tighter">Project Timeline</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#E7E1DA]/20 hidden md:block"></div>
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className={`flex items-center w-full ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 px-8">
                    <div className="p-6 rounded-3xl border border-white/10" style={{ backgroundColor: 'rgba(231, 225, 218, 0.05)', backdropFilter: 'blur(8px)' }}>
                      <span className="text-[#4A5D23] font-black text-2xl">{item.year}</span>
                      <h3 className="text-[#FFFFF0] text-lg font-bold uppercase tracking-widest mt-1">{item.title}</h3>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4A5D23] border-4 border-[#eed9c4] hidden md:block"></div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. KEY OBJECTIVES */}
        <KeyObjectives />

        {/* 5. GROWTH & STRATEGY (The CTA Section) */}
        <section className="pb-20 text-center">
          <div className="max-w-4xl mx-auto p-12 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">
            <h2 className="text-[#FFFFF0] text-3xl font-black uppercase tracking-widest mb-8">Growth & Strategy</h2>
            <p className="text-[#FFFFF0]/80 text-xl font-light italic mb-12">
              "We are now seeking strategic investment partners to scale operations and expand production capacity."
            </p>
            {/* 🔍 BUTTON CALL */}
            <ExecutiveGlassButton href="/#contact">
              Discuss Partnership
            </ExecutiveGlassButton>
          </div>
        </section>

      </div>
    </div>
  );
}