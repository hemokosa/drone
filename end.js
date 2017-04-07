"use strict";
var RollingSpider = require('rolling-spider');
var drone = new RollingSpider();

var STEPS = 20;

drone.connect(function() {
    drone.setup(function() {
        setTimeout(function() {drone.land();}, 3000);
        setTimeout(function() {drone.disconnect(); process.exit(0);}, 3000);
    });
});
