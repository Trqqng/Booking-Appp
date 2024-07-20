import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  registerThunk,
  logoutThunk,
  checkPasswordThunk,
} from "./authThunks";

const initialState = {
  user: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
  passwordCheckMessage: null, // Thêm trường này để lưu trữ thông báo kiểm tra mật khẩu
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(registerThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(checkPasswordThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkPasswordThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.passwordCheckMessage = action.payload.message;
        state.error = null;
      })
      .addCase(checkPasswordThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearError } = authSlice.actions;
export default authSlice.reducer;
