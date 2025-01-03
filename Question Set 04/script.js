function Question1(){
    let num = 110;
    let sum = 0;
    sum += Math.floor(num / 100);
    sum += Math.floor((num % 100)/10);
    sum += num % 10;
    console.log(sum);
}

function Question2(){
    let ascii = "+";
    let code = ascii.charCodeAt(0);
    console.log(code);
}

function Question3(){
    let int = 10;
    let char = "A";
    let float = 20.4;
    console.log(typeof(int));
    console.log(typeof(char));
    console.log(typeof(float));
}

function Question4(){
    let num = 2357;
    let lastDigit = 0;
    lastDigit = Math.floor( num / 10)*10;
    console.log(lastDigit);
}

function Question5(){
    let num = 234;
    let digit = 9;
    let finalNum = (num*10)+digit;
    console.log(finalNum);
}

function Question6(){
    let num = 55000;
    let USD = 84.23;
    let INRtoUSD = num / USD;
    console.log(INRtoUSD.toFixed(2));
}

function Question7(){
    let num = 742;
    let rotated = (num % 10)*100 + Math.floor(num / 10);
    console.log(rotated);
}

function Question8(){
    let num = 10>8>4;
    console.log(num);
}

function Question9(){
    let num = !2>-2;
    console.log(num);
}

function Question10(){
    let num = 3<0 && 5 > 0; // if and is false 1st expression then 2nd expression is not executed direct false is executed.
    console.log(num);
}
