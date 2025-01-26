// Here are 100 new JavaScript questions, slightly harder than the previous ones, focusing on problem-solving, intermediate concepts, and advanced use of JavaScript features.

function _1_10() {
  // 1. Intermediate Console and Variables (10 Questions)
  // 	1.	Create a program that calculates and logs the result of (5 + 3) * 2 - 8 / 4.
  // console.log((5+3) * 2-8 /4);
  // 	2.	Log the value of a variable before and after incrementing it using ++.
  // let a = 10
  // console.log(a);
  // a++;
  // console.log(a);
  // 	3.	Write a program that swaps the values of two variables without using a third variable.
  // let a = 10, b = 20;
  // console.log(a , b);
  // a = a +b;
  // b = a - b;
  // a = a - b;
  // console.log(a , b);
  // 	4.	Create a variable with a template literal that includes your name and age.
  // let value = `Sambhav 20`;
  // console.log(value);
  // 	5.	Use console.table() to display the following object: { name: "John", age: 30, city: "New York" }.
  // let obj = { name : "John", age : 30, city : "New York"};
  // console.table(obj)
  // 	6.	Create a program that uses console.group() to group related logs.
  // console.log("Outside of group");
  // console.group();
  // console.log("Hello inside a group in console");
  // 	7.	Use console.time() and console.timeEnd() to measure the execution time of a simple loop.
  // console.time("Execution Time");
  // let sum = 0;
  // for (let i = 0; i < 1000000; i++) {
  //     sum += i;
  // }
  // console.timeEnd("Execution Time");
  // 	8.	Log a variable’s value dynamically by including it in a string: "The value is: <value>".
  // let value = 20;
  // console.log(`The value is: ${value}`);
  // 	9.	Use console.trace() to debug a function call stack.
  // function a() {
  //     b();
  // }
  // function b() {
  //     c();
  // }
  // function c() {
  //     console.trace("Debugging the call stack");
  // }
  // a();
  // Output:
  // Debugging the call stack
  // Trace
  // at c (script.js:60)
  // at b (script.js:56)
  // at a (script.js:52)
  // at <anonymous>:63
  // 	10.	Create and log an object dynamically using computed property names.
  // let key = "dynamicKey";
  // let value = "dynamicValue";
  // let obj = {
  //     [key]: value,
  //     staticKey: "staticValue"
  // };
  // console.log(obj);
  // Output: { dynamicKey: 'dynamicValue', staticKey: 'staticValue' }
}

// _1_10();

