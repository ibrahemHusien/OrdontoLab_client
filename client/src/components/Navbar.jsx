import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Vlijtweg+1,+8191+JR+Wapenveld";

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
      {/* Top Info Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-2 px-4 md:px-8 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href="tel:+31643052263" className="flex items-center gap-1.5 hover:text-[#C5912B] transition-colors">
              <Phone size={13} className="text-[#C5912B]" />
              <span>+31 6 43052263</span>
            </a>
            <a href="mailto:info@ordontolab.nl" className="flex items-center gap-1.5 hover:text-[#C5912B] transition-colors">
              <Mail size={13} className="text-[#C5912B]" />
              <span>info@ordontolab.nl</span>
            </a>
            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#C5912B] transition-colors"
              title="Vlijtweg 1, 8191 JR Wapenveld"
            >
              <MapPin size={13} className="text-[#C5912B]" />
              <span>{t.nav?.location || 'Our Location'}</span>
            </a>
          </div>

          <div className="hidden lg:block text-slate-400 tracking-wider text-[11px] uppercase font-bold">
            {t.tagline}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/logo.jpg" 
            alt="OrdontoLab Logo" 
            className="h-10 w-auto object-contain"
            onError={(e) => { e.target.src = '/logo.png'; }}
          />
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-[#0C1B2D]">
              Ordonto-Lab
            </span>
            <span className="text-[10px] tracking-widest text-[#C5912B] font-bold uppercase -mt-1">
              Orthodontic Laboratory
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#home" className="hover:text-[#C5912B] transition-colors">{t.nav.home}</a>
          <a href="#about" className="hover:text-[#C5912B] transition-colors">{t.nav.about}</a>
          <a href="#services" className="hover:text-[#C5912B] transition-colors">{t.nav.services}</a>
          <a href="#why-us" className="hover:text-[#C5912B] transition-colors">{t.nav.whyUs}</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:border-[#C5912B] hover:text-[#C5912B] transition-all bg-white shadow-xs"
          >
            <Globe size={15} className="text-[#C5912B]" />
            <span className="uppercase">{lang === 'en' ? 'NL' : 'EN'}</span>
          </button>

          <a
            href="#contact"
            className="bg-[#0C1B2D] text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-[#C5912B] transition-colors shadow-sm"
          >
            {t.nav.contactUs}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 bg-white"
          >
            <Globe size={14} className="text-[#C5912B]" />
            <span className="uppercase">{lang === 'en' ? 'NL' : 'EN'}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 hover:text-[#C5912B] p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 space-y-4 shadow-lg">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-slate-700 font-medium hover:text-[#C5912B]">{t.nav.home}</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-slate-700 font-medium hover:text-[#C5912B]">{t.nav.about}</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-slate-700 font-medium hover:text-[#C5912B]">{t.nav.services}</a>
          <a href="#why-us" onClick={() => setIsOpen(false)} className="block text-slate-700 font-medium hover:text-[#C5912B]">{t.nav.whyUs}</a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#0C1B2D] text-white text-sm font-bold py-3 rounded-xl hover:bg-[#C5912B] transition-colors mt-2"
          >
            {t.nav.contactUs}
          </a>
        </div>
      )}
    </header>
  );
}