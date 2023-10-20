// src/api.js

import axios from 'axios';

const baseURL = process.env.VUE_APP_BACKEND_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL,
    timeout: 5000, // Adjust as needed
});

export default api;

api.interceptors.response.use(
    response => response,
    error => {
        console.error("API request failed:", error);
        return Promise.reject(error);
    }
);
