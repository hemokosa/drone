"use strict";
var RollingSpider = require('rolling-spider');
var drone = new RollingSpider();

var SPEED = 20;
var STEPS = 20;

drone.connect(function() {
    drone.setup(function() {
        drone.flatTrim();
        drone.startPing();
        drone.flatTrim();
        setTimeout(function() {drone.takeOff();}, 3000);
        setTimeout(function() {drone.hover();}, 3000);

        setTimeout(function() {drone.up({speed: SPEED, steps: STEPS});}, 3000);
        setTimeout(function() {drone.down({speed: SPEED, steps: STEPS});}, 3000);

        setTimeout(function() {drone.tiltRight({speed: SPEED, steps: STEPS});}, 3000);
        setTimeout(function() {drone.tiltLeft({speed: SPEED, steps: STEPS});}, 3000);

        setTimeout(function() {drone.forward({speed: SPEED, steps: STEPS});}, 3000);
        setTimeout(function() {drone.backward({speed: SPEED, steps: STEPS});}, 3000);

        setTimeout(function() {drone.turnRight({speed: SPEED, steps: 100});}, 3000);
        setTimeout(function() {drone.turnLeft({speed: SPEED, steps: 100});}, 3000);

        setTimeout(function() {param.turn = 360; drone.drive(param, STEPS);}, 5000);
        //tilt(roll), forward(pitch),  turn(yaw), up(altitude)

        setTimeout(clearInterval, 15000, setInterval(function() {drone.frontFlip();}, 3000));

        for(var i = 0; i < 3; i++) {
                        setTimeout(function() {drone.backFlip();}, 3000);
        }

        setTimeout(function() {drone.rightFlip();}, 3000);
        setTimeout(function() {drone.leftFlip();}, 3000);

        setTimeout(function() {drone.land();}, 3000);
        setTimeout(function() {drone.disconnect(); process.exit(0);}, 3000);
    });
});
