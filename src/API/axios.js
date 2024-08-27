// axiosConfig.js
import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: "bfaffekwfbzyj4j41mho-mysql.services.clever-cloud.com", // Update with your base URL
});

// Request interceptor to include token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
