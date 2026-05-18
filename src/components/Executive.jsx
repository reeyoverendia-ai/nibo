import React from 'react';
import { ShieldCheck, Leaf, FlaskConical, Beaker } from 'lucide-react';

export default function Executive() {
  const pillars = [
    {
      icon: <FlaskConical className="w-6 h-6 text-[#FAEEC8]" />,
      tag: "PHASE 01 — MOLECULAR ISOLATION",
      title: "Biochemical Ripeness",
      desc: "Bypassing the structural compromises of traditional imported Cavendish by stabilizing enzymatic pathways at the source plot."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#769c37]" />,
      tag: "PHASE 02 — DISEASE SUPPRESSION",
      title: "Panama Infiltration Stop",
      desc: "Industrial-grade bio-defense systems stopping Sigatoka and Panama wilt spread within two applications, verified across active trial plots."
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#FAEEC8]" />,
      tag: "PHASE 03 — SOIL TRANSFORMATION",
      title: "Class C → Class A Genesis",
      desc: "Metabolic soil restructuring that permanently converts low-yield substrates into high-producing ecosystems inside of 90 days."
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-[95rem] mx-auto px-8 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-16 max-w-3xl">
          <span className="text-[#FDFBD4] uppercase tracking-[0.4em] text-xs font-black block mb-4">
            Industrial Intelligence Node
          </span>
          <h2 className="text-[#FFFFF0] text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            The NIBO Bio-System <br />
            <span className="text-[#4A5D23]">Architecture</span>
          </h2>
          <p className="text-[#FFFFF0]/70 text-lg leading-relaxed font-light">
            Where organic chemistry meets elite industrial output. Replacing unpredictable agricultural inputs with engineered biological predictability.
          </p>
        </div>

        {/* TRIPLE INTERACTIVE LIQUID GLASS PANELS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="p-10 md:p-12 rounded-[3.5rem] border transition-all duration-500 relative overflow-hidden group flex flex-col justify-between min-h-[400px]"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                borderColor: 'rgba(250, 238, 200, 0.25)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Subtle ambient internal shadow that triggers on hover */}
              <div className="absolute inset-0 transition-all duration-500 rounded-[3.5rem] group-hover:shadow-[inset_0_0_30px_rgba(250,238,200,0.1)] group-hover:bg-white/[0.02]"></div>

              <div>
                {/* ICON & TAG LINE */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-[#FDFBD4] text-[10px] font-black tracking-widest uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-[#FFFFF0] text-2xl md:text-3xl font-black tracking-tight mb-4 relative z-10 group-hover:text-[#FAEEC8] transition-colors">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#FFFFF0]/70 text-sm leading-relaxed font-light relative z-10 group-hover:text-[#FFFFF0]/90 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* ACTION BRANDING FOOTER */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#FFFFF0]/30 uppercase">
                  SYSTEM NODE // 0{index + 1}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FAEEC8] group-hover:shadow-[0_0_10px_#FAEEC8] transition-all"></div>
              </div>

              {/* INTENSIFIED GOLD FLOOR ACCENT LINE */}
              <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#FAEEC8] group-hover:w-full transition-all duration-700 shadow-[0_-2px_20px_rgba(250,238,200,0.8),0_0_15px_#FAEEC8]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
