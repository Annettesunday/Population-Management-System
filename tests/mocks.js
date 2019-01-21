const validLocationDetails = {
  name: 'dummy',
  female: 100,
  male: 50,
  totalPopulation: 150,
}
const invalidFemaleDetails = {
  name: 'Nairobi',
  female: 'thirty',
  male: 50,
  totalPopulation: 80,
}
const invalidMaleDetails = {
  name: 'Mombasa',
  female: 100,
  male: '',
  totalPopulation: 110,
}
const invalidNameDetails = {
  name: 'T',
  female: '100',
  male: 50,
  totalPopulation: 150,
}
const locationTest = {
  name: 'Naks',
  female: 200,
  male: 200,
  totalPopulation: 400
}

module.exports = { validLocationDetails,
  invalidFemaleDetails,
  invalidMaleDetails,
  invalidNameDetails,
  locationTest,
};

