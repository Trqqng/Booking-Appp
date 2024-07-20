const reviewService = require("../services/reviewService");

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await reviewService.getAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy đánh giá", error: error.message });
  }
};

exports.addReview = async (req, res) => {
  try {
    const review = await reviewService.addReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi thêm đánh giá", error: error.message });
  }
};
