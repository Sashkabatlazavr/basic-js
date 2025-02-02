const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  let count = 0;
  let cat = "^^";
  if (!matrix) return;
    for (elem of matrix){
    if (elem === cat) {
       count += 1;
    } else if (Array.isArray(elem)) {
      count += countCats(elem);
    }
  };
  return count;
}


module.exports = {
  countCats
};
