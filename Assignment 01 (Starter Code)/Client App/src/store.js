import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import hotelReducer from "./features/hotel/hotelSlice";
import roomReducer from "./features/room/roomSlice";
import transactionReducer from "./features/transaction/transactionSlice";
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem("token");
const user = token ? jwtDecode(token) : null;

const preloadedState = {
  auth: {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    hotels: hotelReducer,
    rooms: roomReducer,
    transactions: transactionReducer,
  },
  preloadedState,
});

export default store;
