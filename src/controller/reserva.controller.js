"use strict";
const hoteles = require("../data/hoteles");

const realizarReserva = (req, res) => {
  const { idHotel, fecha, tipo, cantidad } = req.body;
  if (!idHotel || !fecha || !tipo || !cantidad) {
    return res.status(400).json({ error: "Faltan datos de la reserva" });
  }

  const hotel = hoteles.find((h) => h.id === idHotel);
  if (!hotel) {
    return res.status(404).json({ error: "Hotel no encontrado" });
  }

  const habitacion = hotel.habitaciones.find((h) => h.tipo === tipo);
  if (!habitacion) {
    return res.status(404).json({ error: "Tipo de habitación no encontrado" });
  }

  hotel.reserva.push({
    fecha,
    tipo,
    cantidad,
  });

  habitacion.disponibles -= cantidad;

  res.json({ mensaje: "Reserva realizada correctamente" });
};

module.exports = { realizarReserva };
