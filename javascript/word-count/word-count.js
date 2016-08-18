var Words = function(string) {
  this.data = {};
};

Words.prototype.count = function(str) {
    this.data = {};
    let arr = str.replace(/\s+/, ' ').split(' ');
    let newArr = arr.filter((el, idx) => {
      return el.length > 0
    });
    newArr.forEach((elt, i) => {
      elt = elt.toLowerCase().trim();
      if (this.data.hasOwnProperty(elt) &&
          elt !== '') {
        this.data[elt]++;
      }
      else {
        this.data[elt] = 1;
      }
    });
    return this.data;
};

module.exports = Words;
