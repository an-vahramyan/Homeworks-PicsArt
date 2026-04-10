"use strict";

// Task 1: Abstract Class Simulation
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("It's Abstract class");
    }
  }
  getArea() {
    throw new Error("Method not implemented");
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.heigth;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
const shape = new Shape();
// Error: Cannot instantiate abstract class

const rect = new Rectangle(10, 5);
console.log(rect.getArea());
// 50

//Task 2: Interface Simulation
class StorageProvider {
  upload(file) {}
  download(filename) {}
}
class LocalStorageProvider {
  upload(file) {}
  download(filename) {}
}
class CloudStorageProvider {
  upload(file) {}
  download(filename) {}
}
function useStorage(provider) {
  if (
    typeof provider.upload === "function" &&
    typeof provider.download === "function"
  ) {
    return "works";
  } else {
    throw new Error("Invalid storage provider");
  }
}
useStorage(new LocalStorageProvider());
// Works

useStorage({});
// Error: Invalid storage provider

//Task 3: Method Overriding and super
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}
class Dog extends Animal {
  speak() {
    super.speak();
    console.log("Dog barks");
  }
}
const d = new Dog();
d.speak();

// Output:
// Animal makes a sound
// Dog barks
