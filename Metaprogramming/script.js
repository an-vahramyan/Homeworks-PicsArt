"use strict";

//1 - The Iteration Protocol (Symbol.iterator)
let myRange = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
//experiment
let myRangeReverse = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.to;
    let first = this.from;
    return {
      next() {
        if (current >= first) {
          return { value: current--, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
console.log([...myRange]);
console.log([...myRangeReverse]);

//Task 2: Controlling Concatenation (Symbol.isConcatSpreadable)
const digits = [1, 2, 3];
let extraNumbers = {
  0: 1,
  1: 2,
  length: 2,
  [Symbol.isConcatSpreadable]: true,
};
// console.log(digits.concat(extraNumbers));
const bonus = [4, 5];
bonus[Symbol.isConcatSpreadable] = false;
//զանգվածը համարում ենք սովորական էլեմենտ
console.log(digits.concat(bonus));

//Task 3: Custom Instance Validation (Symbol.hasInstance)
let OddValidator = {
  [Symbol.hasInstance](instance) {
    if (typeof instance !== "number") {
      return false;
    }
    return instance % 2 === 0 ? false : true;
  },
};
console.log(5 instanceof OddValidator);
console.log(10 instanceof OddValidator);
console.log("7" instanceof OddValidator);

//Task 4: Object Conversion (Symbol.toPrimitive)
let account = {
  balance: 0,
  currency: "",
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return `Account Balance: ${this.balance}  ${this.currency}`;
    } else {
      return this.balance;
    }
  },
};
console.log(++account);
console.log(String(account));
console.log(account + 500);
