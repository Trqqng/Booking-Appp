import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Sửa import

const API_URL = "http://localhost:5000/api/users";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data?.message || error.message,
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await apiClient.post("/login", loginData);
    if (response.data.token) {
      sessionStorage.setItem("token", response.data.token);
      const decodedToken = jwtDecode(response.data.token);
      if (decodedToken.role !== "admin") {
        throw new Error("You do not have permission to access this resource.");
      }
      return decodedToken;
    }
    return response.data;
  } catch (error) {
    console.error(
      "Error logging in:",
      error.response?.data?.message || error.message,
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const logoutUser = async () => {
  try {
    localStorage.removeItem("token");
    const response = await apiClient.post("/logout");
    return response.data;
  } catch (error) {
    console.error(
      "Error logging out:",
      error.response?.data?.message || error.message,
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const checkPassword = async (password) => {
  try {
    const response = await apiClient.post("/check-password", { password });
    return response.data;
  } catch (error) {
    console.error(
      "Error checking password:",
      error.response?.data?.message || error.message,
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

export default {
  registerUser,
  loginUser,
  logoutUser,
  checkPassword,
};
