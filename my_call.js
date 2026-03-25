"use strict"
//Function.prototype.myCall
/*
եթե ֆունկցիան ավելացնենք որպես օբյեկտի մեթոդ
ապա this-ը դրա ներսում ավտոմատ դառնում է տվյալ օբյեկտը
*/
/*
քանի որ call-ը արգումենտները մեկական է ընդունում, ապա user-ից հետո 
գրված արգումենտները պետք է ավելացնել rest-ով և հետո առանձին 
զանգվածի մեջ տեղավորելու համար օգտագործել spread-ը
*/
/*
null & undefined դեպքերում սովորական call-ը օգտվում է գլոբալ օբյեկտից 
որը բրաուզերում window-ն է, մնացած դեպքերում globalThis
այսինքն  thisArg = thisArg ?? globalThis;
որպեսզի օբյեկտը չունենա property մեր ստեղծած ֆունկցիայի անունով 
պետք է այն յունիք դարձնենք  դրա համար կարող ենք օգտագործել
Symbol() պրիմիտիվ դատաթայփը 
*/
/*
ընդհանուր ալգորիթմը
1․ գրել null/undefined-ի դեպքերը
2․ ստեղծել ունիկալ բանալի symbol()-ով
3․ ավելացնելը this-ը, այսինքն ֆունկցիան, այդ բանալու կոնտեքստում
4․ կանչել և պահել արդյունքը
5․ ջնջել բանալին օբյեկտից
6․ վերադարձնել արդյունքը
*/
Function.prototype.myCall = function(thisArg, ...args) {
    //null & undefined
    thisArg = thisArg ?? globalThis;
    //յունիք բանալիի ստեղծում 
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