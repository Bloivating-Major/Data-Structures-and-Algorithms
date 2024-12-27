function question1 (){
    console.log("Hello World");
}

function question2 (){
    console.log("Hello");
    console.log("Students");
}

function question3 (){
    console.log('"Sambhav"');
}


function question4 (){
    console.log(`\\n`); // here we have to use \ 1 backslash and then print.
}

function question5 (){
    console.log("\\r");
}

function question6 (){
    console.log(`"Teacher's Day"`);
}

function question7 (){
    let num1 = Number(prompt("Enter a number 1 : "))
    let num2 = Number(prompt("Enter a number 2 : "))
    console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`);
}

function question8 (){
    let num1 = Number(prompt("Enter a number 1 : "))
    console.log(`Square of ${num1} is ${num1*num1}`);
}

function question9 (){
    let length = Number(prompt("Enter length of Rectangel :  "))
    let width = Number(prompt("Enter breadth of Rectangel : "))

    console.log(`Area of rectangle ${length*width} is having the length ${length} and breadth ${width}`);
}

function question10 (){
    let r = Number(prompt("Enter radius of circle : "))
    const pi = 3.14;
    console.log(`Area of circle ${2*(pi*(r*r))} is having the radius ${r}`);
}


