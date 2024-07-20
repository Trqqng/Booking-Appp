const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

// Import Routes
const userRoute = require("./routes/userRoute");
const hotelRoute = require("./routes/hotelRoute");
const roomRoute = require("./routes/roomRoute");
const reviewRoute = require("./routes/reviewRoute");
const amenityRoutes = require("./routes/amenityRoute");
const cityRoutes = require("./routes/cityRoute");
const categoryRoutes = require("./routes/categoryRoute");
const testRoute = require("./routes/testRoute");
const transactionRoute = require("./routes/transactionRoute");

const app = express();

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  }),
);

app.use(express.json());

const imagesDir = path.resolve(__dirname, "public/images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

app.use("/images", express.static(imagesDir));

mongoose
  .connect(
    "mongodb+srv://manhtruong227:truong123456@cluster0.q0inivp.mongodb.net/BookingBackend",
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => {
    console.log("MongoDB Connected to Booking");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/amenities", amenityRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/test", testRoute);
app.use("/api/transactions", transactionRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
