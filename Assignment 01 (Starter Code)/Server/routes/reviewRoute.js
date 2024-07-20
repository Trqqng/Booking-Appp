const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// Lấy tất cả đánh giá
router.get("/", reviewController.getAllReviews);

// Thêm một đánh giá mới
router.post("/", reviewController.addReview);

// routes/testRoute.js

module.exports = router;
