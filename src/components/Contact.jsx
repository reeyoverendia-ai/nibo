import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/mdabpype", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  const inputStyle = "w-full p-5 rounded-2xl transition-all duration-500 border border-white/20 outline-none placeholder:text-[#4A443F]/40 text-[#4A443F] bg-white/10 hover:bg-white/20 focus:bg-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] focus:shadow-[0_0_35px_rgba(255,255,255,0.5)]";

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-8">
      
      {/* MAIN CRYSTAL CONTAINER */}
      <div 
        className="max-w-6xl mx-auto rounded-[4rem] border border-white/40 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] flex flex-col lg:flex-row overflow-hidden relative"
        style={{ 
          backgroundColor: 'rgba(255, 255, 240, 0.15)',
          backdropFilter: 'blur(40px) saturate(150%)',
          WebkitBackdropFilter: 'blur(40px) saturate(150%)',
        }}
      >
        <div className="absolute inset-0 border-[1px] border-white/30 rounded-[4rem] pointer-events-none"></div>

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-5/12 p-12 md:p-16 bg-white/10 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col justify-between relative z-10">
          <div>
            <h2 className="text-4xl font-black text-[#4A443F] uppercase tracking-tighter mb-10">
              Contact <br /> Intelligence
            </h2>
            
            <div className="space-y-10">
              <div>
                <p className="text-[#FFFFF0] text-[10px] font-black uppercase tracking-[0.4em] mb-3">Electronic Correspondence</p>
                <p className="text-[#4A443F] font-medium text-base mb-1">nibofertilizer@gmail.com</p>
                <p className="text-[#4A443F] font-medium text-base">joyfuljelai75@gmail.com</p>
              </div>

              <div>
                <p className="text-[#FFFFF0] text-[10px] font-black uppercase tracking-[0.4em] mb-3">Global Terminals</p>
                <p className="text-[#4A443F] font-medium text-base mb-1">DE: +49 155 1022 6237</p>
                <p className="text-[#4A443F] font-medium text-base">PH: +63 909 343 8332</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 relative">
            <a 
              href="https://www.linkedin.com/company/nibo-fertilizer-manufacturing/services/" 
              target="_blank" 
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 text-[#FDFBD4] text-sm font-black uppercase tracking-[0.3em] transition-all duration-500 group"
            >
              <span className="relative z-10 group-hover:drop-shadow-[0_0_15px_rgba(253,251,212,0.7)] transition-all duration-500">
                LinkedIn Profile →
              </span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FDFBD4]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0"></span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-7/12 p-12 md:p-16 relative z-10">
          {status === "SUCCESS" ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 bg-[#A9C9B0] rounded-full flex items-center justify-center text-white text-4xl shadow-xl">✓</div>
              <h3 className="text-[#FFFFF0] text-3xl font-black uppercase tracking-tighter leading-tight">Thank you for <br/>reaching out.</h3>
              <p className="text-[#FFFFF0]/60 max-w-xs font-light">The Nibo team will be in touch with you shortly.</p>
              <button onClick={() => setStatus("")} className="text-[#FDFBD4] text-xs font-black uppercase tracking-widest hover:underline mt-4">New Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="mb-6">
                <h3 className="text-[#4A443F] text-3xl md:text-4xl font-black uppercase tracking-[0.2em] mb-4 leading-none">
                  Partner with NIBO
                </h3>
                <p className="text-[#FFFFF0] text-xl md:text-2xl font-normal leading-relaxed tracking-wide">
                  Secure your supply chain with industrial-grade solutions.
                </p>
              </div>

              <input type="text" name="name" required placeholder="Full Name" className={inputStyle} />
              <input type="email" name="email" required placeholder="Corporate Email" className={inputStyle} />
              <textarea name="message" required rows="4" placeholder="Your Message" className={inputStyle} />

              <button 
                type="submit"
                className="w-full mt-6 py-6 rounded-full font-black uppercase tracking-[0.5em] text-[11px] transition-all duration-500 border border-[#D4CBB8]/40 shadow-xl relative overflow-hidden group"
                style={{
                  backgroundColor: 'rgba(212, 203, 184, 0.2)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: '#4A443F'
                }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Send Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        button:hover {
          box-shadow: 0 0 40px rgba(212, 203, 184, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.8);
        }
      `}} />
    </section>
  );
}