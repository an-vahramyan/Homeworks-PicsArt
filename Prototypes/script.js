"use strict";
//1 Implement custom instanceof
function myInstanceOf(obj, Constructor) {
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return false;
  }
  let current = Object.getPrototypeOf(obj);
  while (current !== null) {
    if (current === Constructor.prototype) {
      return true;
    } else {
      current = Object.getPrototypeOf(current);
    }
  }
  return false;
}
// function Animal() {}
// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// const dog = new Dog();

// console.log(myInstanceOf(dog, Dog)); //true
// console.log(myInstanceOf(dog, Animal)); //true
// console.log(myInstanceOf(dog, Array));
// console.log(myInstanceOf(null, Object));
// console.log(myInstanceOf(123, Number));
// console.log(myInstanceOf("hello", String));

//2   Implement custom new
function myNew(Constructor, ...args) {
  let obj = Object.create(Constructor.prototype);
  let res = Constructor.apply(obj, args);
  if (res !== null && (typeof res === "object" || typeof res === "function")) {
    return res;
  } else {
    return obj;
  }
}
// function User(name) {
//   this.name = name;
// }
// function Car(model) {
//   this.model = model;
//   return { custom: "returned object" };
// }
// const user = myNew(User, "Alex");
// console.log(user.name); //Alex
// console.log(Object.getPrototypeOf(user) === User.prototype); //true
// console.log(user.constructor === User); //true

// const car = myNew(Car, "BMW");
// console.log(car.custom); //returned object
// function Empty() {}

// const obj = myNew(Empty);
// console.log(Object.getPrototypeOf(obj) === Empty.prototype); // true

// function Test() {
//   return 123;
// }
// const test = myNew(Test);
// console.log(Object.getPrototypeOf(test) === Test.prototype); // true

//3 Check whether a property is own or inherited
function checkProperty(obj, key) {
  let res = obj.hasOwnProperty(key);
  if (res === true) {
    return "own";
  } else if (key in obj && !res) {
    return "inherited";
  } else {
    return "not found";
  }
}
const animal = { eats: true };
const dog = Object.create(animal);
dog.name = "Rex";

console.log(checkProperty(dog, "name")); // own
console.log(checkProperty(dog, "eats")); // inherited
console.log(checkProperty(dog, "age")); // not found
const obj = Object.create(null);
obj.value = 10;

console.log(checkProperty(obj, "value")); // own
console.log(checkProperty(obj, "toString")); // not found
console.log(checkProperty({}, "toString")); // inherited

//4 Find all prototype methods of an object
function getPrototypeMethods(obj) {
  let methods = [];
  let proto = Object.getPrototypeOf(obj);
  if (proto === null) return [];
  let ownKeys = Object.getOwnPropertyNames(proto);

  for (let key of ownKeys) {
    if (typeof proto[key] === "function") {
      methods.push(key);
    }
  }

  return methods;
}
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
  return this.name;
};

const user = new User("Alex");

console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
console.log(getPrototypeMethods({ a: 1 })); // []
console.log(getPrototypeMethods([]).includes("push")); // true

const base = {
  x: 10,
  print() {
    return "hello";
  },
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj)); // ["print"]
console.log(getPrototypeMethods(Object.create(null))); // []

//5 Add a custom method to Array.prototype
Array.prototype.mySum = function () {
  if (this.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < this.length; ++i) {
    if (typeof this[i] !== "number") {
      throw new Error("Error");
    } else {
      sum += this[i];
    }
  }
  return sum;
};

console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0

// console.log([1, "2", 3].mySum()); // Error
// console.log([1, NaN].mySum()); // Error
// console.log([true, 2].mySum()); // Error
