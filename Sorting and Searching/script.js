"use strict";
//Insertion sort tasks
//1. Basic Insertion Sort
function insertionSortAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
let nums = [5, 2, 9, 1, 7];
console.log(insertionSortAscending(nums));
// 2.  Descending Insertion Sort
function insertionSortDescending(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
let n = [4, 1, 8, 3];
console.log(insertionSortDescending(n));

// 3. Insertion Sort for Objects

function sortingObj(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j].age > key.age) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
let array_of_obj = [
  { name: "Anna", age: 22 },
  { name: "John", age: 18 },
  { name: "Mike", age: 30 },
];
console.log(sortingObj(array_of_obj));

//Binary search tasks
// 4. - Basic Iterative Binary Search
// function binarySearch(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((end - start) / 2 + start);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return -1;
// }
let a = [1, 3, 4, 5, 7, 9];
console.log(binarySearch(a, 7));
// 5. - Count Iterations
function iterativeBinary(arr, target) {
  let count = 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    count++;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return { index: mid, iterations: count };
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return { index: -1, iterations: count };
}
console.log(iterativeBinary([1, 3, 4, 5, 7, 9], 9));

//6 - Basic Recursive Binary Search
function binaryRecursive(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binaryRecursive(arr, target, mid + 1, end);
  } else {
    return binaryRecursive(arr, target, start, mid - 1);
  }
}
console.log(binaryRecursive([1, 3, 4, 5, 7, 9], 9));

// 7 - Return Number Recursive Calls
function countRecursive(
  arr,
  target,
  start = 0,
  end = arr.length - 1,
  count = 0,
) {
  count++;
  if (start > end) {
    return { index: -1, calls: count };
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return { index: mid, calls: count };
  } else if (arr[mid] < target) {
    return countRecursive(arr, target, mid + 1, end, count);
  } else {
    return countRecursive(arr, target, start, mid - 1, count);
  }
}
console.log(countRecursive([1, 3, 4, 5, 7, 9], 9));

// 8 - Search in String Array
function binaryString(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binaryString(arr, target, mid + 1, end);
  } else {
    return binaryString(arr, target, start, mid - 1);
  }
}
console.log(binaryString(["apple", "banana", "kiwi", "orange"], "kiwi"));

//9 -  Binary Search + Insert Position
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((end - start) / 2 + start);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}
function searchAndPosition(arr, target) {
  let res = binarySearch(arr, target);
  arr.splice(res, 0, target);
  return arr;
}
console.log(searchAndPosition([1, 3, 5, 7], 4));

//10 - Build Your Own Search Utility
class SearchUtils {
  insertionSort(arr) {
    for (let i = 1; i < arr.length; ++i) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  iterativeBinarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
  recursiveBinarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
      return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      return this.recursiveBinarySearch(arr, target, mid + 1, end);
    } else {
      return this.recursiveBinarySearch(arr, target, start, mid - 1);
    }
  }
}
const utils = new SearchUtils();
console.log(utils.insertionSort([4, 1, 3]));
console.log(utils.iterativeBinarySearch([1, 2, 3], 2));
console.log(utils.recursiveBinarySearch([1, 2, 3, 4], 3));

//Challenge Tasks
//11 - Visualize Insertion Sort
function visualizer(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    let step = 0;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      step++;
    }
    arr[j + 1] = key;
    console.log(`step ${step}:`, arr);
  }
  return arr;
}
console.log(visualizer([5, 2, 4, 1]));
//12 - Recursive Insertion Sort
function insertionRecursive(arr, n = arr.length) {
  if (n <= 1) return arr;
  insertionRecursive(arr, n - 1);
  let last = arr[n - 1];
  let j = n - 2;

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = last;
  return arr;
}
console.log(insertionRecursive([5, 2, 4, 1, 0]));
