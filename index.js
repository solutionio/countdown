
(function(window) {
  var _ = require("underscore");
  var Backbone = require("backbone");

  var Countdown = function(maxTime) {
    this.maxTime = maxTime;
    _.extend(this, Backbone.Events);
  };

  Countdown.prototype.start = function() {
    var me = this;
    this.restTime = this.maxTime;

    this.interval = window.setInterval(function() {
      me.restTime = me.restTime - 1000;
      me.trigger("tick", me.restTime);
    }, 1000);

    window.setTimeout(function () {
      console.log('finished');
      me.stop();
    }, this.maxTime);
  };

  Countdown.prototype.stop = function() {
    var me = this;
    window.clearInterval(this.interval);
    me.trigger("stop", "Stopwatch stopped");
  }

  module.exports = Countdown;
})(window);



