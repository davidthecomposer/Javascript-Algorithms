/////////////////////////  Is Palindrome ????? ////////////////////////////
const reverseArray = (str) => {
  return str.reverse();
};
const isPalindrome = (str) => {
  let backwardStr;
  let forwardStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '').split("");
  backwardStr = reverseArray(forwardStr).join('');
  forwardStr = forwardStr.reverse().join('');
  return forwardStr === backwardStr ? true : false;
};

console.log(isPalindrome('abcba'));
