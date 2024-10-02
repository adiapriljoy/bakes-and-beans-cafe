import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:3000/"; //! should transfer to .env file before deployment

const axiosInstance = axios.create({ baseURL: API_URL });

// Request interceptor for adding the bearer token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling unauthorized access
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
