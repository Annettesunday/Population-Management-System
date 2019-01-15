const locationFinder = require('../utils/locationFinder');

const location = {
  add: (req, res) => {
    const { name, male, female } = req.body;
    locationFinder.add({name, male, female })
    .then((response) => {
      if (response[1]){
        return res.status(201).send({message: 'Location created', response});
      }
      return res.status(409).send({status: 'fail', data: {message: 'Contact already exists'}});
    })
    .catch((error) => {
      const errorObj = error;
      if (errorObj.message === 'name must be unique') {
        return res.status(409).send({ message: 'Location Name must be Unique'});
      }
      return res.status(500).send({status: 'fail', data: {message: 'Error creating Location'}, error});
    });
  },

  update: (req, res) => {
    return res.status(200);
  },

  get: (req, res) => {
    return res.status(200);
  },

  delete: (req, res) => {
    return res.status(200);
  }

}

module.exports = location;
