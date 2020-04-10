
const Gpio = require('onoff').Gpio;

// GRILL INPUTS
var grillUp = new Gpio(17, 'out');
var sensorGrillUp = new Gpio(5, 'in')

var grillDown = new Gpio(27, 'out');
var sensorGrillDown = new Gpio(6, 'in')

// SPINNER INPUTS
var spinnerOnLeft = new Gpio(7, 'out');
var spinnerOnRight = new Gpio(8, 'out');

module.exports = {
  async state(socket) {
    try {
      let state = [{
        spinnerLeftState: spinnerOnLeft.readSync(),
        spinnerRightState: spinnerOnRight.readSync(),

        grillUpState: grillUp.readSync(),
        grillDownState: grillDown.readSync(),

        sensorGrillUpState: sensorGrillUp.readSync(),
        sensorGrillDownState: sensorGrillDown.readSync()
      }];
      socket.emit("state", state)
    } catch (error) {
      console.log(error);
    }
  }
};