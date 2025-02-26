'use strict';

const hoteles = require("../data/hoteles");

const getTarifas = (req, res) => {
  const { idHotel, temporada, tipo } = req.query;
  if (!idHotel || !temporada || !tipo) {
    return res
      .status(400)
      .json("Debe proporsionar un idHotel, temporada y tipo!");
  }
  const hotel = hoteles.find((h) => h.id == idHotel);
  if (!hotel) {
    return res.status(404).json("Hotel no encontrado!");
  }
  const habitacion = hotel.habitaciones.find((h) => h.tipo === tipo);
  if (!habitacion) {
    return res.status(404).json("Tipo de habitacion no encontrado!");
  }
  const tarifa =
    temporada === "alta" ? habitacion.tarifaAlta : habitacion.tarifaBaja;
  res.json({ hotel: hotel.nombre, tipo, tarifa });
};

module.exports = { getTarifas };