function _11_20() {
  // 2. Advanced Loops (10 Questions)
  // 	11.	Write a nested loop to generate a multiplication table (1 to 10).
  // for (let i = 1; i <= 10; i++) {
  //     let row = "";
  //     for (let j = 1; j <= 10; j++) {
  //         row += `${i * j}\t`; // \t for tab space
  //     }
  //     console.log(row);
  // }
  // Output: Multiplication table (1 to 10)
  // 	12.	Use a for...in loop to iterate through the properties of an object.
  // let student = {
  //     name: "Sambhav",
  //     age: 20,
  //     city: "Bhopal"
  // };
  // for (let key in student) {
  //     console.log(`${key}: ${student[key]}`);
  // }
  // Output:
  // name: Sambhav
  // age: 20
  // city: Bhopal
  // 	13.	Write a program to calculate the sum of all even numbers between 1 and 100 using a for loop.
  // let sum = 0;
  // for (let i = 1; i <= 100; i++) {
  //     if (i % 2 === 0) sum += i;
  // }
  // console.log("Sum of all even numbers between 1 and 100:", sum);
  // Output: 2550
  // 	14.	Use a for...of loop to iterate over a string and count the vowels.
  // let string = "JavaScript";
  // let count = 0;
  // for(let i = 0; i < string.length; i++){
  //     if(string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o'|| string.charAt(i) == 'u' || string.charAt(i) == 'A' || string.charAt(i) == 'E' || string.charAt(i) == 'I' || string.charAt(i) == 'O' || string.charAt(i) == 'U') count++;
  // }
  // console.log(count);
  // 	15.	Create a loop that breaks out when a specific condition is met (e.g., number divisible by 7).
  // for (let i = 1; i <= 50; i++) {
  //     if (i % 7 === 0) {
  //         console.log("Number divisible by 7 found:", i);
  //         break;
  //     }
  // }
  // Output: Number divisible by 7 found: 7
  // 	16.	Write a loop that skips numbers divisible by 3 but logs all others up to 20.
  // for(let i = 1; i <= 20; i++){
  //     if(i % 3 != 0) console.log(i);
  // }
  // 	17.	Use a do...while loop to prompt the user until they enter a positive number.
  // let number;
  // do {
  //    number = parseInt(prompt("Enter a positive number:"));
  // } while (number <= 0);
  // console.log("You entered a positive number:", number);
  // Output: Depends on user input
  // 	18.	Write a nested loop to generate a pyramid pattern:
  //    *
  //   ***
  //  *****
  // *******
  // let n = 6;
  // for(let i =0; i < n; i++){
  //     let k = 0;
  //     for(let j = 0; j < 2*n-1; j++){
  //         if(j < n-i-1) process.stdout.write(" ");
  //         else if(k < 2*i+1) {
  //             process.stdout.write("*");
  //             k++;
  //         }else process.stdout.write(" ");
  //     }
  //     console.log();
  // }
  // 	19.	Use a loop to reverse a string "JavaScript".
  // let string = "JavaScript";
  // let reversed = "";
  // for (let i = string.length - 1; i >= 0; i--) {
  //     reversed += string[i];
  // }
  // console.log("Reversed string:", reversed);
  // Output: tpircSavaJ
  // 	20.	Write a program to calculate the product of all numbers in an array using a loop.
  // let arr = [1, 2, 3, 4, 5];
  // let product = 1;
  // for (let num of arr) {
  //     product *= num;
  // }
  // console.log("Product of all numbers in the array:", product);
  // Output: 120
}

// _11_20();

function _21_30(){
  // 3. Arrays and Objects (10 Questions)
// 	21.	Write a program to merge two arrays and remove duplicate values.
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [3,4,5,6,7,8];
// let merged = [...arr,...arr2];
// let unique = [];
// for(let i = 0; i < merged.length; i++){
//     if(!unique.includes(merged[i])){
//        unique.push(merged[i])
//     }
// }
// console.log(unique);

// 	22.	Create a program to find the second largest number in an array.
// let arr = [1,2,3,4,5,10,7,8, 11,11];
// let max = Math.max(arr[0], arr[1]);
// let max2 = Math.min(arr[0], arr[1]);
// for(let i = 2; i < arr.length; i++){
//     if(arr[i] > max){
//         max2 = max;
//         max = arr[i];
//     }
//     else if(arr[i] > max2 && arr[i] < max) max2 = arr[i];
// }
// console.log( max , max2);

// 	23.	Write a function that removes all falsy values from an array.
// let arr = [1,2,3,false,0,"",7,null];
// console.log(arr);
// let filtered = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i]) filtered.push(arr[i]);
// }
// console.log(filtered);

// 	24.	Use .reduce() to find the total sum of numbers in an array.
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

// 	25.	Write a program that rotates an array to the left by n positions.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let n = 2;
// n = n % arr.length;
// if (n != 0) {
//   for (let i = 0; i < n; i++) {
//     let temp = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = temp;
//     console.log(arr);
//   }
// }

// 	26.	Use .find() to locate the first even number in an array.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.find((num)=> num % 2 == 0 ));


// 	27.	Create a function that flattens a nested array (e.g., [1, [2, [3]]] → [1, 2, 3]).
// let arr = [ [1,2,3] , [4, [5,6]],  [[7], [8, [9]]], 10];
// console.log(arr);
// console.log(flatten(arr))

// function flatten(arr){
//   let flat = [];
//   for(let i =0; i < arr.length; i++){
//     if(Array.isArray(arr[i])) flat = flat.concat(flatten(arr[i]));
//     else flat.push(arr[i]);
//   }
//   return flat;
// }


// 	28.	Write a program that counts how many times each element appears in an array.
// let arr =[1,2,3,1,1,2,4,5];

// while(true){
//     for(let i = 0; i < arr.length; i++){
//        let  count = 1;
//         if(arr[i] > 0){
//             for(let j = i; j < arr.length; j++){
//                 if(arr[i] == arr[j+1]){
//                     count++;
//                     arr[j+1] = -1;
//                 }
//             }
//         }
//         if(arr[i] > -1)   console.log(arr[i], count);
//     }
//     break;
// }

// 	29.	Use .some() and .every() to check conditions on an array.
// let arr = [1,2,3,4,5];
// const element = (currentValue) => currentValue < 10;
// console.log(arr.every(element));
// console.log(arr.some((elem) => (elem > 3));

// 	30.	Sort an array of objects by a specific property.
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 22 },
//   { name: "Bob", age: 30 }
// ];

