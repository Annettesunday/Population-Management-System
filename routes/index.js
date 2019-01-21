const express = require("express");
const location = require("../controllers/location");
const validation = require("../middlewares/validation");

const Route = express.Router();

Route.post(
  "/location",
  validation.validateName,
  validation.validateMale,
  validation.validateFemale,
  location.add
);

Route.get("/locations", location.findAll);
Route.get("/location/:name", location.get);

Route.delete("/location/:name", location.delete);

Route.put(
  "/location/:name",
  validation.validateName,
  validation.validateMale,
  validation.validateFemale,
  location.update
);

module.exports = Route;
