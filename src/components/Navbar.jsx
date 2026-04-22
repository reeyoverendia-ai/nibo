import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Solutions', href: '#process' },
    { name: 'Infrastructure', href: '#testimony' },
    { name: 'Results', href: '#contact' },
  ];

  return (
    <>
      {/* 1. THE TOP BAR (Desktop & Mobile Header) */}
      <nav 
        className="fixed top-0 w-full z-[100] transition-all duration-300 border-b border-white/10 flex items-center"
        style={{ 
          backgroundColor: 'rgba(255, 255, 240, 0.1)', 
          backdropFilter: 'blur(4px)', 
          WebkitBackdropFilter: 'blur(4px)',
          height: '96px'
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-8 md:px-12 flex justify-between items-center">
          {/* LOGO AREA */}
          <div className="flex items-center gap-3 text-[#FFFFF0] font-black text-2xl tracking-tighter">
            NIBO.
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden md:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-[#FFFFF0]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:opacity-60 transition-opacity">
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="ml-4 px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all uppercase tracking-[0.3em]"
            >
              Contact Intelligence
            </a>
          </div>

          {/* HAMBURGER TOGGLE (Visible only on Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 z-[110] relative"
          >
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'bg-[#4A5D23] rotate-45 translate-y-2' : 'bg-[#FFFFF0]'}`}></span>
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'opacity-0' : 'bg-[#FFFFF0]'}`}></span>
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'bg-[#4A5D23] -rotate-45 -translate-y-2' : 'bg-[#FFFFF0]'}`}></span>
          </button>
        </div>
      </nav>

      {/* 2. THE MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 w-screen h-screen z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
        style={{ 
          background: 'linear-gradient(90deg, #a3b899 0%, #d4cbb8 80%)' 
        }}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-4xl font-black uppercase tracking-tighter text-[#4A5D23] hover:opacity-60 transition-opacity"
            >
              {link.name}
            </a>
          ))}

          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="mt-6 px-10 py-5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl transition-all border"
            style={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.15)', 
              borderColor: 'rgba(255, 255, 240, 0.2)',
              color: '#FFFFF0',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            Contact Intelligence
          </a>
        </div>
      </div>
    </>
  );
}