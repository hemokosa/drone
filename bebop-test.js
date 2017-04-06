var bebop = require('node-bebop');
var drone = bebop.createClient();
var temporal = require('temporal');

drone.connect(function() {
  temporal.queue([
    {
      delay: 5000,
      task: function () {
        drone.takeOff();
      }
    },
    {
      delay: 3000,
      task: function () {
        drone.forward();
      }
    },
    {
      delay: 3000,
      task: function () {
        drone.backward();
      }
    },
    {
      delay: 3000,
      task: function () {
        drone.right();
      }
    },
    {
      delay: 3000,
      task: function () {
        drone.left();
      }
    },
    {
      delay: 3000,
      task: function () {
        drone.clockwise();
      }
    },
    {
      delay: 3000,
      task: function () {
        drone.counterClockwise();
      }
    },
    {
      delay: 3000,
      task: function () {
        drone.up();
      }
    },
    {
      delay: 3000,
      task: function () {
        drone.down();
      }
    },
    {
      delay: 5000,
      task: function () {
        drone.land();
      }
    },
    {
      delay: 5000,
      task: function () {
        temporal.clear();
        process.exit(0);
      }
    }
  ]);
});
