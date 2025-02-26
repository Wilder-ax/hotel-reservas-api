"use strict";

const express = require("express");
const { getTarifas } = require("../controller/tarifas.controller");

const router = express.Router();
router.get("/", getTarifas);

module.exports = router;
