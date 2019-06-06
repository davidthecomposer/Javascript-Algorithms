///////////////////////Even and Odd Numbers?//////////////////////////
const nums = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
let evens = [];
let odds = [];

const evenNumbers = (array) => {
  for (let i = 0; i < nums.length; i++) {

    if ((array[i] % 2) === 0) {
      evens.push(array[i]);
    } else {
      odds.push(array[i]);
    }
  }
  evens.sort();
  odds.sort();
};

evenNumbers(nums);
console.log(evens)
console.log(odds)
//////////////////////////even and odds generate Array to start/////////
let evenNums = [];
let oddNums = [];

const evenOdd = () => {

  for (let i = 0; i < 101; i++) {
    // allNums.push(i);
    if ((i % 2) === 0) {
      evenNums.push(i)
    } else {
      oddNums.sort((a, b) => {
        return b - a
      }).push(i);
    }
  }
};

evenOdd();
console.log(evenNums);
console.log(oddNums);
