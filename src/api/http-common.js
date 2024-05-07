import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/v1/api",
  headers: {
    "Content-type": "application/json",
  },
});

const addTokenToRequest = (config) => {
  const token = JSON.parse(localStorage.getItem("accessToken"));

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

http.interceptors.request.use(addTokenToRequest);

export default http;
