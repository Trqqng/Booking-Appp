// src/features/rooms/roomThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import roomService from "../../services/roomService";

export const fetchAllRooms = createAsyncThunk(
  "rooms/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await roomService.getAllRooms();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const createRoom = createAsyncThunk(
  "rooms/create",
  async (roomData, thunkAPI) => {
    try {
      const response = await roomService.createRoom(roomData);
      return response;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const fetchRoomById = createAsyncThunk(
  "rooms/fetchById",
  async (roomId, thunkAPI) => {
    try {
      const response = await roomService.getRoomById(roomId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const updateRoom = createAsyncThunk(
  "rooms/update",
  async (formData, thunkAPI) => {
    try {
      const roomId = formData._id;
      const response = await roomService.updateRoom(roomId, formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deleteRoom = createAsyncThunk(
  "rooms/delete",
  async (roomId, thunkAPI) => {
    try {
      const response = await roomService.deleteRoom(roomId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message,
      );
    }
  },
);

export const fetchRoomByDate = createAsyncThunk(
  "rooms/fetchByDate",
  async ({ hotelId, startDate, endDate }, thunkAPI) => {
    try {
      const response = await roomService.getAllRoomByDate(
        hotelId,
        startDate,
        endDate,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
