import React, { useState, useEffect } from "react";
import HomePageUI from "./HomePageUI";
import CityList from "./CityList";
import HotelList from "./HotelList";
import CategoryList from "./CategoryList";
import ReviewList from "./ReviewList";
import SelectCardList from "./SelectCardList";
import Navbar from "../Layout/Navbar";

const HomePageLayout = ({ cities, hotels, categories, users }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      <HomePageUI />
      <div className="container relative text-center z-10">
        <SelectCardList className="sm:absolute sm:w-screen sm:bottom-80 flex " />
        <div className="pb-24 pt-10 sm:pt-36 sm:w-screen">
          <div className="mb-10">
            <h2 className="text-4xl font-bold">DISCOVER YOUR CITY WITH</h2>
            <h2 className="text-4xl font-bold text-purple-600">BOOKING APP</h2>
          </div>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Fusce quis tempus elit. Sed efficitur tortor
            neque, vitae aliquet urna varius sit amet. Ut rhoncus, nunc nec
            tincidunt volutpat, ex libero.
          </p>
        </div>
      </div>
      <CityList cities={cities} />
      <CategoryList categories={categories} />
      <HotelList hotels={hotels} />
      <ReviewList users={users} />
    </div>
  );
};

export default HomePageLayout;
