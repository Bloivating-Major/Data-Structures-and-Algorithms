function Question1(){
    let num = 333;
    if(num >= 100 && num <=999) console.log(num, "is a 3 Digit Number");
}
// Question1()
function Question2() {
    // cp = 100 sp = 150
    // output = Profit of 50, Profit Percentage 50%
    let cp = 100, sp = 150;

    if (sp > cp) {
        const profit = sp - cp;
        const profitPercentage = (profit / cp) * 100;
        console.log(`Profit of ${profit}`);
        console.log(`Profit Percentage of ${profitPercentage.toFixed(2)}%`);
    } else if (sp < cp) {
        const loss = cp - sp;
        const lossPercentage = (loss / cp) * 100;
        console.log(`Loss of ${loss}`);
        console.log(`Loss Percentage of ${lossPercentage.toFixed(2)}%`);
    } else {
        console.log("No profit, no loss.");
    }
}
// Question2();

function Question3(){
    // Marks 
    // S1 - 55 S2 - 64 S3 - 75 S4 56 S5 55
    let s1 = 55, s2 = 64, s3 = 75, s4 = 56, s5 = 55;
    if(s1>=33 && s2>=33 && s3>=33 && s4>=33 && s5>=33){
        console.log("Passed");
    }else{
        console.log("Failed");
    }
}
// Question3()

function Question4(){
    let alphabet = "D";
    if(alphabet >= 'a' && alphabet <= 'z'){
        console.log(alphabet + " is in Lowercase");
    }else if(alphabet >= 'A' && alphabet <= 'Z') {
        console.log(alphabet + " is in Uppercase");
    }else console.log("Not an alphabet");
}
// Question4()

function Question5(){
    let num = 6;
    if(num % 2 == 0 && num % 3 == 0) console.log(num + " is divisible by 2 and divisible by 3");
    else console.log(num + " is not divisible by 2 and divisible by 3");
}
// Question5()

function Question6(){
    let num = 2;
    if(num % 7 == 0 || num % 3 == 0) console.log(num + " is divisible by 7 or divisible by 3");
    else console.log(num + " is not divisible by 7 or by 3");
}
// Question6()
function Question7(){
    let num = 55;
    if(num > 0) console.log(`${num} is Positive`);
    else if(num < 0) console.log(`${num} is Negative`);
    else console.log(`${num} is Zero`);
}
// Question7()
function Question8(){
    // To check weather its uppercase lowercase digit or special char
    let input = "%";
    let code = input.charCodeAt(0);
    if(code >=48 && code <=57) console.log(`Given input is a Digit ${input}`);
    else if(code >= 65 && code <= 90 ) console.log(`Given input is a Uppercase Character ${input}`);
    else if(code >= 97 && code <= 122) console.log(`Given input is a Lowercase Character ${input}`);
    else console.log(`Given input is a Special Character ${input}`);
    
}
// Question8()
function Question9(){
    // Enter 3 sides of a triangle
    let a = 30, b = 40, c = 50;
    if((a+b) > c && (a+c) > b && (b+c)>a) console.log("Given Triangle Is Valid");
    else console.log("Given Triangle is Invalid");
}
// Question9()
function Question10(){
    let month = 5;
    if(month > 0 && month < 13){

        if(month == 2) console.log(`${month} Month has 28 or 29 days`);
        else if(month == 4 || month == 6 || month == 9 || month == 11 ) console.log(`${month} has 30 days`);
        else console.log(`${month} has 31 Days`);
    }
    else console.log("Invalid Month");
}
// Question10()
