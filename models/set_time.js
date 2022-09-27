'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
       static associate(Bands, Event, Stage) {
      // define association here
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
    
      SetTime.belongsTo(Event,{
        foreignKey: "event_id",
        as: "event"
      })
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "event"
      })
    }
  }
  Set_Time.init({
    stage_events_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    event_id: {
      type:DataTypes.SMALLINT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName: 'set_time',
    timestamps: false
  });
  return Set_Time;
};