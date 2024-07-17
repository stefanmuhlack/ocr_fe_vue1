// src/api.js

import axios from 'axios';

const baseURL = process.env.VUE_APP_BACKEND_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL,
    timeout: 5000, // Adjust as needed
});

api.interceptors.request.use(
    config => {
        // Add token to headers if available
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => response,
    error => {
        console.error("API request failed:", error);
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error, possibly redirect to login
            alert('Unauthorized access. Please log in.');
        }
        return Promise.reject(error);
    }
);

export default api;

