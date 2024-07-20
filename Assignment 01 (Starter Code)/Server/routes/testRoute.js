const express = require("express");
const router = express.Router();
const Review = require("../models/Review"); // Đường dẫn tới model Review của bạn

// Route để kiểm tra populate
router.get("/test-populate-likes", async (req, res) => {
  try {
    const review = await Review.findById("66518ca11c07e360588e4d17").populate(
      "likes",
      "fullName username",
    );
    console.log(review);
    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/check-review", async (req, res) => {
  try {
    const review = await Review.findById("66518ca11c07e360588e4d17");
    console.log(review);
    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
