// src/api.js

import axios from 'axios';

const baseURL = 'http://localhost:8000'; // Replace with your backend API URL

const api = axios.create({
    baseURL,
    timeout: 5000, // Adjust as needed
});

export default api;
