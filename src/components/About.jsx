import React from 'react';
import Founder from './Founder';

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="mb-8">
              <h2 className="text-[#0C1B2D] text-3xl md:text-4xl font-black mb-4">About Us</h2>
              <div className="w-16 h-1.5 bg-[#C5912B] rounded-full"></div>
            </div>
            
            <div className="text-slate-600 space-y-5 leading-relaxed font-medium text-sm md:text-base mb-8">
              <p>
                <strong className="text-[#0C1B2D]">Ordonto-lab</strong> is a specialized orthodontic laboratory focused on quality, precision, and direct collaboration with dental and orthodontic practices.
              </p>
              <p>
                We believe that short communication lines make a real difference. That is why we work closely and directly with each practice, allowing questions, feedback, and adjustments to be handled quickly and efficiently.
              </p>
              <p>
                By combining orthodontic expertise with modern digital techniques and a personal approach, we aim to be more than just a laboratory. We want to be a reliable and accessible partner for your practice. A key part of this approach is direct and personal communication. By keeping the communication lines short, we can respond quickly, discuss cases directly, and understand the specific needs of each practice. This allows us to build long-term professional relationships based on trust, flexibility, and reliable service.
              </p>
            </div>
          </div>

          <Founder />
        </div>
      </section>

      <div className="relative w-full overflow-hidden leading-none z-20 bg-white">
        <svg className="relative block w-full h-10 md:h-14" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,80 350,-30 500,60 C650,150 900,20 1200,45 L1200,120 L0,120 Z" className="fill-slate-50" />
          <path d="M0,0 C150,80 350,-30 500,60 C650,150 900,20 1200,45" fill="none" className="stroke-[#C5912B]" strokeWidth="8" />
        </svg>
      </div>
    </>
  );
}