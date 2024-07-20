import { useState, useEffect } from "react";

const useHotelForm = (initialState) => {
  const [formData, setFormData] = useState({
    ...initialState,
    selectedAmenities: initialState.selectedAmenities || [],
  });
  const [errors, setErrors] = useState({});
  const [imagePreviews, setImagePreviews] = useState({
    detailPhoto: [],
    photos: [],
  });
  const [storedImages, setStoredImages] = useState({
    detailPhoto: [],
    photos: [],
  });

  useEffect(() => {
    // Initialize stored images from initialState
    setStoredImages({
      detailPhoto: initialState.detailPhoto || [],
      photos: initialState.photos || [],
    });
  }, [initialState]);

  const validateField = (fieldName, fieldValue) => {
    if (!fieldValue) {
      return `${fieldName} is required`;
    }
    return null;
  };

  const validate = () => {
    const newErrors = {};

    const requiredFields = [
      "name",
      "type",
      "city",
      "address",
      "distance",
      "cheapestPrice",
    ];

    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    if (formData.detailPhoto.length + storedImages.detailPhoto.length === 0) {
      newErrors.detailPhoto = "At least one detail photo is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox" && name === "amenities") {
      setFormData((prevData) => ({
        ...prevData,
        selectedAmenities: checked
          ? [...prevData.selectedAmenities, value]
          : prevData.selectedAmenities.filter(
              (amenityId) => amenityId !== value,
            ),
      }));
    } else if (type === "file" && name !== "detailPhoto") {
      setFormData({
        ...formData,
        [name]: files,
      });

      const newPreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setImagePreviews((prev) => ({
        ...prev,
        [name]: newPreviews,
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDetailPhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const totalPhotos =
      formData.detailPhoto.length +
      storedImages.detailPhoto.length +
      files.length;
    if (totalPhotos > 6) {
      setErrors((prev) => ({
        ...prev,
        detailPhoto: "You can only upload a maximum of 6 detail photos.",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      detailPhoto: [...prev.detailPhoto, ...files].slice(
        0,
        6 - storedImages.detailPhoto.length,
      ),
    }));

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => ({
      ...prev,
      detailPhoto: [...prev.detailPhoto, ...newPreviews].slice(
        0,
        6 - storedImages.detailPhoto.length,
      ),
    }));

    setErrors((prev) => ({ ...prev, detailPhoto: null }));
  };

  const removeDetailPhoto = (index, isStored) => {
    if (isStored) {
      setStoredImages((prev) => ({
        ...prev,
        detailPhoto: prev.detailPhoto.filter((_, i) => i !== index),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        detailPhoto: prev.detailPhoto.filter((_, i) => i !== index),
      }));
      setImagePreviews((prev) => ({
        ...prev,
        detailPhoto: prev.detailPhoto.filter((_, i) => i !== index),
      }));
    }
  };

  const getFormDataForSubmit = () => {
    // Combine stored images and new images for submission
    const combinedDetailPhotos = [
      ...storedImages.detailPhoto,
      ...formData.detailPhoto,
    ];
    const combinedPhotos = [...storedImages.photos, ...formData.photos];

    return {
      ...formData,
      detailPhoto: combinedDetailPhotos,
      photos: combinedPhotos,
    };
  };

  return {
    formData,
    errors,
    imagePreviews,
    storedImages,
    validate,
    handleChange,
    handleDetailPhotoUpload,
    removeDetailPhoto,
    setFormData,
    getFormDataForSubmit,
  };
};

export default useHotelForm;
