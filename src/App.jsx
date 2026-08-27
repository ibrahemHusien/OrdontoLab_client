import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, Globe, Award, ShieldCheck, ChevronRight, X, UserCircle, 
  Target, MessageSquare, Crosshair, Cpu, Handshake, Menu 
} from 'lucide-react';
import { getCompany, getServices } from './services/api';

export default function App() {
  const [companyData, setCompanyData] = useState({
    heroTitle: 'Precision & Quality in',
    heroHighlight: 'Orthodontic Solutions',
    heroDesc: 'We specialize in manufacturing high-precision orthodontic appliances designed tailored for dental specialists, combining state-of-the-art craftsmanship with biological care.'
  });

  const defaultServices = [
    { 
      id: 1,
      title: 'Removable Appliances', 
      desc: 'Custom expansion plates, retainers, and functional appliances crafted with bio-compatible materials.' 
    },
    { 
      id: 2,
      title: 'Fixed Appliances', 
      desc: 'Precision-engineered space maintainers, palatal expanders, and specialized fixed orthodontic structures.' 
    },
    { 
      id: 3,
      title: 'Aligners & Retainers', 
      desc: 'High-clarity clear aligners and durable post-treatment retention systems for long-lasting results.' 
    }
  ];

  const [services, setServices] = useState(defaultServices);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    Promise.all([
      getCompany().catch(() => null),
      getServices().catch(() => null)
    ]).then(([companyRes, servicesRes]) => {
      if (companyRes?.data) {
        setCompanyData(prev => ({
          heroTitle: companyRes.data.heroTitle || prev.heroTitle,
          heroHighlight: companyRes.data.heroHighlight || prev.heroHighlight,
          heroDesc: companyRes.data.heroDesc || prev.heroDesc
        }));
      }
      
      if (servicesRes?.data?.length > 0) {
        const validServices = servicesRes.data.filter(s => s.title && (s.desc || s.description || s.text));
        if (validServices.length > 0) {
          setServices(validServices);
        }
      }
      
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#C5912B] selection:text-white relative scroll-smooth">
      
      {/* Custom CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Top Bar - Full Width Spacing */}
      <div className="bg-slate-100 text-slate-600 border-b border-slate-200 py-2.5 px-6 md:px-12 lg:px-16 text-xs">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
            <a href="tel:+31643052263" className="flex items-center gap-1.5 hover:text-[#C5912B] transition-colors font-medium">
              <Phone size={13} className="text-[#C5912B]" /> +31 6 43052263
            </a>
            <a href="mailto:info@ordontolab.nl" className="flex items-center gap-1.5 hover:text-[#C5912B] transition-colors font-medium">
              <Mail size={13} className="text-[#C5912B]" /> info@ordontolab.nl
            </a>
          </div>
          <div className="flex items-center gap-3 font-bold tracking-widest text-[11px] uppercase text-[#0C1B2D]">
            <span>PRECISION</span>
            <span className="text-[#C5912B]">|</span>
            <span>QUALITY</span>
            <span className="text-[#C5912B]">|</span>
            <span>CARE</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Full Width Spacing */}
      <header className="bg-white text-[#0C1B2D] sticky top-0 z-40 shadow-sm border-b border-slate-100">
        <div className="w-full px-6 md:px-12 lg:px-16 py-3 flex justify-between items-center">
          
          {/* Logo & Text */}
          <a href="#home" className="flex items-center gap-4 group">
            <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden py-1">
              <img src="/logo.jpg" alt="Ordonto-Lab Logo" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
            </div>
            <div>
              <div className="text-xl font-black tracking-wider text-[#0C1B2D] leading-none">ORDONTO-LAB</div>
              <div className="text-[#C5912B] text-[11px] font-bold tracking-widest normal-case mt-1.5">Orthodontic Laboratory</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <a href="#home" className="hover:text-[#C5912B] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#C5912B] transition-colors">About Us</a>
            <a href="#services" className="hover:text-[#C5912B] transition-colors">Services</a>
            <a href="#why-us" className="hover:text-[#C5912B] transition-colors">Why Us</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="bg-[#0C1B2D] text-white font-bold px-6 py-2.5 rounded-lg hover:bg-[#C5912B] hover:text-[#0C1B2D] transition-colors text-sm shadow-md">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 text-slate-700 hover:text-[#C5912B] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-lg animate-fade-in">
            <a 
              href="#home" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-slate-700 font-semibold hover:text-[#C5912B] py-1 border-b border-slate-100"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-slate-700 font-semibold hover:text-[#C5912B] py-1 border-b border-slate-100"
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-slate-700 font-semibold hover:text-[#C5912B] py-1 border-b border-slate-100"
            >
              Services
            </a>
            <a 
              href="#why-us" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-slate-700 font-semibold hover:text-[#C5912B] py-1 border-b border-slate-100"
            >
              Why Us
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block bg-[#0C1B2D] text-white text-center font-bold py-3 rounded-lg hover:bg-[#C5912B] transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
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

      {/* Wave Separator 1 (Hero -> About Us) */}
      <div className="relative w-full overflow-hidden leading-none -mt-1 z-20 bg-slate-50">
        <svg className="relative block w-full h-10 md:h-14" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 600,10 900,75 C1050,105 1150,45 1200,25 L1200,120 L0,120 Z" className="fill-white" />
          <path d="M0,0 C300,90 600,10 900,75 C1050,105 1150,45 1200,25" fill="none" className="stroke-[#C5912B]" strokeWidth="12" />
        </svg>
      </div>

      {/* About Us Section */}
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

          {/* Founder Card */}
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

        </div>
      </section>

      {/* Wave Separator 2 */}
      <div className="relative w-full overflow-hidden leading-none z-20 bg-white">
        <svg className="relative block w-full h-10 md:h-14" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,80 350,-30 500,60 C650,150 900,20 1200,45 L1200,120 L0,120 Z" className="fill-slate-50" />
          <path d="M0,0 C150,80 350,-30 500,60 C650,150 900,20 1200,45" fill="none" className="stroke-[#C5912B]" strokeWidth="8" />
        </svg>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#0C1B2D] text-3xl md:text-4xl font-black mb-4">Laboratory Services</h2>
            <div className="bg-[#C5912B] w-16 h-1.5 mx-auto rounded-full"></div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#C5912B]"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((item, idx) => (
                <div 
                  key={item._id || item.id || idx} 
                  onClick={() => setSelectedService(item)}
                  className="bg-white border border-slate-200/80 p-8 rounded-2xl hover:shadow-xl hover:border-[#C5912B]/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="bg-slate-50 text-[#0C1B2D] shadow-sm border border-slate-100 w-14 h-14 rounded-xl flex items-center justify-center font-black text-xl mb-6 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h3 className="text-[#0C1B2D] text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {item.desc || item.description || item.text || "High-precision orthodontic solutions tailored for dental specialists."}
                    </p>
                  </div>
                  <div className="text-[#C5912B] text-xs font-bold tracking-wider uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100">
                    Read More <ChevronRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Wave Separator 3 */}
      <div className="relative w-full overflow-hidden leading-none z-20 bg-slate-50">
        <svg className="relative block w-full h-10 md:h-14" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,30 C300,90 600,10 900,70 C1050,100 1150,40 1200,20 L1200,120 L0,120 Z" className="fill-white" />
          <path d="M0,30 C300,90 600,10 900,70 C1050,100 1150,40 1200,20" fill="none" className="stroke-[#C5912B]" strokeWidth="10" />
        </svg>
      </div>

      {/* Why Ordonto-Lab Section */}
      <section id="why-us" className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#0C1B2D] text-3xl md:text-4xl font-black mb-4">WHY ORDONTO-LAB?</h2>
            <div className="bg-[#C5912B] w-16 h-1.5 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:bg-white hover:border-[#C5912B]/50 transition-all duration-300 group text-center flex flex-col items-center justify-between">
              <div className="w-14 h-14 bg-white text-[#C5912B] shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                <Target size={28} />
              </div>
              <div>
                <h3 className="text-[#0C1B2D] font-bold text-lg mb-2">Orthodontic Focus</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  Our work is dedicated exclusively to orthodontics.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:bg-white hover:border-[#C5912B]/50 transition-all duration-300 group text-center flex flex-col items-center justify-between">
              <div className="w-14 h-14 bg-white text-[#C5912B] shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                <MessageSquare size={28} />
              </div>
              <div>
                <h3 className="text-[#0C1B2D] font-bold text-lg mb-2">Direct Communication</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  Direct communication with the laboratory specialist — without unnecessary layers.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:bg-white hover:border-[#C5912B]/50 transition-all duration-300 group text-center flex flex-col items-center justify-between">
              <div className="w-14 h-14 bg-white text-[#C5912B] shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                <Crosshair size={28} />
              </div>
              <div>
                <h3 className="text-[#0C1B2D] font-bold text-lg mb-2">Precision</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  Every case is handled with attention to detail and a strong focus on consistent quality.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:bg-white hover:border-[#C5912B]/50 transition-all duration-300 group text-center flex flex-col items-center justify-between">
              <div className="w-14 h-14 bg-white text-[#C5912B] shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                <Cpu size={28} />
              </div>
              <div>
                <h3 className="text-[#0C1B2D] font-bold text-lg mb-2">Digital Workflow</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  Modern digital processes connect clinical information with precise laboratory production.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:bg-white hover:border-[#C5912B]/50 transition-all duration-300 group text-center flex flex-col items-center justify-between sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-white text-[#C5912B] shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C5912B] group-hover:text-white transition-colors">
                <Handshake size={28} />
              </div>
              <div>
                <h3 className="text-[#0C1B2D] font-bold text-lg mb-2">Personal Partnership</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  We build long-term relationships with orthodontic practices based on reliability and trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-6">
        <div className="bg-[#0C1B2D] text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#C5912B] opacity-15 rounded-full blur-3xl"></div>
          
          <div className="max-w-2xl text-center md:text-left relative z-10">
            <h2 className="text-2xl md:text-4xl font-black tracking-wider uppercase mb-3">
              YOUR CASE. <span className="text-[#C5912B]">OUR EXPERTISE.</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
              A specialized orthodontic laboratory, working directly with orthodontic professionals.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <a 
              href="#contact" 
              className="bg-[#C5912B] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#b07e1e] transition-all flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-0.5 text-base w-full md:w-auto"
            >
              Get in Touch <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
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
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden mb-6">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-black text-[#0C1B2D] mb-4">{selectedService.title}</h3>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              {selectedService.desc || selectedService.description || selectedService.text || "High-precision orthodontic solutions tailored for dental specialists."}
            </p>
            <button 
              onClick={() => setSelectedService(null)}
              className="w-full bg-[#0C1B2D] text-white font-bold py-3 rounded-xl hover:bg-[#C5912B] transition-colors text-sm shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Section */}
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

      {/* Floating WhatsApp Action Button */}
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

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-500 py-8 px-4 text-center text-sm font-medium border-t border-slate-200">
        <p>© {new Date().getFullYear()} OrdontoLab (ORTHODONTIC LABORATORY). All rights reserved.</p>
      </footer>

    </div>
  );
}