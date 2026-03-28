"use strict"
//Function.prototype.myCall
Function.prototype.myCall = function(thisArg, ...args) {
    thisArg = thisArg ?? globalThis;
    const key = Symbol("myCall");
    thisArg[key] = this;
    const result = thisArg[key](...args);
    delete thisArg[key];
    return result;
}

function showInfo(city, country) {
return `${this.name} lives in ${city}, ${country}`;
}
const user = { name: "Joe Doe" };
console.log(showInfo.myCall(user, "New-York", "USA"));