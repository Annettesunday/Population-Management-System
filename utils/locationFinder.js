const db = require('../models/index');

const locationFinder = {
  add: (data) => {
    return db.Locations.findOrCreate({ where: data });
  },

  get: (name) => {
    return db.Locations.findOne({where: { name} });
  },
  delete: (name) => {
    return db.Locations.destroy({ where: { name } });
  },
  findAll: () => {
    return db.Locations.findAll();
  },
  update: (name, data) =>{
    return db.Locations.update(data, { where: { name }});
  }
};

module.exports = locationFinder;
