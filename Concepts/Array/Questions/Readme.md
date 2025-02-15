# 🚀 JavaScript Array & Matrix Problems

This repository contains JavaScript implementations of various array and matrix problems, including sorting, searching, and number manipulations.

---

## 📌 Problem List & Solutions
 
- [1. Sort Colors](#1️⃣-sort-colors-dutch-national-flag-algorithm)
- [2. Move All Negatives to Left](#2️⃣-move-all-negatives-to-left)
- [3. Find Duplicates](#3️⃣-find-duplicates)
- [4. First Repeating Element](#4️⃣-first-repeating-element)
- [5. First Non Repeating Element](#5️⃣-first-non-repeating-element)
- [6. First Element Appearing k Times](#6️⃣-first-element-appearing-k-times)
- [7. Common Elements in 3 Sorted Arrays](#7️⃣-common-elements-in-3-sorted-arrays)
- [8. Wave Print A Matrix](#8️⃣-wave-print-a-matrix)
- [9. Add Two Numbers Represented by Arrays](#9️⃣-add-two-numbers-represented-by-arrays)


### 1️⃣ Sort Colors (Dutch National Flag Algorithm)
```javascript
function SortColors() {
  let arr = [2, 0, 2, 1, 1, 0];
  console.log(arr);

  let low = 0, medium = 0;
  let high = arr.length - 1;

  while (medium <= high) {
    if (arr[medium] == 0) {
      [arr[low], arr[medium]] = [arr[medium], arr[low]];
      low++;
      medium++;
    } else if (arr[medium] == 1) medium++;
    else {
      [arr[high], arr[medium]] = [arr[medium], arr[high]];
      high--;
    }
  }
  console.log(arr);
}
```
---

### 2️⃣ Move All Negatives to Left
```javascript
function MoveAllNegativesToLeft() {
  let arr = [1, 2, -3, 4, -5, 6];
  let low = 0, high = arr.length - 1;
  while (low < high) {
    if (arr[low] < 0) {
      low++;
    } else if (arr[high] > 0) {
      high--;
    } else {
      [arr[low], arr[high]] = [arr[high], arr[low]];
    }
  }
  console.log(arr);
}
```
---

### 3️⃣ Find Duplicates
```javascript
function FindDuplicates() {
  let arr = [1, 3, 4, 2, 2];
  let i = 0;
  while (arr[i] !== arr[arr[i]]) {
    [arr[arr[i]], arr[i]] = [arr[i], arr[arr[i]]];
  }
  console.log(arr[i]);
}
```
---

### 4️⃣ First Repeating Element
```javascript
function FirstRepeatingElement() {
  let arr = [1, 5, 3, 4, 3, 5, 6];
  let map = new Map();
  let minIndex = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      minIndex = Math.min(minIndex, map.get(arr[i]));
    } else map.set(arr[i], i + 1);
  }
  return minIndex === Infinity ? -1 : minIndex;
}
```
---

### 5️⃣ First Non-Repeating Element
```javascript
function FirstNonRepeatingElement() {
  let arr = [2, 2, 3, 3, 4, 4];
  let map = new Map();
  let ans = -1;
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let num of arr) {
    if (map.get(num) == 1) {
      ans = num;
      break;
    }
  }
  console.log(ans !== -1 ? `${ans} is the first non-repeating element` : `All elements repeat`);
}
```
---

### 6️⃣ First Element Appearing K Times
```javascript
function FirstElementAppearKTimes() {
  let arr = [5, 1, 2, 1, 2, 3, 2], k = 3;
  let map = new Map();
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let num of arr) {
    if (map.get(num) == k) {
      console.log(num);
      return;
    }
  }
  console.log(-1);
}
```
---

### 7️⃣ Common Elements in 3 Sorted Arrays
```javascript
function CommonElementsIn3SortedArrays() {
  let arr1 = [1, 5, 10, 20, 40, 80],
    arr2 = [6, 7, 20, 80, 100],
    arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
  let i = 0, j = 0, k = 0;
  let set = new Set();
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
      set.add(arr1[i]);
      i++, j++, k++;
    } else if (arr1[i] < arr2[j]) i++;
    else if (arr2[j] < arr3[k]) j++;
    else k++;
  }
  console.log([...set]);
}
```
---

### 8️⃣ Wave Print a Matrix
```javascript
function WavePrintAMatrix() {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let row = arr.length;
  let col = arr[0].length;
  for (let i = 0; i < col; i++) {
    if ((i & 1) == 0) {
      for (let j = 0; j < row; j++) {
        process.stdout.write(` ${arr[j][i]} `);
      }
    } else {
      for (let j = row - 1; j >= 0; j--) {
        process.stdout.write(` ${arr[j][i]} `);
      }
    }
    console.log();
  }
}
```
---

### 9️⃣ Add Two Numbers Represented by Arrays
```javascript
function AddTwoNumberRepresentedByArray() {
  let A = [0, 9, 0, 0, 3, 5], B = [2, 2, 7];
  let carry = 0, ans = [];
  let i = A.length - 1, j = B.length - 1;
  while (i >= 0 || j >= 0 || carry) {
    let sum = (i >= 0 ? A[i--] : 0) + (j >= 0 ? B[j--] : 0) + carry;
    ans.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  console.log(ans.reverse().join(''));
}
```
---

### 🎯 Summary
These problems cover various array manipulation techniques, including sorting, searching, hash maps, and matrix traversal. 🚀

Happy coding! 🎉

