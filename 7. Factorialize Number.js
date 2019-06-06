
// ------------------My Attempt-------------------------//
const factorial = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  } return arr.reduce((a, b) => {
    return a * b;
  })

};
//doesn't work for zero
console.log(factorial(5));
// ---------------------------His attempt---------------------------//
function factorializeNumber(num) {
 let product = 1;

 for (let i = 1; i <= num; i++) {
   product *= i;
 }
      return product;
}
console.log(factorializeNumber(5));
