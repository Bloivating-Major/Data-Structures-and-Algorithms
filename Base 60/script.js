// Basic Input Output Conditionals and Operators Questions
function Question01() {
  // Sum of Two Integers
  // Input : a = 5, b = 7
  // Output : 12
  let a = 5,
    b = 7;
  let sum = a + b;
  console.log(sum);
}
// Question01()
function Question02() {
  // Sum and Message
  let a = 5,
    b = 7;
  let sum = a + b;
  console.log(`Sum of ${a} and ${b} is ${sum}`);
}
// Question02()
function Question03() {
  // Sum and Message
  let a = Number(prompt("Enter a number 1"));
  let b = Number(prompt("Enter a number 2"));
  let sum = a + b;
  console.log(`Sum of ${a} and ${b} is ${sum}`);
}
// Question03()
function Question04() {
  let text = prompt("Enter a text");
  console.log(text);
}
// Question04()
function Question05() {
  let length = 5;
  let width = 3;
  let area = length * width;
  console.log(`Area of Rectangle is ${area}`);
}
// Question05()
function Question06() {
  let principle = 1000,
    rate = 5,
    time = 3;
  let amount = principle * Math.pow(1 + rate / 100, time);
  let compoundInterest = amount - principle;
  console.log(`$${compoundInterest.toFixed(2)}`);
}
// Question06()
function Question07() {
  let s1 = 5,
    s2 = 7,
    s3 = 9;
  let sp = (s1 + s2 + s3) / 2;
  let area = Math.sqrt(sp * (sp - s1) * (sp - s2) * (sp - s3));
  console.log(`Area is ${area.toFixed(3)} sq units`);
}
// Question07()
function Question08() {
  let a = 9,
    b = 12;
  if (a > b) console.log(`${a} is greater than ${b}`);
  else console.log(`${b} is greater than ${a}`);
}
// Question08()
function Question09() {
  let a = 9;
  if (a % 2 == 0) console.log(`${a} is Even Number`);
  else console.log(`${a} is Odd Number`);
}
// Question09()
function Question10() {
  let name = "Sambhav";
  let age = 20;
  if (age >= 18) console.log(`Hello ${name} you are a voter`);
  else
    console.log(
      `Hello ${name} you will be eligible to vote in ${18 - age} years.`
    );
}
// Question10()
function Question11() {
  let num = 6;
  switch (num) {
    case 1:
      console.log(`Monday`);
      break;
    case 2:
      console.log(`Tuesday`);
      break;
    case 3:
      console.log(`Wednesday`);
      break;
    case 4:
      console.log(`Thursday`);
      break;
    case 5:
      console.log(`Friday`);
      break;
    case 6:
      console.log(`Saturday`);
      break;
    default:
      console.log(`Invalid Input`);
  }
}
// Question11()
function Question12() {
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
// Question12()
function Question13() {
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
// Question13()
function Question14() {
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
// Question14()

// Loops Questions
function Question15() {
  // N Times Hello World
  let n = 5;
  for (let i = 0; i < n; i++) {
    console.log("Hello World");
  }
}
// Question15()
function Question16() {
  // N Times Natural Numbers
  let n = 5;
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// Question16()
function Question17() {
  // Sum of First N Numbers
  let n = 5;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
// Question17()
function Question18() {
  // Factorial of a Number
  let n = 5;
  let Factorial = 1;
  for (let i = 1; i <= n; i++) {
    Factorial *= i;
  }
  console.log(Factorial);
}
// Question18()
function Question19() {
  // Prime Number Question
  let num = 2;
  let isPrime = true;
  if (num <= 1) console.log(`${num} is not Prime`);
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  if (isPrime) console.log(`${num} is Prime`);
  else console.log(`${num} is not Prime`);
}
// Question19()
function Question20() {
  // Sum of Digits
  let n = 1234;
  let realn = n;
  let sum = 0;
  // console.log(n%10);
  while (n > 0) {
    let rem = n % 10;
    sum += rem;
    n = Math.floor(n / 10);
  }
  console.log(`Sum of ${realn} number is ${sum}`);
}
// Question20()
function Question21() {
  // Reverse a Number
  let num = 12345;
  let realNum = num;
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  console.log(`Reverse of ${realNum} is ${rev}`);
}
// Question21()
function Question22() {
  // Palindrome Number
  let num = 123;
  let realNum = num;
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (realNum == rev) console.log(`${realNum} is Palindrome Number`);
  else console.log(`${realNum} is Not Palindrome Number`);
}
// Question22()
function Question23() {
  // Strong Number
  let num = 40585;
  let realNum = num;
  let sum = 0;
  while (num > 0) {
    let fact = 1;
    let rem = num % 10;
    for (let i = 2; i <= rem; i++) {
      fact *= i;
    }
    sum += fact;
    num = Math.floor(num / 10);
  }
  if (sum == realNum) console.log(`${realNum} is Strong Number`);
  else console.log(`${realNum} is Not a Strong Number`);
}
// Question23()
function Question24() {
  // Automorphic Number
  let num = 25;

  let square = num * num;
  let isAutomorphic = true;

  while (num > 0) {
    if (num % 10 != square % 10) {
      isAutomorphic = false;
      break;
    }
    num = Math.floor(num / 10);
    square = Math.floor(square / 10);
  }

  isAutomorphic ? console.log("Automorphic") : console.log("Not Automorphic");

  // num 5
  // square 25
  // while num > 0 yes
  //  5 not equal to 5
  // num = 0.5
}
// Question24()
function Question25() {
  // Sum of Digit until number is single
  // 6758  6+7+5+8 -->26  2+6 --> 8;
  let num = 6758;
  let sum = 0;
  while (num > 0 || sum > 9) {
    if (num == 0) {
      num = sum;
      sum = 0;
    }
    sum += num % 10;
    console.log(num, sum);
    num = Math.floor(num / 10);
  }
  console.log(sum);
}
// Question25()
function Question26() {
  // Fibonacci Series
  let prev = 0,
    current = 1;
  let str = "0 1 ";
  let num = 8;
  let count = 2;
  while (count <= num) {
    let temp = current;
    current += prev;
    prev = temp;
    str += current + " ";
    count++;
  }
  if (num == 0) {
    console.log(prev + " ");
  } else if (num == 1) {
    console.log(current + " ");
  } else console.log(str);
}
// Question26()
function Question27() {
  // Repeat hello until user gives worng input using do while loop
  let userInput = null;
  do {
    console.log("Hello");
    userInput = prompt("Do you want to continue? (yes/no)");
  } while (userInput == "yes" || userInput == "Yes");
}
// Question27()
function Question28() {
  // calculator program
  let userInput = null;
  do {
    userInput = prompt(`Choose an Operation
                1 : Addition
                2 : Subtraction
                3 : Multiplication
                4 : Division
                5 : Exit
                Enter your choice : 
            `);
    if (userInput == "5") {
      console.log("Program Exited");
      break;
    }
    if (userInput > 5 || userInput < 1) {
      console.log("Invalid Input");
      continue;
    }
    let num1 = Number(prompt("Enter a first number "));
    let num2 = Number(prompt("Enter a second number "));
    if (userInput == "1") console.log(`Sum is ${num1 + num2}`);
    else if (userInput == "2") console.log(`Diff is ${num1 - num2}`);
    else if (userInput == "3") console.log(`Mul is ${num1 * num2}`);
    else if (userInput == "4") console.log(`Div is ${num1 / num2}`);
  } while (userInput != "5");
}
// Question28()
function Question29() {
  // Guess the Number Game
  const target = Math.floor(Math.random() * 100) + 1;
  let userInput = null;

  console.log("Welcome to the Guess the Number Game!");
  console.log("I have picked a number between 1 and 100. Can you guess it?");

  while (userInput != target) {
    userInput = Number(prompt("Enter a number "));
    if (userInput == target) {
      console.log("Target Found", userInput);
      break;
    } else if (userInput > target) {
      console.log("Too High, try again");
    } else if (userInput < target) {
      console.log("Too Low, try again");
    }
  }
}
// Question29()
function Question30() {
  // Right Triangle Star
  let n = 5;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(" * ");
    }
    console.log();
  }
}
// Question30()
function Question31() {
  // Pattern Right Triangle Number
  let n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(` ${j} `);
    }
    console.log();
  }
}
// Question31()
function Question32() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(` ${String.fromCharCode(j + 64)} `);
    }
    console.log();
  }
}
// Question32()
function Question33() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    for (let j = n - i; j > 0; j--) {
      process.stdout.write(` * `);
    }
    console.log();
  }
}
// Question33()
function Question34() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(`   `);
    }
    for (let j = 5; j > n - i - 1; j--) {
      process.stdout.write(` * `);
    }
    console.log();
  }
}
// Question34()
function Question35() {
  let num = 5;
  // i = 5 j = n * 2 - 1;
  for (let i = 0; i < num; i++) {
    let k = 0;
    for (let j = 0; j < num * 2 - 1; j++) {
      if (j < num - i - 1) process.stdout.write("   ");
      else if (k < 2 * i + 1) {
        process.stdout.write(" * ");
        k++;
      } else process.stdout.write("   ");
    }
    console.log();
  }
}
// Question35()
function Question36() {
  let num = 5;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= 2 * num - 1; j++) {
      //      1  2  3  4  5   6   7   8   9
      // 1   *                                 *    i = 1  j = 1, 9
      // 2       *                        *         i = 2  j = 2, 8
      // 3           *                *             i = 3  j = 3, 7
      // 4               *       *                  i = 4  j = 4, 6
      // 5                   *                      i = 5  j = 5, 5
      if (j <= num) {
        if (j == i) process.stdout.write("* ");
        else process.stdout.write("  ");
      } else {
        if (j == 2 * num - i) process.stdout.write("*  ");
        else process.stdout.write("  ");
      }
    }
    console.log();
  }
}
// Question36()
function Question37() {
  let num = 9;
  for (let i = 1; i <= 2 * num - 1; i++) {
    for (let j = 1; j <= 2 * num - 1; j++) {
      //      1  2  3  4  5   6   7   8   9
      // 1   *                                 *    i = 1  j = 1, 9
      // 2       *                        *         i = 2  j = 2, 8
      // 3           *                *             i = 3  j = 3, 7
      // 4               *       *                  i = 4  j = 4, 6
      // 5                   *                      i = 5  j = 5, 5
      // 6               *       *                 i = 6  j  = 4, 6
      // 7           *                 *          i = 7   j  = 3, 7
      // 8       *                        *       i = 8   j = 2, 8
      // 9   *                                 *  i = 9 j = 1, 9
      if (i <= num) {
        if (j <= num) {
          if (j == i) process.stdout.write("* ");
          else process.stdout.write("  ");
        } else {
          if (j == 2 * num - i) process.stdout.write("*  ");
          else process.stdout.write("  ");
        }
      } else {
        if (j <= num) {
          if (j == num - (i - num)) {
            process.stdout.write("* ");
          } else process.stdout.write("  ");
        } else {
          if (j == num + (i - num)) process.stdout.write("*  ");
          else process.stdout.write("  ");
        }
      }
    }
    console.log();
  }
}
// Question37()
function Question38() {
  // Sum of Array Elements
  let arr = [10, 15, 20, 25, 30];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
// Question38()
function Question39() {
  // Greatest In Array
  let arr = [10, 5, 2, 37, 8];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  console.log(max);
}
// Question39()
function Question40() {
  // Second Greatest Element in Array
  let arr = [10, 5, 2, 37, 37, 15];
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    }
    if (arr[i] < max1 && arr[i] > max2) {
      max2 = arr[i];
    }
  }
  console.log(max1, max2);
}
// Question40()
function Question41() {
  // Is array sorted?
  let arr = [5, 2, 8, 4];
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (!(arr[i] < arr[i + 1])) isSorted = false;
    break;
  }
  if (isSorted) console.log("Sorted");
  else console.log("Unsorted");
}
// Question41()
function Question42() {
  // Deep copy of an array.
  let normal = [1, [2], 3];
  let deep = JSON.parse(JSON.stringify(normal));
  normal[1][0] = 4;
  console.log(normal);
  deep[1][0] = 5;
  console.log(deep);
}
// Question42()
function Question43() {
  // Left Rotate Array Elements.
  let arr = [1, 2, 3, 4, 5];
  let temp = arr[0];
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " ");
  }
}
// Question43()
function Question44() {
  //Block Swap Algorithm

  let arr = [1, 2, 3, 4, 5];
  let k = 3;
  k =  k % arr.length;

  // Left Rotation by K Elements
  // Step 1 : Reverse First K Elements
  // Step 2 : Reverse Remaining Elements from K to Length
  // Step 3 : Reverse Full Array
  if(k == 0) console.log(arr);
  else {
  arr = Reverse(arr, 0, k-1)
  arr = Reverse(arr, k , arr.length-1);
  arr = Reverse(arr, 0, arr.length-1)
  console.log(arr);
  }

    // Right Rotation by K Elements
    // Step 1 : Reverse Entire Array
    // Step 2 : Reverse First K Elements
    // Step 3 : Reverse Remaining Elements from K to Length
    // if(k == 0) console.log(arr);
    // else {
    //     arr = Reverse(arr, 0, arr.length-1);
    //     arr = Reverse(arr, 0, k-1);
    //     arr = Reverse(arr, k, arr.length-1)
    //     console.log(arr);
    // }
}
function Reverse(arr, initial, kthIndex) {
  let i = initial,
    j = kthIndex;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++, j--;
  }
  return arr;
}
// Question44();
function Question45() {
    // Linear Search
    let arr = [1,2,3,4,5], key = 4, isFound = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == key) isFound = true; 
    }
    if(isFound) console.log("Found");
    else console.log(("Not Found"));
}
// Question45()
function Question46() {}
// Question01()
function Question47() {}
// Question01()
function Question48() {}
// Question01()
function Question49() {}
// Question01()
function Question50() {}
// Question01()
function Question51() {}
// Question01()
function Question52() {}
// Question01()
function Question53() {}
// Question01()
function Question54() {}
// Question01()
function Question55() {}
// Question01()
function Question56() {}
// Question01()
function Question57() {}
// Question01()
function Question58() {}
// Question01()
function Question59() {}
// Question01()
function Question60() {
  // Question01()
}
