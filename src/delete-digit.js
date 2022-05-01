const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let c = 0;
  let p = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i ++) {
    p = n.replace(n[i], '');
    if (+p > c) {
      c = +p;
    }
  }
  return +c;
}
module.exports = {
  deleteDigit
};
