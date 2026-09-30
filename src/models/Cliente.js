const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define ('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  telefone: {
    type: DataTypes.STRING,
    allowNull: false, // Campo extra para contato direto da oficina [3]
  },
  modelo_veiculo: {
    type: DataTypes.STRING,
    allowNull: false, // Identifica o modelo do carro (ex: Civic, Gol) [3]
  },
  placa_veiculo: {
    type: DataTypes.STRING,
    allowNull: false, // Identifica o veículo de forma única na oficina [3]
  }
});


module.exports = Cliente;