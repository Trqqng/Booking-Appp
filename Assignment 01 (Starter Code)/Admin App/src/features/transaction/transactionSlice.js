import { createSlice } from "@reduxjs/toolkit";
import {
  createTransactionThunk,
  getTransactionByIdThunk,
  updateTransactionThunk,
  deleteTransactionThunk,
  getAllTransactionsThunk,
  getNumberFromTransactionThunk,
  getTransactionsByUserIdThunk,
} from "./transactionThunk";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    transaction: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTransactionThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTransactionThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions.push(action.payload);
      })
      .addCase(createTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add cases for other thunks similarly
      .addCase(getAllTransactionsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTransactionsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(getAllTransactionsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTransactionsByUserIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionsByUserIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(getTransactionsByUserIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transactionSlice.reducer;
