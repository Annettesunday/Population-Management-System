const db = require('../models/index');

const locationFinder = {
  add: (data) => {
    return db.Locations.findOrCreate({ where: data });
  },

  get: (id) => {
    return db.Locations.findById(id,{where:  id });
  },
  delete: (name) => {
    return db.Locations.destroy({ where: { name } });
  },
  findAll: () => {
    return db.Locations.findAll();
  },
  update: (id, data) =>{
    return db.Locations.update(data, { where: { id }});
  }
};

module.exports = locationFinder;
