import { useState } from "react";

const useRoomForm = (initialState) => {
  const [formData, setFormData] = useState({ ...initialState });
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, fieldValue) => {
    if (!fieldValue) {
      return `${fieldName} is required`;
    }
    return null;
  };

  const validate = () => {
    const newErrors = {};

    const requiredFields = [
      "title",
      "desc",
      "price",
      "maxPeople",
      "hotel",
      "size",
      "bedType",
      "view",
    ];

    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  const getFormDataForSubmit = () => {
    return formData;
  };

  return {
    formData,
    errors,
    validate,
    handleChange,
    setFormData,
    setErrors,
    resetForm,
    getFormDataForSubmit,
  };
};

export default useRoomForm;
