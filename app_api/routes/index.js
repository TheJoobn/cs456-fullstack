const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router
    .route("/trips")
    .get(tripsController.tripsList)         // GET Method: list all trips
    .post(tripsController.tripsAddTrip);    // POST Method: add a new trip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)   // GET Method: find trip by code
    .put(tripsController.tripsUpdateTrip);  // PUT Method: update existing trip

module.exports = router;
