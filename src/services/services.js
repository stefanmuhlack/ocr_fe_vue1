// src/services/services.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchTemplates = async () => {
  try {
    const response = await apiClient.get('/templates');
    return response.data;
  } catch (error) {
    console.error('Error fetching templates:', error);
    throw error;
  }
};

export const uploadPDF = async (file) => {
  try {
    const formData = new FormData();
    formData.append('pdf', file);

    const response = await apiClient.post('/upload', formData);
    return response.data;
  } catch (error) {
    console.error('Error uploading PDF:', error);
    throw error;
  }
};
