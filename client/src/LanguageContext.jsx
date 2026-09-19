import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    tagline: 'PRECISION | QUALITY | CARE',
    location: 'Our Location',
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      whyUs: 'Our Difference',
      contactUs: 'Contact Us',
    },
    hero: {
      titleLine1: 'Precision & Quality in',
      titleLine2: 'Orthodontic Solutions',
      description: 'We specialize in manufacturing high-precision orthodontic appliances designed tailored for dental specialists, combining state-of-the-art craftsmanship with biological care.',
      btnContact: 'Contact Our Lab',
      btnServices: 'Our Services',
      card1Title: 'Precision Craftsmanship',
      card1Desc: 'Custom orthodontic appliances created with utmost accuracy and attention to biomechanical details.',
      card2Title: 'Quality Assurance',
      card2Desc: 'Rigorous standards ensuring optimal fit, high bio-compatibility, and maximum patient comfort.',
    },
    about: {
      title: 'About Us',
      p1: 'Ordonto-lab is a specialized orthodontic laboratory focused on quality, precision, and direct collaboration with dental and orthodontic practices.',
      p2: 'We believe that short communication lines make a real difference. That is why we work closely and directly with each practice, allowing questions, feedback, and adjustments to be handled quickly and efficiently.',
      p3: 'By combining orthodontic expertise with modern digital techniques and a personal approach, we aim to be more than just a laboratory. We want to be a reliable and accessible partner for your practice. A key part of this approach is direct and personal communication. By keeping the communication lines short, we can respond quickly, discuss cases directly, and understand the specific needs of each practice. This allows us to build long-term professional relationships based on trust, flexibility, and reliable service.',
      founderTitle: 'About the Founder',
      founderName: 'Husin Husin',
      founderDesc: 'Ordonto-lab was founded by Husin Husin, an orthodontic technician with a background in orthodontics and a strong passion for precision and modern laboratory techniques. Through his experience, he developed a clear vision of how a laboratory should work alongside dental practices.',
      founderEmailLabel: "FOUNDER'S EMAIL",
      linkedinLabel: 'LINKEDIN PROFILE',
      viewProfile: 'View Profile',
    },
    services: {
      title: 'Laboratory Services',
      readMore: 'Read More',
      close: 'Close',
      closeModal: 'Close Modal',
      defaultDesc: 'High-precision orthodontic solutions tailored for dental specialists.',
    },
    whyUs: {
      title: 'Our Difference',
      card1Title: 'Orthodontic Focus',
      card1Desc: 'Our work is dedicated exclusively to orthodontics.',
      card2Title: 'Direct Communication',
      card2Desc: 'Direct communication with the laboratory specialist — without unnecessary layers.',
      card3Title: 'Precision',
      card3Desc: 'Every case is handled with attention to detail and a strong focus on consistent quality.',
      card4Title: 'Digital Workflow',
      card4Desc: 'Modern digital processes connect clinical information with precise laboratory production.',
      card5Title: 'Personal Partnership',
      card5Desc: 'We build long-term relationships with orthodontic practices based on reliability and trust.',
      ctaTitle1: 'YOUR CASE.',
      ctaTitle2: 'OUR EXPERTISE.',
      ctaDesc: 'A specialized orthodontic laboratory, working directly with orthodontic professionals.',
      ctaBtn: 'Get in Touch'
    },
    contact: {
      directContact: 'Direct Contact',
      title: 'Get in Touch with Us',
      description: 'Reach out to us directly through any of our channels below.',
      phoneLabel: 'Phone (Call)',
      whatsappLabel: 'WhatsApp Chat',
      whatsappClick: 'Click to Chat ↗',
      emailLabel: 'General Info Email',
      founderEmailLabel: 'Founder Email',
      whatsappTooltip: 'Chat on WhatsApp'
    },
    footer: {
      rights: '(ORTHODONTIC LABORATORY). All rights reserved.'
    }
  },
  nl: {
    tagline: 'PRECISIE | KWALITEIT | ZORG',
    location: 'Onze Locatie',
    nav: {
      home: 'Home',
      about: 'Over Ons',
      services: 'Services',
      whyUs: 'Ons Verschil',
      contactUs: 'Neem Contact Op',
    },
    hero: {
      titleLine1: 'Precisie & Kwaliteit in',
      titleLine2: 'Orthodontische Oplossingen',
      description: 'Wij zijn gespecialiseerd in het vervaardigen van hoogwaardige orthodontische apparatuur op maat voor tandheelkundig specialisten, waarbij geavanceerd vakmanschap wordt gecombineerd met biologische zorg.',
      btnContact: 'Neem Contact Op',
      btnServices: 'Onze Services',
      card1Title: 'Precisie Vakmanschap',
      card1Desc: 'Sur-mesure orthodontische apparatuur gemaakt met uiterste nauwkeurigheid en aandacht voor biomechanische details.',
      card2Title: 'Kwaliteitsgarantie',
      card2Desc: 'Strenge normen die zorgen voor een optimale pasvorm, hoge biocompatibiliteit en maximaal patiëntcomfort.',
    },
    about: {
      title: 'Over Ons',
      p1: 'Ordonto-lab is een gespecialiseerd orthodontisch laboratorium dat zich richt op kwaliteit, precisie en directe samenwerking met tandarts- en orthodontiepraktijken.',
      p2: 'Wij geloven dat korte communicatielijnen het verschil maken. Daarom werken wij nauw en rechtstreeks samen met elke praktijk, zodat vragen, feedback en aanpassingen snel en efficiënt kunnen worden verwerkt.',
      p3: 'Door orthodontische expertise te combineren met moderne digitale technieken en een persoonlijke aanpak, streven wij ernaar meer te zijn dan zomaar een laboratorium. Wij willen een betrouwbare en toegankelijke partner zijn voor uw praktijk. Een essentieel onderdeel van deze aanpak is directe en persoonlijke communicatie. Door de lijnen kort te houden, kunnen we snel reageren, casussen direct bespreken en de specifieke behoeften van elke praktijk begrijpen. Dit stelt ons in staat om duurzame professionele relaties op te bouwen, gebaseerd op vertrouwen, flexibiliteit en betrouwbare service.',
      founderTitle: 'Over de Oprichter',
      founderName: 'Husin Husin',
      founderDesc: 'Ordonto-lab is opgericht door Husin Husin, een orthodontisch technicus met een achtergrond in orthodontie en een sterke passie voor precisie en moderne laboratoriumtechnieken. Door zijn ervaring heeft hij een heldere visie ontwikkeld op hoe een laboratorium optimaal moet samenwerken met tandheelkundige praktijken.',
      founderEmailLabel: 'E-MAIL OPRICHTER',
      linkedinLabel: 'LINKEDIN PROFIEL',
      viewProfile: 'Bekijk Profiel',
    },
    services: {
      title: 'Onze Services',
      readMore: 'Lees Meer',
      close: 'Sluiten',
      closeModal: 'Modal Sluiten',
      defaultDesc: 'Hoogwaardige orthodontische oplossingen op maat voor tandheelkundig specialisten.',
    },
    whyUs: {
      title: 'Ons Verschil',
      card1Title: 'Orthodontische Focus',
      card1Desc: 'Ons werk is uitsluitend gewijd aan orthodontie.',
      card2Title: 'Directe Communicatie',
      card2Desc: 'Directe communicatie met de laboratoriumspecialist — zonder onnodige tussenstappen.',
      card3Title: 'Precisie',
      card3Desc: 'Elke casus wordt behandeld met aandacht voor detail en een sterke focus op consistente kwaliteit.',
      card4Title: 'Digitale Workflow',
      card4Desc: 'Moderne digitale processen verbinden klinische informatie met nauwkeurige laboratoriumproductie.',
      card5Title: 'Persoonlijk Partnerschap',
      card5Desc: 'Wij bouwen duurzame relaties op met orthodontiepraktijken op basis van betrouwbaarheid en vertrouwen.',
      ctaTitle1: 'UW CASUS.',
      ctaTitle2: 'ONZE EXPERTISE.',
      ctaDesc: 'Een gespecialiseerd orthodontisch laboratorium, dat rechtstreeks samenwerkt met orthodontische professionals.',
      ctaBtn: 'Neem Contact Op'
    },
    contact: {
      directContact: 'Direct Contact',
      title: 'Neem Contact Met Ons Op',
      description: 'Neem rechtstreeks contact met ons op via een van de onderstaande kanalen.',
      phoneLabel: 'Telefoon (Bellen)',
      whatsappLabel: 'WhatsApp Chat',
      whatsappClick: 'Klik om te Chatten ↗',
      emailLabel: 'Algemene E-mail',
      founderEmailLabel: 'E-mail Oprichter',
      whatsappTooltip: 'Chat via WhatsApp'
    },
    footer: {
      rights: '(ORTHODONTISCH LABORATORIUM). Alle rechten voorbehouden.'
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('language') || 'nl';
  });

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (!savedLang) {
      localStorage.setItem('language', 'nl');
      setLang('nl');
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'nl' : 'en';
    setLang(nextLang);
    localStorage.setItem('language', nextLang);
    document.documentElement.lang = nextLang;
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);