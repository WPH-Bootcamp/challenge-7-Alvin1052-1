import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  // console.log('request', config);
  const token = localStorage.getItem('token'); // or sessionStorage

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  } else if (config.headers) {
    delete config.headers.Authorization;
  }
  return config;
});

export default api;
