const helpers = {
  getTotalPopulation: (male, female) => {
    const totalPopulation = parseInt(male, 10) + parseInt(female, 10);
    return totalPopulation;
  }
}

  module.exports = helpers;
