// Here is a collection of 100 JavaScript questions, divided into groups of 10, based on topics 1-8, with increasing complexity.

function First10Questions() {
  // 1. Basic Console Usage (10 Questions)
  // 	1.	Log your name and favorite hobby to the console.
  // console.log("Sambhav");
  // console.log("Hobby : Coding");
  // 	2.	Perform and log the result of 45 * 2 - 10.
  // console.log(45*2-10);
  // 	3.	Use console.log() to display the current year.
  // let date = new Date();
  // console.log(date.getFullYear());
  // 	4.	Create two variables for first and last name. Concatenate and log them.
  // let Name = "Sambhav "
  // let surname = "Wakhariya"
  // console.log(Name+surname);
  // 	5.	Track the value of a variable by logging it before and after updating.
  // let value = 10;
  // console.log(value++);
  // console.log(value);
  // 	6.	Use console.error() to simulate an error message.
  // console.error("This is Error");
  // 	7.	Log the square of the number 12 to the console.
  // console.log(12*2);
  // 	8.	Print the type of a variable holding the value true.
  // let Name  = true;
  // console.log(Name);
  // 	9.	Create a variable holding your age and log whether it’s greater than 18.
  // let age = 20;
  // let age2 = 15;
  // if(age > 18) console.log("You are greater then 18 and your age is ", age);
  // else console.log("You are less than 18 and your age is ", age2);
  // 	10.	Log the result of 100 / 0 and observe the output.
  // console.log(100/0); // infinity
}

// First10Questions()

function First20Questions() {
  // 2. Variables and Data Types (10 Questions)
  // 	11.	Declare a variable using let and log its value.
  // let a = 10;
  // console.log(a);
  // 	12.	Create a constant to store the value of PI and log it.
  // const pi = 3.14;
  // console.log(pi);
  // 	13.	Reassign a value to a variable declared with let and log the result.
  // let a = 10
  // console.log(a);
  // a = 20;
  // console.log(a);
  // 	14.	Check the type of null and log it.
  // let a = null;
  // console.log(typeof(a));
  // 	15.	Create a variable with a number as a string (e.g., "25") and log its type.
  // let string = "25";
  // console.log(typeof(string));
  // 	16.	Use typeof to check the type of a boolean variable.
  // let bool = true;
  // console.log(typeof(bool));
  // 	17.	Create three variables of types string, number, and boolean, and log their values.
  // let num = 555;
  // let bool = true;
  // let str = "Sambhav"
  // console.log(num, bool, str);
  // 	18.	Declare a variable without assigning a value. Log its type.
  // a = 13; // type is number
  // console.log(typeof(a));
  // 	19.	Create a variable with undefined and log its type.
  // let a = undefined; // type is undefined if value is unde
  // console.log(typeof(a));
  // 	20.	Use const to create an array. Try reassigning the array and observe the error.
  // const arr = [1,2,3,4,5];
  // arr = [2,3,4];
  // console.log(arr); // error is assignment to a constant variable
}

// First20Questions()

