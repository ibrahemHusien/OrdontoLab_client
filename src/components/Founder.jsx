import React from 'react';
import { FaUserTie, FaEnvelope, FaPhone } from 'react-icons/fa';

const Founder = ({ founderData, contactData }) => {
  return (
    <section id="founder" className="py-24 bg-linear-to-b from-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mt-3">
            Meet Our Founder
          </h2>
          <p className="text-grayCustom text-lg mt-4">
            Visionary leadership driving quality and technical excellence in orthodontics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-3">
          
          <div className="bg-linear-to-br from-primary to-secondary p-8 text-white flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-4xl shadow-inner mb-4 border border-white/30">
              <FaUserTie />
            </div>
            <h3 className="text-2xl font-bold">{founderData?.name || 'Husin Husin'}</h3>
            <p className="text-accent text-sm font-medium mt-1">{founderData?.position || 'Founder & Director'}</p>
          </div>

          <div className="md:col-span-2 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-dark mb-4">Director's Note</h4>
              {founderData?.bio ? (
                <p className="text-dark leading-relaxed font-light text-base">
                  {founderData.bio}
                </p>
              ) : (
                <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl text-center">
                  <p className="text-grayCustom italic text-sm">
                    "This section is currently awaiting editorial updates from the laboratory director."
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-grayCustom">
              {contactData?.phone && (
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-secondary" />
                  <span>{contactData.phone}</span>
                </div>
              )}
              {contactData?.emails && contactData.emails[0] && (
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-secondary" />
                  <span>{contactData.emails[0]}</span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Founder;