import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  params: {
    language: "pt-BR",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${import.meta.env.VITE_API_KEY}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
