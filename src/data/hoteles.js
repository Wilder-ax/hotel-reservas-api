const hoteles = [
  {
    id: 1,
    nombre: "Barranquilla",
    capacidadMaxima: 33,
    habitaciones: [
      { tipo: "estandar", disponibles: 30, tarifaAlta: 100, tarifaBaja: 80 },
      { tipo: "premium", disponibles: 3, tarifaAlta: 150, tarifaBaja: 120 },
    ],
    reserva: [
      { fecha: "2021-10-10", cantidad: 2 },
      { fecha: "2021-10-11", cantidad: 1 },
    ],
  },
  {
    id: 2,
    nombre: "Cali",
    capacidadMaxima: 22,
    habitaciones: [
      { tipo: "VIP", disponibles: 2, tarifaAlta: 100, tarifaBaja: 80 },
      { tipo: "premium", disponibles: 20, tarifaAlta: 150, tarifaBaja: 120 },
    ],
    reserva: [
      { fecha: "2021-10-10", cantidad: 2 },
      { fecha: "2021-10-11", cantidad: 1 },
    ],
  },
  {
    id: 3,
    nombre: "Cartagena",
    capacidadMaxima: 11,
    habitaciones: [
      { tipo: "estandar", disponibles: 10, tarifaAlta: 100, tarifaBaja: 80 },
      { tipo: "premium", disponibles: 1, tarifaAlta: 150, tarifaBaja: 120 },
    ],
    reserva: [
      { fecha: "2021-10-10", cantidad: 2 },
      { fecha: "2021-10-11", cantidad: 1 },
    ],
  },
  {
    id: 4,
    nombre: "Bogota",
    capacidadMaxima: 42,
    habitaciones: [
      { tipo: "estandar", disponibles: 20, tarifaAlta: 100, tarifaBaja: 80 },
      { tipo: "premium", disponibles: 20, tarifaAlta: 150, tarifaBaja: 120 },
      { tipo: "VIP", disponibles: 2, tarifaAlta: 150, tarifaBaja: 120 },
    ],
    reserva: [
      { fecha: "2021-10-10", cantidad: 2 },
      { fecha: "2021-10-11", cantidad: 1 },
    ],
  },
];

module.exports = hoteles;
