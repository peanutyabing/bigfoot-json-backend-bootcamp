const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

const SightingsController = require("./controllers/SightingsController.js");
const sightingsController = new SightingsController();
const SightingsRouter = require("./routers/SightingsRouter.js");
const sightingsRouter = new SightingsRouter(sightingsController, express);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/sightings", sightingsRouter.route());

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
