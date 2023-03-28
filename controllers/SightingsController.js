const { getSightings } = require("../utils.js");

class SightingsController {
  constructor() {
    this.sightings = getSightings();
  }

  listSightings = async (req, res) => {
    let sightings = await this.sightings;
    res.json(sightings);
  };

  showSighting = async (req, res) => {
    let sightings = await this.sightings;
    const index = parseInt(req.params.sightingIndex);
    const sightingToShow = sightings[index];
    res.json(sightingToShow);
  };
}

module.exports = SightingsController;
