const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true },
  rooms: [
    {
      room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true,
      },
      roomNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room.roomNumbers",
        required: true,
      },
    },
  ],
  dateStart: { type: Date, required: true },
  dateEnd: { type: Date, required: true },
  price: { type: Number, required: true, min: 0 },
  payment: {
    type: String,
    enum: ["Credit Card", "Cash", "Other"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Booked", "Checkin", "Checkout", "Cancelled"],
    default: "Booked",
  },
  paymentDetails: {
    cardNumber: String,
    expiryDate: String,
    cvv: String,
  },
  guestName: String,
  guestEmail: String,
  guestPhone: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
