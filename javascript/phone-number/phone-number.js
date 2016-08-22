var PhoneNumber = function (input) {
  this.input = input;
  this.trimmedInput = input.replace(/\W/g, '');
};

PhoneNumber.prototype.number = function() {
  let num = this.trimmedInput;
  if (num.length < 10) { return '0000000000' }
  if (num.length == 10) { return num }
  if (num.length == 11 && num.charAt(0) == '1') {
    return num.slice(1);
  }
  if (num.length == 11 && num.charAt(0) != '1') {
    return '0000000000';
  }
  if (num.length > 11) { return '0000000000' }
  else {
    return num;
  }
};

PhoneNumber.prototype.areaCode = function() {
  return this.trimmedInput.slice(0,3);
};

PhoneNumber.prototype.toString = function() {
  let num = this.input;
  let exchange = num.slice(0,3);
  let firstThree = num.slice(3,6);
  let lastFour = num.slice(-4);
  return `(${exchange}) ${firstThree}-${lastFour}`;
}

module.exports = PhoneNumber;
