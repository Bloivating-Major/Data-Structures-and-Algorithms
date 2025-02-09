// Finding Unique Elements in Array
// function findUnique(arr){
//     let ans = 0;
//     for(let i = 0; i < arr.length; i++){
//         ans ^= arr[i];
//     }
//     return ans;
// }

// let arr = [1,1,2,3,3];

// let unique = findUnique(arr);

// console.log(unique);

// Union of 2 Arrays
// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let ans = new Array();
// console.log(arr1,arr2);

// for(let i =0; i < arr1.length; i++){
//     ans.push(arr1[i]);
// }

// for(let i =0; i < arr2.length; i++){
//     ans.push(arr2[i]);
// }

// console.log(ans);

// Intersection of 2 Arrays
// let a = [1, 2, 3, ,3,4, 6, 8];
// let b = [3, 4, 9, 10];
// let ans = new Array();

// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a[i] == b[j]) {
//       b[j] = -1;
//       ans.push(a[i]);
//     }
//   }
// }

// console.log(ans);

// UNION Without Duplicates.
// let a = [1,2,3,4,5];
// let b = [3,4,5,6,7,8,9];
// let ans = new Array();

// // Removed the Duplicates
// for(let i = 0; i < a.length; i++){
//     for(let j = 0; j < b.length; j++){
//         if(a[i] == b[j]){
//             b[j] = -1;
//         }
//     }
// }

// // Pushed elems from a
// for(let i = 0; i < a.length; i++){
//     ans.push(a[i]);
// }
// // Pushed elems from b
// for(let i = 0; i < b.length; i++){
//     if(b[i] > 0) ans.push(b[i]);
// }

// console.log(ans);

// Pair Sum 2 Pairs
// let arr = [10,20,30,40,50];
// let key = 50;
// for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if(arr[i] + arr[j] == key){
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// Pair Sum 3 Pairs
// let arr= [10,20,30,40];

// let key = 80;

// for(let i = 0; i < arr.length; i++){
//     let e1 = arr[i];
//     for(let j = 0+i; j < arr.length; j++){
//         let e2 = arr[j];
//         for(let k = 0+j; k < arr.length; k++){
//             let e3 = arr[k];
//             if(e1+e2+e3 == key) console.log(e1,e2,e3);
//         }
//     }
// }


// Pair Sum 4 Pairs
// let arr= [10,30,40,10];

// let key = 80;

// for(let i = 0; i < arr.length; i++){
//     let e1 = arr[i];
//     for(let j = 0+i; j < arr.length; j++){
//         let e2 = arr[j];
//         for(let k = 0+j; k < arr.length; k++){
//             let e3 = arr[k];
//             for(let l = 0 + k; l < arr.length; l++){
//                 let e4 = arr[l];
//                 if(e1+e2+e3+e4 == key) {
//                      console.log(e1,e2,e3,e4);
//                 }
//             }
//         }
//     }
// }

// Sort 0's and 1's 

// let arr = [0,1,1,0,1,0,1,0,0];
// console.log(arr);
// let index = 0, start = 0, end = arr.length-1;

// while(index < end){
//     if(arr[index] == 0){
//         arr[start] = arr[index];
//         start++;
//         index++;
//     }
//     if(arr[index] == 1){
//         temp = arr[end];
//         arr[end] = arr[index];
//         arr[index] = temp;
//         end--;
//     }
// }
// console.log(arr);

// let arr = [0,1,1,0,1,0,1,0,0];
// console.log(arr);
// let start = 0, end = arr.length-1;

// while(start < end){
//     if(arr[start] == 0) start++;
//     else if(arr[end] == 1) end--;
//     else{
//         let temp = arr[end];
//         arr[end] = arr[start];
//         arr[start] = temp;
//         start++;
//         end--;
//     }
// }
// console.log(arr);
