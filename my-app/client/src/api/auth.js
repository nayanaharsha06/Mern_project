import axios from "axios";

// Base URL for the backend server
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Login API call
export const login = async (email, password) => {
  return await API.post("/auth/login", { email, password });
};

// Register API call
export const register = async (data) => {
  return await API.post("/auth/register", data);
};
