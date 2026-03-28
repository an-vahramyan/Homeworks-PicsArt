"use strict";
//1 isPrime(n)
/*
եթե գոնե մեկ թիվ n-ը բաժանի առանց մնացորդի ուրեմն թիվը prime չի
*/
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(1)); //false
console.log(isPrime(2)); //true
console.log(isPrime(25)); //false

//2 isPalindrome(str)
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("level")); //true
console.log(isPalindrome("hello")); //false
console.log(isPalindrome("")); //true

//3 factorial(n)
function factorial(n) {
  if (n < 0) return null;
  let fact = 1;
  if (n === 0) return fact;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(0)); //1
console.log(factorial(5)); //120
console.log(factorial(7)); //5040

//4 maxInArray
function maxInArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxInArray([1, 2, 3])); //3
console.log(maxInArray([-10, -3, -50])); //-3
console.log(maxInArray([5])); //5

//5 sumDigits(n)
function sumDigits(n) {
  let sum = 0;
  let str = String(Math.abs(n));
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}
/*
կամ Math.floor(n % 10)
*/
console.log(sumDigits(123)); //6
console.log(sumDigits(0)); //0
console.log(sumDigits(-456)); //15

//6 reverseNumber(n)
function reverseNumber(n) {
  let str = String(n);
  let isNegative = str[0] === "-";
  let reversed = str.replace("-", "").split("").reverse().join("");
  return isNegative ? -Number(reversed) : Number(reversed);
}
console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(1000));

//7 countVowels(str)
function countVowels(str) {
  /*let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i]==='a' 
            || str[i] === 'e' 
            || str[i] === 'u' 
            || str[i] === 'i' 
            || str[i] === 'o'
            || str[i] === 'A'
            || str[i] === 'I'
            || str[i] === 'E'
            || str[i] === 'U'
            || str[i] === 'O'){
            ++count;
        }
    }
    return count;
    */
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }
  return count;
}
console.log(countVowels("hello")); //2
console.log(countVowels("HELLO")); //2
console.log(countVowels("xyz")); //0

//8 fib(n) (iterative)
function fib(n) {
  if (n <= 1) return n;
  let curr = 0;
  let prev1 = 1;
  let prev2 = 0;
  for (let i = 2; i <= n; i++) {
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return curr;
}
console.log(fib(0)); //0
console.log(fib(1)); //1
console.log(fib(10)); //55

//9 almostEqual(a, b)
function almostEqual(a, b) {
  let diff = Math.abs(a - b);
  return diff < Number.EPSILON;
}
console.log(almostEqual(0.1 + 0.2, 0.3)); //true
console.log(almostEqual(0.3 - 0.2, 0.1)); //true
console.log(almostEqual(0.1 + 0.2, 0.4)); //false

//10 toNumberOrNull(value)
function toNumberOrNull(value) {
  let num = Number(value);
  if (!isNaN(num)) {
    return num;
  }
  return null;
}
console.log(toNumberOrNull("42")); //42
console.log(toNumberOrNull("abc")); //null
console.log(toNumberOrNull(undefined)); //null

//11 exactType(value)
function exactType(value) {
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

//12  toBoolean(value) (no if)
function toBoolean(value) {
  return Boolean(value);
}
console.log(toBoolean(0));
console.log(toBoolean(" "));
console.log(toBoolean([]));

//13  isPrimitive(value)
function isPrimitive(value) {
  if (
    typeof value === "number" ||
    typeof value === "string" ||
    typeof value === "function" ||
    typeof value === "bigint" ||
    typeof value === "boolean" ||
    typeof value === "undefined" ||
    value === null
  ) {
    return true;
  }
}

//14 isArray(value)
function isArray(value){
    if(Array.isArray(value)){
        return true;
    }
    return false;
}