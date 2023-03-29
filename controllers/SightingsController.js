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
    for (let key in queryParams) {
      dataToFilter = dataToFilter.filter(
        (datum) => datum[key] === queryParams[key]
      );
    }
    return dataToFilter;
  };

  showSighting = async (req, res) => {
    let sightings = await this.sightings;
    const index = parseInt(req.params.sightingIndex);
    const sightingToShow = sightings[index];
    res.json(sightingToShow);
  };
}

module.exports = SightingsController;
