# Basic Input Output, Conditionals, and Operators - Questions with Code and Descriptions

This document contains 14 basic JavaScript questions that cover fundamental concepts like input/output, conditionals, and operators. Each question includes the code implementation and a short description.

[⬅️ Go Back](./Readme.md)

---

## Table of Contents
1. [Sum of Two Integers](#question-1-sum-of-two-integers)
2. [Sum and Message](#question-2-sum-and-message)
3. [Prompt-Based Sum](#question-3-prompt-based-sum)
4. [Input Text Display](#question-4-input-text-display)
5. [Area of Rectangle](#question-5-area-of-rectangle)
6. [Compound Interest](#question-6-compound-interest)
7. [Area of a Triangle](#question-7-area-of-a-triangle)
8. [Find Greater Number](#question-8-find-greater-number)
9. [Odd or Even](#question-9-odd-or-even)
10. [Voting Eligibility](#question-10-voting-eligibility)
11. [Day of the Week](#question-11-day-of-the-week)
12. [Leap Year Check](#question-12-leap-year-check)
13. [Electricity Bill Calculation](#question-13-electricity-bill-calculation)
14. [Discount Calculation](#question-14-discount-calculation)

---

### Question 1: Sum of Two Integers
#### Description
Calculate the sum of two integers and display the result.

```javascript
function Question01(){
    let a = 5, b = 7;
    let sum = a + b;
    console.log(sum);
}
```

---

### Question 2: Sum and Message
#### Description
Display the sum of two integers with a descriptive message.

```javascript
function Question02(){
    let a = 5, b = 7;
    let sum = a + b;
    console.log(`Sum of ${a} and ${b} is ${sum}`);
}
```

---

### Question 3: Prompt-Based Sum
#### Description
Take two numbers as input using `prompt()` and display their sum.

```javascript
function Question03(){
    let a = Number(prompt("Enter a number 1"));
    let b = Number(prompt("Enter a number 2"));
    let sum = a + b;
    console.log(`Sum of ${a} and ${b} is ${sum}`);
}
```

---

### Question 4: Input Text Display
#### Description
Take a text input using `prompt()` and display it.

```javascript
function Question04(){
    let text = prompt("Enter a text");
    console.log(text);
}
```

---

### Question 5: Area of Rectangle
#### Description
Calculate and display the area of a rectangle with given length and width.

```javascript
function Question05(){
    let length = 5;
    let width = 3;
    let area = length * width;
    console.log(`Area of Rectangle is ${area}`);
}
```

---

### Question 6: Compound Interest
#### Description
Calculate compound interest for a given principal, rate, and time.

```javascript
function Question06(){
    let principle = 1000, rate = 5, time = 3;
    let amount = principle * (Math.pow((1 + rate / 100), time));
    let compoundInterest = amount - principle;
    console.log(`$${compoundInterest.toFixed(2)}`);
}
```

---

### Question 7: Area of a Triangle
#### Description
Calculate the area of a triangle using Heron’s formula with given sides.

```javascript
function Question07(){
    let s1 = 5, s2 = 7, s3 = 9;
    let sp = (s1 + s2 + s3) / 2;
    let area = Math.sqrt(sp * (sp - s1) * (sp - s2) * (sp - s3));
    console.log(`Area is ${area.toFixed(3)} sq units`);
}
```

---

### Question 8: Find Greater Number
#### Description
Compare two numbers and display the greater one.

```javascript
function Question08(){
    let a = 9, b = 12;
    if (a > b) console.log(`${a} is greater than ${b}`);
    else console.log(`${b} is greater than ${a}`);
}
```

---

### Question 9: Odd or Even
#### Description
Check whether a number is odd or even.

```javascript
function Question09(){
    let a = 9;
    if (a % 2 == 0) console.log(`${a} is Even Number`);
    else console.log(`${a} is Odd Number`);
}
```

---

### Question 10: Voting Eligibility
#### Description
Check if a person is eligible to vote based on their age.

```javascript
function Question10(){
    let name = "Sambhav";
    let age = 20;
    if (age >= 18) console.log(`Hello ${name} you are a voter`);
    else console.log(`Hello ${name} you will be eligible to vote in ${18 - age} years.`);
}
```

---

### Question 11: Day of the Week
#### Description
Display the day of the week based on a number input using `switch`.

```javascript
function Question11(){
    let num = 6;
    switch (num) {
        case 1: console.log(`Monday`); break;
        case 2: console.log(`Tuesday`); break;
        case 3: console.log(`Wednesday`); break;
        case 4: console.log(`Thursday`); break;
        case 5: console.log(`Friday`); break;
        case 6: console.log(`Saturday`); break;
        default: console.log(`Invalid Input`);
    }
}
```

---

### Question 12: Leap Year Check
#### Description
Determine if a year is a leap year or not.

```javascript
function Question12(){
    let year = 2024;
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap Year");
        } else {
            console.log("Not Leap Year");
        }
    } else {
        if (year % 4 == 0) {
            console.log("Leap Year");
        } else {
            console.log("Not Leap Year");
        }
    }
}
```

---

### Question 13: Electricity Bill Calculation
#### Description
Calculate the electricity bill based on unit consumption using a tiered rate system.

```javascript
function Question13(){
    let units = 700;
    let total = 0;
    if (units <= 100) {
        total += units * 4.2;
    } else if (units <= 200) {
        total = 100 * 4.2 + (units - 100) * 6;
    } else if (units <= 400) {
        total = 100 * 4.2 + 100 * 6 + (units - 200) * 8;
    } else {
        total = 100 * 4.2 + 100 * 6 + 200 * 8 + (units - 400) * 13;
    }
    console.log(`Total Bill Amount is : ${total}`);
}
```

---

### Question 14: Discount Calculation
#### Description
Calculate the discount and total payable amount based on the purchase total.

```javascript
function Question14(){
    let total = 11000;
    let discount = 0;
    if (total >= 0 && total <= 5000) {
        discount = 0;
    } else if (total > 5000 && total <= 7000) {
        discount = (total / 100) * 5;
    } else if (total > 7000 && total <= 9000) {
        discount = (total / 100) * 10;
    } else {
        discount = (total / 100) * 20;
    }
    console.log(`Total Payable Amount is ${total - discount}`);
}
```

---
