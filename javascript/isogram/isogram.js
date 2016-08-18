var Isogram = function(input) {
  this.input = input;
  this.isoCheck = 0;
};

Isogram.prototype.isIsogram = function() {
  let arr = this.input
  .replace(/[^A-Za-zàèéìòóù]+/g, '')
  .toUpperCase()
  .trim()
  .split('');
  arr.forEach((el, i, array) => {
    if (array.indexOf(el)!= array.lastIndexOf(el)) {
      this.isoCheck += 1;
    } else {
      return;
    }
  });
  if (this.isoCheck > 0) {
    return false;
  }
  else return true;
};

module.exports = Isogram;
