"use strict";

const hoteles = require("../data/hoteles");

const getDisponibilidad = (req, res) => {
  const { fecha } = req.query;
  if (!fecha) {
    return res.status(400).json("Debe proporsionar una fecha!");
  }

  const disponibles = hoteles.map((hotel) => {
    const habitacionesOcupadas = hotel.reserva
      .filter((r) => r.fecha === fecha)
      .reduce((acc, r) => acc + r.cantidad, 0);
    return {
      nombre: hotel.nombre,
      capacidadDisponible: hotel.capacidadMaxima - habitacionesOcupadas,
      habitaciones: hotel.habitaciones,
    };
  });

  res.json(disponibles);
};

module.exports = { getDisponibilidad };
