class Hotel {
  constructor(id, nombre, capacidadMaxima, habitaciones) {
    this.id = id;
    this.nombre = nombre;
    this.capacidadMaxima = capacidadMaxima;
    this.habitaciones = habitaciones;
    this.reservas = [];
  }

  agregarReserva(fecha, tipo, cantidad) {
    this.reservas.push({ fecha, tipo, cantidad });
  }
}

module.exports = Hotel;
