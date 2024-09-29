import axios from "axios";
// import Cookies from "js-cookie";

const API_URL = "http://localhost:3000/"; //! should transfer to .env file before deployment

const axiosInstance = axios.create({ baseURL: API_URL });

// Request interceptor for adding the bearer token
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = Cookies.get("jwtToken");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
