import React from 'react';
import { FaTooth } from 'react-icons/fa';

const Footer = ({ companyData }) => {
  return (
    <footer className="bg-dark text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="flex items-center space-x-3">
            <div className="bg-primary text-white p-2.5 rounded-xl flex items-center justify-center">
              <FaTooth className="text-xl" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wide">
                {companyData?.name || 'Ordonto Lab'}
              </span>
              <span className="block text-xs text-grayCustom">
                {companyData?.type || 'Orthodontic Laboratory'}
              </span>
            </div>
          </div>

          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About Us</a>
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#founder" className="hover:text-accent transition-colors">Founder</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>

          <div className="text-xs text-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} {companyData?.name || 'Ordonto Lab'}. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;