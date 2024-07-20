import axios from "axios";

const API_URL = "http://localhost:5000/api/rooms";

const getAllRooms = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createRoom = async (roomData) => {
  const response = await axios.post(API_URL, roomData);
  return response.data;
};

const getRoomById = async (roomId) => {
  const response = await axios.get(`${API_URL}/${roomId}`);
  return response.data;
};

const updateRoom = async (roomId, roomData) => {
  const response = await axios.put(`${API_URL}/${roomId}`, roomData);
  return response.data;
};

const deleteRoom = async (roomId) => {
  const response = await axios.delete(`${API_URL}/${roomId}`);
  return response.data;
};

const getAllRoomByDate = async (hotelId, startDate, endDate) => {
  const response = await axios.get(
    `${API_URL}/by-date/${hotelId}/${startDate}/${endDate}`,
  );
  console.log(response.data);
  return response;
};

export default {
  getAllRooms,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
  getAllRoomByDate,
};
