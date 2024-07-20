import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllUsers = async () => {
  try {
    const response = await apiClient.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default {
  getAllUsers,
};
