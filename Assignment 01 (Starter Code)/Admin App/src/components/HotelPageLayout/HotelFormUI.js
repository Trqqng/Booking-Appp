import React, { useEffect, useState } from "react";
import useHotelForm from "../../hooks/useHotelForm";
import MainInformation from "./MainInformation";
import ImageInformation from "./ImageInformation";
import MoreInformation from "./MoreInformation";
import { useLocation } from "react-router-dom";
import CheckPasswordComponent from "../checkPassword"; // Đảm bảo đường dẫn này đúng

const HotelFormUI = ({ cities, categories, amenities, onSubmit }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isEdit = queryParams.get("edit") === "true";

  const [initialFormData, setInitialFormData] = useState({
    name: "",
    type: "",
    city: "",
    address: "",
    distance: "",
    detailPhoto: [],
    photos: [],
    title: "",
    desc: "",
    rating: 0,
    cheapestPrice: "",
    featured: false,
    rooms: [],
    phone: "",
    email: "",
    website: "",
    selectedAmenities: [],
    checkInTime: "",
    checkOutTime: "",
    petPolicy: "",
    available: true,
  });

  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [submitData, setSubmitData] = useState(null);

  const {
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
  } = useHotelForm(initialFormData);

  useEffect(() => {
    if (isEdit) {
      const storedHotel = localStorage.getItem("selectedHotel");
      if (storedHotel) {
        const parsedHotel = JSON.parse(storedHotel);
        console.log(parsedHotel);
        const updatedFormData = {
          ...parsedHotel,
          selectedAmenities:
            parsedHotel.amenities?.map((amenity) => amenity._id || amenity) ||
            [],
          city: parsedHotel.city?._id,
          type: parsedHotel.type?._id,
          photos: parsedHotel.photos || [],
          detailPhoto: parsedHotel.detailPhoto || [],
        };
        setInitialFormData(updatedFormData);
        setFormData(updatedFormData);
      }
    }
  }, [isEdit, setFormData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitData(getFormDataForSubmit());
      setShowPasswordCheck(true);
    }
  };

  const handlePasswordCheckSuccess = () => {
    onSubmit(submitData, isEdit);
    setShowPasswordCheck(false);
  };

  return (
    <div>
      {showPasswordCheck ? (
        <CheckPasswordComponent
          onSuccess={handlePasswordCheckSuccess}
          setShowPasswordCheck={setShowPasswordCheck}
        />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md"
        >
          <h1 className="text-2xl font-bold mb-4">
            {isEdit ? "Update Hotel" : "Add New Hotel"}
          </h1>
          <div className="flex gap-10">
            <div>
              <MainInformation
                errors={errors}
                handleChange={handleChange}
                formData={formData}
                categories={categories}
                cities={cities}
              />
              <ImageInformation
                handleDetailPhotoUpload={handleDetailPhotoUpload}
                removeDetailPhoto={removeDetailPhoto}
                formData={formData}
                errors={errors}
                imagePreviews={imagePreviews}
                handleChange={handleChange}
                storedImages={storedImages}
              />
            </div>
            <div>
              <MoreInformation
                errors={errors}
                handleChange={handleChange}
                formData={formData}
                amenities={amenities}
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default HotelFormUI;
