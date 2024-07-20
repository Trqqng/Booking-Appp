const mongoose = require("mongoose");

// Cần yêu cầu mô hình Hotel để tham chiếu
const Hotel = require("./Hotel");

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  subText: String,
  image: String,
  hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hotel" }], // Thêm mảng tham chiếu đến Hotel
});

const City = mongoose.model("City", citySchema);

module.exports = City;
