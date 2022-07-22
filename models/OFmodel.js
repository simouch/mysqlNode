//import { Sequelize, Model, DataTypes } from 'sequelize';
  module.exports = (sequelize, DataTypes) => {
    let of = sequelize.define('ofabrication', {
        IDOFabrication: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      OFAbrication: {
        type: DataTypes.STRING,
        
      },
      
      },{});

    return of;
  };
