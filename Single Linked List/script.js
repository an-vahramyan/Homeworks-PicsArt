"use strict";
class Node {
  value;
  #next;

  constructor(value, next = null) {
    this.value = value;
    this.#next = next;
  }
  get next() {
    return this.#next;
  }
  set next(value) {
    this.#next = value;
  }
}
class SinglyLinkedList {
  #head;
  constructor(head = null) {
    this.#head = head;
  }
  isEmpty() {
    return this.#head === null;
  }
  size() {
    if (this.isEmpty()) {
      return 0;
    }
    let len = 0;
    let current = this.#head;
    while (current) {
      len++;
      current = current.next;
    }
    return len;
  }
  clear() {
    this.#head = null;
  }
  front() {
    if (this.isEmpty()) {
      throw new Error("is empty");
    }
    return this.#head.value;
  }
  back() {
    if (this.isEmpty()) {
      throw new Error("is empty");
    }
    let current = this.#head;
    while (current.next) {
      current = current.next;
    }
    return current.value;
  }
  at(index) {
    if (!Number.isInteger(index)) {
      throw new Error("index is not integer");
    }
    if (this.isEmpty()) {
      throw new Error("is empty");
    }
    if (index < 0 || index >= this.size()) {
      throw new Error("invalid index");
    }
    let current = this.#head;
    while (index != 0) {
      --index;
      current = current.next;
    }
    return current.value;
  }
  pushFront(value) {
    if (this.isEmpty()) {
      this.#head = new Node(value);
      return;
    }
    let newN = new Node(value);
    newN.next = this.#head;
    this.#head = newN;
  }
  pushBack(value) {
    if (this.isEmpty()) {
      this.#head = new Node(value);
      return;
    }
    if (this.#head.next === null) {
      this.#head.next = new Node(value);
      return;
    }
    let current = this.#head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }
  popFront() {
    if (this.isEmpty()) {
      throw new Error("is empty");
    }

    let res = this.#head.value;
    this.#head = this.#head.next;
    return res;
  }
  popBack() {
    if (this.isEmpty()) {
      throw new Error("is empty");
    }
    if (this.#head.next === null) {
      let res = this.#head.value;
      this.#head = null;
      return res;
    }
    let current = this.#head;
    while (current.next.next) {
      current = current.next;
    }
    let res = current.next.value;
    current.next = null;
    return res;
  }
  insert(index, value) {
    if (this.isEmpty()) {
      this.#head = new Node(value);
      return;
    }
    if (!Number.isInteger(index)) {
      throw new Error("index is not integer");
    }
    if (index > this.size()) {
      throw new Error("invalid index");
    }
    if (index === 0) {
      this.pushFront(value);
      return;
    }
    let current = this.#head;
    while (index != 1 && current) {
      current = current.next;
      --index;
    }
    let newN = new Node(value);
    newN.next = current.next;
    current.next = newN;
  }
  erase(index) {
    if (this.isEmpty()) {
      throw new Error("is empty");
    }
    if (!Number.isInteger(index)) {
      throw new Error("index is not integer");
    }
    if (index < 0 || index >= this.size()) {
      throw new Error("invalid index");
    }
    if (index === 0) {
      this.popFront();
      return;
    }
    let current = this.#head;
    while (index != 1 && current) {
      current = current.next;
      --index;
    }

    current.next = current.next.next;
  }
  toArray() {
    let res = new Array(this.size());
    let current = this.#head;
    let i = 0;
    while (current) {
      res[i++] = current.value;
      current = current.next;
    }
    return res;
  }
  find(value) {
    let index = 0;
    let current = this.#head;
    while (current) {
      if (current.value === value) {
        return index;
      }
      ++index;
      current = current.next;
    }
    return -1;
  }
  contains(value) {
    let current = this.#head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  reverse() {
    if (!this.#head) {
      return this.#head;
    }
    let prev = null;
    let current = this.#head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.#head = prev
    return this;
  }
  *entries() {
    let current = this.#head;
    let index = 0;
    while(current){
      yield [index++, current.value];
      current = current.next
    }
  }
  [Symbol.iterator]() {
    let current = this.#head;
    return {
      next: () => {
        if (current) {
          let value = current.value;
          current = current.next;
          return { value, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}
