// models/Session.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  startTime: { type: Date, default: Date.now },
  endTime: Date,
  // Add any additional session fields you need here
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
