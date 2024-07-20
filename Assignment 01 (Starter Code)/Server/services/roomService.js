const Room = require("../models/Room");
const Transaction = require("../models/Transaction");
const Hotel = require("../models/Hotel");

const getAllRooms = async () => {
  return await Room.find().populate({
    path: "hotel",
    select: "name",
  });
};

const createRoom = async (roomData) => {
  const room = new Room(roomData);
  return await room.save();
};

const getRoomById = async (roomId) => {
  return await Room.findById(roomId).populate("hotel");
};

const updateRoom = async (roomId, roomData) => {
  return await Room.findByIdAndUpdate(roomId, roomData, { new: true });
};

const deleteRoom = async (roomId) => {
  try {
    const hotels = await Hotel.find({ rooms: roomId });
    for (const hotel of hotels) {
      hotel.rooms = hotel.rooms.filter(
        (room) => room.toString() !== roomId.toString(),
      );
      await hotel.save();
    }
    const deletedRoom = await Room.findByIdAndDelete(roomId);
    if (!deletedRoom) {
      throw new Error("Room not found");
    }

    return deletedRoom;
  } catch (error) {
    console.error("Error deleting room:", error);
    throw error;
  }
};

const getRoomByDate = async (hotelId, startDate, endDate) => {
  try {
    // Tìm tất cả các giao dịch trong khoảng thời gian chỉ định
    const transactions = await Transaction.find({
      hotel: hotelId,
      dateStart: { $lt: new Date(endDate) },
      dateEnd: { $gt: new Date(startDate) },
    });

    const unavailableRoomNumbers = new Set();
    transactions.forEach((transaction) => {
      transaction.rooms.forEach((room) => {
        unavailableRoomNumbers.add(room.roomNumber.toString());
      });
    });

    console.log(unavailableRoomNumbers);

    const rooms = await Room.find({ hotel: hotelId });

    const availableRooms = rooms.reduce((acc, room) => {
      const availableRoomNumbers = room.roomNumbers.filter(
        (roomNumber) => !unavailableRoomNumbers.has(roomNumber._id.toString()),
      );

      if (availableRoomNumbers.length > 0) {
        acc.push({
          ...room.toObject(),
          roomNumbers: availableRoomNumbers,
        });
      }

      return acc;
    }, []);

    return availableRooms;
  } catch (error) {
    console.error("Error fetching rooms by date:", error);
    throw error;
  }
};

const checkDuplicateRoomNumbers = async (
  hotelId,
  newRoomNumbers,
  roomId = null,
) => {
  const hotel = await Hotel.findById(hotelId).populate("rooms");
  if (!hotel) {
    throw new Error("Khách sạn không tồn tại");
  }

  const allRoomNumbersOfHotel = hotel.rooms.reduce((acc, room) => {
    if (!roomId || room._id.toString() !== roomId) {
      room.roomNumbers.forEach((roomNumber) => {
        acc.push(roomNumber.number);
      });
    }
    return acc;
  }, []);

  const duplicateRoomNumbers = newRoomNumbers.filter((number) =>
    allRoomNumbersOfHotel.includes(number),
  );

  if (duplicateRoomNumbers.length > 0) {
    throw new Error(
      `These Room Numbers are already exist: ${duplicateRoomNumbers.join(", ")} in hotel ${hotel.name}`,
    );
  }

  return true;
};

const isRoomBooked = async (roomId) => {
  const transactions = await Transaction.find();
  const allRoomFormTransactions = transactions.reduce((acc, transaction) => {
    transaction.rooms.forEach((room) => {
      acc.push(room.room._id.toString());
    });
    return acc;
  }, []);

  return allRoomFormTransactions.includes(roomId);
};

module.exports = {
  getAllRooms,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
  getRoomByDate,
  checkDuplicateRoomNumbers,
  isRoomBooked,
};
