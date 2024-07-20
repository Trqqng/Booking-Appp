const Hotel = require("../models/Hotel");
const Transaction = require("../models/Transaction");
const Room = require("../models/Room");
const City = require("../models/City");
const Category = require("../models/Category");
const getAllHotels = async () => {
  try {
    const hotels = await Hotel.find()
      .populate("city")
      .populate("rooms")
      .populate("amenities")
      .populate("type")
      .populate({
        path: "reviews",
        populate: [
          {
            path: "user",
            select: "fullName username",
          },
          {
            path: "like",
            select: "fullName username",
          },
        ],
      });
    return hotels;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};

const createHotel = async (hotelData) => {
  try {
    const hotel = new Hotel(hotelData);
    const savedHotel = await hotel.save();
    console.log("Hotel saved successfully:", savedHotel);
    return savedHotel;
  } catch (error) {
    console.error("Error saving hotel:", error);
    throw error;
  }
};

const getHotelById = async (hotelId) => {
  return await Hotel.findById(hotelId)
    .populate("city")
    .populate("rooms")
    .populate("amenities")
    .populate("reviews");
};

const updateHotel = async (hotelId, hotelData) => {
  console.log("Hotel ID:", hotelId);
  console.log("Hotel Data:", hotelData);

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, hotelData, {
      new: true,
      runValidators: true,
    });
    if (!updatedHotel) {
      console.log("No hotel found with this ID");
      return null;
    }
    console.log("Updated Hotel:", updatedHotel);
    return updatedHotel;
  } catch (error) {
    console.error("Error updating hotel:", error);
    throw error;
  }
};

const deleteHotel = async (hotelId) => {
  try {
    const allTransactionsFromHotel = await Transaction.find({ hotel: hotelId });

    if (allTransactionsFromHotel.length > 0) {
      throw new Error("This hotel has transactions and cannot be deleted.");
    }
    await City.updateMany({ hotels: hotelId }, { $pull: { hotels: hotelId } });

    await Category.updateMany(
      { hotels: hotelId },
      { $pull: { hotels: hotelId } },
    );
    await Room.deleteMany({ hotel: hotelId });
    const deletedHotel = await Hotel.findByIdAndDelete(hotelId);
    if (!deletedHotel) {
      throw new Error("Hotel not found");
    }

    return deletedHotel;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllHotels,
  createHotel,
  getHotelById,
  updateHotel,
  deleteHotel,
};