function First30Questions() {
  // 3. Loops (10 Questions)
  // 	21.	Write a for loop to print numbers from 1 to 50.
  // for(let i = 1; i <=50; i++){
  //     console.log(i);
  // }
  // 	22.	Use a while loop to sum the numbers from 1 to 10.
  // let sum = 0;
  // let i = 1;
  // while(i <= 10){
  //     sum = sum + i;
  //     i++;
  // }
  // console.log(sum);
  // 	23.	Create a for...of loop to log each character of the string "JavaScript".
  // let string = "JavaScript";
  // for(char of string){
  //     console.log(char);
  // }
  // 	24.	Write a for loop that skips even numbers between 1 and 20.
  // for(let i = 1; i <= 20; i++){
  //     if(i % 2 == 0) console.log(i);
  // }
  // 	25.	Use a do...while loop to log numbers from 5 to 1.
  // let i = 5;
  // do {
  //     console.log(i);
  //     i--
  // } while (i >=1);
  // 	26.	Create a for loop that calculates the factorial of 5.
  // let num = 5;
  // let factorial = 1;
  // for(let i = 1; i <=num; i++){
  //      factorial*=i;
  // }
  // console.log(factorial);
  // 	27.	Write a nested loop to print a 3x3 grid of numbers.
  //   for (let i = 0; i < 3; i++) {
  //     for (let j = 0; j < 3; j++) {
  //       process.stdout.write(` ${i} `);
  //     }
  //     console.log();
  //   }
  // 	28.	Use a for loop to reverse an array [1, 2, 3, 4].
  // let arr = [1,2,3,4];
  // let revArr = []
  // for(let i = arr.length; i >0 ; i--){
  //     revArr.push(i);
  // }
  // console.log(arr);
  // console.log(revArr);
  // 	29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
  // let i = 1;
  // while(i<=100){
  //     if(i%5 == 0) console.log(i);
  //     i++
  // }
  // 	30.	Use a for...in loop to iterate over an object and log its keys.
  // let obj = {
  //     Name : "Sambhav",
  //     Age : 20,
  //     City : "Bhopal"
  // };
  // for(prop in obj){
  //     console.log(obj[prop]);
  // }
}

// First30Questions();

function First40Questions() {
  // 4. Arrays (10 Questions)
  // 	31.	Create an array of your top 5 favorite movies and log it.
  // let arr = ["Spider-Man", "Intersteller", "Jhon Wick", "Avengers", "Avesham"];
  // console.log(arr);
  // 	32.	Find and log the second element of an array.
  // let arr = [1,2,3,4,5];
  // console.log(arr[1]);
  // 	33.	Add two new elements to the start of an array using .unshift().
  // let arr = [3,4];
  // console.log(arr);
  // arr.unshift(1,2);
  // console.log(arr);
  // 	34.	Remove the last element of an array and log the updated array.
  // let arr = [1,2,3,4,5];
  // console.log(arr);
  // arr.pop();
  // console.log(arr);
  // 	35.	Use .slice() to extract the first three elements of an array.
  // let arr = [1,2,3,4,5];
  // console.log(arr);
  // arr = arr.slice(0,3)
  // console.log(arr);
  // 	36.	Find the index of a specific element in an array using .indexOf().
  // let arr = [1,2,3,4,5];
  // console.log(arr.indexOf(4));
  // 	37.	Check if a value exists in an array using .includes().
  // let arr = [1,2,3,4,5];
  // console.log(arr.includes(3));
  // 	38.	Combine two arrays [1, 2] and [3, 4] using .concat().
  // let arr = [1,2];
  // let arr2 = [3,4,5];
  // let arr3 = arr.concat(arr2);
  // console.log(arr3);
  // 	39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
  // let arr = [5,2,9,1];
  // console.log(arr);
  // arr.sort((a,b) => a - b);
  // console.log(arr);
  // 	40.	Write a program that creates a copy of an array without mutating the original.
  // let arr = [1,2,3,4,5]
  // console.log(arr);
  // let copied = [...arr];
  // console.log(copied);
}
// First40Questions()

