"use strict";
//1. Manual Iterator and for...of
const counter = {
  start: 1,
  end: 3,

  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};
for (const num of counter) {
  console.log(num);
}
//2  Lazy Evaluation: Fibonacci
function* fibonacci() {
  let a = 1;
  let b = 0;
  while (true) {
    yield b;
    [a, b] = [b, a + b];
  }
}
const [a, b, c, d] = fibonacci();
console.log(a, b, c, d);
//3 State Machine: Traffic Light
function* trafficLight() {
  while (true) {
    yield "🟢 Green";
    yield "🟡 Yellow";
    yield "🔴 Red";
  }
}
const light = trafficLight();
console.log(light.next().value);
console.log(light.next().value);
console.log(light.next().value);
console.log(light.next().value);
//4 ID Generator and Spread Operator
function* generateId() {
  let id = 1;
  while (true) {
    yield `id_${id}`;
    id++;
  }
}
const idGen = generateId();
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log([...generateId()]);
//5 Two-Way Data Passing: Piggy Bank
function* piggyBank() {
  let balance = 0;
  while (true) {
    let input = yield balance;
    balance += input;
  }
}
const bank = piggyBank();
bank.next();

console.log(bank.next(50).value);
console.log(bank.next(25).value);
//6 the range utility
function* range(start, end) {
  let current = start;
  while (current <= end) {
    yield current;
    current++;
  }
}
const numbers = [...range(2, 5)];
console.log(numbers);
//7 lazy filter
function* filterEven(array) {
  let i = 0;
  while (i < array.length) {
    if (array[i] % 2 === 0) {
      yield array[i];
    }
    i++;
  }
}
const data = [1, 2, 3, 4, 5, 6];
const result = [];
for (const num of filterEven(data)) {
  result.push(num);
  if (result.length === 2) break;
}
console.log(result);
//8 Endless Carousel
function* quoteCarousel(array) {
  let i = 0;
  while (true) {
    yield array[i];
    i = (i + 1) % array.length;
  }
}
const quotes = ["Q1", "Q2", "Q3"];
const carousel = quoteCarousel(["Q1", "Q2", "Q3"]);
console.log(carousel.next().value);
console.log(carousel.next().value);
console.log(carousel.next().value);
console.log(carousel.next().value);
