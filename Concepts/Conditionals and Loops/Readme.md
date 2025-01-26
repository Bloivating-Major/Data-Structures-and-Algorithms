# 🌟 JavaScript: Conditionals and Loops

## 📜 Table of Contents
1. [✨ Conditions](#-conditions)
2. [🔄 Loops](#-loops)
3. [📝 Practice Questions](#-practice-questions)

---

## ✨ Conditions
**Conditions** allow you to execute specific blocks of code based on whether a condition is true or false.

### 🔹 Syntax for `if` Statements:
```javascript
if (boolean expression True or False) {
    // IF True Then Do this.
} else {
    // IF False Then Do this.
}
```

### 🔹 Simple `if-else` Example:
```javascript
let salary = 25400;
if (salary > 10000) {
    salary = salary + 2000;
} else {
    salary = salary + 1000;
}
console.log(salary);
```
### 🔹 Multiple `if-else` Statements:
```javascript
let salary = 25400;
if (salary > 20000) {
    salary += 3000;
} else if (salary > 10000) {
    salary += 2000;
} else {
    salary = salary + 1000;
}
console.log(salary);
```

---

## 🔄 Loops
**Loops** are used to repeat a block of code until a certain condition is met.

### 🔹 `for` Loop Syntax:
```javascript
for (initialization; condition; increment) {
    // Body of the loop
}
```
#### 🖨️ Example: Print Numbers from 1 to 5
```javascript
for (let num = 1; num <= 5; num++) {
    console.log(num);
}
```
#### 🖨️ Example: Print Numbers from 1 to `n`
```javascript
let n = 20;
for (let num = 1; num <= n; num++) {
    console.log(num);
}
```

### 🔹 `while` Loop Syntax:
```javascript
initialization;
while (condition) {
    // Body of the loop
    increment;
}
```
#### 🖨️ Example: Print Numbers from 1 to 5
```javascript
let num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}
```
**When to use `while` vs `for` loop?**
- Use `for` loop when the number of iterations is known.
- Use `while` loop when the number of iterations is unknown.

### 🔹 `do-while` Loop Syntax:
```javascript
initialization;
do {
    // Body of the loop
} while (condition);
```

---

## 📝 Practice Questions
Here are some practical examples to reinforce your understanding of conditionals and loops:

### 1️⃣ Check the Maximum of Three Numbers
```javascript
let a = 10;
let b = 20;
let c = 30;
let max = a;
if (b > max) max = b;
if (c > max) max = c;
console.log("Max in 3 Numbers is " + max);
```

### 2️⃣ Check if the First Character is Uppercase or Lowercase
```javascript
let string = "Sambhav";
let char = string.charAt(0);
if (char >= 'a' && char <= 'z') {
    console.log("Lowercase");
} else {
    console.log("Uppercase");
}
```

### 3️⃣ Fibonacci Sequence
```javascript
let number = 7;
let prev = 0;
let current = 1;
let count = 2;
while (count <= number) {
    let temp = current;
    current = current + prev;
    prev = temp;
    count++;
}
console.log(current);
```

### 4️⃣ Count Occurrences of a Digit
```javascript
let number = 45536;
let count = 0;
while (number > 0) {
    let rem = number % 10;
    if (rem == 5) {
        count++;
    }
    number = Math.floor(number / 10);
}
console.log(count);
```

### 5️⃣ Reverse a Number
```javascript
let number = 28479;
let ans = 0;
while (number > 0) {
    let rem = number % 10;
    number = Math.floor(number / 10);
    ans = ans * 10 + rem;
}
console.log(ans);
```

