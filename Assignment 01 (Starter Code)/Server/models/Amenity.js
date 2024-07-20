const mongoose = require("mongoose");
const amenitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  availability: { type: Boolean, default: true },
  hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hotel" }],
});

const Amenity = mongoose.model("Amenity", amenitySchema);

module.exports = Amenity;
