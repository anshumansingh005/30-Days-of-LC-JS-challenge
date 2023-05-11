// Problem link - https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?gio_link_id=noqbNOv9

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(fn(arr[i], i));
  }
  return arr2;
};
