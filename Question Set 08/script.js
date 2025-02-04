function Question1() {
  let num = 5; // n times
  for (let i = 0; i < num; i++) {
    console.log("Sambhav");
  }
}
// Question1()
function Question2() {
  let num = 10; // n times

  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
// Question2();

function Question3() {
    let num = 30;  // n times
    // for(let i = num; i >=1; i--){
    //     console.log(i);
    // }
    while(num){
      console.log(num);
      num--;  // Decrementing the number each time to print in reverse order.  // n times
    }
}
// Question3()

function Question4() {
    // let count = 0;
    // let num = 1;
    // let times = 5; // n times
    // while(count < times){
    //     if(num % 2 != 0){
    //         console.log(num);
    //         count++;
    //     }
    //     num++;
    // }
    // Sir's Approach
    let i = 1;
    let num = 10; // n times
    while(i <=num){
      console.log(2*i-1);
      i++;  // Incrementing the number each time to print in sequence.  // n times
    }
}
// Question4()

function Question5() {
  let n = 20;
  while(n){
    console.log(2*n-1);
    n--;
  }
}
// Question5()

function Question6() {
  // let count = 0;
  // let num = 1;
  // let times = 5; // n times
  // while(count < times){
  //   if(num % 2 == 0){
  //     console.log(num);
  //     count++;
  //   }
  //   num++;
  // }
  let n = 20;
  let i = 1;
  while(i <= n){
    console.log(2*i);
    i++;
  }
}
// Question6()
function Question7() {
  let n = 20;
  while(n){
    console.log(2*n);
    n--;
  }
}
// Question7()
function Question8() {
  let num= 10; // n times
  for(let i = 1; i <= num; i++){
    console.log(i*i);
  }
}
// Question8()
function Question9() {
  let num= 10; // n times
  for(let i = 1; i <= num; i++){
    console.log(i*i*i);
  }
}
// Question9()
function Question10() {
  let num = 5; // n times
  for(let i = 1; i <= 10; i++){
    console.log(num*i);
  }
}
// Question10()
