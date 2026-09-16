import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-100 text-slate-600 border-b border-slate-200 py-2.5 px-6 md:px-12 lg:px-16 text-xs">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
            <a href="tel:+31643052263" className="flex items-center gap-1.5 hover:text-[#C5912B] transition-colors font-medium">
              <Phone size={13} className="text-[#C5912B]" /> +31 6 43052263
            </a>
            <a href="mailto:info@ordontolab.nl" className="flex items-center gap-1.5 hover:text-[#C5912B] transition-colors font-medium">
              <Mail size={13} className="text-[#C5912B]" /> info@ordontolab.nl
            </a>
          </div>
          <div className="flex items-center gap-3 font-bold tracking-widest text-[11px] uppercase text-[#0C1B2D]">
            <span>PRECISION</span>
            <span className="text-[#C5912B]">|</span>
            <span>QUALITY</span>
            <span className="text-[#C5912B]">|</span>
            <span>CARE</span>
          </div>
        </div>
      </div>

      <header className="bg-white text-[#0C1B2D] sticky top-0 z-40 shadow-sm border-b border-slate-100">
        <div className="w-full px-6 md:px-12 lg:px-16 py-3 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-4 group">
            <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden py-1">
              <img src="/logo.jpg" alt="Ordonto-Lab Logo" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
            </div>
            <div>
              <div className="text-xl font-black tracking-wider text-[#0C1B2D] leading-none">ORDONTO-LAB</div>
              <div className="text-[#C5912B] text-[11px] font-bold tracking-widest normal-case mt-1.5">Orthodontic Laboratory</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <a href="#home" className="hover:text-[#C5912B] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#C5912B] transition-colors">About Us</a>
            <a href="#services" className="hover:text-[#C5912B] transition-colors">Services</a>
            <a href="#why-us" className="hover:text-[#C5912B] transition-colors">Why Us</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="bg-[#0C1B2D] text-white font-bold px-6 py-2.5 rounded-lg hover:bg-[#C5912B] hover:text-[#0C1B2D] transition-colors text-sm shadow-md">
              Contact Us
            </a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 text-slate-700 hover:text-[#C5912B] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-lg animate-fade-in">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 font-semibold hover:text-[#C5912B] py-1 border-b border-slate-100">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 font-semibold hover:text-[#C5912B] py-1 border-b border-slate-100">About Us</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 font-semibold hover:text-[#C5912B] py-1 border-b border-slate-100">Services</a>
            <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 font-semibold hover:text-[#C5912B] py-1 border-b border-slate-100">Why Us</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block bg-[#0C1B2D] text-white text-center font-bold py-3 rounded-lg hover:bg-[#C5912B] transition-colors text-sm">Contact Us</a>
          </div>
        )}
      </header>
    </>
  );
}