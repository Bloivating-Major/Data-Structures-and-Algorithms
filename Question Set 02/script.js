function question1(){
    // average = sum of number / total numbers.
    let num1 = Number(prompt("Enter number 1 : "))
    let num2 = Number(prompt("Enter number 2 : "))
    let num3 = Number(prompt("Enter number 3 : "))
    let average = (num1 + num2 + num3)/3;
    console.log(`Average of ${num1}, ${num2}, and ${num3} is ${average.toFixed(3)}`);
}
function question2(){
    // circumference of circle = 2 * pi * radius
    let radius = Number(prompt("Enter radius of circle : "))
    let circumference = 2*Math.PI*radius;
    console.log(`Circumference of Circle Is ${circumference.toFixed(2)}`);
}

function question3(){
    // simple interest rate = (principal amount * rate of interest * time) / 100
    let principalAmount = Number(prompt("Enter Principal Amount : "))
    let rateOfInterest = Number(prompt("Enter Rate of Interest : "))
    let timeYears = Number(prompt("Enter Time in Years : "))

    let simpleInterest = (principalAmount * rateOfInterest * timeYears) / 100;
    console.log(`Simple Interest is ${simpleInterest.toFixed(2)}`);
}

function question4(){
    // volume of cuboid = length * breadth * height
    let length = Number(prompt("Enter length of cuboid : "))
    let breadth = Number(prompt("Enter breadth of cuboid : "))
    let height = Number(prompt("Enter height of cuboid : "))

    let volume = length * breadth * height;
    console.log(`Volume of Cuboid Is : ${volume.toFixed()}`);
}
function question5(){
    // cost price of banana is 60 for 12 bananas
    // sell price of banana is 80 for 12 bananas
    // here we have 20rs profit.
    // bananas sold are 25.
    let costPerDozen = Number(prompt("Enter Cost Price of Banana : "))
    let sellPerDozen = Number(prompt("Enter Selling Price of Banana : "))
    let profitLoss = (sellPerDozen - costPerDozen) * 25 / 12;
    console.log(profitLoss);
}

function question6(){
    // using char.charCodeAt(0) method 
    let char = prompt("Enter Character :");
    console.log(`ASCII Value of ${char} is ${char.charCodeAt(0)}`);
}

function question7(){
    //take ascii and give char at that ascii
    // method for that is String.fromCharCode(variabletoConvert);
    let ascii = Number(prompt("Enter ASCII Value : "));
    console.log(`Character at ASCII Value ${ascii} is ${String.fromCharCode(ascii)}`);
}
function question8(){
    let char1 = prompt("Enter 1st Character Value : ");
    let char2 = prompt("Enter 2nd Character Value : ");
    let char3 = prompt("Enter 3rd Character Value : ");
    console.log(`ASCII Value of ${char1} Character is ${char1.charCodeAt(0)}`);
    console.log(`ASCII Value of ${char2} Character is ${char2.charCodeAt(0)}`);
    console.log(`ASCII Value of ${char3} Character is ${char3.charCodeAt(0)}`);
}
function question9(){
    let date = Number(prompt("Enter Date in DD/MM/YYYY"))
    let parts = date.split("/");
    console.log(`Day - ${parts[0]}, Month - ${parts[1]}, Year - ${parts[2]}`);
}
function question10(){
    let time = "12:35"
    let parts = time.split(":");
    console.log(`${parts[0]} hour and ${parts[1]} minute`);
}

