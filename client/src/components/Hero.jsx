import React from 'react';
import { ShieldCheck, Award, ChevronRight } from 'lucide-react';

export default function Hero({ companyData }) {
  return (
    <>
      <section id="home" className="bg-slate-50 text-[#0C1B2D] pt-16 pb-12 md:pt-24 md:pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              {companyData.heroTitle} <br />
              <span className="text-[#C5912B]">{companyData.heroHighlight}</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed max-w-xl font-medium">
              {companyData.heroDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-[#C5912B] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#b07e1e] transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                Contact Our Lab <ChevronRight size={18} />
              </a>
              <a href="#services" className="bg-white border border-slate-200 text-slate-700 hover:border-[#C5912B] hover:text-[#C5912B] font-bold px-7 py-3.5 rounded-xl transition-all shadow-sm">
                Our Services
              </a>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-xl space-y-5">
            <div className="flex items-start gap-4">
              <ShieldCheck size={26} className="text-[#C5912B] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[#0C1B2D] font-bold text-base mb-1">Precision Craftsmanship</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Custom orthodontic appliances created with utmost accuracy and attention to biomechanical details.</p>
              </div>
            </div>
            <div className="w-full h-px bg-slate-100"></div>
            <div className="flex items-start gap-4">
              <Award size={26} className="text-[#C5912B] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[#0C1B2D] font-bold text-base mb-1">Quality Assurance</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Rigorous standards ensuring optimal fit, high bio-compatibility, and maximum patient comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full overflow-hidden leading-none -mt-1 z-20 bg-slate-50">
        <svg className="relative block w-full h-10 md:h-14" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 600,10 900,75 C1050,105 1150,45 1200,25 L1200,120 L0,120 Z" className="fill-white" />
          <path d="M0,0 C300,90 600,10 900,75 C1050,105 1150,45 1200,25" fill="none" className="stroke-[#C5912B]" strokeWidth="12" />
        </svg>
      </div>
    </>
  );
}