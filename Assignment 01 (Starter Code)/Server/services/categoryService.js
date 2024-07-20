const Category = require("../models/Category");

const getAllCategories = async () => {
  return await Category.find();
};

const getCategoryById = async (id) => {
  return await Category.findById(id);
};

const createCategory = async (categoryData) => {
  const category = new Category(categoryData);
  return await category.save();
};

const updateCategory = async (id, categoryData) => {
  return await Category.findByIdAndUpdate(id, categoryData, { new: true });
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
