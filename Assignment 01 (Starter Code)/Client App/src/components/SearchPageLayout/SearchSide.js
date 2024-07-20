import React from "react";

const SearchSide = ({ cities, categories, onCityChange, onCategoryChange }) => {
  return (
    <div
      className="p-8 lg:w-full h-full"
      style={{ backgroundColor: "rgb(118, 67, 234)" }}
    >
      <h2 className="text-white text-sm font-bold mb-6">
        What are you looking for?
      </h2>
      <div className="flex mb-6">
        <button className="flex-1 py-2 text-xs text-white bg-purple-800 rounded-l-lg">
          PLACES
        </button>
        <button className="flex-1 py-2 text-xs text-white bg-purple-500 rounded-r-lg">
          EVENTS
        </button>
      </div>
      <div className="space-y-4 mb-6">
        <select
          className="w-full p-3 text-xs text-gray-700 bg-white rounded-lg shadow focus:outline-none focus:shadow-outline"
          onChange={(e) => onCityChange(e.target.value)}
        >
          <option value="">Your Destinations</option>
          {cities.map((city) => (
            <option key={city._id} value={city._id}>
              {city.name}
            </option>
          ))}
        </select>
        <select
          className="w-full p-3 text-xs text-gray-700 bg-white rounded-lg shadow focus:outline-none focus:shadow-outline"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <select className="w-full p-3 text-xs text-gray-700 bg-white rounded-lg shadow focus:outline-none focus:shadow-outline">
          <option>Price Range</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select className="w-full p-3 text-xs text-gray-700 bg-white rounded-lg shadow focus:outline-none focus:shadow-outline">
          <option>Proximity</option>
          <option value="near">Near</option>
          <option value="far">Far</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <label className="flex items-center text-white text-xs">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
          />
          <span>Accepts Credit Cards</span>
        </label>
        <label className="flex items-center text-white text-xs">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
          />
          <span>Bike Parking</span>
        </label>
        <label className="flex items-center text-white text-xs">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
          />
          <span>Wireless Internet</span>
        </label>
        <label className="flex items-center text-white text-xs">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
          />
          <span>Reservations</span>
        </label>
        <label className="flex items-center text-white text-xs">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
          />
          <span>Private Parking</span>
        </label>
        <label className="flex items-center text-white text-xs">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
          />
          <span>Smoking Area</span>
        </label>
        <label className="flex items-center text-white text-xs">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
          />
          <span>Wheelchair Accessible</span>
        </label>
        <label className="flex items-center text-white text-xs">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
          />
          <span>Coupons</span>
        </label>
      </div>
      <button className="w-full py-3 text-xs text-white bg-white rounded-lg text-purple-600 flex items-center justify-center">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
        Search
      </button>
    </div>
  );
};

export default SearchSide;
