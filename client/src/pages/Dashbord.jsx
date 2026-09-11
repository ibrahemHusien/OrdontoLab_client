import React, { useState, useEffect } from 'react';
import { getCompany, updateCompany, getFounder, updateFounder, getServices, createService, updateService, deleteService, getContact, updateContact } from '../services/api';
import { FaArrowLeft, FaSave, FaPlus, FaTrash, FaEdit, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = ({ onLogout }) => {
  const [company, setCompany] = useState({ name: '', type: '', website: '', about: '' });
  const [founder, setFounder] = useState({ name: '', position: '', bio: '' });
  const [contact, setContact] = useState({ phone: '', address: '', website: '', emails: [] });
  const [services, setServices] = useState([]);
  
  const [newService, setNewService] = useState({ title: '', description: '', icon: 'FaTooth' });
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [editServiceData, setEditServiceData] = useState({ title: '', description: '', icon: 'FaTooth' });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      setIsLoading(true);
      const compRes = await getCompany();
      if (compRes?.data) setCompany(compRes.data);

      const foundRes = await getFounder();
      if (foundRes?.data) setFounder(foundRes.data);

      const contRes = await getContact();
      if (contRes?.data) setContact(contRes.data);

      const servRes = await getServices();
      if (servRes?.data) setServices(servRes.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const showMsg = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleCompanySubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCompany(company);
      showMsg('Company details updated successfully');
    } catch (error) {
      showMsg('Failed to update company data');
    }
  };

  const handleFounderSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateFounder(founder);
      showMsg('Founder details updated successfully');
    } catch (error) {
      showMsg('Failed to update founder data');
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateContact(contact);
      showMsg('Contact details updated successfully');
    } catch (error) {
      showMsg('Failed to update contact data');
    }
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      await createService(newService);
      setNewService({ title: '', description: '', icon: 'FaTooth' });
      fetchAdminData();
      showMsg('Service added successfully');
    } catch (error) {
      showMsg('Failed to add service');
    }
  };

  const handleDeleteService = async (id) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;
    try {
      await deleteService(id);
      fetchAdminData();
      showMsg('Service deleted successfully');
    } catch (error) {
      showMsg('Failed to delete service');
    }
  };

  const handleUpdateServiceSubmit = async (id) => {
    try {
      await updateService(id, editServiceData);
      setEditingServiceId(null);
      fetchAdminData();
      showMsg('Service updated successfully');
    } catch (error) {
      showMsg('Failed to update service');
    }
  };

  if (isLoading) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 font-medium">Loading admin panel...</div>;
  }

  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-primary">Admin Control Panel</h1>
            <p className="text-sm text-grayCustom">Manage and update Ordonto Lab website data directly.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center space-x-2 bg-gray-100 text-dark px-4 py-2.5 rounded-xl hover:bg-gray-200 transition-all font-medium text-sm">
              <FaArrowLeft />
              <span>Website</span>
            </a>
            <button onClick={onLogout} className="flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2.5 rounded-xl hover:bg-red-600 hover:text-white transition-all font-medium text-sm">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {message && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl font-bold text-center shadow-sm">
            {message}
          </div>
        )}

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-dark mb-4 pb-2 border-b">Edit Company Details</h2>
            <form onSubmit={handleCompanySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Company Name</label>
                  <input type="text" value={company.name || ''} onChange={(e) => setCompany({ ...company, name: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary bg-slate-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Type / Subtitle</label>
                  <input type="text" value={company.type || ''} onChange={(e) => setCompany({ ...company, type: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary bg-slate-50 focus:bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">Website URL</label>
                <input type="text" value={company.website || ''} onChange={(e) => setCompany({ ...company, website: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary bg-slate-50 focus:bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">About Laboratory</label>
                <textarea rows="3" value={company.about || ''} onChange={(e) => setCompany({ ...company, about: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary bg-slate-50 focus:bg-white" />
              </div>
              <button type="submit" className="flex items-center space-x-2 bg-primary text-white px-6 py-2.5 rounded-xl hover:bg-secondary transition-all font-semibold">
                <FaSave />
                <span>Save Company Changes</span>
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-dark mb-4 pb-2 border-b">Edit Founder Details</h2>
            <form onSubmit={handleFounderSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Founder Name</label>
                  <input type="text" value={founder.name || ''} onChange={(e) => setFounder({ ...founder, name: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary bg-slate-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Position / Title</label>
                  <input type="text" value={founder.position || ''} onChange={(e) => setFounder({ ...founder, position: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary bg-slate-50 focus:bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">Founder Bio / Note</label>
                <textarea rows="4" value={founder.bio || ''} onChange={(e) => setFounder({ ...founder, bio: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary bg-slate-50 focus:bg-white" />
              </div>
              <button type="submit" className="flex items-center space-x-2 bg-primary text-white px-6 py-2.5 rounded-xl hover:bg-secondary transition-all font-semibold">
                <FaSave />
                <span>Save Founder Changes</span>
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-dark mb-4 pb-2 border-b">Edit Contact Details</h2>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Phone Number</label>
                  <input type="text" value={contact.phone || ''} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary bg-slate-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Address / Location</label>
                  <input type="text" value={contact.address || ''} onChange={(e) => setContact({ ...contact, address: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary bg-slate-50 focus:bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">Emails</label>
                <input type="text" value={contact.emails ? contact.emails.join(', ') : ''} onChange={(e) => setContact({ ...contact, emails: e.target.value.split(',').map(s => s.trim()) })} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary bg-slate-50 focus:bg-white" />
              </div>
              <button type="submit" className="flex items-center space-x-2 bg-primary text-white px-6 py-2.5 rounded-xl hover:bg-secondary transition-all font-semibold">
                <FaSave />
                <span>Save Contact Changes</span>
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-dark mb-4 pb-2 border-b">Manage Services</h2>
            
            <form onSubmit={handleAddService} className="bg-slate-50 p-6 rounded-2xl border mb-6 space-y-4">
              <h3 className="text-md font-bold text-primary">Add New Service</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Service Title" value={newService.title} onChange={(e) => setNewService({ ...newService, title: e.target.value })} required className="px-4 py-2 rounded-xl border border-gray-200 bg-white" />
                <select value={newService.icon} onChange={(e) => setNewService({ ...newService, icon: e.target.value })} className="px-4 py-2 rounded-xl border border-gray-200 bg-white">
                  <option value="FaTooth">Tooth Icon</option>
                  <option value="FaMedkit">Medkit Icon</option>
                  <option value="FaHandsHelping">Hands Helping Icon</option>
                </select>
              </div>
              <textarea placeholder="Service Description" value={newService.description} onChange={(e) => setNewService({ ...newService, description: e.target.value })} required rows="2" className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-white" />
              <button type="submit" className="flex items-center space-x-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-all text-sm font-semibold">
                <FaPlus />
                <span>Add Service</span>
              </button>
            </form>

            <div className="space-y-4">
              {services.length === 0 ? (
                <p className="text-center py-10 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 text-slate-500">
                  No services in database.
                </p>
              ) : (
                services.map((service) => (
                  <div key={service.id || service._id} className="p-5 border border-slate-100 rounded-2xl bg-white hover:border-slate-200 transition shadow-sm hover:shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    {editingServiceId === (service.id || service._id) ? (
                      <div className="w-full space-y-3">
                        <input type="text" value={editServiceData.title} onChange={(e) => setEditServiceData({ ...editServiceData, title: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-white" />
                        <textarea value={editServiceData.description} onChange={(e) => setEditServiceData({ ...editServiceData, description: e.target.value })} className="w-full px-3 py-2 rounded-lg border bg-white" rows="2" />
                        <div className="flex space-x-2">
                          <button onClick={() => handleUpdateServiceSubmit(service.id || service._id)} className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium">Save</button>
                          <button onClick={() => setEditingServiceId(null)} className="bg-gray-300 text-dark px-4 py-1.5 rounded-lg text-sm font-medium">Cancel</button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div>
                          <h4 className="font-bold text-dark">{service.title}</h4>
                          <p className="text-sm text-grayCustom mt-1">{service.description}</p>
                        </div>
                        <div className="flex space-x-2 shrink-0">
                          <button onClick={() => { setEditingServiceId(service.id || service._id); setEditServiceData({ title: service.title, description: service.description, icon: service.icon }); }} className="bg-blue-100 text-secondary p-2.5 rounded-lg hover:bg-blue-200 transition-colors">
                            <FaEdit />
                          </button>
                          <button onClick={() => handleDeleteService(service.id || service._id)} className="bg-rose-100 text-rose-600 p-2.5 rounded-lg hover:bg-rose-200 transition-colors">
                            <FaTrash />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;