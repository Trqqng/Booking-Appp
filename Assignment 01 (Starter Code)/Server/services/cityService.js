const City = require("../models/City");

const getAllCities = async () => {
  return await City.find();
};

const createCity = async (cityData) => {
  const newCity = new City(cityData);
  return await newCity.save();
};

const updateCity = async (cityId, cityData) => {
  return await City.findByIdAndUpdate(cityId, cityData, { new: true });
};

const deleteCity = async (cityId) => {
  return await City.findByIdAndDelete(cityId);
};

module.exports = {
  getAllCities,
  createCity,
  updateCity,
  deleteCity,
};
