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
        const updatedHotel = action.payload;
        if (updatedHotel && updatedHotel.id) {
          const index = state.hotels.findIndex(
            (hotel) => hotel.id === updatedHotel.id,
          );
          if (index !== -1) {
            state.hotels[index] = updatedHotel;
          } else {
            console.error(`Hotel with id ${updatedHotel.id} not found`);
          }
        } else {
          console.error("Updated hotel or hotel ID is undefined");
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
        const deletedHotelId = action.payload.id;
        if (deletedHotelId) {
          state.hotels = state.hotels.filter(
            (hotel) => hotel.id !== deletedHotelId,
          );
        } else {
          console.error("Deleted hotel ID is undefined");
        }
      })
      .addCase(deleteHotel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default hotelSlice.reducer;
