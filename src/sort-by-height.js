const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let temp = [];
  let item = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      item = arr.splice(i, 1, 0)[0];
      temp.push(item);
    } else {
      continue;
    }
  }
  temp.sort((a,b) => a - b);
  for (let item of temp) {
    arr[arr.findIndex(el => el === 0)] = item;
  }
  return arr;
  }

module.exports = {
  sortByHeight
};
