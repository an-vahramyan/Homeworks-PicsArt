"use strict";
//1
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
const arr = [10, 20, 30];
console.log(sum.apply(null, arr)); //60
//2
const student1 = { name: "Anna", score: 80 };
const student2 = { name: "Mark", score: 95 };

function printResult() {
  return `${this.name} scored ${this.score}`;
}
console.log(printResult.call(student1));
console.log(printResult.apply(student2));
//3
const user = {
  name: "Alex",
  greet() {
    return "Hello " + this.name;
  },
};
const admin = {
  name: "Admin",
};
console.log(user.greet.call(admin));

//4
const numbers = [5, 12, 8, 20, 3];
console.log(Math.max.apply(null, numbers)); //20

//5
const obj1 = {
  value: 10,
  getValue() {
    return this.value;
  },
};

const obj2 = {
  value: 50,
};
console.log(obj1.getValue.call(obj2)); //50

//6
function total(a, b, c) {
  return a + b + c;
}
const args = [7, 8, 9];
console.log(total.call(args, 7, 8, 9));
console.log(total.apply(null, args));

//7
function show() {
  return this.name;
}
const obj = { name: "Test" };
const bound = show.bind(obj);
// ❗ What will this return?
console.log(bound.call({ name: "Wrong" }));
//Test, քանի որ bind-ը կապում է արժեքը

//8
const p1 = { name: "Anna", points: 10 };
const p2 = { name: "Mark", points: 25 };
function points() {
  return `${this.name} has ${this.points}`;
}
console.log(points.apply(p1));
console.log(points.apply(p2));

//9
function sum(a, b, c) {
  return a + b + c;
}
function execute(fn, arr) {
  // return fn.apply(null,arr);
  return fn.call(null, ...arr);
}
console.log(execute(sum, [2, 4, 6])); //12

//10
function show() {
  return this.name;
}
const a = { name: "A" };
const b = { name: "B" };
const fn = show.bind(a);
console.log(fn.call(b)); //A

//11
const someObj = {
  value: 100,
  get() {
    function inner() {
      return this.value;
    }
    return inner.bind(this)();
    // const bound = inner.bind(this);
    // return bound();
  },
};
console.log(someObj.get()); //100

//12
const obj3 = {
  value: 1,
  add(x) {
    this.value += x;
    return this;
  },
};

console.log(obj3.add(5).add(10).value); //16

//!Setter and Getter
//1
class Employee {
  firstName;
  lastName;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const employee = new Employee("Jhon", "Doe");
console.log(employee.fullName);

//2
class Account {
  _password;
  constructor(password) {
    this.password = password;
  }
  get password() {
    return this._password;
  }
  set password(value) {
    if (value.length <= 6) {
      console.log("password too short");
    } else {
      this._password = value;
    }
  }
}
const account = new Account("1234567");
const newPass = new Account("12345");
console.log(account.password);
console.log(newPass.password);

//3
class Temperature {
  _celsius;
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }
  set celsius(value) {
    this._celsius = value;
    console.log(`celcius : ${this._celsius}`);
  }
}
const temp = new Temperature(1);
console.log(temp.fahrenheit);

//4
class Counter {
  _count = 0;
  increment() {
    this._count++;
  }
  get current_count() {
    return this._count;
  }
}
const count = new Counter();
count.increment();
console.log(count.current_count);

//5
class Product {
  _price;
  constructor(price) {
    this._price = price;
  }
  set price(value) {
    this._price = value;
  }
  get price() {
    return (this._price = price);
  }
  get discount() {
    return this._price * 0.9;
  }
}
const product = new Product(1200);
console.log(product.discount);

//6
class BankAccount {
  _balance = 0;
  constructor(balance = 0) {
    this._balance = balance;
  }
  set balance(value) {
    if (value < 0) {
      console.log("deposits can't be negative");
      return;
    }
    this._balance += value;
  }
  get balance() {
    return this._balance;
  }
}
const account_balance = new BankAccount(1000);
account_balance.balance = 50;
account_balance.balance = -42;
console.log(account_balance.balance);

//7
class Rectangle {
  _width;
  _height;
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  set width(value) {
    if (value <= 0) {
      console.log("enter correct number");
      return;
    }
    this._width = value;
  }
  set height(value) {
    if (value <= 0) {
      console.log("enter correct number");
      return;
    }
    this._height = value;
  }
  get area() {
    return this._width * this._height;
  }
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.area);

//8
class Email {
  _email;
  constructor(email) {
    this.email = email;
  }
  set email(value) {
    if (!value.includes("@")) {
      console.log("invalid email");
      return;
    }
    this._email = value;
  }
  get email() {
    return this._email;
  }
}
const email_addr = new Email("example@gmail.com");
const email_addr2 = new Email("examplegmail.com");
console.log(email_addr.email);
console.log(email_addr2.email);

//9
class Cart {
  _total = 0;
  constructor(total = 0) {
    this._total = total;
  }
  set total(value) {
    if (typeof value !== "number" || value < 0) return;
    this._total += value;
  }
  get total() {
    return this._total;
  }
}
const cart = new Cart();
cart.total = 2000;
cart.total = 10;
cart.total = -42;
cart.total = "90";
console.log(cart.total);

//10
class Car {
  _speed;
  constructor(speed) {
    this.speed = speed;
  }
  set speed(value) {
    if (value > 200) {
      console.log("Too fast");
      return;
    }
    this._speed = value;
  }
  get speed() {
    return this._speed;
  }
}
const car1 = new Car(100);
console.log(car1.speed);
const car2 = new Car(250);
console.log(car2.speed);

//!Map, Zip, Filter
//1
let num_arr = [1, 2, 3, 4, 5, 6];
let newArr = num_arr.map((n) => n * 2);
console.log(newArr);
//2
let names = ["anna", "john"];
let converted = names.map((n) => n.toLocaleUpperCase());
console.log(converted);
//3
let arr_of_obj = [
  { name: "A", age: 10 },
  { name: "B", age: 15 },
  { name: "C", age: 12 },
  { name: "D", age: 5 },
  { name: "E", age: 18 },
];
let ages = arr_of_obj.map((obj) => obj.age);
console.log(ages);
//4
let even = num_arr.filter((n) => n % 2 === 0);
console.log(even);
//5
let filtred_users = arr_of_obj.filter((user) => user.age >= 18);
console.log(filtred_users);
//6
let words = ["hello", "world", "lorem ipsum", "hi"];
let filtred_words = words.filter((w) => w.length > 5);
console.log(filtred_words);
//7
let filtred_names = arr_of_obj
  .filter((user) => user.age >= 18)
  .map((user) => user.name);
console.log(filtred_names);
//8
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even_square = nums.filter((n) => n % 2 === 0).map((n) => n * 2);
console.log(even_square);
//9
let products = [
  { name: "product1", price: 1000 },
  { name: "product2", price: 900 },
  { name: "product3", price: 1100 },
];
let filtred_products = products.filter((p) => p.price > 1000);
console.log(filtred_products);
//10
let array_of_users = [
  { name: "Anna", age: 17 },
  { name: "John", age: 20 },
];
let adults = array_of_users.filter((u) => u.age > 18);
let result = adults.map((u) => `${u.name} is ${u.age} years old`);
console.log(result);