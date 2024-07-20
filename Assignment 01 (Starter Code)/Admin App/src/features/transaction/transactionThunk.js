import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getAllTransactions,
  getNumberFromTransaction,
  getTransactionByUserId,
} from "../../services/transactionService";

// Create a new transaction
export const createTransactionThunk = createAsyncThunk(
  "transactions/create",
  async (transactionData, { rejectWithValue }) => {
    try {
      const response = await createTransaction(transactionData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Get a transaction by ID
export const getTransactionByIdThunk = createAsyncThunk(
  "transactions/getById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getTransactionById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Update a transaction
export const updateTransactionThunk = createAsyncThunk(
  "transactions/update",
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      const response = await updateTransaction(id, updateData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Delete a transaction
export const deleteTransactionThunk = createAsyncThunk(
  "transactions/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteTransaction(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Get all transactions
export const getAllTransactionsThunk = createAsyncThunk(
  "transactions/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllTransactions();
      console.log("thunk", response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Get room numbers from transactions based on hotel ID and date
export const getNumberFromTransactionThunk = createAsyncThunk(
  "transactions/getNumbers",
  async ({ hotelId, date }, { rejectWithValue }) => {
    try {
      const response = await getNumberFromTransaction(hotelId, date);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Get transactions by userId
export const getTransactionsByUserIdThunk = createAsyncThunk(
  "transactions/getByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getTransactionByUserId(userId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
