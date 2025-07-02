const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Inicializar Express
const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas
const entradaRoute = require('./routes/entrada.route');
const salidaRoute = require('./routes/salida.route');
const corteCajaRoute = require('./routes/corteCaja.route');

// Usar rutas
app.use('/entrada', entradaRoute);
app.use('/salida', salidaRoute);
app.use('/corte', corteCajaRoute);

// Puerto desde archivo .env o 3000 por defecto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});

