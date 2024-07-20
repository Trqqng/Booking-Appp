import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../services/userService";

export const getAllUsersThunk = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await userService.getAllUsers();
      return users;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
