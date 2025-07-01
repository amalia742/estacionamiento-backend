import express from 'express';
import {
  obtenerVehiculos,
  registrarEntrada,
  registrarSalida
} from '../controllers/vehiculo.controller.js';

const router = express.Router();

router.get('/vehiculos', obtenerVehiculos);
router.post('/entrada', registrarEntrada);
router.post('/salida', registrarSalida);

export default router;
