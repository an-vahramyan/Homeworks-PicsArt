"use strict"
//1 isEven
function isEven(num){
    if(!isNaN(num)){
        return num % 2 === 0 ? true : false;
    }
    else{
        return `${num} is not a number`;
    }
}
console.log(isEven(2));//
console.log(isEven(7));//
console.log(isEven(0));//
console.log(isEven("hello world"));


//2 sumupto
function sumUpTo(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}
console.log(sumUpTo(10));
console.log(sumUpTo(5));
console.log(sumUpTo(1));

//3 minInArray
function minInArray(arr){
let min = arr[0];
for(let i = 0; i < arr.length; i++){
    if(min > arr[i]) {
        min = arr[i];
    }
}
return min;
}
console.log(minInArray([2,-1,3,0]));

//4 countDigits
function countDigits(num){  
    return String(Math.abs(num)).length;
}
console.log(countDigits(12345));
console.log(countDigits(0));
console.log(countDigits(-98));


//5 sum array
function sumArray(arr){
    let sum = 0;
    for(let i = 0; i <= arr.length; i++){
        if(isNaN(arr[i])) { continue };
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3]));
console.log(sumArray([-1, 1]));
console.log(sumArray([5]));
console.log(sumArray(["hello", 1, 2]));

//6 average
function average( array ){
    return sumArray(array) / array.length;
}
console.log(average([2,4,6]));
console.log(average([1,1,1,1]));
console.log(average([5]));

//7 count char
function countChar(str, char){
    let copy = str.split("");
    let count = 0;
    for(let i = 0; i < copy.length-1; i++){
        if(copy[i] === char){
            count++;
        }
    }
    return count;
}
console.log(countChar("hello", "l"));


//8 remove first character from string
//slice() method
function RemoveFirstChar(str){
    // return str.split("").shift();
    let result = '';
    for(let i = 1; i < str.length; i++){
        result += str[i]
    }
    return result;
}
console.log(RemoveFirstChar("hello"));

//9 power
function power(base, exp){
    let result = 1;
    for(let i = 0; i < exp; i++){
        result *= base;
    }
    return result;
}
console.log(power(3,2));

//10 contains
function contains ( arr, value ){
    for(let i = 0; i <= arr.length; i++){
         if (arr[i] === value) return true
    }
    return false;
}
console.log(contains([1,2,3], 3 ));
console.log(contains([1,2,3], 5));

//11 repeat String
function repeatString (str, n) {
    let result = '';
    for(let i = 0; i < n; i++){
        result += str;
    }
    return result;
}
console.log(repeatString('A',3));

//12  first and last
//first  shift()
//last pop()
// arr.at()
function firstAndLast(arr){
return [arr[0], arr[arr.length - 1]];
}
// function firstAndLast (arr){
//     let result = [arr.shift(), arr.pop()];
//     return result;
// }
console.log(firstAndLast([1,2,3]));



