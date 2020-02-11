const sequelize = require('./connection');
const { DataTypes } = require('sequelize');

const Formations = sequelize.define('Formations', {
    // Model attributes are defined here
    startedAt: {
      type: DataTypes.DATE
    
    },
    endedAt: {
      type: DataTypes.DATE
    }
  }, {
    // Other model options go here
  });

  Formations.sync()


  module.exports = Formations;