const express = require('express');
const routes = express.Router();

const SpinnerController = require('./controllers/SpinnerController');
const GrillController = require('./controllers/GrillController');
const StateController = require('./controllers/StateController');

// Default Route
routes.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

// State routes
routes.get('/state', StateController.state);

// //Spinner routes
// routes.get('/turnOnSpin', SpinnerController.turnOnSpin);
// routes.get('/turnOffSpin', SpinnerController.turnOffSpin);

// //grill routes
// routes.get('/goUp', GrillController.up);
// routes.get('/goDown', GrillController.down);

module.exports = routes;