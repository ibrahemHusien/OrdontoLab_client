import React from 'react';
import { FaClock, FaAward, FaTools, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaTools className="text-2xl text-secondary" />,
      title: "Advanced Digital Technology",
      description: "State-of-the-art 3D software and advanced digital production workflows for ultimate precision."
    },
    {
      icon: <FaAward className="text-2xl text-secondary" />,
      title: "Certified Materials",
      description: "We use strictly certified, high-grade biocompatible dental materials sourced from trusted manufacturers."
    },
    {
      icon: <FaClock className="text-2xl text-secondary" />,
      title: "Fast Turnaround Time",
      description: "Reliable scheduling and efficient processing ensuring appliances are delivered promptly to your clinic."
    },
    {
      icon: <FaHeadset className="text-2xl text-secondary" />,
      title: "Dedicated Support",
      description: "Direct communication channels with expert technicians to discuss specific clinical cases and prescriptions."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mt-3">
            The Preferred Choice for Dental Practices
          </h2>
          <p className="text-grayCustom text-lg mt-4">
            We combine craftsmanship, reliability, and modern technology to support dental professionals effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-2xl border border-gray-100 hover:border-secondary/30 transition-all shadow-sm group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-grayCustom text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;