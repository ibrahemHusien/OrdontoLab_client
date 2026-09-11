import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ar' ? 'nl' : 'ar';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="shrink-0">
            <a href="/" className="flex items-center">
              <img src={logo} alt="OrdontoLab" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-gray-900">ORDONTOLAB</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#C5912B] transition">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#C5912B] transition">
              {t('nav.services')}
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#C5912B] transition">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#C5912B] transition">
              {t('nav.contact')}
            </a>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-[#C5912B] text-white px-4 py-2 rounded-lg hover:bg-[#B07A1F] transition font-medium"
              title={i18n.language === 'ar' ? 'Switch to Dutch' : 'تبديل للعربية'}
            >
              <Globe size={18} />
              <span>{i18n.language === 'ar' ? 'NL' : 'AR'}</span>
            </button>

            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition font-medium">
              {t('nav.contact_us')}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-[#C5912B] text-white px-3 py-2 rounded-lg hover:bg-[#B07A1F] transition"
              title={i18n.language === 'ar' ? 'Switch to Dutch' : 'تبديل للعربية'}
            >
              <Globe size={16} />
              <span className="text-sm">{i18n.language === 'ar' ? 'NL' : 'AR'}</span>
            </button>

            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-[#C5912B] transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-50 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-[#C5912B] px-4 py-2">
              {t('nav.home')}
            </a>
            <a href="#services" className="block text-gray-700 hover:text-[#C5912B] px-4 py-2">
              {t('nav.services')}
            </a>
            <a href="#features" className="block text-gray-700 hover:text-[#C5912B] px-4 py-2">
              {t('nav.about')}
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-[#C5912B] px-4 py-2">
              {t('nav.contact')}
            </a>
            <button className="w-full bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition font-medium">
              {t('nav.contact_us')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
