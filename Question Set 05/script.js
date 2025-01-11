function Question1(){
    // given number is positive or non positive.
    let num = 1;
    if(num>0) console.log("Positive Number");
    else console.log("Non Positive Number");
}

function Question2(){
    // given number is divisble by 5 or not
    let num = 5;
    // if(num % 5 == 0) console.log("Divisible By 5");
    // else console.log("Not Divisible By 5");
    // We can make it more efficient.
    if(num % 5) console.log("Not Divisible By 5");
    else console.log("Divisible by 5");
}

function Question3(){
    // given number is even  or odd.
    let num = 5;
    // if(num % 2 == 0) console.log("Even Number");
    // else console.log("Odd Number");
    // We can make it more efficient.
    if(num % 2) console.log("Odd Number");
    else console.log("Even Number");
}

function Question4(){
    // given number is even or odd without using mod 
    let num = 7;
    if(Math.floor(num / 2)*2 == num) console.log("Even Number");
    else console.log("Odd Number");
}

function Question5(){
    let num = 5;
    if(num & 1) console.log("Odd Number");
    else console.log("Even Number");
}

function Question6(){
    // check if the given number is 3 digit number or not?
    let num = 123;
    if(num >=100 && num <=999 ) console.log("Given number "+ num + " is 3 digit number");
    else console.log("Given number "+ num + " is not 3 digit number");
}

// Question6();


function Question7(){
    let num1 = 2;
    let num2 = 1;
    if(num1 > num2) console.log("Num 1 is Greater : " + num1);
    else if(num2 > num1) console.log("Num 2 is Greater : " + num2);
    else console.log("Num1 and Num2 are Same");
}

// Question7();

function Question9(){
    let year = 2024;

   year%100 ?  console.log(year % 4 ?"Not Leap Year" : "Leap Year") : console.log(year % 400 ? "Not Leap Year" : "Leap Year");
    
}

// Question9();

function Question10(){
    let a = 10, b = 30, c = 30;
    a > b ? console.log(a  > c ? "This is a " + a : "This is c " + c) : console.log( b > c ? "This is b " + b : "This is c " + c);
}

// Question10();

