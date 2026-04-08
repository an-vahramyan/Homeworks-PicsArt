"use strict";
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  sleep() {
    return `${this.name} is sleeping`;
  }
  // getInfo() {
  //   return `name:${this.name},\n age:${this.age}`;
  // }
}
class Dog extends Animal {
  constructor(breed, name, age) {
    super(name, age);
    this.breed = breed;
  }
  makeSound() {
    return "Wooof!";
  }
  // getInfo() {
  //   return `${super.getInfo()}\n breed: ${this.breed}`;
  // }
}
class Puppy extends Dog {
  constructor(breed, name, age, owner) {
    super(breed, name, age);
    this.owner = owner;
  }
  play() {
    return `${this.name} is playing`;
  }
}
let dog = new Dog("mops", "rex", 4);
let puppy = new Puppy("mops", "ano", 1, "Jhon");
console.log(dog.eat());
// console.log(dog.getInfo());
console.log(dog.makeSound());
console.log(puppy.eat());
console.log(puppy.makeSound());
