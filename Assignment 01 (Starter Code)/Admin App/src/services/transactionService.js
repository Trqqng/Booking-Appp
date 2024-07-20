import axios from "axios";

const API_URL = "http://localhost:5000/api/transactions";

// Create a new transaction
const createTransaction = async (transactionData) => {
  try {
    const response = await axios.post(API_URL, transactionData);
    return response.data;
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
};

// Get a transaction by ID
const getTransactionById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching transaction by ID:", error);
    throw error;
  }
};

// Update a transaction
const updateTransaction = async (id, updateData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updateData);
    return response.data;
  } catch (error) {
    console.error("Error updating transaction:", error);
    throw error;
  }
};

// Delete a transaction
const deleteTransaction = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw error;
  }
};

// Get all transactions
const getAllTransactions = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching all transactions:", error);
    throw error;
  }
};

// Get room numbers from transactions based on hotel ID and date
const getNumberFromTransaction = async (hotelId, date) => {
  try {
    const response = await axios.get(`${API_URL}/numbers`, {
      params: { hotelId, date },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching room numbers from transactions:", error);
    throw error;
  }
};

const getTransactionByUserId = async (userId) => {
  try {
    console.log(userId);
    const response = await axios.get(`${API_URL}/user/${userId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching all transactions:", error);
    throw error;
  }
};

export {
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getAllTransactions,
  getNumberFromTransaction,
  getTransactionByUserId,
};
