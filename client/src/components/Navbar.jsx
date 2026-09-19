import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Vlijtweg+1,+8191+JR+Wapenveld";

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
      <div className="bg-[#0C1B2D] py-2.5 text-xs text-slate-200">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <a 
              href="tel:+31643052263" 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/15 text-white hover:bg-white hover:text-[#0C1B2D] transition-all"
            >
              <Phone size={13} className="text-[#C5912B]" />
              <span className="font-medium">+31 6 43052263</span>
            </a>

            <a 
              href="mailto:info@ordontolab.nl" 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/15 text-white hover:bg-white hover:text-[#0C1B2D] transition-all"
            >
              <Mail size={13} className="text-[#C5912B]" />
              <span className="font-medium">info@ordontolab.nl</span>
            </a>

            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/15 text-white hover:bg-white hover:text-[#0C1B2D] transition-all"
              title="Vlijtweg 1, 8191 JR Wapenveld"
            >
              <MapPin size={13} className="text-[#C5912B]" />
              <span className="font-medium">{t.location}</span>
            </a>
          </div>

          <div className="hidden lg:block text-[#C5912B] tracking-wider text-[11px] uppercase font-bold">
            {t.tagline}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 h-24 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-0 -ml-2">
          <img 
            src="/logo.jpg" 
            alt="OrdontoLab Logo" 
            className="h-16 md:h-20 w-auto object-contain"
            onError={(e) => { e.target.src = '/logo.png'; }}
          />
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tight text-[#0C1B2D]">
              Ordonto-Lab
            </span>
            <span className="text-xs tracking-widest text-[#C5912B] font-bold uppercase -mt-0.5">
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