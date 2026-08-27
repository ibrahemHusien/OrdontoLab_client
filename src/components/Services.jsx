import React from 'react';
import { FaTooth, FaMedkit, FaHandsHelping, FaCheck } from 'react-icons/fa';

const Services = ({ servicesData }) => {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'FaMedkit':
        return <FaMedkit className="text-3xl text-primary" />;
      case 'FaHandsHelping':
        return <FaHandsHelping className="text-3xl text-primary" />;
      default:
        return <FaTooth className="text-3xl text-primary" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mt-3">
            Precision Orthodontic Solutions
          </h2>
          <p className="text-grayCustom text-lg mt-4">
            Explore our professional lineup of manufactured orthodontic appliances and digital laboratory solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData && servicesData.length > 0 ? (
            servicesData.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    {renderIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-grayCustom text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center text-secondary text-sm font-semibold">
                  <FaCheck className="mr-2" />
                  <span>Certified Quality Standard</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-grayCustom">
              Loading services...
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Services;