import { createAsyncThunk } from "@reduxjs/toolkit";
import hotelService from "../../services/hotelService";

export const fetchHotels = createAsyncThunk(
  "hotels/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await hotelService.getAllHotels();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchHotelById = createAsyncThunk(
  "hotels/fetchById",
  async (hotelId, thunkAPI) => {
    try {
      const response = await hotelService.getHotelById(hotelId);
      console.log("responeThunk", response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const createHotel = createAsyncThunk(
  "hotels/create",
  async (hotelData, thunkAPI) => {
    try {
      const response = await hotelService.createHotel(hotelData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateHotel = createAsyncThunk(
  "hotels/update",
  async ({ hotelId, hotelData }, thunkAPI) => {
    try {
      const response = await hotelService.updateHotel(hotelId, hotelData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteHotel = createAsyncThunk(
  "hotels/delete",
  async (hotelId, thunkAPI) => {
    try {
      const response = await hotelService.deleteHotel(hotelId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
