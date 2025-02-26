"use strict";

const express = require("express");
const {
  getDisponibilidad,
} = require("../controller/disponibilidad.controller");

const router = express.Router();
router.get("/", getDisponibilidad);

module.exports = router;
