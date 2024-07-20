import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import hotelReducer from "./features/hotel/hotelSlice";
import roomReducer from "./features/room/roomSlice";
import transactionReducer from "./features/transaction/transactionSlice";
import userReducer from "./features/user/userSlice";
import { jwtDecode } from "jwt-decode";

const token = sessionStorage.getItem("token");
const user = token ? jwtDecode(token) : null;

const preloadedState = {
  auth: {
    user: user ? user : null,
    isAuthenticated: !!user,
    status: "idle",
    error: null,
    passwordCheckMessage: null,
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    hotels: hotelReducer,
    rooms: roomReducer,
    transactions: transactionReducer,
    user: userReducer,
  },
  preloadedState,
});

export default store;