function First50Questions() {
  // 5. Functions (10 Questions)
  // 	41.	Write a function to check if a number is even or odd.
  // function EvenOrOdd(a){
  //     if(a % 2 == 0) console.log("Even");
  //     else console.log("Odd");
  // }
  // EvenOrOdd(22);
  // 	42.	Create a function to calculate the area of a circle with a given radius.
  // function AreaOfCircle(r){
  //     let pi = 3.14
  //     console.log("Area of Cirlce is ", pi*r*2);
  // }
  // AreaOfCircle(2);
  // 	43.	Write a function that accepts an array and returns the sum of its elements.
  // function SumoFArrayElem(arr){
  //     let sum = 0;
  //     for(let i = 0; i < arr.length; i++){
  //         sum += arr[i];
  //     }
  //     console.log("Sum of Array Elements is ", sum);
  // }
  // let arr = [1,2,3,4,5];
  // SumoFArrayElem(arr)
  // 	44.	Create a function that checks if a string starts with a specific character.
  // let string = "Sambhav";
  // function StartsWithSpecificChar(str, char){
  //     if(str[0] == char) console.log(str ,"Starts with", char);
  // }
  // StartsWithSpecificChar(string, "S");
  // 	45.	Write a function to find the maximum of two numbers.
  // function findMax(a,b){
  //     if(a > b) console.log(a,"is Max among both numbers.");
  //     else console.log(b,"is Max among both numbers.");
  // }
  // findMax(6,4);
  // 	46.	Create a function that takes a number and returns its factorial.
  // let num = 5;
  // function findFactorial(num){
  //     let factorial = 1;
  //     for(let i = 1; i <=num; i++){
  //      factorial*=i;
  //     }
  //     return factorial;
  // }
  // let fact = findFactorial(num);
  // console.log(fact);
  // 	47.	Write a function that accepts a string and returns its reverse.
  // let str = "hello";
  // function revString(str){
  //     for(let i = str.length-1; i >0; i--){
  //         process.stdout.write(`${str[i]}`)
  //     }
  // }
  // revString(str);
  // 	48.	Create a function to find the largest number in an array.
  // let arr = [1, 3, 8, 5, 6];
  // function findMaxInArray(arr) {
  //   let max = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] > max) max = arr[i];
  //   }
  //   console.log(max);
  // }
  // findMaxInArray(arr);
  // 	49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").
  // let str = "Hello-World";
  // toLowerCase(str);
  // function toLowerCase(str) {
  //     let result = '';
  //     for (let i = 0; i < str.length; i++) {
  //         let charCode = str.charCodeAt(i);
  //         if (charCode >= 65 && charCode <= 90) {
  //             result += String.fromCharCode(charCode + 32);
  //         } else {
  //             result += str[i];
  //         }
  //     }
  //     console.log(result);
  // }
  // 	50.	Create a function that logs "Hello, World!" every time it is called.
  // function Greet(){
  //     console.log("Hello World 😁");
  // }
  // Greet();
}
// First50Questions()

function First60Questions() {
  // 6. Conditionals (10 Questions)
  // 	51.	Write a program to check if a number is positive, negative, or zero.
  // let num = 0;
  // if(num > 0) console.log("Positive");
  // else if(num < 0) console.log("Negative");
  // else console.log("Zero");
  // 	52.	Create a program to check if a year is a leap year.
  // let year = 2100;
  // if(year  % 100 == 0){
  //     if(year % 400 == 0) console.log("Leap");
  //     else console.log("Not Leap");
  // }
  // else {
  //     if(year % 4 == 0) console.log("Leap");
  //     else  console.log("Not Leap");
  // }
  // 	53.	Write an if...else statement to determine if a person can vote based on their age.
  // let age = 18;
  // if(age > 18) console.log("You Can Vote");
  // else console.log("You Cannot Vote");
  // 	54.	Use a switch statement to log the name of the day based on its number (1 = Monday).
  // let num = 4;
  // switch(num){
  //     case 1:
  //         console.log("Monday");
  //         break
  //     case 2:
  //         console.log("Tuesday");
  //         break;
  //     case 3:
  //         console.log("Wednesday");
  //         break;
  //     case 4:
  //         console.log("Thursday");
  //         break;
  //     case 5:
  //         console.log("Friday");
  //         break;
  //     case 6:
  //         console.log("Saturday");
  //         break;
  //     default:
  //         console.log("Invalid Day");
  // }
  // 	55.	Write a program to check if a number is divisible by 3 and 5.
  // let num = 30;
  // if(num % 3 && num % 5) console.log("Not Divided");
  // else console.log("Divided");
  // 	56.	Create a program to check the grade of a student based on marks.
  // let Marks = 55;
  // if(Marks >= 90) console.log("A");
  // else if(Marks >= 80 && Marks < 90) console.log("B");
  // else if(Marks >= 70 && Marks < 80) console.log("C");
  // else if(Marks >= 60 && Marks < 70) console.log("D");
  // else if(Marks >= 50 && Marks < 60) console.log("E");
  // else console.log("F");
  // 	57.	Write an if condition to compare two strings and log if they are equal.
  // let str1 = "Sam"
  // let str2 = "Sambhav"
  // if(str1 == str2) console.log("Equal");
  // else console.log("Not Equal");
  // 	58.	Use a ternary operator to check if a number is even or odd.
  // let num = 2;
  // console.log(num % 2 ?  "Odd" : "Even");
  // 	59.	Write a program to find the largest of three numbers using if...else.
  // let a = 50 , b = 40, c = 30;
  // if(a > b){
  //     if(a > c) console.log(a);
  // }else if(b > c) console.log(b);
  // else console.log(c);
  // 	60.	Write a program to calculate the discount and the final price of an item based on its original price and the following discount criteria:
  // If the price is greater than or equal to $500, apply a 20% discount.
  // If the price is between $200 and $499 (inclusive), apply a 10% discount.
  // If the price is less than $200, apply a 5% discount.
  // let price = 500;
  // if(price >= 500) console.log("Discount is",(price/100)*20);
  // else if(price < 500 && price >= 200) console.log("Discount is", (price / 100)*10);
  // else console.log("Discount is", (price/100)*5);
}

