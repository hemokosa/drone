"use strict";

var bebop = require('node-bebop');
var drone = bebop.createClient();
var temporal = require('temporal');

drone.connect(function() {
  temporal.queue([
    {delay: 3000, task: function () {drone.flatTrim();}},
    {delay: 3000, task: function () {drone.GPSSettings.resetHome();}},
    {delay: 3000, task: function () {drone.takeOff();}},
    {delay: 5000, task: function () {drone.stop();}},
    {delay: 3000, task: function () {drone.clockwise(360);}},
    {delay: 3000, task: function () {drone.counterClockwise(360);}},
    {delay: 3000, task: function () {drone.Piloting.navigateHome(1);}},
    {delay: 3000, task: function () {drone.Piloting.navigateHome(0);}},
    {delay: 3000, task: function () {drone.backFlip();}},
    {delay: 3000, task: function () {drone.frontFlip();}},
    {delay: 3000, task: function () {drone.Piloting.navigateHome(1);}},
    {delay: 3000, task: function () {drone.Piloting.navigateHome(0);}},
    {delay: 3000, task: function () {drone.rightFlip();}},
    {delay: 3000, task: function () {drone.leftFlip();}},
    {delay: 3000, task: function () {drone.land();}},
    {delay: 5000, task: function () {temporal.clear(); process.exit(0);}}
  ]);
});
