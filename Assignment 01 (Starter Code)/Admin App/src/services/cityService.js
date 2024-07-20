import axios from "axios";

const API_URL = "http://localhost:5000/api/cities";

const getAllCities = async () => {
  const response = await axios.get(API_URL, {});
  console.log("service", response.data);
  return response.data;
};
const createCity = async (cityData) => {
  const response = await axios.post(API_URL, cityData);
  return response.data;
};

const updateCity = async (cityId, cityData) => {
  const response = await axios.put(`${API_URL}/${cityId}`, cityData);
  return response.data;
};

const deleteCity = async (cityId) => {
  const response = await axios.delete(`${API_URL}/${cityId}`);
  return response.data;
};

export default {
  getAllCities,
  createCity,
  updateCity,
  deleteCity,
};
