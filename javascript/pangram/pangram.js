var Pangram = function(sentence) {
  this.input = sentence;
  this.check = [];
};

Pangram.prototype.isPangram = function() {
  let arr = this.input
    .replace(/[^A-Za-z]+/g, '')
    .toUpperCase()
    .split('');
  arr.forEach((el) => {
    if (this.check.indexOf(el) == -1) {
      this.check.push(el);
    }
  });
  if (this.check.length == 26) {
    return true;
  }
  else {
    return false;
  }
};

module.exports = Pangram;
