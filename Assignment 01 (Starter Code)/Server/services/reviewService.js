const Review = require("../models/Review");
const User = require("../models/User");
const Hotel = require("../models/Hotel");

const addReview = async (reviewData) => {
  const { userId, hotelId, rating, comment } = reviewData;

  const user = await User.findById(userId);
  const hotel = await Hotel.findById(hotelId);

  if (!user) {
    throw new Error("Người dùng không tồn tại");
  }

  if (!hotel) {
    throw new Error("Khách sạn không tồn tại");
  }

  const review = new Review({
    user: userId,
    hotel: hotelId,
    rating,
    comment,
  });

  await review.save();

  hotel.reviews.push(review._id);
  await hotel.save();

  return review;
};

const getAllReviews = async () => {
  return await Review.find();
};

module.exports = {
  addReview,
  getAllReviews,
};
