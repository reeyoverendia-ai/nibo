import React from 'react';

const testimonials = [
  {
    tag: "PANAMA DISEASE RECOVERY",
    text: "Too soon to quit when you found the Megamate! After years of losses from Panama infection, our plants are survivors. The results speak for themselves — the plant speaks itself.",
    farm: "Amoroso Farm",
    location: "Panabo, Davao del Norte — Panama-infected bearing plant treated May 2021, harvested September 2021",
    initials: "AF"
  },
  {
    tag: "2-MONTH FULL RECOVERY",
    text: "Plants infected by Panama recovered after just two months of NIBO treatment. Panama infiltration has stopped. We saw results we had never achieved with any conventional product.",
    farm: "Attorney Cameros Farm",
    location: "Philippines — Two applications halted Panama disease spread entirely",
    initials: "AC"
  },
  {
    tag: "SOIL CLASS TRANSFORMATION",
    text: "We had Class C soil that nobody believed could be productive. After NIBO, we're getting yields that match Class A farmland. The root system alone tells the whole story.",
    farm: "King's Farm",
    location: "San Miguel, Bulacan — NIBO trial co-supervisor; field partner for 1-hectare controlled trial",
    initials: "KF"
  }
];

export default function Testimony() {
  return (
    <section id="field-testimonials" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* HEADER SECTION */}
        <div className="mb-16">
          <p className="text-[#4A5D23] font-black uppercase tracking-[0.4em] text-xs mb-4">
            Field Testimonials
          </p>
          <h2 className="text-[#FFFFF0] text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            What Farmers <span className="text-[#4A5D23]">Say</span>
          </h2>
          <p className="text-[#FFFFF0]/70 text-lg max-w-2xl font-light">
            Documented outcomes from growers across the Philippines using NIBO Megamate and Bio Luy-a in real farm conditions.
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
              style={{ 
                backgroundColor: 'rgba(231, 225, 218, 0.05)', 
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              {/* Quotation Mark Decal */}
              <div className="absolute top-8 left-8 text-8xl font-serif text-white/5 select-none leading-none">“</div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg mb-8 border border-white/10">
                  <span className="text-[#4A5D23] text-xs font-bold">✓</span>
                  <span className="text-[#FFFFF0] text-[10px] font-black uppercase tracking-widest">{item.tag}</span>
                </div>

                <p className="text-[#FFFFF0]/80 italic leading-relaxed mb-10 font-light">
                  "{item.text}"
                </p>
              </div>

              {/* Farmer Info */}
              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#FFFFF0] font-bold text-sm shrink-0 border border-white/20"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)'
                  }}
                >
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-[#FFFFF0] font-bold text-sm uppercase tracking-wide">{item.farm}</h4>
                  <p className="text-[#FFFFF0]/40 text-[10px] leading-tight mt-1">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}