import axios from 'axios';
import store from '~/store';

const api = axios.create({
  // baseURL: 'http://10.0.3.2:3333', para ANDROID
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
