import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Vlijtweg+1,+8191+JR+Wapenveld";

  return (
    <footer className="bg-[#0C1B2D] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="OrdontoLab Logo" 
                className="h-10 w-auto object-contain bg-white p-1 rounded-lg"
                onError={(e) => { e.target.src = '/logo.png'; }}
              />
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white">
                  Ordonto-Lab
                </span>
                <span className="text-[10px] tracking-widest text-[#C5912B] font-bold uppercase">
                  Orthodontic Laboratory
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Specialized in manufacturing high-precision orthodontic appliances tailored for dental specialists.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5912B]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li><a href="#home" className="hover:text-[#C5912B] transition-colors">{t.nav?.home || 'Home'}</a></li>
              <li><a href="#about" className="hover:text-[#C5912B] transition-colors">{t.nav?.about || 'About Us'}</a></li>
              <li><a href="#services" className="hover:text-[#C5912B] transition-colors">{t.nav?.services || 'Services'}</a></li>
              <li><a href="#why-us" className="hover:text-[#C5912B] transition-colors">{t.nav?.whyUs || 'Why Us'}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5912B]">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <a href="tel:+31643052263" className="flex items-center gap-2.5 hover:text-[#C5912B] transition-colors">
                <Phone size={15} className="text-[#C5912B] shrink-0" />
                <span>+31 6 43052263</span>
              </a>
              <a href="mailto:info@ordontolab.nl" className="flex items-center gap-2.5 hover:text-[#C5912B] transition-colors">
                <Mail size={15} className="text-[#C5912B] shrink-0" />
                <span>info@ordontolab.nl</span>
              </a>
              
              <a 
                href={googleMapsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#C5912B] transition-colors"
              >
                <MapPin size={15} className="text-[#C5912B] shrink-0" />
                <span>Vlijtweg 1, 8191 JR Wapenveld</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Ordonto-Lab. All rights reserved.</p>
          <p className="tracking-widest uppercase font-semibold text-[10px] text-slate-400">
            Precision | Quality | Care
          </p>
        </div>
      </div>
    </footer>
  );
}