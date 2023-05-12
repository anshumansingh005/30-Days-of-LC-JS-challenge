type F = (x: number) => number;

function compose1(functions: F[]): F {
  return function (x: number): number {
    if (functions.length == 0) return x;
    for (let i: number = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
}

// Approach 1 = using reduceRight;
/**
 Here's a breakdown of how Array.reduceRight() works in the context of the compose function:

The compose function receives an array of functions and returns a new function that takes an input value x.
When the new function is called with an input value x, it calls Array.reduceRight() on the functions array.
The reducer function is called for each function in the array, starting from the rightmost element and moving towards the left. The accumulator initially holds the input value x.
In each iteration, the reducer function applies the current function to the accumulator and updates the accumulator with the result.
Once all the functions have been applied, the final value of the accumulator is returned.
 */
type Fun = (x: number) => number;
function compose2(functions: Fun[]): Fun {
  return (x: number): number => functions.reduceRight((acc, f) => f(acc), x);
}
