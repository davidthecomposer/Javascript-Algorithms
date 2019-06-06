/////////////////////// Fizz Buzz /////////////////////////////////
let output = [];

const fizzBuzz = () => {
  for (let count = 1; count < 101; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push('fizzbuzz');
          // Doing this one first because it is the most specific. and could cause conflicts after that it doesn't matter.
    } else if (count % 3 === 0) {
      output.push('fizz');
    } else if (count % 5 === 0) {
      output.push('buzz');
    } else if (count % 4 === 0) {
      output.push('');
    } else {
    output.push(count);
    }
  }
};
fizzBuzz();
console.log(output);
