# Assignment 4: Exploring Data Types, Operations, and Logical Evaluations

This assignment focuses on JavaScript operations involving numbers, characters, and logical expressions. Below is an overview of the questions, their objectives, logic, and examples.

## Functions and Descriptions

### **Question 1: Sum of Digits in a Number**
Objective: Calculate the sum of all digits in a given number.
```javascript
function Question1(){
    let num = 110;
    let sum = 0;
    sum += Math.floor(num / 100);
    sum += Math.floor((num % 100)/10);
    sum += num % 10;
    console.log(sum);
}
```
**Example:** Input: `110` → Output: `2`

### **Question 2: ASCII Value of a Character**
Objective: Determine the ASCII code of a given character.
```javascript
function Question2(){
    let ascii = "+";
    let code = ascii.charCodeAt(0);
    console.log(code);
}
```
**Example:** Input: `+` → Output: `43`

### **Question 3: Identify Data Types**
Objective: Display the data types of integer, character, and float values.
```javascript
function Question3(){
    let int = 10;
    let char = "A";
    let float = 20.4;
    console.log(typeof(int));
    console.log(typeof(char));
    console.log(typeof(float));
}
```
**Example:** Output: `number, string, number`

### **Question 4: Remove the Last Digit**
Objective: Remove the last digit of a number.
```javascript
function Question4(){
    let num = 2357;
    let lastDigit = Math.floor(num / 10) * 10;
    console.log(lastDigit);
}
```
**Example:** Input: `2357` → Output: `2350`

### **Question 5: Append a Digit to a Number**
Objective: Add a digit to the end of a number.
```javascript
function Question5(){
    let num = 234;
    let digit = 9;
    let finalNum = (num * 10) + digit;
    console.log(finalNum);
}
```
**Example:** Input: `234` and `9` → Output: `2349`

### **Question 6: Currency Conversion (INR to USD)**
Objective: Convert INR to USD based on a conversion rate.
```javascript
function Question6(){
    let num = 55000;
    let USD = 84.23;
    let INRtoUSD = num / USD;
    console.log(INRtoUSD.toFixed(2));
}
```
**Example:** Input: `55000` INR → Output: `652.91` USD

### **Question 7: Rotate Digits of a Number**
Objective: Rotate the digits of a number by moving the last digit to the front.
```javascript
function Question7(){
    let num = 742;
    let rotated = (num % 10) * 100 + Math.floor(num / 10);
    console.log(rotated);
}
```
**Example:** Input: `742` → Output: `274`

### **Question 8: Logical Comparison**
Objective: Evaluate a chained comparison.
```javascript
function Question8(){
    let num = 10 > 8 > 4;
    console.log(num);
}
```
**Example:** Output: `false` (because `10 > 8` evaluates to `true`, which is coerced to `1`, and `1 > 4` is `false`)

### **Question 9: Logical Negation and Comparison**
Objective: Evaluate a negated comparison.
```javascript
function Question9(){
    let num = !2 > -2;
    console.log(num);
}
```
**Example:** Output: `false` (because `!2` evaluates to `false`, which is coerced to `0`, and `0 > -2` is `false`)

### **Question 10: Logical AND Evaluation**
Objective: Short-circuit logical AND operation.
```javascript
function Question10(){
    let num = 3 < 0 && 5 > 0; // First condition false, second condition not evaluated
    console.log(num);
}
```
**Example:** Output: `false`

## Key Concepts Covered:
1. **Arithmetic Operations**: Understanding digit extraction and manipulation.
2. **ASCII and Data Types**: Interactions between characters and ASCII codes.
3. **Logical Operators**: Exploring the behavior of `&&`, `!`, and chaining comparisons.
4. **Practical Scenarios**: Currency conversion and number rotations.

### Let me know if you want to refine or add anything! 🚀

