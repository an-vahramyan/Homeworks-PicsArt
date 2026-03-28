'use strict'
//!1  Object Merging
/* 
Create two objects, `person1` and `person2`,
with some overlapping properties. Use `Object.assign()` 
to merge them into a new object called `mergedPerson`.  
*/
let person1 = {
  fisrtName: "Jhon",
  lastName: "Smith",
  age: 50,
  country: "America",
};
let person2 = {
  fisrtName: "Alex",
  lastName: "Doe",
  age: 40,
  country: "America",
};
// let margedPerson = Object.assign(person1, person2);
// console.log(margedPerson);
// console.log(margedPerson === person1);//true
let margedPerson = Object.assign({}, person1, person2);
console.log(margedPerson);
console.log(margedPerson === person1); //false

//! 2. Object Freezing
/*
Create an object `student` and freeze it 
using `Object.freeze()`. Then attempt to modify
one of its properties and log the outcome.
*/
const student = {
  fisrtName: "Jhon",
  lastName: "Doe",
  age: 20,
};
Object.freeze(student);
student.age = 30;
console.log(student);//20
//strict mode-ով error

//! 3. Conditional Property Addition
/*
Create an object and conditionally add a property 
based on whether a variable is truthy or falsy.
*/
let obj = {};
function conditional_addition(obj,value){
    if(value){
        obj.value = value;
    }
    return obj;
}
console.log(conditional_addition(obj,"2"));

//! 4 Dynamic Property Names
/*
Create an object where the property names
are dynamically created from an array of strings, 
then log the resulting object.
*/
let dyn_obj = {};
let arr = ["name", "lastName", "age"];
function dynamic_prop_names(obj, arr){
    for(let i = 0; i < arr.length; ++i){
        obj[arr[i]] = arr[i];
    }
    return obj;
}
console.log(dynamic_prop_names(dyn_obj,arr));

//! 5  For-Of Loop
/*
Create an object with numeric properties 
and use a `for...of` 
loop (with `Object.keys()`) to log each property value.
*/
const obj1 = {
    1: 'lorem',
    2: 'ipsum'
}
for(key of Object.keys(obj1)){
    console.log(obj1[key])
}

//! 6.Object Entry Manipulation
/*
Use `Object.entries()` to convert an 
object into an array of key-value pairs, 
then manipulate it by filtering based on 
a condition before converting it back to an object.
*/
const object = {
  a: "some string",
  b: 42,
};

let arr1 = Object.entries(object);
let result = arr1.filter((item) => typeof item[1] === 'string');
console.log(Object.fromEntries(result));

//! 7. Object Comparison
/*
Write a function `isEqual` that 
takes two objects and returns `true` 
if they are deeply equal (same properties and values).
*/
function isEqual(obj1, obj2){
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    if(key1.length !== key2.length){
        return false;
    }
    for(let key of key1){
        const val1 = obj1[key];
        const val2 = obj2[key];

        if(typeof val1 === 'object' && typeof val2 === 'object'){
            if(!isEqual(val1,val2)) return false;
        }else if(val1 !== val2){
            return false;
        }
    }
    return true;
}
let std1 = {
    name: "Jhon",
    age: 20
};
let std2 = {
    name: 'Jhon',
    age:20
};
console.log(isEqual(std1,std2));
