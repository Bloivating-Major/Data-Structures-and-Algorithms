# 📚 JavaScript Array Operations: Advanced Techniques Guide

Welcome to the advanced techniques guide for JavaScript arrays! In this session, we will explore various operations that can be performed on arrays, including summing elements, finding the greatest and second greatest elements, checking if an array is sorted, deep copying, rotating elements, and more. Let’s dive in! 🚀

[⬅️ Go Back](./Readme.md)

## Table of Contents 📑
1. [Sum of Array Elements](#sum-of-array-elements)
2. [Greatest Element in Array](#greatest-element-in-array)
3. [Second Greatest Element in Array](#second-greatest-element-in-array)
4. [Is Array Sorted?](#is-array-sorted)
5. [Deep Copy of an Array](#deep-copy-of-an-array)
6. [Left Rotate Array Elements](#left-rotate-array-elements)
7. [Block Swap Algorithm](#block-swap-algorithm)

---

## Sum of Array Elements ➕
To calculate the sum of all elements in an array, you can iterate through the array and accumulate the total:

```javascript
function Question38() {
  let arr = [10, 15, 20, 25, 30];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum); // Output: 100
}
```

---

## Greatest Element in Array 🌟
To find the greatest element in an array, you can compare each element and keep track of the maximum:

```javascript
function Question39() {
  let arr = [10, 5, 2, 37, 8];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  console.log(max); // Output: 37
}
```

---

## Second Greatest Element in Array 🥈
To find the second greatest element, you can maintain two variables for the maximum and second maximum:

```javascript
function Question40() {
  let arr = [10, 5, 2, 37, 37, 15];
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    }
    if (arr[i] < max1 && arr[i] > max2) {
      max2 = arr[i];
    }
  }
  console.log(max1, max2); // Output: 37 15
}
```

---

## Is Array Sorted? 📏
To check if an array is sorted in ascending order, you can compare adjacent elements:

```javascript
function Question41() {
  let arr = [5, 2, 8, 4];
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (!(arr[i] < arr[i + 1])) isSorted = false;
    break; // This should be removed to check all elements
  }
  if (isSorted) console.log("Sorted");
  else console.log("Unsorted"); // Output: Unsorted
}
```

---

## Deep Copy of an Array 🛠️
To create a deep copy of an array (including nested arrays), you can use `JSON.parse` and `JSON.stringify`:

```javascript
function Question42() {
  let normal = [1, [2], 3];
  let deep = JSON.parse(JSON.stringify(normal));
  normal[1][0] = 4;
  console.log(normal); // Output: [1, [4], 3]
  deep[1][0] = 5;
  console.log(deep); // Output: [1, [2], 3]
}
```

---

## Left Rotate Array Elements 🔄
To left rotate the elements of an array, you can shift elements to the left and wrap the first element to the end:

```javascript
function Question43() {
  let arr = [1, 2, 3, 4, 5];
  let temp = arr[0];
  console.log(arr); // Output: [1, 2, 3, 4, 5]
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " "); // Output: 2 3 4 5 1
  }
}
```

---

## Block Swap Algorithm 🔄
The Block Swap Algorithm allows you to rotate an array efficiently by reversing segments of the array:

```javascript
function Question44() {
  let arr = [1, 2, 3, 4, 5];
  let k = 3;
  k = k % arr.length;

  if (k == 0) console.log(arr);
  else {
    arr = Reverse(arr, 0, k - 1);
    arr = Reverse(arr, k, arr.length - 1);
    arr = Reverse(arr, 0, arr.length - 1);
    console.log(arr); // Output: [4, 5, 1, 2, 3]
  }
}

function Reverse(arr, initial, kthIndex) {
  let i = initial, j = kthIndex;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++, j--;
  }
  return arr;
}
```

---

## Conclusion 🎉
In this guide, we explored various advanced operations on arrays, including summing elements, finding the greatest and second greatest elements, checking if an array is sorted, deep copying, rotating elements, and implementing the block swap algorithm. These techniques are essential for effective data manipulation in JavaScript. Keep practicing, and happy coding! 💻✨