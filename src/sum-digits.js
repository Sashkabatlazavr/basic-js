const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  n = n.toString();
  let counter = 0;
  let result = 0;
  for (let i = 0; i < n.length; i++) {
    counter += +n[i];
  }
  console.log(counter);
  counter = counter.toString();
  for (let j = 0; j < counter.length; j++) {
    result += +counter[j];
  }
  return result;
}
console.log(getSumOfDigits(91))
module.exports = {
  getSumOfDigits
};
