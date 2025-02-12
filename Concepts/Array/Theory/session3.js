// Creation of 2d Array

// let MathScore = [
//     ['John Doe', 20, 60, 'A'],
//     ['Jane Doe', 10, 52, 'B'],
//     ['Petr Chess', 5, 24, 'F'],
//     ['Ling Jess', 28, 43, 'A'],
//     ['Ben Liard', 16, 51, 'B']
// ];

// console.table(MathScore)

// let twoDimensionalArray = [[],[]]; // Blank Array
// let twoDimensionalArray = [[1,2],[3,4]]; // Array with elements

// console.log(twoDimensionalArray[1][0]); // Accessing Elements in TwoDimensional Array

// row wise printing a 2d array

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(arr ,"\n");
// // This is Row Wise Printing
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         process.stdout.write(` ${arr[i][j]} `);
//     }
//     console.log();
// }

// console.log();

// // This is Column Wise Printing
// for(let i = 0; i< arr.length; i++){
//     for(let j = 0; j< arr[i].length; j++){
//         process.stdout.write(` ${arr[j][i]} `);
//     }
//     console.log();
// }

// Row Sum Problem
// let arr = [
//     [1,2,3,4],
//     [2,3,4,1],
//     [5,6,1,3],
//     [2,4,6,8],
//     [1,9,9,6]
// ]

// for(let i = 0; i < arr.length; i++){
//     let sum = 0;
//     for(let j = 0; j < arr[i].length; j++){
//         sum += arr[i][j];
//     }
//     console.log(`Row ${i+1} Sum : ${sum}`);
// }

// Column Sum Problem
// let arr = [
//     [1,2,3,4],
//     [2,3,4,1],
//     [5,6,1,3],
//     [2,4,6,8],
//     [1,9,9,6]
// ]
// for(let i = 0; i < arr.length; i++){
//     let sum = 0;
//     for(let j = 0; j < arr.length; j++){
//         sum += arr[j][i];
//     }
//     console.log(sum);
// }

// Linear Search in Array
// let arr = [
//     [1,2,3,4],
//     [2,3,4,1],
//     [5,6,1,3],
//     [2,4,6,8],
//     [1,9,9,6]
// ]

// let key = 10;
// let found = false;

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if(key == arr[i][j]) {
//             found = true;
//             process.stdout.write(`Index ${arr[j].length*i+j} and Element is ${arr[i][j]}`)
//             break;
//         }
//     }
// }

// if(!found) console.log("Element Not Found");

// Maximum and Minimum Element in Array
// let arr = [
//   [1, 2, 3, 4],
//   [2, 3, 4, 1],
//   [5, 6, -5, 3],
//   [2, 4, 22, 8],
//   [1, 9, 9, 6],
// ];

// let max = arr[0][0],
//   min = arr[0][0];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (max < arr[i][j]) max = arr[i][j];
//     if (min > arr[i][j]) min = arr[i][j];
//   }
// }

// console.log(max, min);

// Transpost a Matrix
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]; 

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = arr[j][i];
//   }
// }

// console.log(arr);