// First60Questions();

function First70Questions() {
  // 7. Object Basics (10 Questions)
  // 	61.	Create an object with properties name, age, and city. Log the object.
  // let obj = {
  //     name  :"Sambhav",
  //     age : 20,
  //     city : "Bhopal"
  // }
  // console.log(obj);
  // 	62.	Add a new property isStudent to the object above and set it to true.
  // let obj = {
  //     name  :"Sambhav",
  //     age : 20,
  //     city : "Bhopal"
  // }
  // console.log(obj);
  // obj.isStudent = true;
  // console.log(obj);
  // 	63.	Access and log the value of the city property using bracket notation.
  // let obj = {
  //     name  :"Sambhav",
  //     age : 20,
  //     city : "Bhopal"
  // }
  // console.log(obj["city"]);
  // 	64.	Delete the age property from an object and log the updated object.
  // let obj = {
  //     name  :"Sambhav",
  //     age : 20,
  //     city : "Bhopal"
  // }
  // console.log(obj);
  // delete obj.age;
  // console.log(obj);
  // 	65.	Write a function that accepts an object and logs all its keys.
  // let obj = {
  //     name  :"Sambhav",
  //     age : 20,
  //     city : "Bhopal"
  // }
  // logKeys(obj);
  // function logKeys(obj){
  //     for(key in obj){
  //         console.log(key);
  //     }
  // }
  // 	66.	Create an array of objects representing books with title and author properties.
  // let arrOfObj = [
  //     {title : "Bhagwad Gita" , author : "Krishna"},
  //     {title : "Ramayana" , author : "Valmiki"}
  // ]
  // console.log(arrOfObj);
  // 	67.	Access and log the author of the second book in the array.
  // let arrOfObj = [
  //     {title : "Bhagwad Gita" , author : "Krishna"},
  //     {title : "Ramayana" , author : "Valmiki"}
  // ]
  // console.log(arrOfObj[1].author);
  // 	68.	Write a program to check if a specific key exists in an object.
  // let obj = {
  //   name: "Sambhav",
  //   age: 20,
  //   city: "Bhopal",
  // };
  // let val = "contry";
  // logKeysExists(obj, val);
  // function logKeysExists(obj, val) {
  //   for (elem in obj) {
  //     if (val == elem)  console.log("Key is Present");
  //   }
  //   console.log("Key is Not Present");
  // }
  // 	69.	Create a function to count the number of keys in an object.
  // let obj = {
  //   name: "Sambhav",
  //   age: 20,
  //   city: "Bhopal",
  // };
  // countKeys(obj);
  // function countKeys(obj){
  //     let count = 0;
  //     for(keys in obj){
  //         count++;
  //     }
  //     console.log(count);
  // }
  // 	70.	Use Object.assign() to merge two objects.
  // let obj1 = {name : "Sam", age : 20}
  // let obj2 = {city : "NuL", crimes : 10}
  // let newObj = Object.assign({}, obj1, obj2);
  // console.log(newObj);
}

// First70Questions()

