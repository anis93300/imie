const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('imie', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql' /* one of | 'mariadb' | 'postgres' | 'mssql' */
  });


  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const User = sequelize.define('Formations', {
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