(function(window) {
  var _ = require("../component-underscore");
  var Backbone = require("../solutionio-backbone");

  var Countdown = function(maxTime) {
    this.maxTime = maxTime;
    this.restTime = 0;
    this.interval = 0;
    _.extend(this, Backbone.Events);
  };

  Countdown.prototype.start = function() {
    var me = this;
    this.restTime = this.maxTime;
    me.trigger('start', this.maxTime);
		this.interval = window.setInterval(function() {
      me.restTime = me.restTime - 1000;
      me.trigger("tick", me.restTime);
      if (me.restTime <= 0) {
        me.stop();
      }
    }, 1000);
  };

  Countdown.prototype.stop = function() {
    var me = this;
    window.clearInterval(this.interval);
    this.interval = 0;
    me.trigger("stop", "Stopwatch stopped");
  }

  Countdown.prototype.isRunning = function() {
    return (this.interval !== 0);
  };

  module.exports = Countdown;
})(window);


