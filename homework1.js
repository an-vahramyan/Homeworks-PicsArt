"use strict";

const { type } = require("@testing-library/user-event/dist/cjs/utility/type.js");

/*
Write a function that takes a string as 
an argument and returns
the number of characters in the string.
*/
let str = "Hello";
//str.length;
function str_chars(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}
console.log(str_chars(str));

/*Create a function that converts 
a given string to uppercase.*/
function toUpper(str) {
  return str.toUpperCase();
}
console.log(toUpper(str));
/*Write a function that accepts two 
numbers and returns their sum. */
let a = 30;
let b = 20;
function sum_of_two_nums(firstNum, secondNum) {
  return firstNum + secondNum;
}
console.log(sum_of_two_nums(a, b));
/*Reverse the string "hello" 
without using a built-in function. */
let text = "hello";
function reverse_str(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverse_str(text));

function reverse_str_swap(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr.join("");
}
console.log(reverse_str_swap(text));
/*Check if the string "Learning JavaScript" 
contains the substring "Java". */
let char = "Learning JavaScript";
function contains(str, substr) {
  return str.includes(substr);
}
console.log(contains(char, "Java"));

function contains_cast(str, substr) {
  for (let i = 0; i <= str.length - substr.length; i++) {
    let result = true;
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] != substr[j]) {
        result = false;
        break;
      }
    }
    if (result) return true;
  }
  return false;
}
console.log(contains_cast(char, "Java"));

/*Find the index of the value 9 in the array let numList = [3, 6, 9, 12];.*/
let numList = [3, 6, 9, 12];
function find_index(nums, n) {
  return nums.indexOf(n);
}
console.log(find_index(numList, 9));
function find_index_cast(nums, n) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) return i;
  }
  return -1;
}
console.log(find_index_cast(numList, 9));
/*Compute the sum of all elements in the array 
let expenses = [50, 75, 100];. */
let expenses = [50, 75, 100];
function sum_of_all(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum_of_all(expenses));

/* Write a function to check if a given string 
contains another substring.*/
function contain(str, sub) {
  for (let i = 0; i < str.length - sub.length; i++) {
    let match = true;
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) {
        match = false;
        break;
      }
      if (match) return true;
    }
    return false;
  }
}
/*Write a function that returns the sum of 
all elements in an array of numbers. */
function return_sum_of_array(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/*Create a function that accepts a number and 
returns whether it is even or odd. */
function is_even_or_odd(num) {
  return num % 2 === 0 ? "even" : "odd";
}

/*Write a function that returns the exact
type of a given value and correctly handles 
null, arrays, objects, 
and functions (typeof alone is not sufficient). */
function getType(value) {
  if (
    typeof value === "number" ||
    typeof value === "string" ||
    typeof value === "function" ||
    typeof value === "bigint" ||
    typeof value === "boolean" ||
    typeof value === "undefined"
  ) {
    return typeof value;
  } else if (value === null) {
    return "null";
  } else if (Array.isArray(value)) {
    return "array";
  }
  return "object";
}

/*Write a function that returns true if a 
given value is falsy and false otherwise; 
test it with 0, "", null, undefined, NaN, and false. */
function is_falsy(val) {
  return !Boolean(val);
}

function is_falsy_cast(val) {
  if (
    val === 0 ||
    val === "" ||
    val === null ||
    val === undefined ||
    val === Number.isNaN(val) ||
    val === false
  ) {
    return "value is falsy";
  }
  return "value is truthy";
}

/*Write a function that compares two values and
returns an object containing the results of
both loose (==) and strict (===) comparison.*/
function compareValues(val1, val2) {
  return {
    loose: val1 == val2,
    strict: val1 === val2,
  };
}

/*Write a function that returns true only if a
value is a number, not NaN, finite, and a safe integer. */
function is_number(num) {
  return (
    typeof num === "number" && Number.isFinite(num) 
    && Number.isSafeInteger(num)
  );
}

/*Write a function that attempts to 
convert a value to a number and 
returns null if the result is NaN. */
function convert(val){
    const num = Number(val);
    return Number.isNaN(num) ? null : num;
}

/*Write a function that explicitly converts
any value to a
boolean without using if statements.*/
function to_bool(val){
    return Boolean(val);
}
//կամ կրկնակի ժխտումով !! let to_bool = val => !!val;

/* Write a function that returns true only for plain 
objects and false for arrays, null, and functions. */
function is_object(obj){
    return typeof obj === "object" && 
    obj !== null &&
    !Array.isArray(obj);
}

/*Write a function that returns true if
a value is a primitive type and false otherwise. */
function primitive_or_reference (val){
  return val === null || 
  (typeof val !== "object" && typeof val !== "function");
}

/*Write a function that returns the sum 
of two values only if both are numbers;
otherwise return the string "Invalid input". */
function return_sum(a,b){
if(typeof a === "number" && typeof b === "number" && !Number.isNaN(a) && !Number.isNaN(b)){
    return a+b;
}
return "invaid input";
}