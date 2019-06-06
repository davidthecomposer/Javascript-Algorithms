//////////////////////// Longest length //////////////////////////////////
----------------------- First solution --------------------------------//
const longWord = (str) => {
  let sentenceArray = [];
  sentenceArray = str.split(" ");
  sentenceArray.sort(function(a, b) {
    return b.length - a.length;
  });
  return sentenceArray.shift().length;
};
----------------------Second solution-----------------------------------//
const longWord = (str) => {
  let longLength = 0;
  let strArray = str.split(" ");
  for (const word of strArray) {
    // could also use strArray.forEach((word) => { Add logic here})
    longLength = longLength < word.length ? word.length : longLength;
  }
  return longLength;
};

console.log(longWord('I am a coding god'));
console.log(longWord('I would like to work for Google'));
console.log(longWord("Ain't no fun if Homie don't code none"));
