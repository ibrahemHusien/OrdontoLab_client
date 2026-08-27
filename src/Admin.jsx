import React, { useState, useEffect } from 'react';
import { getCompany, updateCompany, getServices, createService, deleteService } from './services/api';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('ordonto_admin') === 'true');
  const [passInput, setPassInput] = useState('');
  const [loginError, setLoginError] = useState(false);

 /*  Company Data Structure:*/
  const [companyData, setCompanyData] = useState({ 
    heroTitle: 'Precision & Quality in', 
    heroHighlight: 'Orthodontic Solutions', 
    heroDesc: 'We specialize in manufacturing high-precision orthodontic appliances designed tailored for dental specialists, combining state-of-the-art craftsmanship with biological care.',
    phone: '+31 6 43052263',
    whatsapp: '31643052263',
    email: 'info@ordontolab.nl',
    founderEmail: 'husin@ordontolab.nl'
  });
  
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ title: '', desc: '', description: '' });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const ADMIN_PASSWORD = 'admin123';

  const defaultServicesList = [
    { 
      title: 'Removable Appliances', 
      desc: 'Custom expansion plates, retainers, and functional appliances crafted with bio-compatible materials.',
      description: 'Custom expansion plates, retainers, and functional appliances crafted with bio-compatible materials.' 
    },
    { 
      title: 'Fixed Appliances', 
      desc: 'Precision-engineered space maintainers, palatal expanders, and specialized fixed orthodontic structures.',
      description: 'Precision-engineered space maintainers, palatal expanders, and specialized fixed orthodontic structures.' 
    },
    { 
      title: 'Aligners & Retainers', 
      desc: 'High-clarity clear aligners and durable post-treatment retention systems for long-lasting results.',
      description: 'High-clarity clear aligners and durable post-treatment retention systems for long-lasting results.' 
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (passInput === ADMIN_PASSWORD) {
      localStorage.setItem('ordonto_admin', 'true');
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ordonto_admin');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchAllData();
    } else {
      setIsLoading(false);
    }
  }, [isLoggedIn]);

  const fetchAllData = async () => {
    try {
      const companyRes = await getCompany();
      if (companyRes?.data) {
        setCompanyData(prev => ({
          heroTitle: companyRes.data.heroTitle || prev.heroTitle,
          heroHighlight: companyRes.data.heroHighlight || prev.heroHighlight,
          heroDesc: companyRes.data.heroDesc || prev.heroDesc,
          phone: companyRes.data.phone || prev.phone,
          whatsapp: companyRes.data.whatsapp || prev.whatsapp,
          email: companyRes.data.email || prev.email,
          founderEmail: companyRes.data.founderEmail || prev.founderEmail
        }));
      }

      const servicesRes = await getServices();
      if (servicesRes?.data) {
        setServices(servicesRes.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompanySubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCompany(companyData);
      showMsg('✅ Company info & contact details saved successfully!');
    } catch (error) {
      console.error("Update error:", error);
      showMsg('❌ An error occurred while saving.');
    }
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    const textValue = newService.desc || newService.description;
    if (!newService.title || !textValue) return;

    try {
      await createService({
        title: newService.title,
        desc: textValue,
        description: textValue
      });

      setNewService({ title: '', desc: '', description: '' });
      const res = await getServices();
      if (res?.data) setServices(res.data);
      showMsg('✅ Service added successfully!');
    } catch (error) {
      showMsg('❌ An error occurred while adding.');
    }
  };

  const handleLoadDefaults = async () => {
    try {
      for (let s of defaultServicesList) {
        await createService(s);
      }
      const res = await getServices();
      if (res?.data) setServices(res.data);
      showMsg('✨ Default services loaded to database successfully!');
    } catch (error) {
      showMsg('❌ Error loading default services.');
    }
  };

  const handleDeleteService = async (id) => {
    if (!id) {
      showMsg('❌ Error: Service ID not found.');
      return;
    }
    try {
      await deleteService(id);
      setServices(services.filter(s => s._id !== id && s.id !== id));
      showMsg('🗑️ Service deleted successfully!');
    } catch (error) {
      showMsg('❌ An error occurred while deleting.');
    }
  };

  const showMsg = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 4000);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4" dir="ltr">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-slate-100 border-t-4 border-t-[#C5912B]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-[#0C1B2D]">Admin Login</h2>
            <p className="text-slate-500 text-sm mt-2">Enter password to access OrdontoLab dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password:</label>
              <input 
                type="password" 
                value={passInput} 
                onChange={(e) => setPassInput(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] focus:border-transparent outline-none transition"
                required
              />
            </div>

            {loginError && (
              <p className="text-red-500 text-sm font-semibold text-center bg-red-50 py-2 rounded-lg">
                Incorrect password. Please try again.
              </p>
            )}

            <button type="submit" className="w-full bg-[#0C1B2D] hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition shadow-md">
              Login to Dashboard
            </button>
          </form>
          <div className="text-center mt-6">
            <a href="/" className="text-sm text-slate-400 hover:text-[#C5912B] transition font-medium">← Back to Website</a>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 font-medium">Loading admin panel...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10" dir="ltr">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Admin Dashboard Header */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-t-4 border-t-[#C5912B] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#0C1B2D]">Admin Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">Manage OrdontoLab Website Content</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" rel="noreferrer" className="bg-slate-100 text-[#0C1B2D] border border-slate-200 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-200 transition">
              View Website ↗
            </a>
            <button onClick={handleLogout} className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white border border-red-100 font-bold px-5 py-2.5 rounded-xl text-sm transition">
              Logout
            </button>
          </div>
        </div>

        {message && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3.5 rounded-xl font-bold text-center shadow-sm">
            {message}
          </div>
        )}

        {/* 1. Edit Hero & Contact Info Form */}
        <form onSubmit={handleCompanySubmit} className="space-y-8">
          
          {/* Hero Section Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#0C1B2D] mb-6 pb-4 border-b border-slate-100">
              Edit Hero Section
            </h2>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Main Title:</label>
                <input 
                  type="text" 
                  value={companyData.heroTitle || ''} 
                  onChange={(e) => setCompanyData({...companyData, heroTitle: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] outline-none transition bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Highlight Word (Gold):</label>
                <input 
                  type="text" 
                  value={companyData.heroHighlight || ''} 
                  onChange={(e) => setCompanyData({...companyData, heroHighlight: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] outline-none transition bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Description:</label>
                <textarea 
                  rows="3"
                  value={companyData.heroDesc || ''} 
                  onChange={(e) => setCompanyData({...companyData, heroDesc: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] outline-none resize-none transition bg-slate-50 focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#0C1B2D] mb-6 pb-4 border-b border-slate-100">
              Edit Contact Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number:</label>
                <input 
                  type="text" 
                  value={companyData.phone || ''} 
                  onChange={(e) => setCompanyData({...companyData, phone: e.target.value})}
                  placeholder="+31 6 43052263"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] outline-none transition bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number (digits only):</label>
                <input 
                  type="text" 
                  value={companyData.whatsapp || ''} 
                  onChange={(e) => setCompanyData({...companyData, whatsapp: e.target.value})}
                  placeholder="31643052263"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] outline-none transition bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">General Email (info@...):</label>
                <input 
                  type="email" 
                  value={companyData.email || ''} 
                  onChange={(e) => setCompanyData({...companyData, email: e.target.value})}
                  placeholder="info@ordontolab.nl"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] outline-none transition bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Founder's Email (Husin):</label>
                <input 
                  type="email" 
                  value={companyData.founderEmail || ''} 
                  onChange={(e) => setCompanyData({...companyData, founderEmail: e.target.value})}
                  placeholder="husin@ordontolab.nl"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] outline-none transition bg-slate-50 focus:bg-white"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end">
              <button type="submit" className="bg-[#0C1B2D] hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition shadow-md w-full md:w-auto">
                Save All Changes (Hero & Contact)
              </button>
            </div>
          </div>

        </form>

        {/* 2. Manage Services */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-slate-100 gap-4">
            <h2 className="text-xl font-bold text-[#0C1B2D]">Manage Services</h2>
            {services.length === 0 && (
              <button 
                onClick={handleLoadDefaults}
                className="bg-amber-100 hover:bg-amber-200 text-amber-700 font-bold px-4 py-2 rounded-xl text-sm transition"
              >
                + Load 3 Default Services
              </button>
            )}
          </div>

          <form onSubmit={handleAddService} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-8 space-y-4">
            <h3 className="text-sm font-bold text-slate-800">Add New Service</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Service Title" 
                value={newService.title} 
                onChange={(e) => setNewService({...newService, title: e.target.value})}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] outline-none transition bg-white"
              />
              <input 
                type="text" 
                placeholder="Service Description" 
                value={newService.desc} 
                onChange={(e) => setNewService({...newService, desc: e.target.value, description: e.target.value})}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] outline-none transition bg-white"
              />
            </div>
            <button type="submit" className="bg-[#C5912B] hover:bg-[#b07e1e] text-white font-bold py-2.5 px-6 rounded-xl transition text-sm shadow-sm">
              + Add Service
            </button>
          </form>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Current Services</h3>
            {services.length === 0 ? (
              <div className="text-center py-10 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
                <p className="text-slate-500 text-sm mb-4">No services in database.</p>
                <button 
                  onClick={handleLoadDefaults}
                  className="bg-[#0C1B2D] text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-800 transition shadow-sm"
                >
                  Load the 3 Default Services
                </button>
              </div>
            ) : (
              services.map((service, idx) => (
                <div key={service._id || service.id || idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border border-slate-100 rounded-2xl bg-white hover:border-slate-200 transition shadow-sm hover:shadow-md gap-4">
                  <div>
                    <h4 className="font-bold text-[#0C1B2D] text-lg">{service.title}</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{service.desc || service.description || "No description"}</p>
                  </div>
                  <button 
                    onClick={() => handleDeleteService(service._id || service.id)}
                    className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white border border-red-100 font-bold px-4 py-2 rounded-xl text-sm transition shrink-0"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}