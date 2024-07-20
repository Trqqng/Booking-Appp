import { createSlice } from "@reduxjs/toolkit";
import { getAllUsersThunk } from "./userThunk";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUsersThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(getAllUsersThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
