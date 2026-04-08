"use strict";
function Animal(name, age) {
  this.name = name;
  this.age = age;
}
Animal.prototype.eat = function () {
  return `${this.name} is eating`;
};
Animal.prototype.sleep = function () {
  return `${this.name} is sleeping`;
};
Animal.prototype.getInfo = function () {
  return `name:${this.name},\n age:${this.age}`;
};

function Dog(name, age, breed) {
  Animal.call(this, name, age);
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function () {
  return "Woooof!";
};
Dog.prototype.getInfo = function () {
  return `name:${this.name},\n age:${this.age}\nbreed:${this.breed}`;
};
let dog = new Dog("rex", 4, "mops");
console.log(dog.getInfo());
console.log(dog.eat());
console.log(dog.makeSound());
