import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Founder from '../components/Founder';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { getCompany, getFounder, getServices, getContact } from '../services/api';

const Home = () => {
  const [company, setCompany] = useState(null);
  const [founder, setFounder] = useState(null);
  const [services, setServices] = useState([]);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyRes = await getCompany();
        setCompany(companyRes.data);

        const founderRes = await getFounder();
        setFounder(founderRes.data);

        const servicesRes = await getServices();
        setServices(servicesRes.data);

        const contactRes = await getContact();
        setContact(contactRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-dark">
      <Navbar companyData={company} />
      <Hero companyData={company} />
      <About companyData={company} />
      <Services servicesData={services} />
      <WhyChooseUs />
      <Founder founderData={founder} contactData={contact} />
      <Contact contactData={contact} companyData={company} />
      <Footer companyData={company} />
    </div>
  );
};

export default Home;