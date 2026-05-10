"use strict";
function simpleDelay() {
  setTimeout(() => {
    console.log("Hello after 2 seconds");
  }, 2000);
}
simpleDelay();
//2
for (let i = 5; i >= 1; i--) {
  setTimeout(
    () => {
      console.log(i);
      if (i === 1) {
        console.log("go!");
      }
    },
    (6 - i) * 1000,
  );
}
//3
const timer = setInterval(() => {
  console.log("Executed");
}, 5000);
setTimeout(() => {
  clearInterval(timer);
  console.log("Stop");
}, 2000);
//4
// let n = 1
// setInterval(() => {
//   console.log(n++);
// }, 1000);
function repeat(count) {
  console.log(count);
  setTimeout(() => {
    repeat(count + 1);
  }, 1000);
}
repeat(1);

//part 2
//5
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
//start
//end
//timeout

//6
setTimeout(() => console.log("A"), 1000);

setTimeout(() => console.log("B"), 0);

console.log("C");
//C
//B
//A

//7
function delay(message, time) {
  setTimeout(() => {
    console.log(message);
  }, time);
}
delay("Hello", 3000);
//8
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Data Loaded"), 2000);
}).then((res) => {
  console.log(res);
});
//9
const myReject = new Promise((reject) => {
  reject("server error");
}).catch((error) => {
  console.log(error);
});
//10
function pay(balance, amount) {
  return new Promise((resolve, reject) => {
    if (amount <= balance) {
      resolve("Payment successful");
    } else {
      reject("Not enough money");
    }
  });
}
pay(1000, 300)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
//11
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Jhon" });
    }, 1000);
  });
}
function getPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userID: user.id, post: "some post" });
    }, 1000);
  });
}
function getComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ post: post.post, comments: ["like", "cool"] });
    }, 1000);
  });
}
getUser()
  .then((user) => getPosts(user))
  .then((post) => getComments(post))
  .then((res) => console.log(res));
//12
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);
Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
//1
//4
//3
//2

//13
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

Promise.resolve().then(() => {
  console.log("C");
});

setTimeout(() => {
  console.log("D");
}, 0);

console.log("E");
//A
//E
//B
//C
//D

//14
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside timeout");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");
//start
//end
//Promise 1
//Timeout 1
//Promise inside timeout
//Timeout 2

//part 5
//15
function wait(light, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(light);
      resolve();
    }, time);
  });
}
function trafficLight() {
  wait("red", 3000)
    .then(() => wait("yellow", 1000))
    .then(() => wait("green", 2000))
    .then(() => trafficLight());
}
trafficLight();

//16
function downloadFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("downloading....");
      resolve();
    }, 2000);
  });
}
function resizeImage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Resizing...");
      resolve();
    }, 3000);
  });
}
function uploadFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Uploading...");
      resolve();
    }, 4000);
  });
}
function result() {
  downloadFile()
    .then(() => resizeImage())
    .then(() => uploadFile());
}

//17
//Call Stack
//The Call Stack is a data structure that keeps track of function
// execution in JavaScript.
// It follows the LIFO (Last In, First Out) principle,
// meaning the last function that enters the stack
// is the first one to be executed and removed.
//Web API
// Web APIs are features provided by the browser (not JavaScript
// itself) that allow us to perform asynchronous operations.
// Examples include setTimeout, fetch, DOM events, etc. These
// tasks are handled outside the Call Stack.
//Microtask Queue
// The Microtask Queue is a queue that stores high-priority asynchronous tasks.
// It mainly includes Promises (.then, catch, finally) and queueMicrotask callbacks.
// It uses FIFO (First In, First Out) order and has higher priority than the Macrotask Queue.
//Macrotask Queue
// The Macrotask Queue contains lower-priority asynchronous tasks such as:
// setTimeout, setInterval, UI events, and others.
// Tasks are executed in FIFO order, after the Microtask Queue is fully processed.
//Event Loop
// The Event Loop is a mechanism that coordinates execution
// between the Call Stack and the queues.
// It ensures that:
// Synchronous code runs first in the Call Stack
// Microtasks are executed next
// Macrotasks are executed after that
// This cycle repeats continuously

//Bonus Tasks
function newWait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("waiting......");
      resolve();
    }, ms);
  });
}
newWait(2000).then(() => {
  console.log("DONE");
});
//hard challenge
console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");

setTimeout(() => {
  console.log("6");
}, 0);
//1 - call stack
//5 - call stack
//4 - microtasck queue - call stack
//2 - macrotask queue - call stack
//3 - microtask queue( inside macrotask 1)- call stack
//6 - macrotask queue - call stack
