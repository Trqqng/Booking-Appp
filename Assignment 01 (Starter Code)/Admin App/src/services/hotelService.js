import axios from "axios";

const API_URL = "http://localhost:5000/api/hotels";

const getAllHotels = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createHotel = async (hotelData) => {
  const response = await axios.post(API_URL, hotelData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const getHotelById = async (hotelId) => {
  const response = await axios.get(`${API_URL}/${hotelId}`);
  return response.data;
};

const updateHotel = async (hotelId, hotelData) => {
  const response = await axios.put(`${API_URL}/${hotelId}`, hotelData);
  return response.data;
};

const deleteHotel = async (hotelId) => {
  const response = await axios.delete(`${API_URL}/${hotelId}`);
  return response.data;
};

export default {
  getAllHotels,
  createHotel,
  getHotelById,
  updateHotel,
  deleteHotel,
};
