import React, { useState, useEffect } from "react";
import SearchHotelList from "../SearchPageLayout/SearchHotelList";
import SearchSide from "./SearchSide";
import NoHotelsFound from "./NoHotelsFound";
import Navbar from "../Layout/Navbar";

const SearchPageUI = ({ hotels, categories, cities }) => {
  const [selectedCityId, setSelectedCityId] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 810);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCityChange = (cityId) => {
    setSelectedCityId(cityId);
    filterHotels(cityId, selectedCategoryId);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    filterHotels(selectedCityId, categoryId);
  };

  const filterHotels = (cityId, categoryId) => {
    let filtered = hotels;
    if (cityId) {
      filtered = filtered.filter((hotel) => hotel.city._id === cityId);
    }
    if (categoryId) {
      filtered = filtered.filter((hotel) => hotel.type._id === categoryId);
    }
    setFilteredHotels(filtered);
  };

  const bgImage = "url('/img/bg-img/hero-1.jpg')";
  const bgColor = "rgba(14, 2, 35, 0.6)";

  return (
    <div
      className={`relative w-full  ${
        isSmallScreen ? "h-auto" : "h-full"
      } overflow-hidden pb-20`}
    >
      <div
        className="absolute inset-0 bg-center bg-cover "
        style={{ backgroundImage: bgImage }}
      ></div>
      <div
        className="absolute inset-0 bg-opacity-50"
        style={{ backgroundColor: bgColor }}
      ></div>
      <div className="relative ">
        <Navbar />
        <div className="container mx-auto flex flex-col gap-5 md:flex-row md:gap-10 lg:gap-5 mt-24 h-full">
          <div className="flex-shrink-0 md:w-[20rem] lg:w-1/3 h-full">
            <SearchSide
              cities={cities}
              categories={categories}
              onCityChange={handleCityChange}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          <div>
            <div className="w-full h-screen overflow-auto">
              {filteredHotels.length > 0 ? (
                <SearchHotelList hotels={filteredHotels} />
              ) : (
                <NoHotelsFound className="flex flex-col h-full justify-center my-40" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPageUI;
