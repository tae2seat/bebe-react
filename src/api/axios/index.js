import axios from "axios";

export const authApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}auth`,
});

export const loggedApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
});

loggedApi.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

loggedApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 404) {
      window.location.replace("/notfound");
    }
    return Promise.reject(error);
  }
);
