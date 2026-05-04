import axios from 'axios';

const api = axios.create({
  baseURL: 'https://team-task-manager-production-095e.up.railway.app/api',
});

// export default api;

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

export default api;