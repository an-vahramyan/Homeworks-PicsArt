"use strict";

const { requestFormReset } = require("react-dom");

//1 Global Logger Topic
class DataStore {
  username = "admin";
}
const store = new DataStore();
const proxyStore = new Proxy(store, {
  get(target, prop) {
    console.log(`Reading property: ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`writing property: ${prop} = ${value}`);
    // target[prop] = value;
    Reflect.set(target, prop, value);
    return true;
  },
});
console.log(proxyStore.username);
proxyStore.theme = "dark";

//2 Safe Access (Default Values) Topic
const withDefaults = (obj, defaultValue) => {
  return new Proxy(obj, {
    get(target, prop) {
      const returnValue = Reflect.has(target, prop);
      if (!returnValue) {
        return defaultValue;
      }
      return Reflect.get(target, prop);
    },
  });
};
const user = withDefaults({ name: "Alice" }, "Not provided");

console.log(user.name);
console.log(user.age);

//3 Strict Typing (Type Validator) Topic
class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}
const p1 = new Product();
const productProxy = new Proxy(p1, {
  set(target, prop, value) {
    if (prop === "price" && (typeof value !== "number" || value < 0)) {
      throw new TypeError("");
    }
    Reflect.set(target, prop, value);
    return true;
  },
});

productProxy.price = 1200;
// productProxy.price = -50;
// productProxy.price = "Free";
console.log(productProxy.price);

//4 Protection from Deletion (Undeletable) Topic
const config = { apiEndpoint: "https://api.example.com", retries: 3 };

const safeConfig = new Proxy(config, {
  deleteProperty(target, prop) {
    console.log(`Warning: Deletion of property ${prop} is forbidden.`);
    return false;
  },
});

safeConfig.retries = 5;
delete safeConfig.apiEndpoint;

console.log(safeConfig.apiEndpoint);
//5 Hidden Properties Topic

const account = { username: "bob", _password: "supersecret123", balance: 100 };

const secureAccount = new Proxy(account, {
  get(target, prop) {
    if (prop.startsWith("_")) {
      return undefined;
    }
    return Reflect.get(target, prop);
  },
  has(target, prop) {
    if (prop.startsWith("_")) {
      return false;
    }
    return Reflect.has(target, prop);
  },
  ownKeys(target) {
    return Reflect.ownKeys(target).filter((e) => !e.startsWith("_"));
  },
});
console.log(secureAccount._password);
console.log("_password" in secureAccount);
console.log(Object.keys(secureAccount));

//6 Python-like Arrays (Negative Indices) Topic
const arr = [10, 20, 30, 40];

const pythonArray = new Proxy(arr, {
  get(target, prop) {
    const index = Number(prop);
    if (!isNaN(index)) {
      if (index >= 0) {
        return Reflect.get(target, index);
      } else if (index < 0) {
        const realIndx = target.length + index;
        return Reflect.get(target, realIndx);
      }
    }
    return Reflect.get(target, prop);
  },
});

console.log(pythonArray[0]);
console.log(pythonArray[-1]);
console.log(pythonArray[-2]);

//7 Deep Read-Only (Object Freezing) Topic
// TODO: Implement makeImmutable(obj)
function makeImmutable(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      if (typeof target[prop] === "object" && target[prop] !== null) {
        return makeImmutable(target[prop]);
      }
      return target[prop];
    },
    set(target, prop, value) {
      throw new Error("Object is immutable");
    },
    deleteProperty(target, prop) {
      throw new Error("Object is immutable");
    },
    setPrototypeOf() {
      throw new Error("Object is immutable");
    },
  });
}
const constantData = makeImmutable({ version: "1.0.0" });

// constantData.version = "1.0.1"; // Should throw Error
// delete constantData.version; // Should throw Error

console.log(constantData.version);

//8 Smart Constructor (Singleton Pattern) Topic
class DatabaseConnection {
  constructor() {
    this.id = Math.random();
  }
}
let instance = null;
const SingletonDB = new Proxy(DatabaseConnection, {
  construct(target, args, newTarget) {
    if (!instance) {
      instance = new target(...args);
    }
    return instance;
  },
});

const db1 = new SingletonDB();
const db2 = new SingletonDB();

console.log(db1.id === db2.id);

//9  Execution Tracker (Function Profiler) Topic
function slowTask(iterations) {
  let count = 0;
  for (let i = 0; i < iterations; i++) count++;
  return count;
}

function profile(fn) {
  return new Proxy(fn, {
    apply(target, thisArg, args) {
      const start = performance.now();

      const result = Reflect.apply(target, thisArg, args);

      const end = performance.now();

      console.log(`Execution time: ${(end - start).toFixed(4)} ms`);

      return result;
    },
  });
}

const profiledTask = profile(slowTask);
console.log(profiledTask(10000000));

//10 Auto-Bind Context Topic
class Service {
  name = "AuthService";
  getName() {
    return this.name;
  }
}

const service = new Service();
const boundService = new Proxy(service, {
  get(target, prop) {
    const value = target[prop];

    if (typeof value === "function") {
      return value.bind(target);
    }
    return value;
  },
});

const detachedMethod = boundService.getName;
console.log(detachedMethod());

//11 Dynamic Builder (Chainable Methods) Topic
function createQueryBuilder() {
  const steps = [];

  const handler = {
    get(target, prop) {
      if (prop === "execute") {
        return () => {
          return `Query steps: ${JSON.stringify(steps)}`;
        };
      }
      return (...args) => {
        steps.push({ method: prop, args });
        return new Proxy(target, handler);
      };
    },
  };
  return new Proxy({}, handler);
}
const queryBuilder = createQueryBuilder();
const query = queryBuilder
  .select("id", "name")
  .where("age", 18)
  .limit(10)
  .execute();

console.log(query);
