const db = require('../models/index');

const locationFinder = {
  add: (data) => {
    return db.Locations.findOrCreate({ where: data });
  },

  get: (name) => {
    return db.Locations.findOne({
      where: {
        name,
      },
    });
  },
};

module.exports = locationFinder;