// const sortedage  = people.sort((a, b) => b.age - a.age); // by age
// const sortedPeople  = people.sort((a,b) => a.name.localeCompare(b.name)); 
// console.log(sortedPeople);
}

// _21_30();

function _31_40(){
// 4. Functions and Closures (10 Questions)
// // 	31.	Write a function that returns another function to calculate the power of a number.
// function power(exponent){
//   return function(base){
//     return Math.pow(base, exponent);
//   }
// }

// const square = power(2);
// console.log(square(4));

// 	32.	Create a recursive function to calculate the Fibonacci sequence up to n terms.
// let n =7;

// console.log(fibo(n, a =0, b = 1));

// function fibo(n, a, b){
//   if(n == 0) return a;
//   if (n == 1) return b;
//   return fibo(n-1, b, a+b);
// }

// 	33.	Write a function that uses closures to create a counter.
// function counter(){
//   let count = 0;
//   return ()=>{
//     count++;    
//     return count;
//   }

// }
// let counting = counter();
// console.log(counting());
// console.log(counting());

// 	34.	Create a function that memoizes the result of a computation.


// 	35.	Write a function to debounce a button click event.
// function debounce(fn, delay) {
//   let timeout;
//   return function(...args) {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => fn(...args), delay);
//   };
// }

// // Example:
// const debouncedFunction = debounce(() => console.log("Button clicked!"), 1000);
// debouncedFunction();
// debouncedFunction();


// 	36.	Implement a function that throttles an API call.
// function throttle(fn, limit) {
//   let inThrottle = false;
//   return function(...args) {
//       if (!inThrottle) {
//           fn(...args);
//           inThrottle = true;
//           setTimeout(() => (inThrottle = false), limit);
//       }
//   };
// }

// // Example:
// const throttledFunction = throttle(() => console.log("API Call"), 2000);
// throttledFunction();
// throttledFunction();


// 	37.	Create a higher-order function that applies a callback to each element of an array.
// function applyToEach(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//       result.push(callback(array[i]));
//   }
//   return result;
// }

// console.log(applyToEach([1, 2, 3], x => x * 2)); 


// 	38.	Write a function that calculates the GCD (Greatest Common Divisor) of two numbers.
// function gcd(a, b) {
//   if (b === 0) return a;
//   return gcd(b, a % b);
// }

// // Example:
// console.log(gcd(48, 18)); // 6


// 	39.	Create a function that accepts an array of functions and executes them sequentially.
// function executeSequentially(functions) {
//   for(let i = 0; i < functions.length; i++) {
//     functions[i]();
//   }
// }

// executeSequentially([
//   () => console.log("First"),
//   () => console.log("Second"),
//   () => console.log("Third")
// ]);

// 	40.	Write a function to curry a simple mathematical operation.

}

// _31_40();


