"use strict";

var bebop = require('node-bebop');
var drone = bebop.createClient();
var temporal = require('temporal');

drone.connect(function() {
  temporal.queue([
    {delay: 1000, task: function () {drone.flatTrim();}},
    {delay: 1000, task: function () {drone.takeOff();}},
    {delay: 3000, task: function () {drone.forward(30);}},
    {delay: 3000, task: function () {drone.stop();}},
    {delay: 3000, task: function () {drone.frontFlip();}},
    {delay: 3000, task: function () {drone.frontFlip();}},
    {delay: 3000, task: function () {drone.frontFlip();}},
    {delay: 3000, task: function () {drone.frontFlip();}},
    {delay: 3000, task: function () {drone.frontFlip();}},
    {delay: 3000, task: function () {drone.backward(30);}},
    {delay: 3000, task: function () {drone.stop();}},
    {delay: 3000, task: function () {drone.up(30);}},
    {delay: 3000, task: function () {drone.stop();}},
    {delay: 3000, task: function () {drone.down(30);}},
    {delay: 3000, task: function () {drone.stop();}},
//    {delay: 3000, task: function () {drone.right(30);}},
//    {delay: 3000, task: function () {drone.stop();}},
//    {delay: 3000, task: function () {drone.left(30);}},
//    {delay: 3000, task: function () {drone.stop();}},
    {delay: 3000, task: function () {drone.land();}},
    {delay: 5000, task: function () {temporal.clear(); process.exit(0);}}
  ]);
});
