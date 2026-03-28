"use strict"

Function.prototype.myApply = function(thisArg, args) {
thisArg = thisArg ?? globalThis;
args = args ?? [];
const key = Symbol("myApply");
thisArg[key] = this;
const result = thisArg[key](...args);
delete thisArg[key];
return result;
}
function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}
const user = { name: "Joe Doe" };
console.log(showInfo.myApply(user, ["New-York", "USA"]));