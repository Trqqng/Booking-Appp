import React from "react";
import AmenitiesCard from "../HotelCard/AmenityCard";

const SearchHotelCard = ({ hotel, onSeeAvailabilityClick }) => {
  return (
    <div className="flex flex-col lg:flex-row border rounded-lg shadow-lg mb-6 lg:w-full sm:p-2 sm:mb-4 transition-all duration-500 bg-white">
      <div className="relative w-full lg:w-1/3 flex-shrink-0 sm:h-auto lg:h-auto transition-all duration-500">
        <img
          src={hotel.photos[0]}
          alt={hotel.name}
          className="rounded-lg w-full h-32 lg:h-full object-cover "
        />

        <div
          className="text-sm text-white italic m-1 p-1 rounded-lg font-bold absolute top-1 left-1"
          style={{ backgroundColor: "#7643ea" }}
        >
          From ${hotel.cheapestPrice}
        </div>
      </div>
      <div className="flex-grow mx-5 sm:mx-1 sm:pl-0 lg:pl-4 flex flex-col justify-between transition-all duration-500">
        <div>
          <div className="flex justify-between items-center sm:mb-1 mt-2 lg:mt-0 transition-all duration-500">
            <h2 className="text-xl font-bold sm:text-base transition-all duration-500">
              {hotel.name}
            </h2>
            <span className="bg-yellow-300 text-black px-2 py-1 rounded-lg sm:text-xs transition-all duration-500">
              {hotel.rating}
            </span>
          </div>
          <div className="text-gray-600 text-sm italic sm:text-xs sm:mb-1 transition-all duration-500">
            {hotel.distance}
          </div>
          <div className="w-full mt-2 text-sm text-gray-500 italic sm:text-xs sm:mt-1 transition-all duration-500">
            {hotel.desc}
          </div>
          <div className="mt-2 text-red-500 font-semibold sm:text-xs sm:mt-1 transition-all duration-500">
            Free cancellation
          </div>
          <div className="mt-2 text-sm text-gray-500 sm:text-xs sm:mt-1 transition-all duration-500">
            You can cancel later, so lock in this great price today!
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-0.1 sm:gap-y-1 lg:mt-4 transition-all duration-500">
          {hotel.amenities.map((amenity) => (
            <AmenitiesCard key={amenity._id} amenity={amenity} />
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center sm:mt-2 transition-all duration-500">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg sm:px-2 sm:py-1 transition-all duration-500"
            style={{ backgroundColor: "#7643ea" }}
            onClick={() => onSeeAvailabilityClick(hotel._id)}
          >
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHotelCard;
