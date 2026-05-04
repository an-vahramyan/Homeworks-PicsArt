"use strict";
// 1. Object Deduplication (Map)
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Anna" },
  { id: 1, name: "John" }, // duplicate
];
function getUniqueUsers(users) {
  let uniqueByMap = [...new Map(users.map((item) => [item.id, item])).values()];
  return uniqueByMap;
}
console.log(getUniqueUsers(users));

// 2. Serialization and Deserialization (Map + JSON)
const myMap = new Map([
  ["a", 1],
  ["b", 2],
]);
function mapToJson(map) {
  return JSON.stringify(Object.fromEntries(map));
}
function jsonToMap(jsonStr) {
  return new Map(Object.entries(JSON.parse(jsonStr)));
}
const jsonStr = mapToJson(myMap);
console.log(jsonStr);

const restoredMap = jsonToMap(jsonStr);
console.log(restoredMap);

// 3. Data Grouping (Map)
const students = [
  { name: "John", group: "A" },
  { name: "Anna", group: "B" },
  { name: "Max", group: "A" },
];
function groupByGroup(students) {
  let map = new Map();
  for (let key of students) {
    const group = key.group;
    const name = key.name;
    if (!map.has(group)) {
      map.set(group, [name]);
    } else {
      let arr = map.get(group);
      arr.push(name);
    }
  }
  return map;
}
console.log(groupByGroup(students));
// 4. "Likes" System and References (WeakMap)
let post1 = { title: "JS is awesome" };
let post2 = { title: "Node.js event loop" };
const likes = new WeakMap();
function addLike(post, user) {
  if (!likes.has(post)) {
    likes.set(post, [user]);
  } else {
    let arr = likes.get(post);
    arr.push(user);
  }
  return likes;
}
function getLikes(post) {
  return likes.get(post) || [];
}
addLike(post1, "John");
addLike(post1, "Anna");
console.log(getLikes(post1)); // ['John', 'Anna']
console.log(getLikes(post2)); // [] or undefined

//Tasks on Practical Application of Sets (Set)
// 5. Spam Filter (Set instead of Array)
const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];
const badWordsSet = new Set(badWords);
function filterSpam(text, badWords) {
  let words = text
    .split(" ")
    .map((word) => (badWordsSet.has(word) ? "****" : word));

  return words.join(" ");
}
console.log(filterSpam(text, badWords));

// 6. Math with Basic Loops (Set)
const setA = new Set(["reading", "games", "music"]);
const setB = new Set(["games", "sports"]);

function intersection(setA, setB) {
  let intersection_result = new Set();
  for (let elem of setA) {
    if (setB.has(elem)) {
      intersection_result.add(elem);
    }
  }
  return intersection_result;
}
function difference(setA, setB) {
  let difference_result = new Set();
  for (let elem of setA) {
    if (!setB.has(elem)) {
      difference_result.add(elem);
    }
  }
  return difference_result;
}
console.log(intersection(setA, setB));
console.log(difference(setA, setB));

//Tasks on Garbage Collection and Objects (WeakMap / WeakSet)
// 7.  "Processed" Flags for DOM Elements or Objects (WeakSet)
const notif1 = { id: 1, text: "Message 1" };
const notif2 = { id: 2, text: "Message 2" };
let notify = new WeakSet();
function processNotification(n) {
  if (notify.has(n)) {
    return "Already processed, ignoring";
  } else {
    notify.add(n);
    return `Processed: ${n.text}`;
  }
}

console.log(processNotification(notif1)); // "Processed: Message 1"
console.log(processNotification(notif1)); // "Already processed, ignoring"
console.log(processNotification(notif2)); // "Processed: Message 2"

// 8. Caching "Heavy" Operations (WeakMap)
const dataObj = { value: 10 };
let memo = new WeakMap();
function heavyCalc(obj) {
  if (memo.has(obj)) {
    return memo.get(obj);
  } else {
    for (let i = 0; i < 1e7; ++i) {}
    let result = obj.value * 10;
    memo.set(obj, result);
    return result;
  }
}
console.log(heavyCalc(dataObj));
console.log(heavyCalc(dataObj));

//Tasks on Metaprogramming and Iterators
// 9.  Manual Control of Built-in Iterators (Map)
const mixedMap = new Map([
  [1, "num"],
  ["str", "text"],
  [true, false],
]);
let iterator = mixedMap.entries();
let step = iterator.next();
while (!step.done) {
  let [key, val] = step.value;
  if (typeof val === "string") {
    console.log([key, val]);
  }
  step = iterator.next();
}
// 10. Unobtrusive Statistics Collector (Proxy + WeakMap)
const original = { a: 1, b: 2 };
let stats = new WeakMap();
const proxy = trackAccess(original);

// let count = 0;
function trackAccess(obj) {
  stats.set(obj, 0);
  return new Proxy(obj, {
    get(target, prop) {
      let current = stats.get(obj);
      stats.set(obj, current + 1);
      return Reflect.get(target, prop);
    },
  });
}
function getStats(obj) {
  return stats.get(obj);
}
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);

console.log(getStats(original));
