export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-transparent">
  <div 
    className="max-w-xl mx-auto p-12 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-500"
  style={{ 
    /* 1. REMOVE THE WHITE: Using a tiny bit of black/slate tint instead 
       This removes the 'milk' and makes it look like smoked glass */
    backgroundColor: 'rgba(15, 23, 42, 0.1)', 
    
    /* 2. THE SEMI-BLUR: Keep this at 8px-10px */
    backdropFilter: 'blur(10px)', 
    WebkitBackdropFilter: 'blur(10px)', 
    
    /* 3. THE LIGHT EDGE: This thin white border gives the 'glass' effect 
       without the milky center */
    border: '1px solid rgba(255, 255, 255, 0.15)',
    
    /* 4. DEPTH: Add a darker shadow to make it lift off the deep sage background */
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
  }}
>
    {/* HEADER */}
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-black text-[#4A5D23] mb-4 uppercase tracking-tighter">
        Partner with NIBO
      </h2>
      <p className="text-[#FFFFF0] font-light leading-relaxed opacity-90">
        Secure your supply chain with our <br /> industrial-grade solutions.
      </p>
    </div>

    {/* FORM FIELDS - Keeping them slightly frosted too */}
    <form className="flex flex-col gap-5">
      <input 
  type="text" 
  placeholder="Full Name" 
  className="w-full p-5 rounded-2xl transition-all border outline-none placeholder:text-[#FFFFF0]/40 text-[#FFFFF0] focus:border-white/40 shadow-lg"
  style={{ 
    /* 1. TINTED GLASS BASE: Using #e7e1da at 15% opacity */
    backgroundColor: 'rgba(199, 181, 141, 0.15)', 
    
    /* 2. SUBTLE EDGE: Matching the 'The Nibo Process' button logic */
    borderColor: 'rgba(199, 181, 141, 0.1)', 
    
    /* 3. THE FROST: 10px blur for that premium 'Liquid' texture */
    backdropFilter: 'blur(10px)', 
    WebkitBackdropFilter: 'blur(10px)',
    
    /* 4. DEPTH: Inner shadow makes them feel like recessed glass trays */
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
  }}
/>
      <input 
  type="text" 
  placeholder="Corporate Email" 
  className="w-full p-5 rounded-2xl transition-all border outline-none placeholder:text-[#FFFFF0]/40 text-[#FFFFF0] focus:border-white/40 shadow-lg"
  style={{ 
    /* 1. TINTED GLASS BASE: Using #e7e1da at 15% opacity */
    backgroundColor: 'rgba(199, 181, 141, 0.15)', 
    
    /* 2. SUBTLE EDGE: Matching the 'The Nibo Process' button logic */
    borderColor: 'rgba(199, 181, 141, 0.1)', 
    
    /* 3. THE FROST: 10px blur for that premium 'Liquid' texture */
    backdropFilter: 'blur(10px)', 
    WebkitBackdropFilter: 'blur(10px)',
    
    /* 4. DEPTH: Inner shadow makes them feel like recessed glass trays */
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
  }}
/>
      <textarea 
        rows="4" 
        placeholder="Your Message" 
        className="w-full p-5 rounded-2xl transition-all border outline-none placeholder:text-[#FFFFF0]/40 text-[#FFFFF0] focus:border-white/40 shadow-lg"
  style={{ 
    /* 1. TINTED GLASS BASE: Using #e7e1da at 15% opacity */
    backgroundColor: 'rgba(199, 181, 141, 0.15)', 
    
    /* 2. SUBTLE EDGE: Matching the 'The Nibo Process' button logic */
    borderColor: 'rgba(199, 181, 141, 0.1)', 
    
    /* 3. THE FROST: 10px blur for that premium 'Liquid' texture */
    backdropFilter: 'blur(10px)', 
    WebkitBackdropFilter: 'blur(10px)',
    
    /* 4. DEPTH: Inner shadow makes them feel like recessed glass trays */
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
  }}
/>

<button 
  className="w-full mt-6 py-5 rounded-full font-black uppercase tracking-[0.4em] text-[11px] transition-all border shadow-2xl hover:scale-[1.01] active:scale-95"
  style={{
    /* 1. LIQUID TINT: Using your Stone/Sage tint at low opacity */
    backgroundColor: 'rgba(231, 225, 218, 0.12)', 
    
    /* 2. THE RIM: A very thin, subtle border to define the edge */
    borderColor: 'rgba(255, 255, 240, 0.15)',
    color: '#FFFFF0',

    /* 3. OPTICAL DEPTH: High blur pulls the background colors through */
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',

    /* 4. THE 3D EFFECT: 
       The 'inset' shadow creates the 'thickness' so it's not flat.
       The outer shadow helps it sit 'deep' in the page. */
    boxShadow: `
      inset 0 1px 2px rgba(255, 255, 240, 0.3), 
      0 10px 40px rgba(0, 0, 0, 0.12)
    `
  }}
>
  Send Inquiry
</button>
    </form>
  </div>
</section>
  );
}