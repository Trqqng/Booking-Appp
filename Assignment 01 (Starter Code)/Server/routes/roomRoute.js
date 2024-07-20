const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

// Lấy danh sách tất cả các phòng (có thể có phân trang, lọc, sắp xếp)
router.get("/", roomController.getAllRooms);

// Tạo một phòng mới
router.post("/", roomController.createRoom);

// Lấy thông tin chi tiết của một phòng cụ thể
router.get("/:roomId", roomController.getRoomById);

// Cập nhật thông tin của một phòng
router.put("/:roomId", roomController.updateRoom);

// Xóa một phòng
router.delete("/:roomId", roomController.deleteRoom);
router.get(
  "/by-date/:hotelId/:startDate/:endDate",
  roomController.getRoomByDate,
);

module.exports = router;
