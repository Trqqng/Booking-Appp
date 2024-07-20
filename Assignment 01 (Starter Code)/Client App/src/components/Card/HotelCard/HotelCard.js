import React from "react";

const HotelCard = ({ hotel }) => {
  console.log("hotel card", hotel);
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-purple-800">
      <img
        src={hotel.photos}
        alt={hotel.name}
        className="w-full h-48 object-cover"
        onError={() => console.error("Error")}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
        <p className="text-gray-600">{hotel.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <div className="absolute top-4 left-4">
            <span className="text-white font-bold bg-purple-950 p-1 rounded">
              ${hotel.cheapestPrice}/night
            </span>
            <span className="text-black bg-yellow-400 p-1 rounded ml-2">
              {hotel.rating}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </span>
          </div>

          <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-800">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
