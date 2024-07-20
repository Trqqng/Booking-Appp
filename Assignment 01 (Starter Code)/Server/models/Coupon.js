const mongoose = require("mongoose");
const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true }, // Mã giảm giá
  discount: { type: Number, required: true, min: 0, max: 100 }, // Phần trăm giảm giá
  expiryDate: { type: Date, required: true }, // Ngày hết hạn
  minBookingAmount: Number, // Giá trị đặt phòng tối thiểu để áp dụng mã (tùy chọn)
  maxDiscountAmount: Number, // Giảm giá tối đa (tùy chọn)
});

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
