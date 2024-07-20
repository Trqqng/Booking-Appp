import React from "react";

const CityCard = ({ city, isVisible, specialCard }) => {
  return (
    <div
      className={`relative transition-all duration-500 ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-32 opacity-0"
      } ${specialCard ? "row-span-2 h-full" : ""}`}
    >
      <img
        src={city.image}
        alt={city.name}
        className={`w-96 ${
          specialCard ? "h-full " : " h-64 sm:h-80 md:h-44 lg:h-56 object-cover"
        } rounded-lg transition-all duration-500`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 rounded-lg transition-all duration-500"></div>
      <div className="absolute top-0 left-0 p-4 transition-all duration-500">
        <p className="bg-purple-500 text-white px-2 py-1 rounded">
          {city.name.toUpperCase()}
        </p>
        <p className="bg-black text-white px-2 py-1 rounded mt-2">
          {city.hotels.length} Hotels
        </p>
      </div>
      <div className="absolute bottom-0 left-0 p-4 transition-all duration-500">
        <button className="bg-green-500 text-white p-2 rounded-full transition-all duration-500">
          +
        </button>
      </div>
    </div>
  );
};

export default CityCard;
