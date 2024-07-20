const roomService = require("../services/roomService");
const Hotel = require("../models/Hotel");
const transactionService = require("../services/transactionService");

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await roomService.getAllRooms();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách phòng", error });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const { hotel, roomNumbers } = req.body;

    await roomService.checkDuplicateRoomNumbers(
      hotel,
      roomNumbers.map((room) => room.number),
    );

    const room = await roomService.createRoom(req.body);

    const hotelEntity = await Hotel.findById(hotel);
    hotelEntity.rooms.push(room._id);
    await hotelEntity.save();

    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
};

exports.getRoomById = async (req, res) => {
  try {
    const room = await roomService.getRoomById(req.params.roomId);
    if (!room) {
      return res.status(404).json({ message: "Phòng không tồn tại" });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin phòng", error });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const { roomNumbers } = req.body;

    // Kiểm tra phòng trùng lặp
    await roomService.checkDuplicateRoomNumbers(
      req.body.hotel,
      roomNumbers.map((room) => room.number),
      roomId,
    );

    // Cập nhật phòng
    const updatedRoom = await roomService.updateRoom(roomId, req.body);
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const currentRoomId = req.params.roomId;

    const isBooked = await roomService.isRoomBooked(currentRoomId);

    if (isBooked) {
      return res.status(400).json({ message: "Room is already booked" });
    }
    const room = await roomService.deleteRoom(currentRoomId);
    if (!room) {
      return res.status(404).json({ message: "Phòng không tồn tại" });
    }

    res.status(200).json({ message: "Đã xóa phòng" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa phòng", error });
  }
};

exports.getRoomByDate = async (req, res) => {
  try {
    const { hotelId, startDate, endDate } = req.params;
    const rooms = await roomService.getRoomByDate(hotelId, startDate, endDate);
    res.status(200).json(rooms);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy thông tin phòng theo ngày", error });
  }
};
