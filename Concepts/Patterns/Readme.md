
---

# 🎨 Pattern Generator in JavaScript

Welcome to the **Pattern Generator** project! This repository contains a collection of functions that generate various text-based patterns using JavaScript. Each function creates a unique visual representation using numbers, stars, and letters. Below, you'll find a summary of each pattern along with its implementation.

## 📚 Table of Contents

- [Overview](#overview)
- [Patterns](#patterns)
  - [1. Fancy Pattern](#1-fancy-pattern)
  - [2. Solid Half Diamond](#2-solid-half-diamond)
  - [3. Numeric Palindromic Equilateral Pyramid](#3-numeric-palindromic-equilateral-pyramid)
  - [4. Hollow Inverted Numeric Half Pyramid](#4-hollow-inverted-numeric-half-pyramid)
  - [5. Hollow Numeric Half Pyramid](#5-hollow-numeric-half-pyramid)
  - [6. Hollow Numeric Pyramid](#6-hollow-numeric-pyramid)
  - [7. Numeric Full Pyramid](#7-numeric-full-pyramid)
  - [8. Alphabet Palindrome Pyramid](#8-alphabet-palindrome-pyramid)
  - [9. Number Star Pattern](#9-number-star-pattern)
  - [10. Flipped Solid Diamond](#10-flipped-solid-diamond)
  - [11. Hollow Diamond](#11-hollow-diamond)
  - [12. Diamond](#12-diamond)
  - [13. Inverted Pyramid](#13-inverted-pyramid)
  - [14. Pyramid](#14-pyramid)
  - [15. Hollow Pyramid](#15-hollow-pyramid)
  - [16. Hollow Inverted](#16-hollow-inverted)
  - [17. Square](#17-square)
  - [18. Hollow Square](#18-hollow-square)
  - [19. Fancy Pattern 2](#19-fancy-pattern-2)
  - [20. Fancy Pattern 3](#20-fancy-pattern-3)
  - [21. Floyd's Triangle](#21-floyd's-triangle)
  - [22. Pascal Triangle](#22-pascal-triangle)
  - [23. Butterfly Pattern](#23-butterfly-pattern)

## 📝 Overview

This project showcases various patterns that can be generated using loops and conditional statements in JavaScript. Each function is designed to create a specific pattern, which can be printed to the console. The patterns range from simple shapes to more complex designs.

## 🎨 Patterns

### 1. Fancy Pattern

This pattern creates a unique design using numbers and asterisks.

```javascript
function FancyPattern(num){
  if(num > 9) {
    return console.log("Input Less then 9 or equal to 9");
  }
  else{
    for(let i = 0; i < num; i++){
      let startIndex = 8 - i;
      let digit = i + 1;
      let count = digit;
      for(let j =0; j < 17; j++){
        if(startIndex == j && count >0){
          process.stdout.write(`${digit} `);
          startIndex += 2;
          count--;
        }else {
          process.stdout.write("* ");
        }
      }
      console.log();
    }
  }
}
```

**Output for `FancyPattern(5)`**:
```
* * * * * * * * 1 * * * * * * * *
* * * * * * * 2 * 2 * * * * * * *
* * * * * * 3 * 3 * 3 * * * * * *
* * * * * 4 * 4 * 4 * 4 * * * * *
* * * * 5 * 5 * 5 * 5 * 5 * * * *
```

### 2. Solid Half Diamond

This function generates a solid half diamond shape.

```javascript
function SolidHalfDiamond(num) {
  for (let i = 0; i < num * 2 - 1; i++) {
    if (i < num) {
      for (let j = 0; j <=i; j++) {
        process.stdout.write(" *");
      }
    }else{
        for(let j = 0; j < num-(i%num)-1; j++){
            process.stdout.write(" *");
        }
    }
    console.log();
  }
}
```

**Output for `SolidHalfDiamond(5)`**:
```
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
* 
```

### 3. Numeric Palindromic Equilateral Pyramid

This function creates a palindromic pyramid using numbers.

```javascript
function NumericPalindromicEquilateralPyramid(num) {
  for (let i = 0; i < num; i++) {
    // Spaces
    for (let s = 0; s < num - i; s++) {
      process.stdout.write("  ");
    }
    // Numbers
    for (let n = 0; n <= i; n++) {
      process.stdout.write(`${n + 1} `);
    }
    // Reverse Number
    for (let r = 0; r < i; r++) {
      process.stdout.write(`${i + r} `);
    }
    console.log();
  }
}
```

**Output for `NumericPalindromicEquilateralPyramid(5)`**:
```
          1 
        1 2 1 
      1 2 3 2 3 
    1 2 3 4 3 4 5 
  1 2 3 4 5 4 5 6 7
```

### 4. Hollow Inverted Numeric Half Pyramid

This function generates a hollow inverted numeric half pyramid.

```javascript
function HollowInvertedNumericHalfPyramid(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      if (i == 0 || j == 0) {
        process.stdout.write(`${i + j + 1} `);
      } else if (j == num - i - 1) {
        process.stdout.write("5");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}
```

**Output for `HollowInvertedNumericHalfPyramid(5)`**:
```
1 2 3 4 5 
2     5
3   5
4 5
5
```

### 5. Hollow Numeric Half Pyramid

This function creates a hollow numeric half pyramid.

```javascript
function HollowNumericHalfPyramid(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i || i == num - 1) {
        process.stdout.write(`${j + 1} `);
      } else process.stdout.write("  ");
    }
    console.log();
  }
}
```

**Output for `HollowNumericHalfPyramid(5)`**:
```
1 
1 2
1   3
1     4
1 2 3 4 5
```

### 6. Hollow Numeric Pyramid

This function generates a hollow numeric pyramid.

```javascript
function HollowNumericPyramid(num){
    for(let i = 0; i < num; i++){
        let start = 1;
        // Spaces
        for(let j = 0; j < num - i -1; j++){
            process.stdout.write('  ');
        }
        // Number
        for(let j = 0; j < 2 * i +1; j++){
            if(i == 0 || i == num -1){
                if(j % 2 == 0){
                    process.stdout.write(` ${start}`)
                    start = start + 1;
                }
                else process.stdout.write('  ');
            }
            else{
                if(j == 0){
                process.stdout.write(` 1`);
                }else if(j == 2 * i){
                process.stdout.write(` ${i+1}`);
                }else{
                    process.stdout.write('  ');
                }
            }
        }
        // New Line
        console.log();
    }
}
```

**Output for `HollowNumericPyramid(5)`**:
```
         1
       1   2
     1       3
   1           4
 1   2   3   4   5
```

### 7. Numeric Full Pyramid

This function creates a full pyramid using numbers.

```javascript
function NumericFullPyramid(num){
    for(let i = 0; i < num; i++){
        // Spaces
        for(let j = 0; j < num-i; j++){
            process.stdout.write('  ');
        }
        // Number
        for(let j = 0; j <= i; j++){
            process.stdout.write(`${i+1+j} `)
        }
        // Reverse Number
        for(let j = 0; j < i; j++){
            process.stdout.write(`${i*2-j} `)
        }
        console.log();
    }
}
```

**Output for `NumericFullPyramid(5)`**:
```
          1 
        2 3 2
      3 4 5 4 3
    4 5 6 7 6 5 4
  5 6 7 8 9 8 7 6 5
```

### 8. Alphabet Palindrome Pyramid

This function generates a palindrome pyramid using letters.

```javascript
function AlphPalindromePyramid(num){
    for(let i = 0; i < num; i++){
        let j;
        for( j = 0; j < i + 1; j++){
            process.stdout.write(`${String.fromCharCode(j+65)} `)
        }
        j = j - 1;
        for (; j >= 1; j--){
            process.stdout.write(`${String.fromCharCode(j+64)} `)
        }
        console.log();
    }
}
```

**Output for `AlphPalindromePyramid(5)`**:
```
A 
A B A
A B C B A
A B C D C B A
A B C D E D C B A
```

### 9. Number Star Pattern

This function creates a number star pattern.

```javascript
function NumberStarPattern(num){
    for(let i = 0; i <num; i++){
        for(let j = 0; j <= i; j++){
            process.stdout.write(`${i+1}`)
            if(j != i) process.stdout.write(` * `)
        }
        console.log();
    }
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num-i; j++){
            process.stdout.write(`${num-i}`)
            if(j != num-i-1) process.stdout.write( ' * ' );
        }
        console.log();
    }
}
```

**Output for `NumberStarPattern(5)`**:
```
1
2 * 2
3 * 3 * 3
4 * 4 * 4 * 4
5 * 5 * 5 * 5 * 5
5 * 5 * 5 * 5 * 5
4 * 4 * 4 * 4
3 * 3 * 3
2 * 2
1
```

### 10. Flipped Solid Diamond

This function generates a flipped solid diamond shape.

```javascript
function FlippedSolidDiamond(num) {
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num-i; j++){
            process.stdout.write('*')
        }
        for(let j = 0; j < 2 * i + 1; j++){
            process.stdout.write(' ');
        }
        for(let j = 0; j < num-i; j++){
            process.stdout.write('*')
        }
        console.log();
    }
    for(let i = 0; i < num; i++){
        for(let j = 0; j <= i; j++){
            process.stdout.write('*')
        }
        for(let j = 0; j < 2 * num - 2 * i - 1; j++){
            process.stdout.write(' ');
        }
        for(let j = 0; j <=i; j++){
            process.stdout.write('*')
        }
        console.log();
    }
}
```

**Output for `FlippedSolidDiamond(5)`**:
```
***** *****
****   ****
***     ***
**       **
*         *
*         *
**       **
***     ***
****   ****
***** *****
```

### 11. Hollow Diamond

This function creates a hollow diamond shape.

```javascript
function HollowDiamond(num){
    for(let row = 0; row < num; row++){
        // Blank
        for(let col = 0; col < num - row - 1; col++){
            process.stdout.write(" ");
        }
        // Star
        for(let col = 0; col < 2 * row + 1; col++){
            if(col == 0 || col == 2 * row) process.stdout.write("*");
            else process.stdout.write(" ");
        }
        console.log();
    }
    for(let row = 0; row < num; row++){
        // Blank
        for(let col = 0; col < row; col++ ){
            process.stdout.write(" ");
        }
        // Star 
        for(let col = 0; col < 2 * num - 2 * row - 1; col++){
            if(col == 0 || col == 2 * num - 2 * row - 2) process.stdout.write("*")
            else process.stdout.write(" ");
        }
        console.log();
    }
}
```

**Output for `HollowDiamond(5)`**:
```
    *
   * *
  *   *
 *     *
*       *
*       *
 *     *
  *   *
   * *
    *  
```

### 12. Diamond

This function generates a solid diamond shape.

```javascript
function Diamond(num){
    for(let row = 0; row < num; row++){
        for(let space = 0; space < num - row -1; space++){
            process.stdout.write(" ");
        }
        for(let star = 0; star < row + 1; star++){
            process.stdout.write("* ");
        }
        console.log();
    }
    for(let k = 0; k < num; k++){
        for(let j = 0; j <k; j++){
            process.stdout.write(" ");
        }
        for(let i = 0; i < num-k; i++){
            process.stdout.write("* ");
        }
        console.log();
    }
}
```

**Output for `Diamond(5)`**:
```
    * 
   * *
  * * *
 * * * *
* * * * *
* * * * * 
 * * * *
  * * *
   * *
    *  
```

### 13. Inverted Pyramid

This function creates an inverted pyramid.

```javascript
function InvertedPyramid(num){
    for(let k = 0; k < num; k++){
        for(let j = 0; j <k; j++){
            process.stdout.write(" ");
        }
        for(let i = 0; i < num-k; i++){
            process.stdout.write("* ");
        }
        console.log();
    }
}
```

**Output for `Inverted(5)`**:
```
* * * * * 
 * * * *
  * * *
   * *
    * 
```

### 14. Pyramid

This function generates a simple pyramid.

```javascript
function Pyramid(num){
    for(let row = 0; row < num; row++){
        for(let space = 0; space < num - row -1; space++){
            process.stdout.write(" ");
        }
        for(let star = 0; star < row + 1; star++){
            process.stdout.write("* ");
        }
        console.log();
    }
}
```

**Output for `Pyramid(5)`**:
```
    * 
   * *
  * * *
 * * * *
* * * * * 
```

### 15. Hollow Pyramid

This function creates a hollow pyramid.

```javascript
function HollowPyramid(num){
    for(let i = 0; i < num; i++){
        let k = 0;
        for(let j = 0; j < 2*num-1; j++){
            if(j < num-i-1) process.stdout.write("   "); // Here in this condition we are printing space from length - i - 1 times.
            // k < 2*i+1 is used to print number of stars
            else if(k < 2*i+1){
                // To print hollow pyramid 
                // step 1 is to find k = 0 and k is last
                // last k can be founded by 2*i 
                if(k == 0 || i == num - 1 || k == 2 * i) process.stdout.write(` * `);
                else process.stdout.write(`   `);
                k++;
            }else process.stdout.write("   ");
        }
        console.log();
    }
}
```

**Output for `HollowPyramid(5)`**:
```
             *
          *     *
       *           *
    *                 *
 *  *  *  *  *  *  *  *  *
```

### 16. Hollow Inverted

This function generates a hollow inverted pattern.

```javascript
function HollowInverted(num){
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            if(i == 0 || j == 0 || j == num-i-1)  process.stdout.write(" * ");
            else process.stdout.write("   ");
        }
        console.log();
    }
}
```

**Output for `HollowInverted(5)`**:
```
 *  *  *  *  * 
 *        *
 *     *
 *  *
 *      
```

### 17. Square

This function creates a solid square.

```javascript
function Square(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      process.stdout.write(" * ");
    }
    console.log();
  }
}
```

**Output for `Square(5)`**:
```
 *  *  *  *  * 
 *  *  *  *  *
 *  *  *  *  *
 *  *  *  *  *
 *  *  *  *  *
```

### 18. Hollow Square

This function generates a hollow square.

```javascript
function HollowSquare(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        if(i == 0 || i == num-1 || j == 0 || j == num-1) process.stdout.write(" * ");
        else process.stdout.write("   ");
      }
      console.log();
  }
}
```

**Output for `HollowSquare(5)`**:
```
 *  *  *  *  * 
 *           *
 *           *
 *           *
 *  *  *  *  *
```

### 19. Fancy Pattern 2

This Pattern generates Fancy Patttern

```javascript
function FancyPattern2(num){
  let count = 1;
  for(let i  =0; i < num; i++){
    for(let j = 0; j <=i; j++ ){
      process.stdout.write(`${count} `);
      if(j < i) process.stdout.write(`* `)
      count++;
    }
    console.log();
  }
  for(let i = 0; i < num; i++){
    for(let j = 0; j < num - i; j++){
      process.stdout.write(`${count - num + j} `);
      if(j < num -  i - 1) process.stdout.write(`* `)
    }
    console.log();
  }
}
```
**Output for `FancyPattern2(4)`**:
```
1 
2 * 3
4 * 5 * 6
7 * 8 * 9 * 10
7 * 8 * 9 * 10
7 * 8 * 9
7 * 8
7
```

### 20. Fancy Pattern 3

This Pattern generates Fancy Patttern

```javascript
function FancyPattern3(num) {
  for(let i = 0; i < num; i++){
    let condition = i < num/2 ? 2 * i : 2 * (num - i - 1);
    for(let j = 0; j <= condition; j++){
      if(j <=condition/2){
        process.stdout.write(`${j+1}`);
      }
      else{
        process.stdout.write(`${condition-j+1}`);
      }
    }
    console.log();
  }
}
```
**Output for `FancyPattern2(4)`**:
```
1
121
12321
121
1
```

### 21. Floyd's Triangle

This Pattern generates Floyd's Triangle Pattern

```javascript
function FloydTriangle(num) {
  let count = 1;
  for(let i  = 0; i < num; i++){
    for(let j = 0; j <= i; j++){
      process.stdout.write(`${count} `);
      count++;
    }
    console.log();
  }
}
```
**Output for `FloydTriangle(5)`**:
```
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
```

### 22. Floyd's Triangle

This Pattern generates Floyd's Triangle Pattern

```javascript
function FloydTriangle(num) {
  let count = 1;
  for(let i  = 0; i < num; i++){
    for(let j = 0; j <= i; j++){
      process.stdout.write(`${count} `);
      count++;
    }
    console.log();
  }
}
```
**Output for `FloydTriangle(5)`**:
```
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
```

### 22. Pascal Triangle

This Pattern generates Pascal Triangle Pattern

```javascript
function PascalTriangle(num) {
  for(let i = 1; i <= num; i++){
    let c = 1;
    for(let j = 0; j < num-i; j++){
      process.stdout.write(" ");
    }
    for(let j = 1; j <= i; j++){
      process.stdout.write(` ${c}`)
      c = c * (i - j) / j;
    }
    console.log();
  }
}
```
**Output for `PascalTriangle(7)`**:
```
       1
      1 1
     1 2 1
    1 3 3 1
   1 4 6 4 1
  1 5 10 10 5 1
 1 6 15 20 15 6 1 
```

### 23. Butterfly Pattern

This Pattern generates Butterfly Pattern

```javascript
function ButterflyPattern(num) {
  for(let i = 0; i < 2 * num; i++){
    let condition = i < num ? i :  num + (num - i - 1);
    let spaces = i < num ? 2 * (num - i - 1) : i - condition - 1;
    for(let j = 0; j < 2 * num; j++){
      if(j <= condition){
        process.stdout.write(`* `);
      }else if(spaces > 0){
        process.stdout.write("  ");
        spaces--;
      }else {
        process.stdout.write("* ");
      }
    }
    console.log();
  }
}
```
**Output for `ButterflyPattern(5)`**:
```
*                 * 
* *             * *
* * *         * * *
* * * *     * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * *     * * * *
* * *         * * *
* *             * *
*                 * 
```

## 🌟 Conclusion

This project serves as a fun way to explore loops and conditional statements in JavaScript while creating visually appealing patterns. Feel free to modify the code and create your own unique patterns!

---
