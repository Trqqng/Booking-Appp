import React from "react";
import SearchHotelCard from "../Card/HotelCard/SearchHotelCard";
import { useNavigate } from "react-router-dom";

const SearchHotelList = ({ hotels }) => {
  const navigate = useNavigate();
  const handleSeeAvailability = (hotelId) => {
    navigate(`/hotel/${hotelId}`);
  };
  return (
    <div>
      {hotels.map((hotel, index) => (
        <SearchHotelCard
          key={index}
          hotel={hotel}
          onSeeAvailabilityClick={handleSeeAvailability}
        />
      ))}
    </div>
  );
};

export default SearchHotelList;
