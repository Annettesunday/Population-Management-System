'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'Location already exists'
        },
        validate: {
          notEmpty: {
            args: true,
            msg: 'Name cannot be empty',
          },
        },
      },
      male: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
        allowNull: false,
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
      totalPopulation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Total population number cannot be empty',
          },
          isInt: {
            args: true,
            msg: 'Please input a valid number'
          },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Locations');
  }
};
