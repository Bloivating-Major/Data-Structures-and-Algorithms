# 📌 **2D Arrays in JavaScript**

Welcome to the **2D Arrays Assignment**! 🚀 This guide covers everything you need to know about **creating, manipulating, and performing operations** on **2D arrays** in JavaScript. Let’s dive in! 🔥

---

## 📜 **What is a 2D Array?**
A **2D array** is an array of arrays, where each sub-array represents a row in a table. It is often used for **matrix operations, tabular data processing**, and **graph-related problems**.

### ✅ **Declaration of a 2D Array**
```javascript
let twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```
Here, we have a **3x3 matrix** stored in a 2D array.

---

## 📊 **Creating & Displaying a 2D Array**
We can create a 2D array using nested arrays and use `console.table()` to print it beautifully. 😍

```javascript
let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];

console.table(MathScore);
```
🎯 **Output:** Displays the array in table format.

---

## 🔄 **Accessing Elements in a 2D Array**
To access a specific element, use **row and column indices**:

```javascript
console.log(MathScore[1][0]); // Output: "Jane Doe"
```

---

## 📌 **Row-wise & Column-wise Traversal**
We can print a 2D array **row-wise** and **column-wise** using loops. 🌀

### 🔹 **Row-wise Printing**
```javascript
for(let i = 0; i < twoDimensionalArray.length; i++){
    for(let j = 0; j < twoDimensionalArray[i].length; j++){
        process.stdout.write(` ${twoDimensionalArray[i][j]} `);
    }
    console.log();
}
```
### 🔹 **Column-wise Printing**
```javascript
for(let i = 0; i < twoDimensionalArray.length; i++){
    for(let j = 0; j < twoDimensionalArray[i].length; j++){
        process.stdout.write(` ${twoDimensionalArray[j][i]} `);
    }
    console.log();
}
```
---

## 🔢 **Row Sum & Column Sum**

### 📌 **Row Sum Calculation**
```javascript
for(let i = 0; i < twoDimensionalArray.length; i++){
    let sum = 0;
    for(let j = 0; j < twoDimensionalArray[i].length; j++){
        sum += twoDimensionalArray[i][j];
    }
    console.log(`Row ${i+1} Sum: ${sum}`);
}
```

### 📌 **Column Sum Calculation**
```javascript
for(let i = 0; i < twoDimensionalArray[0].length; i++){
    let sum = 0;
    for(let j = 0; j < twoDimensionalArray.length; j++){
        sum += twoDimensionalArray[j][i];
    }
    console.log(`Column ${i+1} Sum: ${sum}`);
}
```
---

## 🔍 **Searching in a 2D Array (Linear Search)**
Searching for an element in a 2D array requires traversing all rows and columns.

```javascript
let key = 10;
let found = false;

for(let i = 0; i < twoDimensionalArray.length; i++){
    for(let j = 0; j < twoDimensionalArray[i].length; j++){
        if(key === twoDimensionalArray[i][j]) {
            found = true;
            console.log(`Element found at index [${i}][${j}]`);
            break;
        }
    }
}
if(!found) console.log("Element Not Found");
```
---

## 🔺 **Finding Maximum & Minimum in a 2D Array**
We can find the **largest and smallest** elements by iterating through all elements.

```javascript
let max = twoDimensionalArray[0][0], min = twoDimensionalArray[0][0];

for (let i = 0; i < twoDimensionalArray.length; i++) {
  for (let j = 0; j < twoDimensionalArray[i].length; j++) {
    if (max < twoDimensionalArray[i][j]) max = twoDimensionalArray[i][j];
    if (min > twoDimensionalArray[i][j]) min = twoDimensionalArray[i][j];
  }
}
console.log(`Max: ${max}, Min: ${min}`);
```
---

## 🔄 **Transpose of a Matrix**
Swapping rows with columns is called **Transposing a Matrix**.

```javascript
let transpose = [];
for (let i = 0; i < twoDimensionalArray[0].length; i++) {
  transpose[i] = [];
  for (let j = 0; j < twoDimensionalArray.length; j++) {
    transpose[i][j] = twoDimensionalArray[j][i];
  }
}
console.log(transpose);
```
✅ **Explanation:**
- `transpose[i][j] = twoDimensionalArray[j][i]` swaps **rows and columns**.

---

## 🎯 **Summary Table**
| Operation | Description | Code Reference |
|-----------|-------------|----------------|
| **Create a 2D Array** | Declare and initialize | ✅ **Top Section** |
| **Access Elements** | Using `arr[row][col]` | ✅ **Accessing Elements** |
| **Row-wise Printing** | Print row by row | ✅ **Row-wise Traversal** |
| **Column-wise Printing** | Print column by column | ✅ **Column-wise Traversal** |
| **Row Sum** | Sum of each row | ✅ **Row Sum Calculation** |
| **Column Sum** | Sum of each column | ✅ **Column Sum Calculation** |
| **Linear Search** | Find an element | ✅ **Searching in 2D Array** |
| **Max & Min** | Find largest & smallest element | ✅ **Finding Maximum & Minimum** |
| **Transpose** | Convert rows to columns | ✅ **Transpose of Matrix** |

---

## 🚀 **Final Thoughts**
🎯 **2D Arrays** are extremely useful in solving **real-world problems** like:
- **Pathfinding Algorithms (Dijkstra, BFS, DFS)**
- **Game Development (Tic-Tac-Toe, Chess, Sudoku)**
- **Image Processing & Machine Learning** 🧠

Mastering these **basic operations** prepares you for **complex problem-solving** in programming! 💪🔥

Hope you enjoyed this guide! 😃 Happy Coding! 💻✨

