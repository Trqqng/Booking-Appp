import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:5000/api/users";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (userData) => {
  try {
    console.log(userData);
    const response = await apiClient.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await apiClient.post("/login", loginData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      const decodedToken = jwtDecode(response.data.token);
      return decodedToken;
    }
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    localStorage.removeItem("token");
    const response = await apiClient.post("/logout");
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export default {
  registerUser,
  loginUser,
  logoutUser,
};
