import React from 'react';
import { ChevronRight, ShieldCheck, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative bg-slate-50/50 pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0C1B2D] leading-tight">
            {t.hero.titleLine1} <br />
            <span className="text-[#C5912B]">{t.hero.titleLine2}</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C5912B] hover:bg-[#a87a22] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>{t.hero.btnContact}</span>
              <ChevronRight size={18} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:border-[#C5912B] hover:text-[#C5912B] font-bold px-6 py-3.5 rounded-xl shadow-xs transition-all"
            >
              <span>{t.hero.btnServices}</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xl space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-50 text-[#C5912B] rounded-xl shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[#0C1B2D] text-base mb-1">
                {t.hero.card1Title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {t.hero.card1Desc}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6 flex items-start gap-4">
            <div className="p-3 bg-amber-50 text-[#C5912B] rounded-xl shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[#0C1B2D] text-base mb-1">
                {t.hero.card2Title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {t.hero.card2Desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}