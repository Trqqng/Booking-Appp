// src/features/auth/authThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../../services/authService";

export const loginThunk = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await loginUser(loginData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  },
);

export const registerThunk = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await registerUser(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await logoutUser();
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  },
);
