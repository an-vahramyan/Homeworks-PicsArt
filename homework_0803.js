"use strict";
//! 1.forEach
function forEach(array, callback_for) {
  for (let i = 0; i < array.length; ++i) {
    callback_forEach(array[i], i, array);
  }
  return undefined;
}
function callback_forEach(currentValue, index, arr) {
  console.log(currentValue, index, arr);
}
console.log(forEach([10, 20, 30], callback_forEach));

//! 2.map
function map(array, callback_map){
    let newArray = [];
    for(let i = 0; i < array.length; ++i){
     let transformed = callback_map(array[i], i , array);
        newArray.push(transformed);
    }
    return newArray;
}
function callback_map(currentValue, index, array){
  return currentValue * 2;
}
console.log(map([10, 20, 30], callback_map));

//! 3.filter
function filter(array, callback_filter){
let newArray = [];
for(let i = 0; i < array.length; ++i ){
 let filtred = callback_filter(array[i], i, array);
 if(filtred){
    newArray.push(array[i]);
 }
}
return newArray;
}
function callback_filter(currentValue, index, array){
return currentValue > 50; 
}
console.log(filter([10,20,80], callback_filter));

//! 4.some
function some(array, callback_some){
for(let i = 0; i < array.length; ++i){
    let res = callback_some(array[i], i , array);
    if(res) {
        return true;
    }
}
return false;
}
function callback_some(currentValue, index, array){
    return  currentValue < 30;
}
console.log(some([10,60,3], callback_some));

//! 5.every
function every(array, callback_every){
    for(let i = 0; i < array.length; ++i){
        let res = callback_every(array[i], i, array);
        if(!res) { 
            return false;
        }
    }
    return true
}
function callback_every(currentValue, index, array){
    return currentValue > 50;
}

console.log(every([60,70,10], callback_every)); 

//! 6.indexOf
function indexOf(array, searchElement){
for(let i = 0; i < array.length; ++i){
    if(array[i] === searchElement){
        return i;
    }
}
return -1;
}
console.log(indexOf([10,20,30], 10));
console.log(indexOf([10,20,30], 30));
console.log(indexOf([10,20,30], 20));
console.log(indexOf([10,20,30], 40));