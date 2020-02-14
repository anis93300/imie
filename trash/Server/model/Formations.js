const sequelize = require('./connection');
const { DataTypes } = require('sequelize');


const Formations = sequelize.define('Formations', {
    // Model attributes are defined here
    startedAt: {
      type: DataTypes.DATE
    
    },
    endedAt: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    }
  }, {
    // Other model options go here
  });

  Formations.drop().then(()=>{
    Formations.sync();
  })



  module.exports = Formations;