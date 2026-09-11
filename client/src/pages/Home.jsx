import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import { getCompany, getServices } from '../services/api';

export default function Home() {
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

  return (
    <>
      <Hero companyData={companyData} />
      <About />
      <Services services={services} isLoading={isLoading} />
      <WhyChooseUs />
      <Contact />
    </>
  );
}