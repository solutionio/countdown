
(function(window) {
  var _ = require("../component-underscore");
  var Backbone = require("../solutionio-backbone");

  var Countdown = function(maxTime) {
    this.maxTime = maxTime;
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
    me.trigger("stop", "Stopwatch stopped");
  }

  module.exports = Countdown;
})(window);

