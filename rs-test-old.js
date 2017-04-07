"use strict";
var RollingSpider = require('rolling-spider');
var drone = new RollingSpider();

var STEPS = 20;

drone.connect(function() {
    drone.setup(function() {
        drone.flatTrim();
        drone.startPing();
        drone.flatTrim();
        setTimeout(function() {drone.takeOff();}, 3000);
        setTimeout(function() {drone.hover();}, 3000);

        setTimeout(function() {drone.land();}, 3000);
        setTimeout(function() {drone.disconnect(); process.exit(0);}, 3000);
    });
});
