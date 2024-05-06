// http-common.js
import axios from "axios";

// Tạo một instance của Axios với các cấu hình mặc định
const http = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});

// Hàm để thêm token vào headers
const addTokenToRequest = (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

http.interceptors.request.use(addTokenToRequest);

export default http;
