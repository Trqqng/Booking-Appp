const { Types } = require("mongoose");

const processImages = (req) => {
  const detailPhotoUrls = req.files.detailPhoto
    ? req.files.detailPhoto.map(
        (file) =>
          `${req.protocol}://${req.get("host")}/images/${file.filename}`,
      )
    : [];

  const photoUrls = req.files.photos
    ? req.files.photos.map(
        (file) =>
          `${req.protocol}://${req.get("host")}/images/${file.filename}`,
      )
    : [];

  return { detailPhotoUrls, photoUrls };
};

const processAmenities = (selectedAmenities) => {
  return selectedAmenities.split(",").map((amenity) => {
    return new Types.ObjectId(amenity.trim());
  });
};

const removeUndefinedProperties = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
  return obj;
};

module.exports = {
  processImages,
  processAmenities,
  removeUndefinedProperties,
};
