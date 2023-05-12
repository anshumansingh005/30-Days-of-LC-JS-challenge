// Problem statement - https://leetcode.com/problems/function-composition/description/?gio_link_id=4PY7wZM9

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (functions.length == 0) return x;
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

/**
Complexity Analysis
Let N be the number of functions in the array.

Time complexity: O(N). Each of the N functions in the array is called exactly once, assuming that each function has a constant time complexity.

Space complexity: O(1). The iterative method uses a single variable input to store the intermediate results, not requiring any additional space.
 */
