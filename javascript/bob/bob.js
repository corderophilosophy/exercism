//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.charAt(input.length - 1) === '?') {
    if ((/[\da-z]/).test(input) === false) {
      return 'Whoa, chill out!';
    }
    return 'Sure.';
  }
  if ((input.toUpperCase() === input) &&
    ((/[A-Z]/).test(input) === true)) {
    return 'Whoa, chill out!';
  }
  if (input.trim() === '') {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
