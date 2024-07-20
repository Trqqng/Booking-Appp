import React from "react";

const MoreInformation = ({ errors, formData, handleChange }) => {
  return (
    <div>
      <div>
        <label className="block text-gray-700">Description</label>
        <input
          type="text"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="King size bed, 1 bathroom"
        />
        {errors.desc && <p className="text-red-500 text-sm">{errors.desc}</p>}
      </div>
      <div>
        <label className="block text-gray-700">Size</label>
        <input
          type="number"
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Room size in m2"
        />
        {errors.size && <p className="text-red-500 text-sm">{errors.size}</p>}
      </div>
      <div>
        <label className="block text-gray-700">Bed Type</label>
        <select
          name="bedType"
          value={formData.bedType}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Select bed type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Queen">Queen</option>
          <option value="King">King</option>
        </select>
        {errors.bedType && (
          <p className="text-red-500 text-sm">{errors.bedType}</p>
        )}
      </div>
      <div>
        <label className="block text-gray-700">View</label>
        <select
          name="view"
          value={formData.view}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Select view</option>
          <option value="City">City</option>
          <option value="Garden">Garden</option>
          <option value="Sea">Sea</option>
        </select>
        {errors.view && <p className="text-red-500 text-sm">{errors.view}</p>}
      </div>
    </div>
  );
};

export default MoreInformation;
