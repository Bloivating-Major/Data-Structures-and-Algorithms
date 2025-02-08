const cars = ["Rolls Royce", "BMW", "Buggati"]; // Creating and Initializing Array
// console.log(cars);

const rollsRoyce = cars[0]; // Accessing Array  Element
// console.log(rollsRoyce); 

//  what is i want to print all values we can use a loop
// for(let i = 0; i < cars.length; i++){
//     console.log(i+1+"."+cars[i]);
// }

// Some Basic Questions related to Array

//1. Take 5 elements in array and print their doubles.
// let nums = [1,2,3,4,5];
// for(let i = 0; i < nums.length; i++){
//     console.log(nums[i]*2);
// }

// Let's create particular size of array
// const arr = new Array(10);

// for(let i = 0; i <5; i++){
//     arr[i] = 1;
// }

// console.log(arr); // it will print 5 one and 5 empty items.


// what happens here is we are sending a copy of a variable.
// let a = 5;
// inc(a); // pass by value
// console.log(a);
// function inc(a){
//     a++;
//     console.log(a);
// }

// Linear Search in Array

// function linearSearch(arr, key){
//     for(let i = 0 ;  i < arr.length; i++){
//         if(arr[i] == key) return true;
//     }
//     return false;
// }

// let arr = [1,2,3,4,5];
// let key = 7;

// if(linearSearch(arr,key)) console.log("Found");
// else console.log("Not Found"); 

// let arr = [1,2,3,4,5];
// let key = 5;
// let bool = false;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == key) {
//         bool = true;
//         break;
//     }
// }
// if(bool) console.log("Found");
// else console.log("Not Found");

// Find 0, and 1 count in array
// let arr = [0,0,0,0,1,0,1,1,1,1,0,1,1,1,1];

// let zero = 0, one = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 1) one++;
//     if(arr[i] == 0) zero++;
// }

// console.log(zero,one);

// find min and max in array
// let arr = [1,2,3,5,7,34,54, 76,32];

// let max = arr[0];
// let min = arr[0];

// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max) max = arr[i];
//     if(arr[i] < min) min = arr[i];
// }

// console.log(max, min);

// Print Extremes in an array.
// let arr = [10,20,30,40,50,60,70];
// let start = 0, end = arr.length-1;
// let str = " ";
// while(start <= end){
//     if(start == end) str += arr[start] + " ";
//     else  str += arr[start] + " " + arr[end] + " ";
//     start++;
//     end--;
// }
// console.log(str);

// Reverse an array.
// let arr = [1,2,3,4,5];
// console.log(arr);
// let start = 0, end = arr.length-1;

// while(start <= end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
// }

// console.log(arr);