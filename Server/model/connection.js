const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('imie', 'root', 'anahooua', {
    host: 'localhost',
    dialect: 'mysql' /* one of | 'mariadb' | 'postgres' | 'mssql' */
  });



     sequelize.authenticate().then(()=>{
      console.log('Connection has been established successfully.');
    }).catch(err=>{
      console.error('Unable to connect to the database:', err);

    })
 

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