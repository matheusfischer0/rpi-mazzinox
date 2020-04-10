const express = require("express");
const app = express();
const axios = require('axios')
const port = process.env.PORT || 4000;

// Routes
var routes = require('./src/routes')
app.use('/', routes)

// Websocket
const server = require('http').createServer(app);
const io = require('socket.io')(server)

const StateController = require('./src/controllers/StateController');
const SpinnerController = require('./src/controllers/SpinnerController');
const GrillController = require('./src/controllers/GrillController');

var getApiAndEmit = async socket => StateController.state(socket);

let interval;

io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);

  socket.on("onSpinnerLeft", () => {
    SpinnerController.turnOnSpinLeft()
  });
  socket.on("onSpinnerRight", () => {
    SpinnerController.turnOffSpinRight()
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
