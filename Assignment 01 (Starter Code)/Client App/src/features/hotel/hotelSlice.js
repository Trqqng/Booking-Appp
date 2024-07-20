import { createSlice } from "@reduxjs/toolkit";
import {
  fetchHotels,
  fetchHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
} from "./hotelThunk";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: [],
    hotel: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hotels = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchHotelById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotelById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hotel = action.payload;
      })
      .addCase(fetchHotelById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createHotel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createHotel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hotels.push(action.payload);
      })
      .addCase(createHotel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateHotel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateHotel.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.hotels.findIndex(
          (hotel) => hotel.id === action.payload.id,
        );
        if (index !== -1) {
          state.hotels[index] = action.payload;
        }
      })
      .addCase(updateHotel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteHotel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteHotel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hotels = state.hotels.filter(
          (hotel) => hotel.id !== action.payload.id,
        );
      })
      .addCase(deleteHotel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default hotelSlice.reducer;
