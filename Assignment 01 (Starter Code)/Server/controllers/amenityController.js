const amenityService = require("../services/amenityService");

exports.getAllAmenities = async (req, res) => {
  try {
    const amenities = await amenityService.getAllAmenities();
    res.status(200).json(amenities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAmenity = async (req, res) => {
  try {
    const savedAmenity = await amenityService.createAmenity(req.body);
    res.status(201).json(savedAmenity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAmenity = async (req, res) => {
  try {
    const updatedAmenity = await amenityService.updateAmenity(
      req.params.id,
      req.body,
    );
    res.status(200).json(updatedAmenity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAmenity = async (req, res) => {
  try {
    await amenityService.deleteAmenity(req.params.id);
    res.status(204).json({ message: "Amenity deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
