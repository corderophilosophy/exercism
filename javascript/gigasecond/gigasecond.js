var Gigasecond = function(date) {
  this.input = date;
};

Gigasecond.prototype.date = function() {
  return new Date(Date.parse(this.input) + 1e12);
};

module.exports = Gigasecond;
