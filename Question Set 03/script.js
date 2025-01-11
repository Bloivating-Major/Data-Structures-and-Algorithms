function Question3(){
       // variable of char type increament using ++ operator.
       let char = 'A';
       console.log(char);
       let code = char.charCodeAt(0)
       char = String.fromCharCode(++code)
       console.log(char);
}

function Question4(){
       // unit digit.
       let num = 457;
       let unitDigit = num % 10;
       console.log(unitDigit);
}

function Question5(){
       // print without last digit.
       let num = 555;
       if(num <=10) return console.log(num);
       let lastDigit = Math.floor(num / 10);
       console.log(lastDigit);
}

function Question6(){
       // swap digits
       let num1 = 5;
       let num2 = 10;
       console.log(`Number 1 :${num1} Number 2 :${num2}`);
       let swap = num1;
       num1 = num2;
       num2 = swap;
       console.log(`Number 1 :${num1} Number 2 :${num2}`);
}

function Question7(){
       // swap without temp
       //num1 = 5 ==>  5 + 10 = 15 - num1(5) = 10;
       //num2 = 10 ==> 10 + 5 = 15 - num2(10) = 5;
       let num1 = 11;
       let num2 = 10;
       console.log(`Number 1 :${num1} Number 2 :${num2}`);
       num1 = num1 + num2;
       num2 = num1 - num2;
       num1 = num1 - num2;
       console.log(`Number 1 :${num1} Number 2 :${num2}`);
}

function Question8(){
       // swap without using + or - operator.
       //num1 = 5 ==>  num1 * num2;
       let num1 = 5;
       let num2 = 10;
       console.log(`Number 1 :${num1} Number 2 :${num2}`);
       num1 = num1 * num2;
       num2 = num1 / num2;
       num1 = num1 / num2;
       console.log(`Number 1 :${num1} Number 2 :${num2}`);
}

function Question9(){
       // swapping using bitwise operators.
       // XOR operator ^.
       let num1 = 5;
       let num2 = 10;
       console.log(`Number 1 :${num1} Number 2 :${num2}`);
       num1 = num1 ^ num2;
       num2 = num1 ^ num2;
       num1 = num1 ^ num2;
       console.log(`Number 1 :${num1} Number 2 :${num2}`);
}


function Question10(){
       // swapping in 1 line arithmetic expression.
       let num1 = 10;
       let num2 = 20;
       console.log(`Number 1 :${num1} Number 2 :${num2}`);
       num1 = num1 + num2 - (num2 = num1);
       console.log(`Number 1 :${num1} Number 2 :${num2}`);
}

Question10();

