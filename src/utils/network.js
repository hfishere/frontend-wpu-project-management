import axios from 'axios';

import session from './session';

const network = axios.create({
  baseURL: 'http://127.0.0.1:3030/', // using api from wpucourse
  // baseURL: 'http://103.49.239.40:3030/', // using api from wpucourse
});

network.interceptors.request.use(
  (config) => {
    const token = session.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

network.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      session.clearSession();

      //   window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export default network;
