"use strict"
/*քանի որ apply-ը call-ից տարբերվում է արգումենտ ստանալու տեսանկյունից
այսինքն apply-ի դեպքում երկրորդ արգումենտը պետք է փոխանցել զանգվածով 
ապա կոդի մեջ ունենք հետևյալ փոխությունը */
Function.prototype.myApply = function(thisArg, args) {
//null & undefined
thisArg = thisArg ?? globalThis;
//args-ի null կամ undefined լինելու դեպքը 
args = args ?? [];
//յունիք բանալիի ստեղծում 
const key = Symbol("myApply");
//this-ի ավելացում 
thisArg[key] = this;
// կանչել և պահել արդյունքը 
const result = thisArg[key](...args);
//ջնջում ենք բանալին 
delete thisArg[key];
//արդյունքի վերադարձ 
return result;
}
function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };

console.log(showInfo.myApply(user, ["New-York", "USA"]));