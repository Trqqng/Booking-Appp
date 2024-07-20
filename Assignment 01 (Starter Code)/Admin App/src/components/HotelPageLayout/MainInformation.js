import React from "react";

const MainInformation = ({
  errors,
  handleChange,
  formData,
  categories,
  cities,
}) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Name</label>
        <input
          type="text"
          name="name"
          placeholder="My Hotel"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Type</label>
        <select
          name="type"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="">Select Type</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.type && <p className="text-red-500">{errors.type}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">City</label>
        <select
          name="city"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.city}
          onChange={handleChange}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city._id} value={city._id}>
              {city.name}
            </option>
          ))}
        </select>
        {errors.city && <p className="text-red-500">{errors.city}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Address
        </label>
        <input
          type="text"
          name="address"
          placeholder="123 Street, City"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Distance from City Center
        </label>
        <input
          type="text"
          name="distance"
          placeholder="500"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.distance}
          onChange={handleChange}
        />
        {errors.distance && <p className="text-red-500">{errors.distance}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Description
        </label>
        <textarea
          name="desc"
          placeholder="Description"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.desc}
          onChange={handleChange}
        />
        {errors.desc && <p className="text-red-500">{errors.desc}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          name="title"
          placeholder="The best Hotel"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Cheapest Price
        </label>
        <input
          type="number"
          name="cheapestPrice"
          placeholder="100"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.cheapestPrice}
          onChange={handleChange}
        />
        {errors.cheapestPrice && (
          <p className="text-red-500">{errors.cheapestPrice}</p>
        )}
      </div>
    </div>
  );
};

export default MainInformation;
