'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [{
        name: 'Mogadishu',
        male: 150,
        female: 50,
        totalPopulation: 200,
        updatedAt: '2019-01-17T13:09:13.168Z',
        createdAt: '2019-01-17T13:09:13.168Z',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
