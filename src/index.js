import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db.js';
import vehiculoRoutes from './routes/vehiculos.routes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(vehiculoRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('📦 Conectado correctamente a la base de datos PostgreSQL');
    await sequelize.sync(); // crea tabla si no existe

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error de conexión con la base de datos:', error);
    process.exit(1);
  }
})();

