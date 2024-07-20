import React from "react";

const MoreInformation = ({ errors, handleChange, formData, amenities }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Free Cancel
        </label>
        <select
          name="free_cancel"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.featured}
          onChange={handleChange}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Featured
        </label>
        <select
          name="featured"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.featured}
          onChange={handleChange}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="1234567890"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder="hotel@example.com"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Website
        </label>
        <input
          type="text"
          name="website"
          placeholder="http://example.com"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.website}
          onChange={handleChange}
        />
        {errors.website && <p className="text-red-500">{errors.website}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Amenities
        </label>
        {amenities.map((amenity) => (
          <div key={amenity._id} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="amenities"
              value={amenity._id}
              className="mr-2"
              onChange={handleChange}
              checked={
                formData.selectedAmenities &&
                formData.selectedAmenities.includes(amenity._id)
              }
            />
            <span>{amenity.name}</span>
          </div>
        ))}
        {errors.selectedAmenities && (
          <p className="text-red-500">{errors.selectedAmenities}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Check-In Time
        </label>
        <input
          type="text"
          name="checkInTime"
          placeholder="14:00"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.checkInTime}
          onChange={handleChange}
        />
        {errors.checkInTime && (
          <p className="text-red-500">{errors.checkInTime}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Check-Out Time
        </label>
        <input
          type="text"
          name="checkOutTime"
          placeholder="12:00"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.checkOutTime}
          onChange={handleChange}
        />
        {errors.checkOutTime && (
          <p className="text-red-500">{errors.checkOutTime}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Pet Policy
        </label>
        <input
          type="text"
          name="petPolicy"
          placeholder="No pets allowed"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.petPolicy}
          onChange={handleChange}
        />
        {errors.petPolicy && <p className="text-red-500">{errors.petPolicy}</p>}
      </div>
    </div>
  );
};

export default MoreInformation;
