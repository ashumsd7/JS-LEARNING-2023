// tripleAdd(10)(20)(30);

function tripleAdd(a) {
  return function B(b) {
    return function C(c) {
      let sum = a + b + c;
      return sum;
    };
  };
}

console.log(tripleAdd(10)(20)(30));
