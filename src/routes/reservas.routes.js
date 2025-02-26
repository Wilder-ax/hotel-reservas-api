'use strict';

const express = require('express');
const { realizarReserva } = require('../controller/reserva.controller');

const router = express.Router();

router.post('/', realizarReserva);

module.exports = router;