"use strict";
/*myBind-ը պիտի վերադարձնի ֆունկցիա (function (...latterArgs))
արգումենտները կարելի է երկու էտապով փոխանցել ու նոր ֆունկցիայի ներսում
միավորել երկու զանգվածները
*/
Function.prototype.myBind = function (thisArg, ...args) {
  //քանի որ վերադարձվող ֆունկցիայի ներում this-ը արդեն այլ բան է նշանակում
  //օրիգինալ ֆունկցիան պիտի նախապես պահպանենք
  const fn = this;
  //նոր ֆունկցիայի վերադարձ
  return function (...laterArgs) {
    //fn = showInfo
    const allArgs = [...args,...laterArgs];
    //call
    //կարող ենք  օգտվել my_call-ից, բայց քանի որ առանձին ֆայլում եմ իմպլեմենտել
    return fn.call(thisArg,...allArgs);
  };
};
function showInfo(city, country) {
  return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };

const boundShowInfo = showInfo.myBind(user, "New York");
console.log(boundShowInfo("USA"));
