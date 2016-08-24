var Anagram = function(input) {
  this.original = input;
  this.matched = [];
};

Anagram.prototype.matches = function() {
  var targets = [...arguments];
  var tgts = targets.reduce(
    (a, b) => {
      return a.concat(b);
    }, []);
  for (let t of tgts) {
    if (t.length == this.original.length && t.toLowerCase() != this.original.toLowerCase()) {
      let tgt = t.toLowerCase().split('').sort();
      let orig = this.original.toLowerCase().split('').sort();
      if (tgt.toString() == orig.toString() && t != this.original) {
        console.log(`t is: ${t}, this.original is: ${this.original}`)
        this.matched.push(t);
      }
    }
  }
  return this.matched;
};

module.exports = Anagram;

// targets.forEach((target) => {
//   console.log(`target.length for ${target} is: ${target.length}`);
//   let counter = 0;
//   if (target.length == this.original.length) {
//     counter += 1;
//     let tgt = target.split('');
//     let orig = this.original.split('');
//     tgt.forEach((t) => {
//       if (orig.indexOf(t) !== -1) {
//         counter += 1;
//         tgt.splice(0,1);
//       } else {
//         counter += 0;
//       }
//     });
//     counter === this.original.length ? results.matches.push(target) : console.log(`${target} was not an anagram of ${this.original}`);
//   }
//   console.log(`counter is: ${counter}`);
// });