function First80Questions() {
  // 8. String Manipulation (10 Questions)
  // 	71.	Create a string and log its length.
  // let str = "Sambhav"
  // console.log(str.length);
  // 	72.	Extract the last 4 characters of a string.
  // let str = "123456789"
  // console.log(str.slice(5));
  // 	73.	Convert a string to lowercase and log it.
  // let str = 'SAMBHAV';
  // console.log(str.toLowerCase());
  // 	74.	Split a sentence into words using .split() and log the result.
  // let sentence = "This is a sentence";
  // let splitted = sentence.split(" ");
  // console.log(splitted);
  // 	75.	Find the position of the first occurrence of "a" in a string.
  // let string = "Thisisastring";
  // for(let i = 0; i < string.length; i++){
  //     if(string.charAt(i) == "a") console.log(i);
  // }
  // 	76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".
  // let string = "I love JavaScript";
  // console.log(string);
  // let res = string.replace("JavaScript", "JS");
  // console.log(res);
  // 	77.	Repeat a string 3 times using .repeat().
  // const mood = "Happy !";
  // console.log(`I feel ${mood.repeat(3)}`);
  // 	78.	Create a function that checks if a string contains a specific word.
  // let sentence = "This string contains that word or not";
  // checkContains(sentence);
  // function checkContains(sentence){
  //     let word = "or";
  //     let arr = sentence.split(" ");
  //     for(let i = 0; i < arr.length; i++){
  //         if(arr[i] == word) {
  //             flag = true;
  //             break;
  //         }
  //     }
  //     if(flag) console.log("Contains");
  //     else console.log("Does Not Contain");
  // }
  // 	79.	Write a program to remove whitespace from both ends of a string.
  // let sting = "  sambhav   "
  // console.log(sting.trim());
  // 	80.	Create a function to count the number of vowels in a string.
  // let string = "Sambhav";
  // let arr = string.split("");
  // let count = 0;
  // for(let i = 0; i<arr.length; i++){
  //     if(arr[i] == "a" || arr[i] == "e" || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') count++;
  // }
  // console.log("Number of vowel in string are ", count);
}

//First80Questions()

function First90Questions(){
    // Mixed Practice (20 Questions)
// 	81.	Write a function that accepts an array of numbers and returns only the even numbers.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// returnEvens(arr);
// function returnEvens(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) console.log(arr[i]);
//   }
// }

// 	82.	Create a program to count the occurrences of a specific value in an array.
// let arr = [1, 2, 3, 4, 1, 1, 3, 4], val = 1 ,count = 0;
// for(let i = 0; i < arr.length; i++){
//     if(val == arr[i]) count++;
// }
// console.log(count);

// 	83.	Write a function that accepts a string and returns whether it’s a palindrome.
// let str = 'aurkoi', rev = '';
// for(let i = str.length-1; i >=0; i--){
//     rev+=str[i];
// }
// if(rev == str) console.log("palindrome");
// else console.log("Not palindrome");

// 	84.	Create a program to log a pattern:

// *
// **
// ***
// ****

// let num = 5;
// for(let i = 0; i < num; i++){
//     for(let j = 0; j <=i; j++){
//         process.stdout.write(" *")
//     }
//     console.log();
// }

// 	85.	Write a function that returns the square of each number in an array.
// let arr = [1,2,3,4,5];
// console.log(arr);
// for(let i = 0; i < arr.length; i++){
//     arr[i] *= arr[i];
// }
// console.log(arr);


// 	86.	Use a for loop to sum all odd numbers between 1 and 50.
// let sum = 0;
// for(let i = 1; i <= 50; i++){
//     if(i%2!=0) sum+=i;
// }
// console.log(sum);


// 	87.	Create an object representing a person and log their full name.
// let obj = {
//     fullName : "Full Name"
// }
// console.log(obj.fullName);

// 	88.	Write a program to convert the string "10" to a number and add 5 to it.
// let str = "10";
// let num = Number(str);
// console.log(num+5);

// 	89.	Write a program to reverse an array without using .reverse().
// let arr = [1,2,3,4,5];
// console.log(arr);
// let s = 0, e = arr.length-1, temp;
// while(s<e){
//     temp = arr[s];
//     arr[s] = arr[e];
//     arr[e] = temp;
//     s++;
//     e--;
// }
// console.log(arr);


// 	90.	Create a program to check if an array is empty.
// let arr = [];
// if(arr.length == 0) console.log("empty");
// else console.log("not empty");
}

