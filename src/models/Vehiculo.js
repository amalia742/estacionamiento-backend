
import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Vehiculo = sequelize.define('Vehiculo', {
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horaEntrada: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  horaSalida: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

export default Vehiculo;
