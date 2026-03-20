"use strict";
//15.03.26-20.03.26
//1 - curry
function curry(cb) {
  return function curried(...args) {
    if (args.length >= cb.length) {
      return cb(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3)); // 6
console.log(sumFunc(1, 2)(3)); // 6
console.log(sumFunc(1, 2, 3)); // 6
console.log(prodFunc(1, 2, 3, 4)); // 24
console.log(prodFunc(1)(2, 3, 4)); // 24
console.log(prodFunc(1, 2)(3, 4)); // 24
console.log(prodFunc(1, 2, 3)(4)); // 24

//2 memoize
function factorial(a) {
  let res = 1;
  for (let i = 2; i <= a; ++i) {
    res *= i;
  }
  return res;
}

function memoize(cb) {
  let cache = {};
  return function (x) {
    if (cache[x] !== undefined) {
      return cache[x];
    } else {
      let result = cb(x);
      cache[x] = result;
      return result;
    }
  };
}

const foo = memoize(factorial);
console.log(foo(5)); // 120
console.log(foo(5)); // 120

//3 pipes
function pipe(...funcs) {
  return function (initialValue) {
    let result = initialValue;
    for (let i = 0; i < funcs.length; i++) {
      result = funcs[i](result);
    }
    return result;
  };
}

const add5 = (a) => a + 5;
const double = (a) => 2 * a;
const sub4 = (a) => a - 4;

const func = pipe(add5, add5, double, sub4); // 20
console.log(func(2));

//4 trace
function trace(cb) {
  const wrappedFunction = function (...args) {
    const output = cb(...args);
    wrappedFunction.history.push({
      args: args,
      output: output,
    });
    return output;
  };
  wrappedFunction.history = [];
  return wrappedFunction;
}

function foo(a, b) {
  return a + b;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2)); //3
console.log(tracedFunc(2, 4, 6)); //6

console.log(tracedFunc.history); //[{args:[1,2], output: 3}, {args:[2,4], output:6}}]
