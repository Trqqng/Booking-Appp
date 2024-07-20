const express = require("express");
const router = express.Router();
const amenityController = require("../controllers/amenityController");

// Route CRUD cho Amenity
router.get("/", amenityController.getAllAmenities);
router.post("/", amenityController.createAmenity);
router.put("/:id", amenityController.updateAmenity);
router.delete("/:id", amenityController.deleteAmenity);

module.exports = router;
