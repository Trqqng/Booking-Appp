// routes/hotelRoute.js
const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotelController");
const upload = require("../middleware/multer");

router.get("/", hotelController.getAllHotels);

// Tạo một khách sạn mới với upload ảnh
router.post(
  "/",
  upload.fields([
    { name: "detailPhoto", maxCount: 10 },
    { name: "photos", maxCount: 10 },
  ]),
  hotelController.createHotel,
);

// Lấy thông tin chi tiết của một khách sạn cụ thể
router.get("/:hotelId", hotelController.getHotelById);

router.put(
  "/:hotelId",
  upload.fields([
    { name: "detailPhoto", maxCount: 10 },
    { name: "photos", maxCount: 10 },
  ]),
  hotelController.updateHotel,
);

// Xóa một khách sạn
router.delete("/:hotelId", hotelController.deleteHotel);

module.exports = router;
