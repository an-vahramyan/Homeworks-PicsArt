"use strict";
Function.prototype.myBind = function (thisArg, ...args) {
  const fn = this;
  return function (...laterArgs) {
    const allArgs = [...args,...laterArgs];
    return fn.call(thisArg,...allArgs);
  };
};
function showInfo(city, country) {
  return `${this.name} lives in ${city}, ${country}`;
}
const user = { name: "Joe Doe" };
const boundShowInfo = showInfo.myBind(user, "New York");
console.log(boundShowInfo("USA"));
