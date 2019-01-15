import db from '../models/index';

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

export default locationFinder;
