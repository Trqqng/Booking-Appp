import React from "react";

const ImageInformation = ({
  handleDetailPhotoUpload,
  formData,
  errors,
  imagePreviews,
  handleChange,
  removeDetailPhoto,
  storedImages,
}) => {
  console.log(storedImages);
  return (
    <div>
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
          {storedImages.detailPhoto.map((src, index) => (
            <div key={`stored-${index}`} className="relative">
              <img
                src={src}
                alt={`Stored ${index}`}
                className="w-24 h-24 object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => removeDetailPhoto(index, true)}
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
          {imagePreviews.detailPhoto.map((src, index) => (
            <div key={`new-${index}`} className="relative">
              <img
                src={src}
                alt={`New ${index}`}
                className="w-24 h-24 object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => removeDetailPhoto(index, false)}
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
          {storedImages.detailPhoto.length + imagePreviews.detailPhoto.length}{" "}
          of 6 photos selected
        </p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Photos</label>
        <input
          type="file"
          name="photos"
          multiple
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
        <div className="mt-4 flex flex-wrap gap-4">
          {storedImages.photos.map((src, index) => (
            <img
              key={`stored-${index}`}
              src={src}
              alt={`Stored ${index}`}
              className="w-24 h-24 object-cover rounded-md"
            />
          ))}
          {imagePreviews.photos.map((src, index) => (
            <img
              key={`new-${index}`}
              src={src}
              alt={`New ${index}`}
              className="w-24 h-24 object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageInformation;
