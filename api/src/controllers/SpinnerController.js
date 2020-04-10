const Gpio = require('onoff').Gpio; // Gpio class

// GRILL INPUTS
var grillUp = new Gpio(17, 'out');
var sensorGrillUp = new Gpio(5, 'in')

var grillDown = new Gpio(27, 'out');
var sensorGrillDown = new Gpio(6, 'in')

// SPINNER INPUTS
var spinnerOnLeft = new Gpio(7, 'out');
var spinnerOnRight = new Gpio(8, 'out');

module.exports = {
  turnOnSpinLeft() {
    spinnerOnRight.write(0, err => { // Asynchronous write
      if (err) {
        throw err;
      }
      spinnerOnLeft.write(1, err => { // Asynchronous write
        if (err) {
          throw err;
        }
        console.log('turnOnSpin');
      });
    });
  },
  turnOffSpinRight() {
    spinnerOnLeft.write(0, err => { // Asynchronous write
      if (err) {
        throw err;
      }
      spinnerOnRight.write(1, err => { // Asynchronous write
        if (err) {
          throw err;
        }
        console.log('turnOffSpin');
      });
    });
  }
};