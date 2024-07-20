const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Người dùng đánh giá
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true }, // Khách sạn được đánh giá
  rating: { type: Number, required: true, min: 1, max: 5 }, // Đánh giá từ 1 đến 5 sao
  comment: String, // Nội dung đánh giá
  createdAt: { type: Date, default: Date.now }, // Thời gian đánh giá
  like: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// Middleware to update hotel rating after a review is saved
reviewSchema.post("save", async function () {
  const Hotel = mongoose.model("Hotel");
  const hotel = await Hotel.findById(this.hotel);
  if (hotel) {
    await hotel.updateRating();
  }
});

// Middleware to update hotel rating after a review is removed
reviewSchema.post("remove", async function () {
  const Hotel = mongoose.model("Hotel");
  const hotel = await Hotel.findById(this.hotel);
  if (hotel) {
    await hotel.updateRating();
  }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
