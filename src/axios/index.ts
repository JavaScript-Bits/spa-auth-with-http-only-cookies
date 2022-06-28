import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default axios.create({
  baseURL: API_BASE_URL,
});

const authenticatedAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {},
  withCredentials: true,
});

export { authenticatedAxios };
