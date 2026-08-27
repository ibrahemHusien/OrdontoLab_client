import React from 'react';
import { FaShieldAlt, FaAward, FaArrowRight } from 'react-icons/fa';

const Hero = ({ companyData }) => {
  return (
    <section id="home" className="relative bg-linear-to-br from-primary via-[#135c9c] to-secondary text-white py-24 overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-accent text-sm font-semibold">
              <FaAward className="text-accent" />
              <span>Precision & Excellence in Orthodontics</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Advanced Solutions for <span className="text-accent">Perfect Smiles</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 font-light">
              {companyData?.about || 'Ordonto Lab is a professional orthodontic laboratory dedicated to providing precision-crafted orthodontic appliances and advanced digital solutions.'}
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-background transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
                <FaArrowRight className="text-sm" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-transparent text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/40 hover:bg-white/10 transition-all"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Quick Stats/Features */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 text-center lg:text-left">
              <div>
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-xs text-gray-300 mt-1">Precision Crafted</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">Digital</p>
                <p className="text-xs text-gray-300 mt-1">Workflow Ready</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">Expert</p>
                <p className="text-xs text-gray-300 mt-1">Laboratory Standards</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Box */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-2xl flex items-center space-x-4">
                  <div className="bg-accent p-4 rounded-xl text-primary text-2xl font-bold">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Quality Guaranteed</h3>
                    <p className="text-sm text-gray-200">Using premium certified dental materials.</p>
                  </div>
                </div>

                <div className="bg-white/10 p-6 rounded-2xl flex items-center space-x-4">
                  <div className="bg-secondary p-4 rounded-xl text-white text-2xl font-bold">
                    🦷
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Custom Appliances</h3>
                    <p className="text-sm text-gray-200">Tailored precisely to your clinical requirements.</p>
                  </div>
                </div>

                <div className="bg-linear-to-r from-secondary to-primary p-6 rounded-2xl text-center shadow-inner">
                  <p className="text-sm uppercase tracking-wider text-gray-200">Trusted Partner for Dental Clinics</p>
                  <p className="text-2xl font-extrabold text-white mt-1">{companyData?.name || 'Ordonto Lab'}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;