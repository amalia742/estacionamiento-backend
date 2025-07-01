import Vehiculo from '../models/Vehiculo.js';

export const obtenerVehiculos = async (req, res) => {
  const vehiculos = await Vehiculo.findAll({ where: { horaSalida: null } });
  res.json(vehiculos);
};

export const registrarEntrada = async (req, res) => {
  const { placa, modelo } = req.body;
  try {
    const vehiculoExistente = await Vehiculo.findOne({ where: { placa, horaSalida: null } });
    if (vehiculoExistente) {
      return res.status(400).json({ error: 'El vehículo ya está registrado' });
    }

    const nuevoVehiculo = await Vehiculo.create({ placa, modelo });
    res.json(nuevoVehiculo);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar entrada' });
  }
};

export const registrarSalida = async (req, res) => {
  const { placa } = req.body;
  try {
    const vehiculo = await Vehiculo.findOne({ where: { placa, horaSalida: null } });
    if (!vehiculo) {
      return res.status(404).json({ error: 'Vehículo no encontrado o ya salió' });
    }

    vehiculo.horaSalida = new Date();
    await vehiculo.save();
    res.json({ message: 'Salida registrada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar salida' });
  }
};
