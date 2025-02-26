const express = require("express");

const cors = require("cors");

const disponibilidadRoutes = require("./routes/disponibilidad.routes");
const tarifasRoutes = require("./routes/tarifas.routes");
const reservasRoutes = require("./routes/reservas.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/disponibilidad", disponibilidadRoutes);
app.use("/tarifas", tarifasRoutes);
app.use("/reservas", reservasRoutes);

module.exports = app;