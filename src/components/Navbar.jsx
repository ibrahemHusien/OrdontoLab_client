import React, { useState } from 'react';
import { FaTooth, FaBars, FaTimes, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // سنقوم بتثبيت react-router-dom لاحقاً

const Navbar = ({ companyData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center space-x-3">
            <div className="bg-primary text-white p-3 rounded-xl shadow-lg flex items-center justify-center">
              <FaTooth className="text-2xl" />
            </div>
            <div>
              <span className="text-2xl font-bold text-primary tracking-wide">
                {companyData?.name || 'Ordonto Lab'}
              </span>
              <span className="block text-xs text-grayCustom font-medium">
                {companyData?.type || 'Orthodontic Laboratory'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-dark hover:text-primary font-medium transition-colors">Home</a>
            <a href="#about" className="text-dark hover:text-primary font-medium transition-colors">About Us</a>
            <a href="#services" className="text-dark hover:text-primary font-medium transition-colors">Services</a>
            <a href="#why-us" className="text-dark hover:text-primary font-medium transition-colors">Why Choose Us</a>
            <a href="#founder" className="text-dark hover:text-primary font-medium transition-colors">Founder</a>
            <a href="#contact" className="text-dark hover:text-primary font-medium transition-colors">Contact</a>
            
            {/* Admin Panel Link */}
            <a 
              href="/admin" 
              className="flex items-center space-x-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-all shadow-sm"
            >
              <FaLock className="text-xs" />
              <span>Admin</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <a 
              href="/admin" 
              className="bg-primary text-white p-2 rounded-lg text-sm"
              title="Admin Panel"
            >
              <FaLock />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary focus:outline-none text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-background hover:text-primary"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-background hover:text-primary"
          >
            About Us
          </a>
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-background hover:text-primary"
          >
            Services
          </a>
          <a 
            href="#why-us" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-background hover:text-primary"
          >
            Why Choose Us
          </a>
          <a 
            href="#founder" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-background hover:text-primary"
          >
            Founder
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-background hover:text-primary"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;