// 5. Strings and Regular Expressions (10 Questions)
// 	41.	Write a program to reverse the words in a sentence but not the sentence itself.
// 	42.	Use a regex to validate if a string is a valid email address.
// 	43.	Create a function to check if a string contains only digits.
// 	44.	Write a function to extract all numbers from a string and return them as an array.
// 	45.	Use .match() to find all occurrences of a word in a string.
// 	46.	Create a program to capitalize the first letter of each word in a string.
// 	47.	Write a function that removes duplicate characters from a string.
// 	48.	Use a regex to replace multiple spaces with a single space.
// 	49.	Write a function to check if a string is an anagram of another string.
// 	50.	Create a function to count the frequency of each word in a string.

// 6. Intermediate DOM Manipulation (10 Questions)
// 	51.	Write a script to dynamically create 10 buttons on a webpage.
// 	52.	Add an event listener to a button that logs its id when clicked.
// 	53.	Write a program to change the background color of a <div> on hover.
// 	54.	Dynamically add a CSS class to an element when a button is clicked.
// 	55.	Create a function to toggle the visibility of an element.
// 	56.	Write a program to count the number of <p> tags on a page.
// 	57.	Implement a function to disable all input fields on a form.
// 	58.	Write a program to clone an element and append it to the DOM.
// 	59.	Add a click event to a list of items and display the clicked item’s text.
// 	60.	Create a program to validate a form using JavaScript.

// 7. Intermediate Algorithms (10 Questions)
// 	61.	Write a function to merge two sorted arrays into one sorted array.
// 	62.	Implement a binary search algorithm.
// 	63.	Write a function to check if two strings are one edit away.
// 	64.	Create a function that finds the longest common prefix in an array of strings.
// 	65.	Write a program to check if a string can be rearranged into a palindrome.
// 	66.	Create a function to find the intersection of two arrays.
// 	67.	Implement the Sieve of Eratosthenes to find prime numbers up to n.
// 	68.	Write a program to generate all subsets of a given array.
// 	69.	Create a function to calculate the power of a number iteratively.
// 	70.	Implement a function to sort an array using the quicksort algorithm.

// 8. Advanced Error Handling (10 Questions)
// 	71.	Write a program to handle a division by zero error.
// 	72.	Use try...catch to log an error message for invalid JSON parsing.
// 	73.	Write a function to validate user input and throw a custom error if invalid.
// 	74.	Create a program to handle a failed promise using .catch().
// 	75.	Use finally to log a cleanup message after a promise resolves or rejects.
// 	76.	Implement a function to retry a failed API call up to 3 times.
// 	77.	Write a function that uses try...catch inside an async function.
// 	78.	Create a program to handle and log syntax errors dynamically.
// 	79.	Write a function to ensure a variable is defined before using it.
// 	80.	Use error handling to check if a file exists before reading it.

// 9. Advanced Array and Object Manipulation (10 Questions)
// 	81.	Write a function that groups an array of objects by a specific property.
// 	82.	Use .map() to transform an array of objects into a new format.
// 	83.	Write a program to deep clone an object without using external libraries.
// 	84.	Create a function that merges multiple arrays into a single unique array.
// 	85.	Write a function to count the occurrences of properties in an array of objects.
// 	86.	Implement a function to sort an array of objects by multiple properties.
// 	87.	Write a function to create a nested object from a flat array of key-value pairs.
// 	88.	Use .reduce() to transform an array into an object with grouped values.
// 	89.	Create a function to find the difference between two arrays of objects.
// 	90.	Write a function to filter and transform an array of objects in a single step.

// 10. Real-World Use Cases (10 Questions)
// 	91.	Create a simple program that fetches and displays user data from a mock API.
// 	92.	Write a program to simulate a shopping cart with add, remove, and total cost features.
// 	93.	Implement a simple pagination system for an array of data.
// 	94.	Write a program to dynamically update a chart using JavaScript.
// 	95.	Create a program to search for and highlight specific text on a webpage.
// 	96.	Write a program to simulate a basic stopwatch with start, stop, and reset functionality.
// 	97.	Implement a function to validate password strength based on rules.
// 	98.	Create a simple image slider with next/previous buttons.
// 	99.	Write a program to sort and display data fetched from an API.
// 	100.	Create a program that automatically saves form data to localStorage.

// Let me know if you’d like to explore solutions or get hints for any of these!
