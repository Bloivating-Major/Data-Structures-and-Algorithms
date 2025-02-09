# 📚 JavaScript Arrays: Advanced Operations Guide

Welcome back to our exploration of JavaScript arrays! In this session, we will delve into more advanced operations involving arrays, including finding unique elements, performing unions and intersections, and calculating pair sums. Let’s enhance our understanding of arrays! 🚀

## Finding Unique Elements in an Array 🔍

To find the unique element in an array where every other element appears twice, you can use the XOR bitwise operator. Here’s how it works:

```javascript
function findUnique(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans ^= arr[i]; // XOR operation
    }
    return ans;
}

let arr = [1, 1, 2, 3, 3];
let unique = findUnique(arr);
console.log(unique); // Output: 2
```

## Union of Two Arrays 🔗

To create a union of two arrays, you can combine their elements into a new array. Here’s a simple implementation:

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let ans = [];

// Adding elements from arr1
for (let i = 0; i < arr1.length; i++) {
    ans.push(arr1[i]);
}

// Adding elements from arr2
for (let i = 0; i < arr2.length; i++) {
    ans.push(arr2[i]);
}

console.log(ans); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

## Intersection of Two Arrays 🔄

To find the intersection of two arrays (elements that appear in both), you can use nested loops:

```javascript
let a = [1, 2, 3, 3, 4, 6, 8];
let b = [3, 4, 9, 10];
let ans = [];

// Finding common elements
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            b[j] = -1; // Marking as found
            ans.push(a[i]);
        }
    }
}

console.log(ans); // Output: [3, 4]
```

## Union of Two Arrays Without Duplicates 🚫

To create a union of two arrays while removing duplicates, you can modify the previous union logic:

```javascript
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7, 8, 9];
let ans = [];

// Removing duplicates from b
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            b[j] = -1; // Marking duplicates
        }
    }
}

// Adding elements from a
for (let i = 0; i < a.length; i++) {
    ans.push(a[i]);
}

// Adding unique elements from b
for (let i = 0; i < b.length; i++) {
    if (b[i] > 0) ans.push(b[i]);
}

console.log(ans); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Pair Sum: Finding Two Pairs 🔗

To find pairs of elements in an array that sum up to a specific key, you can use nested loops:

```javascript
let arr = [10, 20, 30, 40, 50];
let key = 50;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == key) {
            console.log(arr[i], arr[j]); // Output: 10 40
        }
    }
}
```

## Pair Sum: Finding Three Pairs 🔗

To find triplets of elements that sum to a specific key, you can extend the logic:

```javascript
let arr = [10, 20, 30, 40];
let key = 80;

for (let i = 0; i < arr.length; i++) {
    let e1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
        let e2 = arr[j];
        for (let k = j + 1; k < arr.length; k++) {
            let e3 = arr[k];
            if (e1 + e2 + e3 == key) {
                console.log(e1, e2, e3); // Output: 10 30 40
            }
        }
    }
}
```

## Pair Sum: Finding Four Pairs 🔗

To find quadruplets of elements that sum to a specific key, you can further extend the logic:

```javascript
let arr = [10, 30, 40, 10];
let key = 80;

for (let i = 0; i < arr.length; i++) {
    let e1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
        let e2 = arr[j];
        for (let k = j + 1; k < arr.length; k++) {
            let e3 = arr[k];
            for (let l = k + 1; l < arr.length; l++) {
                let e4 = arr[l];
                if (e1 + e2 + e3 + e4 == key) {
                    console.log(e1, e2, e3, e4); // Output: 10 30 40 10
                }
            }
        }
    }
}
```

## Sort 0's and 1's in an Array 🔄

To sort 0's and 1's in an array using 3 pointers and 2 pointers approach : 

```javascript
let arr = [0,1,1,0,1,0,1,0,0];
console.log("Before Sorting : " + arr);
let index = 0, start = 0, end = arr.length-1;

while(index < end){
    if(arr[index] == 0){
        arr[start] = arr[index];
        start++;
        index++;
    }
    if(arr[index] == 1){
        temp = arr[end];
        arr[end] = arr[index];
        arr[index] = temp;
        end--;
    }
}
console.log("After Sorting : " + arr); 
//[0, 0, 0, 0, 0, 1, 1, 1, 1]
```
Sorting with 2 pointers only : 

```javascript
let arr = [0,1,1,0,1,0,1,0,0];
console.log("Before Sorting : " + arr);
let start = 0, end = arr.length-1;

while(start < end){
    if(arr[start] == 0) start++;
    else if(arr[end] == 1) end--;
    else{
        let temp = arr[end];
        arr[end] = arr[start];
        arr[start] = temp;
        start++;
        end--;
    }
}
console.log("After Sorting : " + arr);
//[0, 0, 0, 0, 0, 1, 1, 1, 1]
```

## Conclusion 🎉

In this session, we explored advanced operations on arrays, including finding unique elements, performing unions and intersections, and calculating pair sums. These techniques are essential for manipulating and analyzing data effectively in JavaScript. Keep practicing, and happy coding! 💻✨