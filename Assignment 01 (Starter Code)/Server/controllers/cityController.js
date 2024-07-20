const cityService = require("../services/cityService");

exports.getAllCities = async (req, res) => {
  try {
    const cities = await cityService.getAllCities();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCity = async (req, res) => {
  try {
    const savedCity = await cityService.createCity(req.body);
    res.status(201).json(savedCity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCity = async (req, res) => {
  try {
    const updatedCity = await cityService.updateCity(req.params.id, req.body);
    res.status(200).json(updatedCity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCity = async (req, res) => {
  try {
    await cityService.deleteCity(req.params.id);
    res.status(204).json({ message: "City deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
