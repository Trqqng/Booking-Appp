const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  maxPeople: { type: Number, required: true, min: 1 },
  desc: String,
  roomNumbers: [
    {
      number: Number,
      available: Boolean,
      bookings: [
        {
          transactionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction",
            required: true,
          },
        },
      ],
    },
  ],
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true },
  size: Number,
  bedType: { type: String, enum: ["Single", "Double", "Queen", "King"] },
  view: { type: String, enum: ["City", "Garden", "Sea"] },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
