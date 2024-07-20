import axios from "axios";

const BASE_URL = "http://localhost:5000/api/categories";

const getAllCategories = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

const createCategory = async (categoryData) => {
  try {
    const response = await axios.post(BASE_URL, categoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

const updateCategory = async (id, categoryData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, categoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

const deleteCategory = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

const categoryService = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};

export default categoryService;
