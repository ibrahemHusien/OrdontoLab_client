import React, { useState, useEffect } from 'react';
import { getCompany, updateCompany, getFounder, updateFounder, getServices, createService, updateService, deleteService, getContact, updateContact } from '../services/api';
import { FaArrowLeft, FaSave, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

const Admin = () => {
  const [company, setCompany] = useState({ name: '', type: '', website: '', about: '' });
  const [founder, setFounder] = useState({ name: '', position: '', bio: '' });
  const [contact, setContact] = useState({ phone: '', address: '', website: '', emails: [] });
  const [services, setServices] = useState([]);
  
  const [newService, setNewService] = useState({ title: '', description: '', icon: 'FaTooth' });
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [editServiceData, setEditServiceData] = useState({ title: '', description: '', icon: 'FaTooth' });

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const compRes = await getCompany();
      setCompany(compRes.data);

      const foundRes = await getFounder();
      setFounder(foundRes.data);

      const contRes = await getContact();
      setContact(contRes.data);

      const servRes = await getServices();
      setServices(servRes.data);
    } catch (error) {
      console.error('Error loading admin data:', error);
    }
  };

  const handleCompanySubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCompany(company);
      setMessage('Company details updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update company data.');
    }
  };

  const handleFounderSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateFounder(founder);
      setMessage('Founder details updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update founder data.');
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateContact(contact);
      setMessage('Contact details updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update contact data.');
    }
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      await createService(newService);
      setNewService({ title: '', description: '', icon: 'FaTooth' });
      fetchAdminData();
      setMessage('Service added successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to add service.');
    }
  };

  const handleDeleteService = async (id) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;
    try {
      await deleteService(id);
      fetchAdminData();
      setMessage('Service deleted successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to delete service.');
    }
  };

  const handleUpdateServiceSubmit = async (id) => {
    try {
      await updateService(id, editServiceData);
      setEditingServiceId(null);
      fetchAdminData();
      setMessage('Service updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update service.');
    }
  };

  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-extrabold text-primary">Admin Control Panel</h1>
            <p className="text-sm text-grayCustom">Manage and update Ordonto Lab website data directly.</p>
          </div>
          <a 
            href="/" 
            className="flex items-center space-x-2 bg-gray-100 text-dark px-4 py-2 rounded-xl hover:bg-gray-200 transition-all font-medium text-sm"
          >
            <FaArrowLeft />
            <span>Back to Website</span>
          </a>
        </div>

        {message && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl font-medium text-center shadow-sm">
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
                  <input 
                    type="text" 
                    value={company.name || ''} 
                    onChange={(e) => setCompany({ ...company, name: e.target.value })} 
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Type / Subtitle</label>
                  <input 
                    type="text" 
                    value={company.type || ''} 
                    onChange={(e) => setCompany({ ...company, type: e.target.value })} 
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">Website URL</label>
                <input 
                  type="text" 
                  value={company.website || ''} 
                  onChange={(e) => setCompany({ ...company, website: e.target.value })} 
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">About Laboratory</label>
                <textarea 
                  rows="3"
                  value={company.about || ''} 
                  onChange={(e) => setCompany({ ...company, about: e.target.value })} 
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                />
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
                  <input 
                    type="text" 
                    value={founder.name || ''} 
                    onChange={(e) => setFounder({ ...founder, name: e.target.value })} 
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Position / Title</label>
                  <input 
                    type="text" 
                    value={founder.position || ''} 
                    onChange={(e) => setFounder({ ...founder, position: e.target.value })} 
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">Founder Bio / Note</label>
                <textarea 
                  rows="4"
                  value={founder.bio || ''} 
                  onChange={(e) => setFounder({ ...founder, bio: e.target.value })} 
                  placeholder="Enter founder's bio here..."
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                />
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
                  <input 
                    type="text" 
                    value={contact.phone || ''} 
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })} 
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Address / Location</label>
                  <input 
                    type="text" 
                    value={contact.address || ''} 
                    onChange={(e) => setContact({ ...contact, address: e.target.value })} 
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">Emails (comma separated)</label>
                <input 
                  type="text" 
                  value={contact.emails ? contact.emails.join(', ') : ''} 
                  onChange={(e) => setContact({ ...contact, emails: e.target.value.split(',').map(s => s.trim()) })} 
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                />
              </div>
              <button type="submit" className="flex items-center space-x-2 bg-primary text-white px-6 py-2.5 rounded-xl hover:bg-secondary transition-all font-semibold">
                <FaSave />
                <span>Save Contact Changes</span>
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-dark mb-4 pb-2 border-b">Manage Services</h2>
            
            <form onSubmit={handleAddService} className="bg-background p-6 rounded-2xl border mb-6 space-y-4">
              <h3 className="text-md font-bold text-primary">Add New Service</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Service Title" 
                  value={newService.title} 
                  onChange={(e) => setNewService({ ...newService, title: e.target.value })} 
                  required
                  className="px-4 py-2 rounded-xl border border-gray-200 bg-white"
                />
                <select 
                  value={newService.icon} 
                  onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                  className="px-4 py-2 rounded-xl border border-gray-200 bg-white"
                >
                  <option value="FaTooth">Tooth Icon</option>
                  <option value="FaMedkit">Medkit Icon</option>
                  <option value="FaHandsHelping">Hands Helping Icon</option>
                </select>
              </div>
              <textarea 
                placeholder="Service Description" 
                value={newService.description} 
                onChange={(e) => setNewService({ ...newService, description: e.target.value })} 
                required
                rows="2"
                className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-white"
              />
              <button type="submit" className="flex items-center space-x-2 bg-emerald-600 text-white px-5 py-2 rounded-xl hover:bg-emerald-700 transition-all text-sm font-semibold">
                <FaPlus />
                <span>Add Service</span>
              </button>
            </form>

            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.id} className="p-4 border rounded-xl bg-background flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  {editingServiceId === service.id ? (
                    <div className="w-full space-y-3">
                      <input 
                        type="text" 
                        value={editServiceData.title} 
                        onChange={(e) => setEditServiceData({ ...editServiceData, title: e.target.value })} 
                        className="w-full px-3 py-2 rounded-lg border bg-white"
                      />
                      <textarea 
                        value={editServiceData.description} 
                        onChange={(e) => setEditServiceData({ ...editServiceData, description: e.target.value })} 
                        className="w-full px-3 py-2 rounded-lg border bg-white"
                        rows="2"
                      />
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleUpdateServiceSubmit(service.id)} 
                          className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium"
                        >
                          Save
                        </button>
                        <button 
                          onClick={() => setEditingServiceId(null)} 
                          className="bg-gray-300 text-dark px-4 py-1.5 rounded-lg text-sm font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <h4 className="font-bold text-dark">{service.title}</h4>
                        <p className="text-sm text-grayCustom">{service.description}</p>
                      </div>
                      <div className="flex space-x-2 shrink-0">
                        <button 
                          onClick={() => {
                            setEditingServiceId(service.id);
                            setEditServiceData({ title: service.title, description: service.description, icon: service.icon });
                          }}
                          className="bg-blue-100 text-secondary p-2 rounded-lg hover:bg-blue-200 transition-colors"
                          title="Edit Service"
                        >
                          <FaEdit />
                        </button>
                        <button 
                          onClick={() => handleDeleteService(service.id)}
                          className="bg-rose-100 text-rose-600 p-2 rounded-lg hover:bg-rose-200 transition-colors"
                          title="Delete Service"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Admin;