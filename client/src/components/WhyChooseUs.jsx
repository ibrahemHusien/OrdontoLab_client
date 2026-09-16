import React from 'react';
import { Target, MessageSquare, Crosshair, Cpu, Handshake, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <>
      <section id="why-us" className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#0C1B2D] text-3xl md:text-4xl font-black mb-4">
              {t.whyUs?.title || "WHY ORDONTO-LAB?"}
            </h2>
            <div className="bg-[#C5912B] w-16 h-1.5 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:bg-white hover:border-[#C5912B]/50 transition-all duration-300 group text-center flex flex-col items-center justify-between">
              <div className="w-14 h-14 bg-white text-[#C5912B] shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                <Target size={28} />
              </div>
              <div>
                <h3 className="text-[#0C1B2D] font-bold text-lg mb-2">
                  {t.whyUs?.card1Title || "Orthodontic Focus"}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  {t.whyUs?.card1Desc || "Our work is dedicated exclusively to orthodontics."}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:bg-white hover:border-[#C5912B]/50 transition-all duration-300 group text-center flex flex-col items-center justify-between">
              <div className="w-14 h-14 bg-white text-[#C5912B] shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                <MessageSquare size={28} />
              </div>
              <div>
                <h3 className="text-[#0C1B2D] font-bold text-lg mb-2">
                  {t.whyUs?.card2Title || "Direct Communication"}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  {t.whyUs?.card2Desc || "Direct communication with the laboratory specialist — without unnecessary layers."}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:bg-white hover:border-[#C5912B]/50 transition-all duration-300 group text-center flex flex-col items-center justify-between">
              <div className="w-14 h-14 bg-white text-[#C5912B] shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                <Crosshair size={28} />
              </div>
              <div>
                <h3 className="text-[#0C1B2D] font-bold text-lg mb-2">
                  {t.whyUs?.card3Title || "Precision"}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  {t.whyUs?.card3Desc || "Every case is handled with attention to detail and a strong focus on consistent quality."}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:bg-white hover:border-[#C5912B]/50 transition-all duration-300 group text-center flex flex-col items-center justify-between">
              <div className="w-14 h-14 bg-white text-[#C5912B] shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                <Cpu size={28} />
              </div>
              <div>
                <h3 className="text-[#0C1B2D] font-bold text-lg mb-2">
                  {t.whyUs?.card4Title || "Digital Workflow"}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  {t.whyUs?.card4Desc || "Modern digital processes connect clinical information with precise laboratory production."}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:bg-white hover:border-[#C5912B]/50 transition-all duration-300 group text-center flex flex-col items-center justify-between sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-white text-[#C5912B] shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                <Handshake size={28} />
              </div>
              <div>
                <h3 className="text-[#0C1B2D] font-bold text-lg mb-2">
                  {t.whyUs?.card5Title || "Personal Partnership"}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  {t.whyUs?.card5Desc || "We build long-term relationships with orthodontic practices based on reliability and trust."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 max-w-7xl mx-auto py-6">
        <div className="bg-[#0C1B2D] text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#C5912B] opacity-15 rounded-full blur-3xl"></div>
          
          <div className="max-w-2xl text-center md:text-left relative z-10">
            <h2 className="text-2xl md:text-4xl font-black tracking-wider uppercase mb-3">
              {t.whyUs?.ctaTitle1 || "YOUR CASE."} <span className="text-[#C5912B]">{t.whyUs?.ctaTitle2 || "OUR EXPERTISE."}</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
              {t.whyUs?.ctaDesc || "A specialized orthodontic laboratory, working directly with orthodontic professionals."}
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <a 
              href="#contact" 
              className="bg-[#C5912B] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#b07e1e] transition-all flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-0.5 text-base w-full md:w-auto"
            >
              {t.whyUs?.ctaBtn || "Get in Touch"} <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}