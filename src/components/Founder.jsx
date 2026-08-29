import React from 'react';
import { Mail } from 'lucide-react';

export default function Founder() {
  return (
    <div className="lg:col-span-5 relative mt-4 lg:mt-0">
      <div className="absolute -inset-4 bg-slate-50 border border-slate-100 rounded-3xl -z-10 transform rotate-1"></div>
      
      <div className="bg-[#0C1B2D] text-white rounded-3xl shadow-2xl relative overflow-hidden group min-h-137.5 flex flex-col justify-end border border-slate-800">
        
        <img 
          src="/founder.jpg" 
          alt="Founder of Ordonto-Lab" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-[#0C1B2D] via-[#0C1B2D]/90 to-transparent z-10"></div>
        
        <div className="relative z-20 p-8 pt-32">
          <h3 className="text-3xl font-black text-white tracking-wide leading-tight mb-4 drop-shadow-md">
            About the <br/> 
            <span className="text-[#C5912B]">Founder</span>
          </h3>
          
          <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-8 font-normal drop-shadow-sm">
            Ordonto-lab was founded by Husin Husin, an orthodontic technician with a background in orthodontics and a strong passion for precision and modern laboratory techniques. Through his experience, he developed a clear vision of how a laboratory should work alongside dental practices.
          </p>
          
          <div className="pt-6 border-t border-slate-700/50">
            <div className="flex flex-col gap-3">
              <a href="mailto:husin@ordontolab.nl" className="inline-flex items-center gap-4 bg-white/5 hover:bg-[#C5912B] border border-slate-700 hover:border-[#C5912B] p-3 pr-6 rounded-xl transition-all group/btn w-full backdrop-blur-sm">
                <div className="bg-white/10 p-2.5 rounded-lg group-hover/btn:bg-white transition-colors shrink-0">
                  <Mail size={20} className="text-[#C5912B] group-hover/btn:text-[#0C1B2D] transition-colors" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 group-hover/btn:text-[#0C1B2D]/80 uppercase font-bold transition-colors">Founder's Email</div>
                  <div className="text-sm font-bold text-white group-hover/btn:text-[#0C1B2D] transition-colors">husin@ordontolab.nl</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/dt-husin-husin-96b209228" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-white/5 hover:bg-[#C5912B] border border-slate-700 hover:border-[#C5912B] p-3 pr-6 rounded-xl transition-all group/btn w-full backdrop-blur-sm">
                <div className="bg-white/10 p-2.5 rounded-lg group-hover/btn:bg-white transition-colors shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-[#C5912B] group-hover/btn:fill-[#0C1B2D] transition-colors" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 group-hover/btn:text-[#0C1B2D]/80 uppercase font-bold transition-colors">LinkedIn Profile</div>
                  <div className="text-sm font-bold text-white group-hover/btn:text-[#0C1B2D] transition-colors">View Profile</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}