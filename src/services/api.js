import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getCompany = () => API.get('/company');
export const updateCompany = (data) => API.put('/company', data);

export const getFounder = () => API.get('/founder');
export const updateFounder = (data) => API.put('/founder', data);

export const getServices = () => API.get('/services');
export const createService = (data) => API.post('/services', data);
export const updateService = (id, data) => API.put(`/services/${id}`, data);
export const deleteService = (id) => API.delete(`/services/${id}`);

export const getContact = () => API.get('/contact');
export const updateContact = (data) => API.put('/contact', data);