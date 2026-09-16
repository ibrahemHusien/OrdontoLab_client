import React from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const titleWords = t.about.founderTitle.split(' ');
  const titlePrefix = titleWords.slice(0, -1).join(' ');
  const titleHighlight = titleWords[titleWords.length - 1];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: About Text */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0C1B2D]">
            {t.about.title}
            <div className="h-1 w-12 bg-[#C5912B] mt-2 rounded-full"></div>
          </h2>

          <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed">
            {t.about.p1}
          </p>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {t.about.p2}
          </p>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {t.about.p3}
          </p>
        </div>

        {/* Right Side: Founder Card */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-[#0C1B2D] text-white p-8 md:p-10 shadow-2xl flex flex-col justify-end min-h-[540px] group cursor-pointer border border-slate-800">
          
          {/* Background Image Container */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/founder.jpg" 
              alt="Husin Husin" 
              className="w-full h-[70%] object-cover object-top opacity-90 transition-transform duration-500 ease-out group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Gradient starts lower down so the head/face remains clean & clear */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B2D] via-[#0C1B2D]/85 via-50% to-transparent" />
          </div>

          {/* Card Content */}
          <div className="relative z-10 space-y-4 pt-44">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              {titlePrefix} <br />
              <span className="text-[#C5912B]">{titleHighlight}</span>
            </h3>

            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-normal">
              {t.about.founderDesc}
            </p>

            {/* Bottom Contact Pills */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 p-3 bg-[#08121E]/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm">
                <Mail className="text-[#C5912B] shrink-0" size={18} />
                <div>
                  <span className="block text-[10px] text-slate-400 tracking-wider font-semibold uppercase">
                    {t.about.founderEmailLabel}
                  </span>
                  <a href="mailto:husin@ordontolab.nl" className="text-xs font-medium text-white hover:text-[#C5912B] transition-colors">
                    husin@ordontolab.nl
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#08121E]/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm">
                <svg className="w-[18px] h-[18px] fill-[#C5912B] shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <div>
                  <span className="block text-[10px] text-slate-400 tracking-wider font-semibold uppercase">
                    {t.about.linkedinLabel}
                  </span>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-white hover:text-[#C5912B] transition-colors">
                    {t.about.viewProfile}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}