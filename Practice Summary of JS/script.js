"use strict";
//BLOCK 1: JSON (JavaScript Object Notation)
//1. Basic Serialization
class Player {
  constructor(name, score, isOnline = true) {
    this.name = name;
    this.score = score;
    this.isOnline = isOnline;
  }
}
const player = new Player("Alex", 1500);
const jsonStr = JSON.stringify(player);
// --- TEST CASES ---
console.log("Task 1.1:", typeof jsonStr === "string"); //true
console.log("Task 1.2:", jsonStr.includes("Alex") && jsonStr.includes("1500")); //true

//2. Basic Deserialization
const str = '{"title": "Epic Sword", "damage": 50}';
const obj = JSON.parse(str);
// --- TEST CASES ---
console.log("Task 2:", obj !== undefined && obj.damage === 50); //true

//3.Pretty Print (Formatting)
const user = { username: "dev", stats: { level: 10 } };
const prettyJson = JSON.stringify(user, null, 4);
// --- TEST CASES ---
console.log("Task 3:", prettyJson.includes('\n    "username"'));

//4. Ignored Data Types
class Hero {
  constructor(health = 100, mana = undefined) {
    ((this.health = health), (this.mana = mana));
  }
  attack() {}
}
const hero = new Hero();
const restoredHero = JSON.parse(JSON.stringify(hero));
// --- TEST CASES ---
console.log("Task 4.1:", restoredHero.health === 100);
console.log("Task 4.2:", restoredHero.hasOwnProperty("mana") === false);
console.log("Task 4.3:", restoredHero.attack === undefined);

//5. Deep Copy Hack
const original = { items: ["apple", "potion"] };
const copy = JSON.parse(JSON.stringify(original));
copy.items.push("sword");
// --- TEST CASES ---
console.log("Task 5.1:", copy.items.length === 3);
console.log("Task 5.2:", original.items.length === 2);

//BLOCK 2 Date Object
//6 - current time components
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
// --- TEST CASES ---
console.log("Task 6.1:", typeof year === "number" && year >= 2024);
console.log("Task 6.2:", month >= 0 && month <= 11);
//7 - Setting a Specific Date
let futureDate = new Date();
futureDate.setFullYear(2030, 0, 1);
// --- TEST CASES ---
console.log("Task 7.1:", futureDate.getFullYear() === 2030);
console.log("Task 7.2:", futureDate.getMonth() === 0);
//8 - Time Difference (Benchmarking)
const start = Date.now();
for (let i = 0; i < 1_000_000; ++i) {}
const end = Date.now();
const duration = end - start;
// --- TEST CASES ---
console.log("Task 8:", typeof duration === "number" && duration >= 0);
//9 - The Time Machine (Setters)
const d = new Date();
d.setDate(d.getDate() + 5);
// --- TEST CASES ---
const expectedDiff = 5 * 24 * 60 * 60 * 1000;
const actualDiff = d.getTime() - new Date().getTime();
console.log("Task 9:", actualDiff >= expectedDiff - 1000);
//10 - Internationalization (Intl)
const formatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
const formattedDate = formatter.format(new Date());
// --- TEST CASES ---
console.log(
  "Task 10:",
  typeof formattedDate === "string" && formattedDate.length > 10,
);

//BLOCK 3: ArrayBuffer and Typed Arrays
//11 - Creating a Buffer
let buffer = new ArrayBuffer(16);
// --- TEST CASES ---
console.log("Task 11:", buffer.byteLength === 16);

//12 - Writing via Typed Array
let buf = new ArrayBuffer(16);
let int32View = new Int32Array(buf);
int32View[0] = 42;
// --- TEST CASES ---
console.log("Task 12.1:", int32View[0] === 42);
console.log("Task 12.2:", int32View.length === 4);

//13 - Standard Array to Binary
const normalArray = [10, 20, 255];
// let uint8View = new Uint8Array(normalArray); 
// --- TEST CASES ---
console.log("Task 13.1:", uint8View instanceof Uint8Array);
console.log("Task 13.2:", uint8View[2] === 255);

//14 -  Memory Overflow
// --- YOUR CODE HERE ---
// let uint8View = new Uint8Array(1);
// uint8View[0] = 300;

// --- TEST CASES ---
console.log("Task 14:", uint8View[0] === 44); // 300 % 256

//15 - Multiple Views on One Buffer
// --- YOUR CODE HERE ---
let bfr = new ArrayBuffer(4);
let uint8View = new Uint8Array(bfr);
let int = new Int32Array(bfr);
int[0] = 258;

// --- TEST CASES ---
console.log("Task 15.1:", uint8View[0] === 2);
console.log("Task 15.2:", uint8View[1] === 1);

//BLOCK 4: Set, Map, WeakMap, WeakSet

//16 - Unique Values (Set)
const ids = [1, 2, 2, 3, 4, 1];
let uniqueIds = [...new Set(ids)];
// --- TEST CASES ---
console.log("Task 16.1:", uniqueIds.length === 4);
console.log("Task 16.2:", Array.isArray(uniqueIds));

//17 -  Objects as Keys (Map)
class Student {
  constructor(name) { this.name = name; }
}
const s1 = new Student("Alice");
const s2 = new Student("Bob");

// --- YOUR CODE HERE ---
let gradesMap = new Map();
gradesMap.set(s1, [90, 95]);
gradesMap.set(s2, [80, 85]);

// --- TEST CASES ---
console.log("Task 17.1:", gradesMap.get(s1)[0] === 90);
console.log("Task 17.2:", gradesMap.size === 2);

//18 - Iterating a Map
const map = new Map([["x", 1], ["y", 2], ["z", 3]]);
let sum = 0;

// --- YOUR CODE HERE ---
for(const [key, value] of map){
    sum += value;
}

// --- TEST CASES ---
console.log("Task 18:", sum === 6);

//19 - Hidden Class Data (WeakMap)
const secrets = new WeakMap();

class Player {
    constructor(token){
        secrets.set(this, token);
    }
    getSecret(){
        return secrets.get(this);
    }
}
const p1 = new Player ("super_secret");
// --- TEST CASES ---
console.log("Task 19.1:", p1.getSecret() === "super_secret");
console.log("Task 19.2:", p1.token === undefined);

//20 - Tracking State (WeakSet)
const data1 = { id: 1};
const data2 = { id:2 };

const processedData = new WeakSet();
processedData.add(data1);

// --- TEST CASES ---
console.log("Task 20.1:", processedData.has(data1) === true);
console.log("Task 20.2:", processedData.has(data2) === false);