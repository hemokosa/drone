var RollingSpider = require('rolling-spider');
var drone = new RollingSpider();

drone.connect(function() {
  drone.emergency();
});
