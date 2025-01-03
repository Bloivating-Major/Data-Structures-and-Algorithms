# Assignment 3 - JavaScript Functions

## Overview
This assignment covers a set of JavaScript functions demonstrating character manipulation, number operations, and various swapping techniques. Each function tackles a unique problem to enhance your understanding of fundamental programming concepts.

## Functions

### 1. `Question3`
**Purpose:** Increment a character variable using the `++` operator.
- **Logic:**
  - Convert the character to its ASCII code.
  - Increment the code.
  - Convert the code back to a character.
- **Example:**
  ```javascript
  // Input:
  let char = 'A';
  // Output:
  // A
  // B
  ```

### 2. `Question4`
**Purpose:** Extract the unit digit of a number.
- **Logic:** Use the modulus operator `%` to get the remainder when dividing the number by 10.
- **Example:**
  ```javascript
  // Input:
  let num = 457;
  // Output:
  // 7
  ```

### 3. `Question5`
**Purpose:** Print the number without its last digit.
- **Logic:**
  - Divide the number by 10 and take the integer part using `Math.floor()`.
- **Example:**
  ```javascript
  // Input:
  let num = 555;
  // Output:
  // 55
  ```

### 4. `Question6`
**Purpose:** Swap two numbers using a temporary variable.
- **Logic:**
  - Store one number in a temporary variable.
  - Assign the value of the second number to the first.
  - Assign the value of the temporary variable to the second.
- **Example:**
  ```javascript
  // Input:
  let num1 = 5;
  let num2 = 10;
  // Output:
  // Number 1: 10, Number 2: 5
  ```

### 5. `Question7`
**Purpose:** Swap two numbers without using a temporary variable (using addition and subtraction).
- **Logic:**
  - Add both numbers and assign the sum to the first.
  - Subtract the second number from the first to get the original value of the first.
  - Subtract the updated first number from the sum to get the original value of the second.
- **Example:**
  ```javascript
  // Input:
  let num1 = 11;
  let num2 = 10;
  // Output:
  // Number 1: 10, Number 2: 11
  ```

### 6. `Question8`
**Purpose:** Swap two numbers without using a temporary variable or addition/subtraction (using multiplication and division).
- **Logic:**
  - Multiply both numbers and assign the product to the first.
  - Divide the first number by the second to get the original value of the second.
  - Divide the first number (product) by the updated second to get the original value of the first.
- **Example:**
  ```javascript
  // Input:
  let num1 = 5;
  let num2 = 10;
  // Output:
  // Number 1: 10, Number 2: 5
  ```

## How to Run
1. Copy the functions into a JavaScript file.
2. Use a browser console or a Node.js environment to execute.
3. Call the desired function, e.g., `Question3();`.

## Learning Outcomes
- **Character Manipulation:** Working with ASCII values and string operations.
- **Mathematical Operations:** Extracting digits and modifying numbers using arithmetic.
- **Swapping Techniques:** Employing various methods to swap variables efficiently.
