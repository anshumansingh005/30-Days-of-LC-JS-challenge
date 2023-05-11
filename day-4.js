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

/** optimised approach
  Approach 1: 32 Bit Integer Array
 JavaScript allows you to use typed arrays. These aren't like normal JavaScript arrays because they only allow specific data types and their size cannot be altered.

 These are a useful tool when you want to store lots of data in a memory efficient way. Traditional arrays can take up significant amounts of memory because they are not fixed size and can store arbitrary data.

This approach takes ~20ms for 5M elements.*/

var optimisedMap1 = function (arr, fn) {
  const newArr = new Int32Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};

/*
Approach 2: Preallocate Memory
You can create an empty array with some length using the new Array(len) constructor. Note that the memory is allocated but the array doesn't actually contain any elements.

This technique is more performant than appending elements to the end of the array. This is because whenever you push a value to an array, the array may not have enough memory allocated to it and it will need to be resized. This is an expensive operation. Initializing the memory upfront can result in much better performance.

This approach takes ~40ms for 5M elements.
*/

var optimisedMap2 = function (arr, fn) {
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};

/** Approach 3: In-Memory Transformation
To achieve optimal performance, you can simply reuse the memory already allocated to the first array.

It's important to note that it is generally discouraged for a function to modify the values passed to it. It can lead to unexpected bugs where the user of the function was not expecting that as a side-effect. The built-in Array.map does not modify the original array.

This approach takes ~10ms for 5M elements.

Implementation

 */

var optimisedMap3 = function (arr, fn) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

// Complexity Analysis
/**The following analysis applies to all of the approaches.

Time complexity: O(N) where N is arr.length.

Space complexity: O(N) where N is arr.length. The extra space is O(1) for Approach 3. */
