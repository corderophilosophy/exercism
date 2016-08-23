/*

  TODO: Fix count comparison vs multiple-lettered words. That's not a thing, but you'll know what you mean :wink:

*/

var Anagram = function(input) {
  this.original = input;
  this.matched = [];
};

Anagram.prototype.matches = function(targets) {
  for (var target of targets) {
    let data = {};
    if (target.length == this.original.length) {
      for (var t of target) {
        let tgt = target.split('');
        if (this.original.indexOf(t) == -1) {
          console.log(`${target} was not an anagram of ${this.original}`);
        } else {
          if (data.hasOwnProperty(t)) {
            data[t]++;
          } else {
            data[t] = 1;
          }
        }
        if (Object.keys(data).length == target.length) {
          this.matched.push(target);
        }
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
