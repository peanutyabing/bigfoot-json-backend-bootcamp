class SightingsRouter {
  constructor(sightingsController, express) {
    this.controller = sightingsController;
    this.express = express;
  }

  route = () => {
    let router = this.express.Router();
    router.get("/", this.controller.listSightings);
    router.get("/:sightingIndex", this.controller.showSighting);
    return router;
  };
}

module.exports = SightingsRouter;
