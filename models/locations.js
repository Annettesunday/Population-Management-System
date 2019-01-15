'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
          args: true,
          msg: 'Location already exits'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name cannot be empty',
        },
      },
    },
    male: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Male population number cannot be empty',
        },
        isInt: {
            args: true,
            msg: 'Please input a valid number',
        },
      },
    },
    female: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Female population number cannot be empty',
        },
        isInt: {
          args: true,
          msg: 'Please input a valid number',
        },
      },
    },
  }, {});
  return Locations;
};
