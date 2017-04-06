'use strict';

var RollingSpider = require('rolling-spider');
var temporal = require('temporal');
var d = new RollingSpider();

var keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

var ACTIVE = true;
var STEPS = 5;

var osc = require('osc');

var oscPort = new osc.WebSocketPort({
    url: "ws://localhost:57120" // URL to your Web Socket server.
});
oscPort.open();
oscPort.on("message", function (oscMsg) {
    console.log("An OSC message just arrived!", oscMsg);
});

var val0 = msg.args[0].value;
var val1 = msg.args[1].value;
var val2 = msg.args[1].value;

var oscServer = new osc.Server(57120, '0.0.0.0');
oscServer.on("message", function (msg, rinfo) {
      console.log("TUIO message:");
      console.log(msg);
});

function cooldown() {
  ACTIVE = false;
  setTimeout(function () {
    ACTIVE = true;
  }, STEPS);
}

d.connect(function () {
  d.setup(function () {
    console.log('Configured for Rolling Spider! ', d.name);
    d.flatTrim();
    d.startPing();
    d.flatTrim();
    setTimeout(function () {
      console.log(d.name + ' => SESSION START');
      ACTIVE = true;
    }, 1000);
  });
});

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress" => ', key);
  if (ACTIVE && key) {
    var param = {tilt:0, forward:0, turn:0, up:0};
    if (key.name === 'l') {
      console.log('land');
      d.land();
    } else if (key.name === 't') {
      console.log('takeoff');
      d.takeOff();
    } else if (key.name === 'h') {
      console.log('hover');
      d.hover();
    } else if (key.name === 'x') {
      console.log('disconnect');
      d.disconnect();
      process.stdin.pause();
      process.exit();
    }

    if (key.name === 'up') {
      d.forward({ steps: STEPS });
      cooldown();
    } else if (key.name === 'down') {
      d.backward({ steps: STEPS });
      cooldown();
    } else if (key.name === 'right') {
      d.tiltRight({ steps: STEPS });
      cooldown();
    } else if (key.name === 'left') {
      d.tiltLeft({ steps: STEPS });
      cooldown();
    } else if (key.name === 'u') {
      d.up({ steps: STEPS });
      cooldown();
    } else if (key.name === 'd') {
      d.down({ steps: STEPS });
      cooldown();
    }

    if (key.name === 'm') {
      param.turn = 90;
      d.drive(param, STEPS);
      cooldown();
    }
    if (key.name === 'h') {
      param.turn = -90;
      d.drive(param, STEPS);
      cooldown();
    }
    if (key.name === 'f') {
      d.frontFlip();
      cooldown();
    }
    if (key.name === 'b') {
      d.backFlip();
      cooldown();
    }

  }
});
