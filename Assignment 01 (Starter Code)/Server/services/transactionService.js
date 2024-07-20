const Transaction = require("../models/Transaction");
const Room = require("../models/Room");

const createTransaction = async (transactionData) => {
  try {
    const { rooms, dateStart, dateEnd, hotel } = transactionData;

    for (const room of rooms) {
      const existingBookings = await Transaction.find({
        hotel: hotel,
        "rooms.room": room.room,
        "rooms.roomNumber": room.roomNumber,
        $or: [{ dateStart: { $lt: dateEnd }, dateEnd: { $gt: dateStart } }],
      });

      if (existingBookings.length > 0) {
        throw new Error(
          `Room ${room.room} with room number ${room.roomNumber} is already booked for the selected dates.`,
        );
      }
    }

    const transaction = new Transaction(transactionData);
    const savedTransaction = await transaction.save();
    console.log("Transaction saved:", savedTransaction);
    return savedTransaction;
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error; // Re-throw the error for further handling if needed
  }
};

const getTransactionById = async (id) => {
  return await Transaction.findById(id).populate("user hotel rooms.room");
};

const updateTransaction = async (id, updateData) => {
  return await Transaction.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteTransaction = async (id) => {
  return await Transaction.findByIdAndDelete(id);
};

const getAllTransactions = async () => {
  try {
    const transactions = await Transaction.find()
      .populate({
        path: "hotel",
        select: "name _id",
      })
      .populate("user rooms.room")
      .lean();

    if (!transactions || transactions.length === 0) {
      throw new Error("No transactions available.");
    }

    await Promise.all(
      transactions.map(async (transaction) => {
        await Promise.all(
          transaction.rooms.map(async (room) => {
            const RoomDetail = await Room.findById(room.room).select(
              "roomNumbers",
            );

            if (RoomDetail && RoomDetail.roomNumbers) {
              const roomNumberDetail = RoomDetail.roomNumbers.id(
                room.roomNumber,
              );

              room.roomNumberDetail = roomNumberDetail
                ? {
                    id: roomNumberDetail._id,
                    number: roomNumberDetail.number,
                  }
                : null;
            }
          }),
        );
      }),
    );
    return transactions;
  } catch (error) {
    console.error("Error fetching all transactions :", error);
    throw error;
  }
};

const getTransactionsByUserId = async (userId) => {
  try {
    const transactions = await Transaction.find({ user: userId })
      .populate({
        path: "hotel",
        select: "name",
      })
      .populate({
        path: "rooms.room",
        select: "title price maxPeople",
      })
      .lean();

    if (!transactions || transactions.length === 0) {
      throw new Error("No transactions found for this user.");
    }

    await Promise.all(
      transactions.map(async (transaction) => {
        await Promise.all(
          transaction.rooms.map(async (room) => {
            const roomDetail = await Room.findById(room.room).select(
              "roomNumbers",
            );

            if (roomDetail && roomDetail.roomNumbers) {
              const roomNumberDetail = roomDetail.roomNumbers.id(
                room.roomNumber,
              );
              room.roomNumberDetail = roomNumberDetail
                ? {
                    id: roomNumberDetail._id,
                    number: roomNumberDetail.number,
                  }
                : null;
            } else room.roomNumberDetail = null;
          }),
        );
      }),
    );
    return transactions;
  } catch (error) {
    console.error("Error fetching transactions by userId:", error);
    throw error;
  }
};

module.exports = {
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getAllTransactions,
  getTransactionsByUserId,
};
