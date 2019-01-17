const locationFinder = require('../utils/locationFinder');
const helpers = require('../helpers/helpers');

const location = {
  add: (req, res) => {
    const { name, male, female } = req.body;
    const totalPopulation = helpers.getTotalPopulation(male, female);
    locationFinder.add({name, male, female, totalPopulation })
    .then((response) => {
      if (response[1]){
        return res.status(201).send({message: 'Location created successfully', response});
      }
      return res.status(409).send({status: 'fail', data: {message: 'Location already exists'}});
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
    const { name, male, female } = req.body;
    const oldName = req.params.name;
    const totalPopulation = helpers.getTotalPopulation(male, female);
    locationFinder.update(oldName, { name, male, female, totalPopulation })
    .then(([response]) => {
      if (response === 0){
        return res.status(404).send({message: 'Location cannot be found'})
      }
      return res.status(200).send({message: 'Location updated successfully'})
    })
    .catch((error) => {
      const errorObj = error;
      if (errorObj.message === 'name must be unique') {
        return res.status(409).send({message: 'Location name must be unique'})
      }
      res.status(500).send({message: 'Error updating location'})
    })
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
  findAll: (req,res) => {
    locationFinder.findAll()
    .then((response) => {
      if (response){
        return res.status(200).send({response});
      }
      return res.status(409).send({message: 'Error getting all locations', response})
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
