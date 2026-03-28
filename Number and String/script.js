'use strict'
//* Number
//!1
function myIsNaN(value){
    return value !== value;
}
console.log(myIsNaN(NaN) );//true
console.log(myIsNaN(15));//false
console.log(myIsNaN("hello"));//false

//!2
function myIsFinite(value){
    return ( 
    typeof value === 'number' && 
    value !== -Infinity && 
    value !== Infinity &&
    value === value
    );
}
console.log(myIsFinite(25));//true
console.log(myIsFinite(Infinity));//false
console.log(myIsFinite("25"));//false

//! 3 
function myIsInteger(value) {
    return (
        typeof value === 'number' &&
        value !== Infinity &&
        value !== -Infinity &&
        value % 1 === 0 &&
        value === value
    )
}
console.log(myIsInteger(10));//true
console.log(myIsInteger(10.5));//false
console.log(myIsInteger("10"));//false

//!4
function myIsSafeInteger(value){
    return (
        typeof value === 'number' &&
        value % 1 === 0 &&
        value <= Number.MAX_SAFE_INTEGER &&
        value >= Number.MIN_SAFE_INTEGER
    )
}
console.log(myIsSafeInteger(100));//true
console.log(myIsSafeInteger(10.2));//false
console.log(myIsSafeInteger(9007199254740992));//false

//* String
//! 1
function myStartsWith(str, search){
if(search.length > str.length) return false;
for(let i = 0; i < search.length; ++i){
    if(str[i] !== search[i]){
        return  false;
    }
}
return true;
}
console.log(myStartsWith("javascript", "java"));//true
console.log(myStartsWith("javascript", "script"));//false
console.log(myStartsWith("hello", "he"));//true

//! 2 
function myEndsWith(str, search){

}
console.log(myEndsWith("javascript", "script"));
console.log(myEndsWith("javascript", "java"));
console.log(myEndsWith("hello", "lo"));
