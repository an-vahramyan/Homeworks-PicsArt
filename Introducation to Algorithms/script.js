"us strict";
//1 Linear Search
function linearSearch(arr, target) {
  let steps = 0;
  for (let i = 0; i < arr.length; ++i) {
    steps++;
    if (arr[i] === target) {
      console.log("Time", steps + "ms");
      return i;
    }
  }
  console.log("Time:", steps + " ms");
  return -1;
}
let a = [10, 20, 30, 40, 50];
let b = [10, 50, 40, 90, 80, 88, 11];
console.log(linearSearch(a, 30));
console.log(linearSearch(b, 14));

//2 Bubble Sort
function bubbleSort(arr) {
  let steps = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = 0; j < arr.length - i - 1; ++j) {
      steps++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("steps:", steps);
  return arr;
}
let array = [1, 4, 5, 2, 3, 7, -1, 4];
console.log(bubbleSort(array));
