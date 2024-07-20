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
      console.log(hotelData);
      const response = await hotelService.createHotel(hotelData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateHotel = createAsyncThunk(
  "hotels/update",
  async (formData, thunkAPI) => {
    try {
      const hotelId = formData.get("_id"); // Lấy hotelId từ formData
      const response = await hotelService.updateHotel(hotelId, formData);
      return response.data;
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
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
