const hotelService = require("../services/hotelService");
const City = require("../models/City");
const Category = require("../models/Category");
const {
  processImages,
  processAmenities,
  removeUndefinedProperties,
} = require("../utils");
const mongoose = require("mongoose");
const { Types } = mongoose; // Ensure Types is imported from mongoose

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await hotelService.getAllHotels();
    res.status(200).json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({ message: "Lỗi khi lấy danh sách khách sạn", error });
  }
};

exports.createHotel = async (req, res) => {
  try {
    const { body } = req;
    const { detailPhotoUrls, photoUrls } = processImages(req);

    const selectedAmenities = processAmenities(body.selectedAmenities);

    const hotelData = {
      ...body,
      amenities: selectedAmenities,
      detailPhoto: detailPhotoUrls,
      photos: photoUrls,
      rooms: [],
    };

    const hotel = await hotelService.createHotel(hotelData);
    const city = await City.findById(hotel.city);
    const category = await Category.findById(hotel.type);

    category.hotels.push(hotel._id);
    city.hotels.push(hotel._id);
    await category.save();
    await city.save();

    res.status(201).json(hotel);
  } catch (error) {
    console.error("Error creating hotel:", error);
    res.status(400).json({ message: "Lỗi khi tạo khách sạn", error });
  }
};

exports.getHotelById = async (req, res) => {
  try {
    const hotel = await hotelService.getHotelById(req.params.hotelId);
    if (!hotel) {
      return res.status(404).json({ message: "Khách sạn không tồn tại" });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin khách sạn", error });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const { body } = req;
    const hotelId = req.params.hotelId;

    const currentHotel = await hotelService.getHotelById(hotelId);
    if (!currentHotel) {
      return res.status(404).json({ message: "Khách sạn không tồn tại" });
    }
    let { detailPhotoUrls, photoUrls } = processImages(req);

    if (!detailPhotoUrls.length) {
      detailPhotoUrls = currentHotel.detailPhoto;
    }
    if (!photoUrls.length) {
      photoUrls = currentHotel.photos;
    }

    let selectedAmenities = undefined;
    if (body.selectedAmenities) {
      selectedAmenities = processAmenities(body.selectedAmenities);
    }

    const convertToObjectId = (id) => {
      if (Types.ObjectId.isValid(id)) {
        return new Types.ObjectId(id);
      }
      return null;
    };

    const hotelData = {
      ...body,
      city: convertToObjectId(body.city),
      type: convertToObjectId(body.type),
      detailPhoto: detailPhotoUrls,
      photos: photoUrls,
      amenities: selectedAmenities ? selectedAmenities : currentHotel.amenities,
    };

    const cleanedHotelData = removeUndefinedProperties(hotelData);

    console.log("Hotel data to update:", cleanedHotelData);

    const hotel = await hotelService.updateHotel(hotelId, cleanedHotelData);
    if (!hotel) {
      return res.status(404).json({ message: "Khách sạn không tồn tại" });
    }

    console.log("Hotel updated successfully");
    res.status(200).json(hotel);
  } catch (error) {
    console.error("Error updating hotel:", error);
    res
      .status(400)
      .json({ message: "Lỗi khi cập nhật khách sạn", error: error.message });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const hotel = await hotelService.deleteHotel(hotelId);
    if (hotel) {
      res.status(200).json({ message: "Đã xóa khách sạn" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
