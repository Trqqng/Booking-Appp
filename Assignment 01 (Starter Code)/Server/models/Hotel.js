const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  city: { type: mongoose.Schema.Types.ObjectId, ref: "City" }, // Ensure this matches the field name in your schema
  address: { type: String, required: true },
  distance: { type: String, required: true },
  detailPhoto: [String],
  photos: [String],
  title: String,
  desc: String,
  rating: { type: Number, min: 0, max: 5, default: 0 },
  cheapestPrice: Number,
  featured: { type: Boolean, default: false },
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
  phone: String,
  email: String,
  website: String,
  amenities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Amenity" }],
  checkInTime: String,
  checkOutTime: String,
  petPolicy: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  available: { type: Boolean, default: true },
  free_cancel: { type: Boolean, default: true },
});

hotelSchema.methods.updateRating = async function () {
  const reviews = await mongoose.model("Review").find({ hotel: this._id });
  if (reviews.length > 0) {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    this.rating = totalRating / reviews.length;
  } else {
    this.rating = 0;
  }
  await this.save();
};

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
