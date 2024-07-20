import React from "react";

const HotelInfo = ({ hotel, reverseOrBookClick }) => {
  return (
    <div>
      <div className="flex justify-between ">
        <h1 className="text-2xl font-bold mb-4">{hotel.name}</h1>
        <button
          className="text-xl bg-purple-300 rounded-lg self-center ml-auto p-2 flex items-center"
          onClick={reverseOrBookClick}
        >
          Close
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <p className="mb-2">{hotel.desc}</p>
      <p className="mb-2 text-green-500">{hotel.distance}</p>
    </div>
  );
};

export default HotelInfo;
