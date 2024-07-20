import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import HotelFormUI from "../components/HotelPageLayout/HotelFormUI";
import { createHotel, updateHotel } from "../features/hotel/hotelThunk"; // Ensure updateHotel is imported
import cityService from "../services/cityService";
import amenityService from "../services/amenityService";
import categoryService from "../services/categoryService";

const arrayToFileList = (files) => {
  const dataTransfer = new DataTransfer();
  files.forEach((file) => {
    if (file instanceof File) {
      dataTransfer.items.add(file);
    } else {
      console.warn("Skipping non-File item:", file);
    }
  });
  return dataTransfer.files;
};

const HotelPage = () => {
  const data = useLoaderData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (formData, isEdit) => {
    const formDataToSend = new FormData();
    console.log(formData);
    for (const key in formData) {
      if (
        (key === "detailPhoto" || key === "photos") &&
        Array.isArray(formData[key])
      ) {
        const fileList = arrayToFileList(formData[key]);
        Array.from(fileList).forEach((file) => {
          formDataToSend.append(key, file);
        });
      } else if (formData[key] instanceof FileList) {
        Array.from(formData[key]).forEach((file) => {
          formDataToSend.append(key, file);
        });
      } else if (key !== "rooms" && key !== "reviews") {
        formDataToSend.append(key, formData[key]);
      }
    }

    console.log(formDataToSend);
    if (isEdit) {
      dispatch(updateHotel(formDataToSend))
        .then((action) => {
          if (updateHotel.fulfilled.match(action)) {
            navigate("/");
          } else {
            console.error("Update failed:", action.error);
          }
        })
        .catch((error) => console.error("Update failed:", error));
    } else {
      dispatch(createHotel(formDataToSend))
        .then((action) => {
          if (createHotel.fulfilled.match(action)) {
            navigate("/");
          } else {
            console.error("Creation failed:", action.error);
          }
        })
        .catch((error) => console.error("Creation failed:", error));
    }
  };

  return (
    <HotelFormUI
      cities={data.cities}
      categories={data.categories}
      amenities={data.amenities}
      onSubmit={handleFormSubmit}
    />
  );
};

export default HotelPage;

export async function hotelPageLoader() {
  try {
    const [cities, categories, amenities] = await Promise.all([
      cityService.getAllCities(),
      categoryService.getAllCategories(),
      amenityService.getAllAmenities(),
    ]);

    return {
      cities,
      categories,
      amenities,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
