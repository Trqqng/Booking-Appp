import React, { useEffect, useState } from "react";
import HotelCard from "../Card/HotelCard/HotelCard";

const HotelList = ({ hotels }) => {
  const [topHotels, setTopHotels] = useState([]);

  useEffect(() => {
    if (hotels && hotels.length > 0) {
      const sortedHotels = [...hotels].sort((a, b) => b.rating - a.rating);
      setTopHotels(sortedHotels.slice(0, 3));
    }
  }, [hotels]);

  return (
    <div
      className="container mx-auto min-w-full pt-10 pb-10"
      style={{ backgroundColor: "#341a79" }}
    >
      <h2 className="text-3xl text-center text-white">Featured Destinations</h2>
      <p className="text-center text-white mb-20">Editor's pick</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topHotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
