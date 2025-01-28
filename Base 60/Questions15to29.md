# Loop and Mathematics Programming Questions

This document contains a collection of programming questions involving loops and mathematical operations, along with their respective implementations in JavaScript.

[Go Back](./Readme.md)

## Questions and Solutions

### Question 15: Print "Hello World" N Times
**Problem:** Print the message "Hello World" exactly `N` times.
```javascript
function Question15(){
    let n = 5;
    for(let i = 0; i < n; i++){
        console.log("Hello World");
    }
}
```

### Question 16: Print N Natural Numbers
**Problem:** Print the first `N` natural numbers.
```javascript
function Question16(){
    let n = 5;
    for(let i = 1; i <= n; i++){
        console.log(i);
    }
}
```

### Question 17: Sum of First N Numbers
**Problem:** Calculate the sum of the first `N` natural numbers.
```javascript
function Question17(){
    let n = 5;
    let sum = 0;
    for(let i = 1; i <=n ; i++){
        sum += i;
    }
    console.log(sum);
}
```

### Question 18: Factorial of a Number
**Problem:** Calculate the factorial of a number `N`.
```javascript
function Question18(){
    let n = 5;
    let Factorial = 1;
    for(let i = 1; i <=n; i++){
        Factorial *= i;
    }
    console.log(Factorial);
}
```

### Question 19: Prime Number Check
**Problem:** Check if a given number is a prime number.
```javascript
function Question19(){
    let num = 2;
    let isPrime = true;
    if (num <= 1) console.log(`${num} is not Prime`);
    for(let i = 2; i < num; i++){
        if(num % i == 0) {
            isPrime = false;
            break;
        }else{
            isPrime = true;
        }
    }
    if(isPrime) console.log(`${num} is Prime`);
    else console.log(`${num} is not Prime`);
}
```

### Question 20: Sum of Digits
**Problem:** Find the sum of the digits of a given number.
```javascript
function Question20(){
    let n = 1234;
    let realn = n;
    let sum = 0;
    while(n > 0){
        let rem = n % 10;
        sum += rem;
        n = Math.floor(n / 10);     
    }
    console.log(`Sum of ${realn} number is ${sum}`);
}
```

### Question 21: Reverse a Number
**Problem:** Reverse the digits of a given number.
```javascript
function Question21(){
    let num = 12345;
    let realNum = num;
    let rev = 0;
    while(num > 0){
        rev = rev * 10 +  num % 10;        
        num = Math.floor(num/10);
    }
    console.log(`Reverse of ${realNum} is ${rev}`);
}
```

### Question 22: Palindrome Number
**Problem:** Check if a given number is a palindrome.
```javascript
function Question22(){
    let num = 123;
    let realNum = num;
    let rev = 0;
    while(num > 0){
        rev = rev * 10 + num % 10;
        num = Math.floor(num/10);
    }
    if(realNum == rev) console.log(`${realNum} is Palindrome Number`);
    else console.log(`${realNum} is Not Palindrome Number`);
}
```

### Question 23: Strong Number
**Problem:** Check if a number is a Strong Number (sum of the factorials of its digits equals the number).
```javascript
function Question23(){
    let num = 40585;
    let realNum = num;
    let sum = 0;
    while(num > 0){
        let fact = 1;
        let rem = num % 10;
        for(let i = 2; i <= rem; i++){
            fact *= i;
        }
        sum += fact;
        num = Math.floor(num/10)
    }
    if(sum == realNum) console.log(`${realNum} is Strong Number`);
    else console.log(`${realNum} is Not a Strong Number`);
}
```

### Question 24: Automorphic Number
**Problem:** Check if a number is Automorphic (its square ends with the number itself).
```javascript
function Question24(){
    let num = 25;
    let square = num * num;
    let isAutomorphic = true;
    while(num > 0){
        if(num % 10 != square % 10) {
            isAutomorphic = false;
            break;
        }
        num = Math.floor(num / 10);
        square = Math.floor(square / 10);
    }
    isAutomorphic ? console.log("Automorphic") : console.log("Not Automorphic");
}
```

### Question 25: Sum of Digits Until Single Digit
**Problem:** Find the sum of digits of a number repeatedly until the result is a single digit.
```javascript
function Question25(){
    let num = 6758;
    let sum = 0;
    while(num > 0 || sum > 9){
        if(num == 0){
            num = sum;
            sum = 0;
        }
        sum += num % 10;
        num = Math.floor(num/10);
    }
    console.log(sum);
}
```

### Question 26: Fibonacci Series
**Problem:** Generate the Fibonacci series up to `N` terms.
```javascript
function Question26(){
    let prev = 0, current = 1;
    let str = "0 1 "
    let num = 2;
    let count = 2;
    while(count <= num){
        let temp = current;
        current += prev;
        prev = temp;
        str += current + " ";
        count++;
    }
    if(num == 0){
        console.log(prev + " ");
    }else if(num == 1){
        console.log(current+ " ");
    }else  console.log(str);
}
```

### Question 27: Repeat Message Until Incorrect Input
**Problem:** Continuously print "Hello" until the user provides invalid input.
```javascript
function Question27(){
    let userInput = null;
    do{
        console.log("Hello");
        userInput = prompt("Do you want to continue? (yes/no)");
    }while(userInput == 'yes' || userInput == 'Yes');
}
```

### Question 28: Calculator Program
**Problem:** Implement a basic calculator with operations like addition, subtraction, multiplication, and division.
```javascript
function Question28(){
    let userInput = null;
    do{
        userInput = prompt(`Choose an Operation
                1 : Addition
                2 : Subtraction
                3 : Multiplication
                4 : Division
                5 : Exit
                Enter your choice : 
            `);
        if(userInput == "5"){
            console.log("Program Exited");
            break;
        }
        if(userInput > 5 || userInput <1){
            console.log("Invalid Input");
            continue;
        }
        let num1 = Number(prompt("Enter a first number "));
        let num2 = Number(prompt("Enter a second number "));
        if(userInput == "1") console.log(`Sum is ${num1+num2}`);
        else if(userInput == "2") console.log(`Diff is ${num1-num2}`);
        else if(userInput == "3") console.log(`Mul is ${num1*num2}`);
        else if(userInput == "4") console.log(`Div is ${num1 / num2}`);
    }while(userInput != "5");
}
```

### Question 29: Guess the Number Game
**Problem:** Create a game where the user guesses a randomly generated number between 1 and 100.
```javascript
function Question29(){
    const target = Math.floor(Math.random()*100)+1;
    let userInput = null;

    console.log("Welcome to the Guess the Number Game!");
    console.log("I have picked a number between 1 and 100. Can you guess it?");

    while(userInput != target){
        userInput = Number(prompt("Enter a number "));
        if(userInput == target){
            console.log("Target Found",userInput);
            break;
        }else if(userInput > target){
            console.log("Too High, try again");
        }else if(userInput < target){
            console.log("Too Low, try again");
        }
    }
}
