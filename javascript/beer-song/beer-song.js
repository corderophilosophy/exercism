var BeerSong = function() {
  this.nLeft = '# bottles of beer on the wall, # bottles of beer.\nTake one down and pass it around, % bottles of beer on the wall.\n\n';
  this.oneLeft = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  this.noneLeft = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
};

BeerSong.prototype.verse = function(verse) {
  let now = verse.toString();
  let then = (verse - 1).toString()
  if (verse == 1) {
    return this.oneLeft;
  }
  if (verse == 0) {
    return this.noneLeft;
  } else {
    return this.nLeft.replace(/#/g, now).replace(/%/g, then);
  }
};

BeerSong.prototype.sing = function(start, end = 0) {
  let output = '';
    for (let i = start; i >= end; i -= 1) {
      output += this.verse(i).replace(/#/g, i.toString()).replace(/%/, (i - 1).toString());
    }
  return output;
}


module.exports = BeerSong;
