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
