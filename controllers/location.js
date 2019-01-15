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
    const { name } = req.params;
    locationFinder.get(name)
    .then((response) => {
      if(response) {
        return res.status(200).send({response});
      }
      return res.status(409).send({message: 'Error retrieving Location', response})
    })
    .catch((error) => {
      return res.status(500).send({error})
    })
  },

  delete: (req, res) => {
    const { name } = req.params;
    locationFinder.delete(name)
    .then((response) => {
      if (response === 0) {
        return res.status(404).send({message: 'Location does not exist'})
      }
      else {
        return res.status(200).send({message: 'Location deleted successfully'})
      }
    })
    .catch((error) => {
      return res.status(500).send({message: 'Error deleting Location', error})
    });
  }

}

module.exports = location;
