### 🌟 Assignment 5: Decision Control Statements 🖥️

Welcome to Assignment 5! This assignment focuses on **decision control statements** in programming, a powerful concept that allows your code to make decisions based on conditions. 🚦 Here's everything you need to know, complete with examples, explanations, and lots of ✨ creativity!

---

## 📚 Topics Covered:
1. **Positive or Non-Positive Numbers**
2. **Divisibility by 5**
3. **Even or Odd Numbers**
4. **Even or Odd Without `%`**
5. **Even or Odd Using Bitwise Operator**
6. **Three-Digit Numbers**
7. **Greater Between Two Numbers**
8. **Quadratic Equation Roots**
9. **Leap Year Check**
10. **Greatest Among Three Numbers**

---

## 🚀 How It Works:

### ✅ **Question 1**: Check if a Number is Positive or Non-Positive
```javascript
function Question1(){
    let num = 1;
    if(num > 0) console.log("Positive Number");
    else console.log("Non Positive Number");
}
```
💡 *Logic*: If the number is greater than `0`, it's positive; otherwise, it's non-positive.  

---

### ✅ **Question 2**: Check Divisibility by 5
```javascript
function Question2(){
    let num = 5;
    if(num % 5) console.log("Not Divisible By 5");
    else console.log("Divisible by 5");
}
```
💡 *Logic*: Use the modulus operator `%` to check if the remainder is `0`.

---

### ✅ **Question 3**: Check if a Number is Even or Odd
```javascript
function Question3(){
    let num = 5;
    if(num % 2) console.log("Odd Number");
    else console.log("Even Number");
}
```
💡 *Logic*: A number is even if divisible by `2`; otherwise, it's odd.

---

### ✅ **Question 4**: Check Even or Odd Without `%`
```javascript
function Question4(){
    let num = 7;
    if(Math.floor(num / 2) * 2 == num) console.log("Even Number");
    else console.log("Odd Number");
}
```
💡 *Logic*: Compare the number to twice its integer division result to decide.

---

### ✅ **Question 5**: Check Even or Odd Using Bitwise Operator
```javascript
function Question5(){
    let num = 5;
    if(num & 1) console.log("Odd Number");
    else console.log("Even Number");
}
```
💡 *Logic*: Use the bitwise `&` operator to determine the parity.

---

### ✅ **Question 6**: Check if a Number is a Three-Digit Number
```javascript
function Question6(){
    let num = 123;
    if(num >= 100 && num <= 999) 
        console.log("Three-Digit Number");
    else 
        console.log("Not a Three-Digit Number");
}
```
💡 *Logic*: A number is three digits if it's between `100` and `999`.

---

### ✅ **Question 7**: Find the Greater of Two Numbers
```javascript
function Question7(){
    let num1 = 2, num2 = 1;
    if(num1 > num2) console.log("Num 1 is Greater: " + num1);
    else if(num2 > num1) console.log("Num 2 is Greater: " + num2);
    else console.log("Both Numbers are Equal");
}
```
💡 *Logic*: Compare two numbers directly to decide.

---

### ✅ **Question 8**: Quadratic Equation Roots
*Logic not implemented in this code snippet. Customize as needed!*  

---

### ✅ **Question 9**: Check Leap Year
```javascript
function Question9(){
    let year = 2024;
    year % 100 ? console.log(year % 4 ? "Not Leap Year" : "Leap Year") : console.log(year % 400 ? "Not Leap Year" : "Leap Year");
}
```
💡 *Logic*: A leap year is divisible by `4`, but not `100`, unless also divisible by `400`.

---

### ✅ **Question 10**: Greatest Among Three Numbers
```javascript
function Question10(){
    let a = 10, b = 30, c = 30;
    a > b ? console.log(a > c ? "This is a " + a : "This is c " + c) : console.log(b > c ? "This is b " + b : "This is c " + c);
}
```
💡 *Logic*: Use nested ternary operators to determine the greatest number.

---

## 🛠️ How to Run:
1. Copy the code into a file named `script.js`.
2. Open the provided HTML file in any browser.
3. Check the console for outputs of each question.

---

## 🌟 Why Decision Control Statements?  
They bring **intelligence** to your programs, enabling:
- **Dynamic Decisions**: Code reacts to changing conditions.
- **Efficiency**: Write less but do more!
- **Problem Solving**: Simplify real-world problems into logical steps.

---

### 🎉 Happy Coding! 💻