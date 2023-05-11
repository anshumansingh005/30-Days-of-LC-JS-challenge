// Problem statement - https://leetcode.com/problems/array-reduce-transformation/description/?gio_link_id=nPN45jD9

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let res = init;
  if (nums.length === 0) return init;
  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }
  return res;
};

/**
Approach 1: For...of Loop
Javascript has simple syntax that allows you to loop over each element on an iterable object. Sets, Maps, and Strings are other examples of iterables.

*/
var reduce1 = function (arr, fn, initialVal) {
  let accumulator = initialVal;
  for (const element of arr) {
    accumulator = fn(accumulator, element);
  }
  return accumulator;
};

/**
 Approach 2: Array.forEach Loop
Javascript arrays have a built-in method for iterating over each element. The main reason it is often preferred over normal for loops is that it provides the actual value as the first argument to the callback (possibly saving a line of code).
 */

var reduce2 = function (arr, fn, initialVal) {
  let accumulator = initialVal;
  arr.forEach((element) => {
    accumulator = fn(accumulator, element);
  });
  return accumulator;
};

/**
 Approach 3: For...in Loop
For...in loops are more commonly used to iterate over the keys on an object. However, they can also be used to iterate over the indices of an array. This approach is notable because it respects sparse arrays by ignoring empty indices. For example, if you wrote let arr = Array(100); arr[1] = 10;, this approach would treat the array as if it only had one element.
 */

var reduce3 = function (arr, fn, initialVal) {
  let accumulator = initialVal;
  for (const index in arr) {
    accumulator = fn(accumulator, arr[index]);
  }
  return accumulator;
};

/**
 Complexity Analysis
The following analysis applies to all the approaches. Let NNN be the length of the input array.

Time complexity: O(N). The algorithms iterate over all the elements.
Space complexity depends on the provided callback. For example, summing elements in an array is O(1) extra space. Whereas filtering an array is O(N) in the worst case.
 */
