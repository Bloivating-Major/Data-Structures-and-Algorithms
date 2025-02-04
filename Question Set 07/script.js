function Question1() {
  let num = 5;
  for (let i = 0; i < num; i++) {
    console.log("Sambhav");
  }
}
// Question1()
function Question2() {
  let num = 10;

  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
// Question2();

function Question3() {
  let num = 10;
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
  // 11 - i can be used to print in reverse order.
}
// Question3()

function Question4() {
  let count = 0;
  let num = 1;
  while (count < 10) {
    if (num % 2 != 0) {
      console.log(num);
      count++;
    }
    num++;
  }
}
// Question4()

function Question5() {
  let i = 10;
  while (i >= 1) {
    console.log(2 * i - 1);
    i--;
  }
}
// Question5()

function Question6() {
  let count = 0;
  let num = 1;
  while (count < 10) {
    if (num % 2 == 0) {
      console.log(num);
      count++;
    }
    num++;
  }
}
// Question6()
function Question7() {
  let i = 20;
  while (i >= 2) {
    console.log(i);
    i = i - 2;
  }
}
// Question7()
function Question8() {
  let num = 10;
  for (let i = 1; i <= num; i++) {
    console.log(i * i);
  }
}
// Question8()
function Question9() {
  let num = 10;
  for (let i = 1; i <= num; i++) {
    console.log(i * i * i);
  }
}
// Question9()
function Question10() {
  let num = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}
// Question10()
