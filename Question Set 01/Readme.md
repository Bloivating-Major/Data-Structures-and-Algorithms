Here’s a sample README for your Assignment 1 based on the functions you provided. Feel free to adjust any details as needed:

---

# **Assignment 1: JavaScript Functions**

## **Objective:**
The objective of this assignment is to create a series of JavaScript functions that perform different tasks, ranging from simple console outputs to more interactive operations, such as performing calculations based on user input.

## **Functions Implemented:**

### 1. **`question1`**
This function prints `"Hello World"` to the console.
```javascript
function question1 (){
    console.log("Hello World");
}
```

### 2. **`question2`**
This function prints `"Hello"` and `"Students"` on separate lines.
```javascript
function question2 (){
    console.log("Hello");
    console.log("Students");
}
```

### 3. **`question3`**
This function prints the word `"Sambhav"` in quotes.
```javascript
function question3 (){
    console.log('"Sambhav"');
}
```

### 4. **`question4`**
This function prints a newline escape character `\n`. It shows how to use a backslash to print a special character.
```javascript
function question4 (){
    console.log(`\\n`);
}
```

### 5. **`question5`**
This function prints the carriage return escape character `\r`.
```javascript
function question5 (){
    console.log("\\r");
}
```

### 6. **`question6`**
This function prints `"Teacher's Day"` in quotes.
```javascript
function question6 (){
    console.log(`"Teacher's Day"`);
}
```

### 7. **`question7`**
This function prompts the user to enter two numbers and calculates their sum.
```javascript
function question7 (){
    let num1 = Number(prompt("Enter a number 1 : "));
    let num2 = Number(prompt("Enter a number 2 : "));
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
}
```

### 8. **`question8`**
This function prompts the user to enter a number and prints its square.
```javascript
function question8 (){
    let num1 = Number(prompt("Enter a number 1 : "));
    console.log(`Square of ${num1} is ${num1 * num1}`);
}
```

### 9. **`question9`**
This function prompts the user to enter the length and width of a rectangle and calculates its area.
```javascript
function question9 (){
    let length = Number(prompt("Enter length of Rectangel : "));
    let width = Number(prompt("Enter breadth of Rectangel : "));
    console.log(`Area of rectangle ${length * width} is having the length ${length} and breadth ${width}`);
}
```

### 10. **`question10`**
This function prompts the user to enter the radius of a circle and calculates its area.
```javascript
function question10 (){
    let r = Number(prompt("Enter radius of circle : "));
    const pi = 3.14;
    console.log(`Area of circle ${2 * (pi * (r * r))} is having the radius ${r}`);
}
```

## **How to Run:**
1. Copy the JavaScript code into a `.js` file.
2. Open your browser's Developer Tools (F12).
3. Paste the script into the Console and run it.
4. For the functions that require user input, such as `question7`, `question8`, `question9`, and `question10`, prompts will appear asking for user input.

---

Let me know if you'd like to add or adjust anything!