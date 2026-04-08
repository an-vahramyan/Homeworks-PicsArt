"use strict";
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `my name is ${this.name} and I'm ${this.age} years old`;
  }
}
class Student extends Person {
  constructor(name, age, university) {
    super(name, age);
    this.university = university;
  }
  study() {
    return `${this.name} are ${this.age} old, and studies at ${this.university}`;
  }
}
let student = new Student("Anna", 20, "Oxford");
console.log(student.introduce());
