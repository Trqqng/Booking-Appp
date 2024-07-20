import axios from "axios";

const API_URL = "http://localhost:5000/api/amenities";

const getAllAmenities = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createAmenity = async (amenityData) => {
  const response = await axios.post(API_URL, amenityData);
  return response.data;
};

const updateAmenity = async (amenityId, amenityData) => {
  const response = await axios.put(`${API_URL}/${amenityId}`, amenityData);
  return response.data;
};

const deleteAmenity = async (amenityId) => {
  const response = await axios.delete(`${API_URL}/${amenityId}`);
  return response.data;
};

export default {
  getAllAmenities,
  createAmenity,
  updateAmenity,
  deleteAmenity,
};
