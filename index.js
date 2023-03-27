const express = require("express");
const { getSightings } = require("./utils.js");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/sightings", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

app.get("/sightings/:sightingIndex", async (req, res) => {
  const index = parseInt(req.params.sightingIndex);
  const sighting = (await getSightings())[index];
  res.json(sighting);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
