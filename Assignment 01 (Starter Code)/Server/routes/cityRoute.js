const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityController");

// Route CRUD cho City
router.get("/", cityController.getAllCities);
router.post("/", cityController.createCity);
router.put("/:id", cityController.updateCity);
router.delete("/:id", cityController.deleteCity);

module.exports = router;
