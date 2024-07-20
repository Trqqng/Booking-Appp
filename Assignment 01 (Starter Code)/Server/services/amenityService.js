const Amenity = require("../models/Amenity");

const getAllAmenities = async () => {
  return await Amenity.find();
};

const createAmenity = async (amenityData) => {
  const newAmenity = new Amenity(amenityData);
  return await newAmenity.save();
};

const updateAmenity = async (amenityId, amenityData) => {
  return await Amenity.findByIdAndUpdate(amenityId, amenityData, { new: true });
};

const deleteAmenity = async (amenityId) => {
  return await Amenity.findByIdAndDelete(amenityId);
};

module.exports = {
  getAllAmenities,
  createAmenity,
  updateAmenity,
  deleteAmenity,
};
