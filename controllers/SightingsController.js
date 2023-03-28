const { getSightings } = require("../utils.js");

class SightingsController {
  constructor() {
    this.sightings = getSightings();
  }

  listSightings = async (req, res) => {
    const sightings = await this.sightings;
    const queryParameters = req.query;
    const filteredSightings = this.filterSightings(queryParameters, sightings);
    res.json(filteredSightings);
  };

  filterSightings = (queryParams, dataToFilter) => {
    console.log(queryParams);
    let output = dataToFilter;
    for (let key in queryParams) {
      output = output.filter((datum) => datum[key] === queryParams[key]);
      console.log(key, queryParams[key]);
      console.log(output);
    }
    return output;
  };

  showSighting = async (req, res) => {
    let sightings = await this.sightings;
    const index = parseInt(req.params.sightingIndex);
    const sightingToShow = sightings[index];
    res.json(sightingToShow);
  };
}

module.exports = SightingsController;
