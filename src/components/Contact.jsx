import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = ({ contactData, companyData }) => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mt-3">
            Contact {companyData?.name || 'Ordonto Lab'}
          </h2>
          <p className="text-grayCustom text-lg mt-4">
            Reach out to us for clinical inquiries, appliance prescriptions, or laboratory partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-blue-50 p-4 rounded-xl text-primary text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-grayCustom">Phone Number</h3>
                <p className="text-lg font-bold text-dark mt-0.5">{contactData?.phone || '+31 (0)684953598'}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-blue-50 p-4 rounded-xl text-primary text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-grayCustom">Email Addresses</h3>
                {contactData?.emails ? (
                  contactData.emails.map((email, index) => (
                    <p key={index} className="text-base font-bold text-dark mt-0.5">{email}</p>
                  ))
                ) : (
                  <p className="text-base font-bold text-dark mt-0.5">info@ordontolab.nl</p>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-blue-50 p-4 rounded-xl text-primary text-xl">
                <FaGlobe />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-grayCustom">Website</h3>
                <p className="text-lg font-bold text-dark mt-0.5">{companyData?.website || 'www.ordontolab.nl'}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-blue-50 p-4 rounded-xl text-primary text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-grayCustom">Location</h3>
                <p className="text-lg font-bold text-dark mt-0.5">{contactData?.address || 'Netherlands'}</p>
              </div>
            </div>

          </div>

          <div className="bg-linear-to-br from-primary to-[#135c9c] p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Professional Dental Collaboration</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                We welcome collaboration with dental clinics and orthodontists across the region. Contact our team directly via phone or email for custom appliance orders and digital case submissions.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-3">
                <p className="text-sm text-accent font-semibold uppercase tracking-wider">Working Hours</p>
                <p className="text-white font-medium">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-300 text-sm">Weekend: By special arrangement</p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={`mailto:${contactData?.emails ? contactData.emails[0] : 'info@ordontolab.nl'}`}
                className="block text-center bg-white text-primary font-bold py-4 rounded-xl shadow-lg hover:bg-background transition-all"
              >
                Send Direct Email
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;