import React from 'react';
import { Phone, Globe, Mail, UserCircle } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-slate-50 text-[#0C1B2D] py-16 md:py-24 px-4 md:px-8 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#C5912B] text-xs font-bold uppercase tracking-widest block mb-2">Direct Contact</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Get in Touch with Us</h2>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Reach out to us directly through any of our channels below.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="tel:+31643052263" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#C5912B] hover:shadow-md transition-all group">
              <div className="bg-slate-50 p-3 rounded-xl shadow-sm group-hover:bg-[#C5912B] transition-colors shrink-0">
                <Phone size={22} className="text-[#0C1B2D] group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 uppercase font-bold">Phone (Call)</div>
                <div className="text-sm font-bold text-[#0C1B2D]">+31 6 43052263</div>
              </div>
            </a>

            <a href="https://wa.me/31643052263" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#22c55e] hover:shadow-md transition-all group">
              <div className="bg-slate-50 p-3 rounded-xl shadow-sm group-hover:bg-[#22c55e] transition-colors shrink-0">
                <Globe size={22} className="text-[#22c55e] group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 uppercase font-bold">WhatsApp Chat</div>
                <div className="text-sm font-bold text-[#0C1B2D]">Click to Chat ↗</div>
              </div>
            </a>

            <a href="mailto:info@ordontolab.nl" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#C5912B] hover:shadow-md transition-all group">
              <div className="bg-slate-50 p-3 rounded-xl shadow-sm group-hover:bg-[#C5912B] transition-colors shrink-0">
                <Mail size={22} className="text-[#0C1B2D] group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 uppercase font-bold">General Info Email</div>
                <div className="text-sm font-bold text-[#0C1B2D]">info@ordontolab.nl</div>
              </div>
            </a>

            <a href="mailto:husin@ordontolab.nl" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0C1B2D] hover:shadow-md transition-all group">
              <div className="bg-slate-50 p-3 rounded-xl shadow-sm group-hover:bg-[#0C1B2D] transition-colors shrink-0">
                <UserCircle size={22} className="text-[#0C1B2D] group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 uppercase font-bold">Founder Email</div>
                <div className="text-sm font-bold text-[#C5912B]">husin@ordontolab.nl</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/31643052263"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-xs md:text-sm pr-0 group-hover:pr-2.5 pl-1">
          Chat on WhatsApp
        </span>
        <svg className="w-7 h-7 md:w-8 md:h-8 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </>
  );
}