// First90Questions()

// 	91.	Write a program to fetch the current date and format it as DD/MM/YYYY.
// let date = new Date(), dATE =  date.getDate() ,month = date.getMonth()+1, year = date.getFullYear();

// console.log(`${dATE}/${month}/${year}`);

// 	92.	Write a program to find the smallest number in an array.
// let arr = [10,2,3,4,1,6];
// let min = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(min>arr[i]) min = arr[i]
// }
// console.log(min);

// 	93.	Create a function to return the Fibonacci sequence up to n terms.
// let num = 5;
// function generateFibonacci(n){
//     let fib = [];   
//     if(n >= 1) fib.push(0);
//     if(n >= 2) fib.push(1);

//     for(let i = 2; i < n; i++){
//         fib.push(fib[i-1]+ fib[i-2])
//     }
//     return fib;
// }
// console.log(generateFibonacci(num));

// 	94.	Use a try...catch block to handle division by zero.
// function divide(a, b) {
//   try {
//       if (b === 0) throw new Error("Division by zero is not allowed");
//       return a / b;
//   } catch (error) {
//       return error.message;
//   }
// }

// console.log(divide(10, 2)); // Output: 5
// console.log(divide(10, 0)); // Output: "Division by zero is not allowed"


// 	95.	Write a program to find the index of the first vowel in a string.
// function findFirstVowelIndex(str) {
//   let vowels = "aeiouAEIOU";
//   for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i])) {
//           return i;
//       }
//   }
//   return -1; // Return -1 if no vowels are found
// }

// console.log(findFirstVowelIndex("hello")); // Output: 1
// console.log(findFirstVowelIndex("bcdfg")); // Output: -1


// 	96.	Create a function that accepts an array and returns only unique values.
// function getUniqueValues(arr) {
//   let unique = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (!unique.includes(arr[i])) {
//           unique.push(arr[i]);
//       }
//   }
//   return unique;
// }

// console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


// 	97.	Write a program to merge two sorted arrays into one sorted array.
// function mergeSortedArrays(arr1, arr2) {
//   let merged = [];
//   let i = 0, j = 0;

//   while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//           merged.push(arr1[i]);
//           i++;
//       } else {
//           merged.push(arr2[j]);
//           j++;
//       }
//   }

//   while (i < arr1.length) merged.push(arr1[i++]);
//   while (j < arr2.length) merged.push(arr2[j++]);

//   return merged;
// }

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]


// 	98.	Create a function to count the number of words in a string
// function countWords(str) {
//   if (!str.trim()) return 0; // Handle empty or whitespace-only strings
//   return str.trim().split(/\s+/).length;
// }

// console.log(countWords("Hello world!")); // Output: 2
// console.log(countWords("   This   is    a test   ")); // Output: 4


// 	99.	Write a program to toggle a button’s background color when clicked.
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Toggle Button Color</title>
//     <style>
//         .red {
//             background-color: red;
//         }
//         .blue {
//             background-color: blue;
//         }
//     </style>
// </head>
// <body>
//     <button id="toggleButton" class="red">Toggle Color</button>
//     <script>
//         const button = document.getElementById("toggleButton");
//         button.addEventListener("click", () => {
//             button.classList.toggle("red");
//             button.classList.toggle("blue");
//         });
//     </script>
// </body>
// </html>


// 	100.	Write a function to check if all elements in an array are greater than a specific value.
// function areAllElementsGreaterThan(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] <= value) return false;
//   }
//   return true;
// }

// console.log(areAllElementsGreaterThan([10, 20, 30], 5)); // Output: true
// console.log(areAllElementsGreaterThan([10, 20, 5], 15)); // Output: false


// These questions cover a wide range of fundamental JavaScript concepts. Let me know if you’d like further clarification or solutions for any of these!
