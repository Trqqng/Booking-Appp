import axios from "axios";

const API_URL = "http://localhost:5000/api/reviews";

const addReview = async (reviewData) => {
  const response = await axios.post(API_URL, reviewData);
  return response.data;
};

const getAllReviews = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export default {
  addReview,
  getAllReviews,
};
