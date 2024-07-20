import React from "react";

const MainInformation = ({ errors, hotels, formData, handleChange }) => {
  return (
    <div>
      <div>
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="2 bed room"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="100"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Max People</label>
          <input
            type="number"
            name="maxPeople"
            value={formData.maxPeople}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="2"
          />
          {errors.maxPeople && (
            <p className="text-red-500 text-sm">{errors.maxPeople}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Rooms</label>
          <input
            type="text"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="give comma between room numbers"
          />
        </div>
        <div>
          <label className="block text-gray-700">Choose a hotel</label>
          <select
            name="hotel"
            value={formData.hotel}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select a hotel</option>
            {hotels.map((hotel) => (
              <option key={hotel._id} value={hotel._id}>
                {hotel.name}
              </option>
            ))}
          </select>
          {errors.hotel && (
            <p className="text-red-500 text-sm">{errors.hotel}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainInformation;
