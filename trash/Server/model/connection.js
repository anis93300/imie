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
 
module.exports = sequelize;
 