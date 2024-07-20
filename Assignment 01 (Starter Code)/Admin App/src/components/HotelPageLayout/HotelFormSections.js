import React from "react";

export const GeneralInfo = ({
  formData,
  errors,
  categories,
  cities,
  handleChange,
}) => (
  <>
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
      <label className="block text-gray-700 font-semibold mb-2">Address</label>
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
  </>
);

export const DetailPhotoUpload = ({
  formData,
  errors,
  imagePreviews,
  handleDetailPhotoUpload,
  removeDetailPhoto,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-2">
      Detail Photos (Max 6)
    </label>
    <div className="mb-2">
      <input
        type="file"
        name="detailPhoto"
        multiple
        className="hidden"
        id="detail-photo-upload"
        onChange={handleDetailPhotoUpload}
        accept="image/*"
      />
      <label
        htmlFor="detail-photo-upload"
        className={`inline-flex items-center px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${
          formData.detailPhoto.length >= 6
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Upload Detail Photos
      </label>
    </div>
    {errors.detailPhoto && (
      <p className="text-red-500 mt-1">{errors.detailPhoto}</p>
    )}
    <div className="mt-4 flex flex-wrap gap-4">
      {imagePreviews.detailPhoto.map((src, index) => (
        <div key={index} className="relative">
          <img
            src={src}
            alt={`Detail Preview ${index}`}
            className="w-24 h-24 object-cover rounded-md"
          />
          <button
            type="button"
            onClick={() => removeDetailPhoto(index)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
    <p className="mt-2 text-sm text-gray-500">
      {formData.detailPhoto.length} of 6 photos selected
    </p>
  </div>
);

export const AmenitiesSection = ({
  amenities,
  formData,
  errors,
  handleChange,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-2">Amenities</label>
    {amenities.map((amenity) => (
      <div key={amenity._id} className="flex items-center mb-2">
        <input
          type="checkbox"
          name="amenities"
          value={amenity._id}
          className="mr-2"
          onChange={handleChange}
        />
        <span>{amenity.name}</span>
      </div>
    ))}
    {errors.selectedAmenities && (
      <p className="text-red-500">{errors.selectedAmenities}</p>
    )}
  </div>
);

export const ContactInfo = ({ formData, errors, handleChange }) => (
  <>
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
      <label className="block text-gray-700 font-semibold mb-2">Website</label>
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
  </>
);

export const AdditionalInfo = ({ formData, errors, handleChange }) => (
  <>
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
      <label className="block text-gray-700 font-semibold mb-2">Featured</label>
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
  </>
);
