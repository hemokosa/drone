"use strict";
var bebop = require('node-bebop');
var drone = bebop.createClient();

var speed = 20;

drone.connect(function() {
  drone.takeOff();
  setTimeout(function() {drone.up(speed);}, 3000);
  setTimeout(function() {drone.stop();}, 3000);
  setTimeout(function() {drone.down(speed);}, 3000);
  setTimeout(function() {drone.stop();}, 3000);

  setTimeout(function() {drone.right(speed);}, 3000);
  setTimeout(function() {drone.stop();}, 3000);
  setTimeout(function() {drone.left(speed);}, 3000);
  setTimeout(function() {drone.stop();}, 3000);

  setTimeout(function() {drone.forward(speed);}, 3000);
  setTimeout(function() {drone.stop();}, 3000);
  setTimeout(function() {drone.backward(speed);}, 3000);
  setTimeout(function() {drone.stop();}, 3000);

  setTimeout(function() {drone.clockwise(100);}, 3000);
  setTimeout(function() {drone.stop();}, 10000);
  setTimeout(function() {drone.counterClockwise(100);}, 3000);
  setTimeout(function() {drone.stop();}, 10000);

  setTimeout(clearInterval, 9000, setInterval(function() {drone.frontFlip();}, 3000));
  setTimeout(function() {drone.stop();}, 3000);

  for(var i = 0; i < 3; i++) {
      setTimeout(function() {drone.backFlip();}, 3000);
      setTimeout(function() {drone.stop();}, 3000);
  }
  setTimeout(function() {drone.rightFlip();}, 3000);
  setTimeout(function() {drone.stop();}, 3000);
  setTimeout(function() {drone.leftFlip();}, 3000);
  setTimeout(function() {drone.stop();}, 3000);

  setTimeout(function() {drone.land();}, 3000);
});
