'use strict';

var RollingSpider = require('rolling-spider');
var temporal = require('temporal');
var drone = new RollingSpider();

var SPEED = 30;
var STEPS = 40;

drone.connect(function() {
  drone.setup(function() {
    drone.flatTrim();
    drone.startPing();
    drone.flatTrim();

    temporal.queue([
      {delay: 3000, task: function () {drone.takeOff(); drone.flatTrim();}},
      {delay: 3000, task: function () {drone.forward({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.backward({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.left({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.right({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.tiltLeft({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.tiltRight({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.up({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.down({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.clockwise({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.turnLeft({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.counterClockwise({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.turnRight({speed: SPEED, steps: STEPS});}},
      {delay: 3000, task: function () {drone.flatTrim();}},
      {delay: 3000, task: function () {drone.backFlip();}},
      {delay: 3000, task: function () {drone.frontFlip();}},
      {delay: 3000, task: function () {drone.land();}},
      {delay: 3000, task: function () {temporal.clear(); process.exit(0);}}
    ]);
  });
});

setTimeout(function() {drone.up({speed: SPEED, steps: STEPS});}, 3000);
setTimeout(function() {drone.down({speed: SPEED, steps: STEPS});}, 3000);
