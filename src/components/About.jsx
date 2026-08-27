import React from 'react';
import { FaCheckCircle, FaTooth, FaLaptopCode, FaHandshake } from 'react-icons/fa';

const About = ({ companyData }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full">
            About Our Laboratory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mt-3">
            Dedicated to Precision in Orthodontics
          </h2>
          <p className="text-grayCustom text-lg mt-4">
            We combine years of dental laboratory expertise with modern digital workflows to serve dental professionals with unmatched quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-background p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4">
                <FaTooth />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Expert Craftsmanship</h3>
              <p className="text-grayCustom text-sm">
                Every appliance is meticulously crafted to ensure optimal patient comfort and clinical efficiency.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all sm:translate-y-6">
              <div className="bg-secondary text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Digital Workflow</h3>
              <p className="text-grayCustom text-sm">
                Utilizing state-of-the-art 3D planning and modern thermoforming technology.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">
              {companyData?.name} - Professional {companyData?.type}
            </h3>
            
            <p className="text-dark leading-relaxed">
              {companyData?.about}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-dark font-medium">
                <FaCheckCircle className="text-secondary text-lg shrink-0" />
                <span>Customized solutions tailored to specific clinical prescriptions.</span>
              </div>
              <div className="flex items-center space-x-3 text-dark font-medium">
                <FaCheckCircle className="text-secondary text-lg shrink-0" />
                <span>Strict quality control standards on all manufactured appliances.</span>
              </div>
              <div className="flex items-center space-x-3 text-dark font-medium">
                <FaCheckCircle className="text-secondary text-lg shrink-0" />
                <span>Reliable communication and fast turnaround times for dental practices.</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-secondary transition-all shadow-md"
              >
                <FaHandshake />
                <span>Partner With Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;