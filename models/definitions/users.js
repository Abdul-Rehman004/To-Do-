
const { DataTypes } = require('sequelize');
const  sequelize  = require('../../dbConnection');


const Users = sequelize.define('Users', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
  tableName: 'users',
});

module.exports = { Users };
