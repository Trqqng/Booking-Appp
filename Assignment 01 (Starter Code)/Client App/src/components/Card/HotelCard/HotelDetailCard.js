// HotelDetailCard.js
import React from "react";

const HotelDetailCard = ({ hotel, reverseOrBookClick }) => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-xl text-white">{hotel.name}</h2>
        <div className="text-white">{hotel.address}</div>
        <div className="text-sm text-green-500">{hotel.distance}</div>
      </div>

      <div className="flex justify-center my-6">
        <div className="grid grid-cols-3 gap-2 w-3/4">
          {hotel.detailPhoto.map((photo, index) => (
            <img
              src={photo}
              alt={`hotel-detail-${index}`}
              className="h-auto w-auto"
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex mt-6 mx-10 gap-5">
        <div>
          <h2 className="text-xl text-white">{hotel.name}</h2>
          <div className="text-gray-500 italic text-md lg:w-3/4">
            {hotel.desc}
          </div>
        </div>
        <div>
          <button
            className="text-white text-[0.8rem] flex flex-col p-3 bg-purple-500 w-40 rounded-lg"
            onClick={reverseOrBookClick}
          >
            <div>From {hotel.cheapestPrice}$/night</div>
            <div>Reserve or Book Now!</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HotelDetailCard;
