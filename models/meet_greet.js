'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
        static associate({Band, Event}) {
      Meet_Greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      Meet_Greet.belongsTo(Event,{
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  Meet_Greet.init({
    event_id: {
      type:DataTypes.SMALLINT,
      primaryKey:true,
      autoIncrement:true,
    },
    band_id: {
      type:DataTypes.SMALLINT,
      allowNull: false,
    },
    meet_start_time: {
      type:DataTypes.DATE,
      allowNull: false,
    },
    meet_end_time: {
      type:DataTypes.DATE,
      allowNull: false,
    },
    meet_greet_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_greet',
    timestamps: false
  });
  return Meet_Greet;
};