import React, { useState, useEffect } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const serviceTranslations = {
  nl: {
    "removable appliances": {
      title: "Uitneembare Apparatuur",
      desc: "Orthodontische oplossingen op maat. Individueel ontworpen uitneembare apparatuur, vervaardigd volgens de klinische vereisten van elke casus."
    },
    "fixed appliances": {
      title: "Vaste Apparatuur",
      desc: "Precisie-geproduceerde orthodontische apparatuur. Hoogwaardige vaste apparatuur gemaakt met oog voor detail en consistentie."
    },
    "clear aligners": {
      title: "Onzichtbare Beugels (Aligners)",
      desc: "Digitale aligner-oplossingen. Moderne digitale workflows voor behandelingen met onzichtbare beugels, gecombineerd met accurate planning."
    },
    "retention": {
      title: "Retentie Apparatuur",
      desc: "Ontworpen voor langetermijnstabiliteit. Betrouwbare retentie-oplossingen om de stabiliteit van orthodontische resultaten te ondersteunen."
    },
    "digital orthodontics": {
      title: "Digitale Orthodontie",
      desc: "Van digitale data naar accurate resultaten. Wij integreren digitale technologie in onze workflow om de nauwkeurigheid en efficiëntie te verhogen."
    },
    "custom solutions": {
      title: "Oplossingen op Maat",
      desc: "Expertise voor individuele casussen. Elke orthodontische casus is uniek. Wij bieden oplossingen op maat voor specifieke klinische behoeften."
    }
  }
};

export default function Services({ services, isLoading }) {
  const { lang, t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getLocalizedTitle = (item) => {
    if (!item) return '';
    if (typeof item.title === 'object') return item.title[lang] || item.title.en || '';
    if (item[`title_${lang}`]) return item[`title_${lang}`];
    
    const rawKey = String(item.title || '').trim().toLowerCase();
    if (lang === 'nl' && serviceTranslations.nl[rawKey]?.title) {
      return serviceTranslations.nl[rawKey].title;
    }
    return item.title;
  };

  const getLocalizedDesc = (item) => {
    if (!item) return '';
    const rawDesc = item.desc || item.description || item.text;
    if (typeof rawDesc === 'object') return rawDesc[lang] || rawDesc.en || '';
    if (item[`desc_${lang}`] || item[`description_${lang}`]) return item[`desc_${lang}`] || item[`description_${lang}`];
    
    const rawKey = String(item.title || '').trim().toLowerCase();
    if (lang === 'nl' && serviceTranslations.nl[rawKey]?.desc) {
      return serviceTranslations.nl[rawKey].desc;
    }
    return rawDesc || t.services?.defaultDesc || "High-precision orthodontic solutions tailored for dental specialists.";
  };

  return (
    <>
      <section id="services" className="py-16 md:py-24 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#0C1B2D] text-3xl md:text-4xl font-black mb-4">
              {t.services?.title || "Laboratory Services"}
            </h2>
            <div className="bg-[#C5912B] w-16 h-1.5 mx-auto rounded-full"></div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#C5912B]"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((item, idx) => {
                const title = getLocalizedTitle(item);
                const desc = getLocalizedDesc(item);

                return (
                  <div 
                    key={item._id || item.id || idx} 
                    onClick={() => setSelectedService({ ...item, localizedTitle: title, localizedDesc: desc })}
                    className="bg-white border border-slate-200/80 p-8 rounded-2xl hover:shadow-xl hover:border-[#C5912B]/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="bg-slate-50 text-[#0C1B2D] shadow-sm border border-slate-100 w-14 h-14 rounded-xl flex items-center justify-center font-black text-xl mb-6 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                        0{idx + 1}
                      </div>
                      <h3 className="text-[#0C1B2D] text-xl font-bold mb-3">{title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {desc}
                      </p>
                    </div>
                    <div className="text-[#C5912B] text-xs font-bold tracking-wider uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100">
                      {t.services?.readMore || "Read More"} <ChevronRight size={14} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <div className="relative w-full overflow-hidden leading-none z-20 bg-slate-50">
        <svg className="relative block w-full h-10 md:h-14" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,30 C300,90 600,10 900,70 C1050,100 1150,40 1200,20 L1200,120 L0,120 Z" className="fill-white" />
          <path d="M0,30 C300,90 600,10 900,70 C1050,100 1150,40 1200,20" fill="none" className="stroke-[#C5912B]" strokeWidth="10" />
        </svg>
      </div>

      {selectedService && (
        <div 
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-2xl max-w-lg w-full relative animate-scale-up"
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              aria-label={t.services?.closeModal || "Close Modal"}
            >
              <X size={20} />
            </button>
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden mb-6">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-black text-[#0C1B2D] mb-4">
              {selectedService.localizedTitle || getLocalizedTitle(selectedService)}
            </h3>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              {selectedService.localizedDesc || getLocalizedDesc(selectedService)}
            </p>
            <button 
              onClick={() => setSelectedService(null)}
              className="w-full bg-[#0C1B2D] text-white font-bold py-3 rounded-xl hover:bg-[#C5912B] transition-colors text-sm shadow-md"
            >
              {t.services?.close || "Close"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}