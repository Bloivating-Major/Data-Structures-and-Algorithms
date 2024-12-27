Here’s the updated **Assignment 2 README** with the **function definitions** included for each question:

---

# **Assignment 2: JavaScript Programming**

This assignment contains 10 JavaScript functions designed to solve a variety of problems using fundamental programming concepts such as mathematical calculations, ASCII operations, and string manipulation.

## **Contents**

1. [Question 1: Calculate Average of Three Numbers](#question-1-calculate-average-of-three-numbers)  
2. [Question 2: Circumference of a Circle](#question-2-circumference-of-a-circle)  
3. [Question 3: Calculate Simple Interest](#question-3-calculate-simple-interest)  
4. [Question 4: Volume of a Cuboid](#question-4-volume-of-a-cuboid)  
5. [Question 5: Profit Calculation](#question-5-profit-calculation)  
6. [Question 6: Find ASCII Value of a Character](#question-6-find-ascii-value-of-a-character)  
7. [Question 7: Get Character from ASCII Value](#question-7-get-character-from-ascii-value)  
8. [Question 8: ASCII Values of Multiple Characters](#question-8-ascii-values-of-multiple-characters)  
9. [Question 9: Extract Date Components](#question-9-extract-date-components)  
10. [Question 10: Extract Time Components](#question-10-extract-time-components)

---

## **Question 1: Calculate Average of Three Numbers**  
**Function Definition:**  
```javascript
function question1() {
    let num1 = Number(prompt("Enter number 1 : "));
    let num2 = Number(prompt("Enter number 2 : "));
    let num3 = Number(prompt("Enter number 3 : "));
    let average = (num1 + num2 + num3) / 3;
    console.log(`Average of ${num1}, ${num2}, and ${num3} is ${average.toFixed(3)}`);
}
```  
**Description:**  
- **Input:** Three numbers.  
- **Output:** Average of the three numbers (rounded to 3 decimal places).  
- **Formula Used:**  
  \[
  \text{Average} = \frac{\text{Sum of Numbers}}{\text{Total Numbers}}
  \]

---

## **Question 2: Circumference of a Circle**  
**Function Definition:**  
```javascript
function question2() {
    let radius = Number(prompt("Enter radius of circle : "));
    let circumference = 2 * Math.PI * radius;
    console.log(`Circumference of Circle Is ${circumference.toFixed(2)}`);
}
```  
**Description:**  
- **Input:** Radius of the circle.  
- **Output:** Circumference of the circle (rounded to 2 decimal places).  
- **Formula Used:**  
  \[
  \text{Circumference} = 2 \cdot \pi \cdot \text{radius}
  \]

---

## **Question 3: Calculate Simple Interest**  
**Function Definition:**  
```javascript
function question3() {
    let principalAmount = Number(prompt("Enter Principal Amount : "));
    let rateOfInterest = Number(prompt("Enter Rate of Interest : "));
    let timeYears = Number(prompt("Enter Time in Years : "));
    let simpleInterest = (principalAmount * rateOfInterest * timeYears) / 100;
    console.log(`Simple Interest is ${simpleInterest.toFixed(2)}`);
}
```  
**Description:**  
- **Input:** Principal amount, rate of interest, and time in years.  
- **Output:** Simple Interest (rounded to 2 decimal places).  
- **Formula Used:**  
  \[
  \text{Simple Interest} = \frac{\text{Principal} \cdot \text{Rate} \cdot \text{Time}}{100}
  \]

---

## **Question 4: Volume of a Cuboid**  
**Function Definition:**  
```javascript
function question4() {
    let length = Number(prompt("Enter length of cuboid : "));
    let breadth = Number(prompt("Enter breadth of cuboid : "));
    let height = Number(prompt("Enter height of cuboid : "));
    let volume = length * breadth * height;
    console.log(`Volume of Cuboid Is : ${volume.toFixed()}`);
}
```  
**Description:**  
- **Input:** Length, breadth, and height of the cuboid.  
- **Output:** Volume of the cuboid.  
- **Formula Used:**  
  \[
  \text{Volume} = \text{Length} \cdot \text{Breadth} \cdot \text{Height}
  \]

---

## **Question 5: Profit Calculation**  
**Function Definition:**  
```javascript
function question5() {
    let costPerDozen = Number(prompt("Enter Cost Price of Banana : "));
    let sellPerDozen = Number(prompt("Enter Selling Price of Banana : "));
    let profitLoss = (sellPerDozen - costPerDozen) * 25 / 12;
    console.log(profitLoss);
}
```  
**Description:**  
- **Input:** Cost price per dozen, selling price per dozen.  
- **Output:** Profit or loss for selling 25 bananas.  
- **Formula Used:**  
  \[
  \text{Profit} = \frac{(\text{Selling Price} - \text{Cost Price}) \cdot 25}{12}
  \]

---

## **Question 6: Find ASCII Value of a Character**  
**Function Definition:**  
```javascript
function question6() {
    let char = prompt("Enter Character :");
    console.log(`ASCII Value of ${char} is ${char.charCodeAt(0)}`);
}
```  

---

## **Question 7: Get Character from ASCII Value**  
**Function Definition:**  
```javascript
function question7() {
    let ascii = Number(prompt("Enter ASCII Value : "));
    console.log(`Character at ASCII Value ${ascii} is ${String.fromCharCode(ascii)}`);
}
```  

---

## **Question 8: ASCII Values of Multiple Characters**  
**Function Definition:**  
```javascript
function question8() {
    let char1 = prompt("Enter 1st Character Value : ");
    let char2 = prompt("Enter 2nd Character Value : ");
    let char3 = prompt("Enter 3rd Character Value : ");
    console.log(`ASCII Value of ${char1} Character is ${char1.charCodeAt(0)}`);
    console.log(`ASCII Value of ${char2} Character is ${char2.charCodeAt(0)}`);
    console.log(`ASCII Value of ${char3} Character is ${char3.charCodeAt(0)}`);
}
```  

---

## **Question 9: Extract Date Components**  
**Function Definition:**  
```javascript
function question9() {
    let date = prompt("Enter Date in DD/MM/YYYY");
    let parts = date.split("/");
    console.log(`Day - ${parts[0]}, Month - ${parts[1]}, Year - ${parts[2]}`);
}
```  

---

## **Question 10: Extract Time Components**  
**Function Definition:**  
```javascript
function question10() {
    let time = "12:35";
    let parts = time.split(":");
    console.log(`${parts[0]} hour and ${parts[1]} minute`);
}
```

---
