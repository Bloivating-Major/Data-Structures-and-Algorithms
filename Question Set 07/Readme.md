## 📌 **Assignment 7 Solutions**
  
This assignment consists of **basic loops and number operations** in JavaScript. Below is a detailed breakdown of each question with explanations.

---

### ✅ **Question 1: Print "Sambhav" 5 times**
```javascript
function Question1() {
  let num = 5;
  for (let i = 0; i < num; i++) {
    console.log("Sambhav");
  }
}
```
✔ **Explanation:**  
- Uses a **for loop** to iterate 5 times.
- Prints `"Sambhav"` on each iteration.

---

### ✅ **Question 2: Print numbers from 1 to 10**
```javascript
function Question2() {
  let num = 10;
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
```
✔ **Explanation:**  
- Loop runs from `1 to 10`.
- Prints each number sequentially.

---

### ✅ **Question 3: Print numbers from 10 to 1 (Reverse Order)**
```javascript
function Question3() {
    let num = 10;
    for(let i = num; i >= 1; i--){
        console.log(i);
    }
}
```
✔ **Explanation:**  
- Starts from `10` and decrements till `1`.  

---

### ✅ **Question 4: Print first 10 odd numbers**
```javascript
function Question4() {
    let count = 0;
    let num = 1;
    while(count < 10){
        if(num % 2 != 0){
            console.log(num);
            count++;
        }
        num++;
    }
}
```
✔ **Explanation:**  
- Uses `while loop` to track **10 odd numbers**.
- If a number is **odd**, prints it and increments `count`.

📝 **Alternate (Using For Loop)**
```javascript
function Question4_Alt() {
  for(let i = 1, count = 0; count < 10; i+=2){
    console.log(i);
    count++;
  }
}
```

---

### ✅ **Question 5: Print first 10 odd numbers in reverse order**
```javascript
function Question5() {
  let i = 10;
  while(i >= 1){
    console.log(2 * i - 1);
    i--;
  }
}
```
✔ **Explanation:**  
- Uses `while loop` starting from `10`.
- Formula `2*i - 1` generates odd numbers in reverse order.

---

### ✅ **Question 6: Print first 10 even numbers**
```javascript
function Question6() {
  let count = 0;
  let num = 1;
  while(count < 10){
    if(num % 2 == 0){
      console.log(num);
      count++;
    }
    num++;
  }
}
```
✔ **Explanation:**  
- Uses `while loop` to track **10 even numbers**.
- If a number is **even**, prints it and increments `count`.

📝 **Alternate (Using For Loop)**
```javascript
function Question6_Alt() {
  for(let i = 2, count = 0; count < 10; i+=2){
    console.log(i);
    count++;
  }
}
```

---

### ✅ **Question 7: Print first 10 even numbers in reverse order**
```javascript
function Question7() {
  let i = 20;
  while(i >= 2){
    console.log(i);
    i = i - 2;
  }
}
```
✔ **Explanation:**  
- Starts from `20` (10th even number) and decrements by `2` till `2`.

---

### ✅ **Question 8: Print squares of first 10 natural numbers**
```javascript
function Question8() {
  let num= 10;
  for(let i = 1; i <= num; i++){
    console.log(i * i);
  }
}
```
✔ **Explanation:**  
- Uses a **for loop** to iterate from `1 to 10`.
- Computes and prints **square** of each number.

---

### ✅ **Question 9: Print cubes of first 10 natural numbers**
```javascript
function Question9() {
  let num= 10;
  for(let i = 1; i <= num; i++){
    console.log(i * i * i);
  }
}
```
✔ **Explanation:**  
- Similar to **Q8**, but computes **cubes** instead of squares.

---

### ✅ **Question 10: Print multiplication table of 5**
```javascript
function Question10() {
  let num = 5;
  for(let i = 1; i <= 10; i++){
    console.log(num * i);
  }
}
```
✔ **Explanation:**  
- Uses **for loop** to print multiples of `5`.

📝 **Generalized Version (for any number `n`)**
```javascript
function printTable(n) {
  for(let i = 1; i <= 10; i++){
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
printTable(7);  // Example for number 7
```

---

## 🎯 **Summary Table**
| Question | Concept | Loop Used | Key Logic |
|----------|---------|----------|-----------|
| **Q1** | Print name 5 times | For Loop | `console.log("Sambhav")` |
| **Q2** | Print 1 to 10 | For Loop | `console.log(i)` |
| **Q3** | Print 10 to 1 | For Loop | `console.log(i)` |
| **Q4** | Print first 10 odd numbers | While Loop | `if(num % 2 != 0)` |
| **Q5** | Print first 10 odd numbers (reverse) | While Loop | `2*i - 1` |
| **Q6** | Print first 10 even numbers | While Loop | `if(num % 2 == 0)` |
| **Q7** | Print first 10 even numbers (reverse) | While Loop | `i -= 2` |
| **Q8** | Print squares of first 10 numbers | For Loop | `console.log(i * i)` |
| **Q9** | Print cubes of first 10 numbers | For Loop | `console.log(i * i * i)` |
| **Q10** | Print multiplication table of 5 | For Loop | `console.log(5 * i)` |

---

## 🚀 **Final Thoughts**
- **For loops** are best when you know the number of iterations.  
- **While loops** are useful when conditions determine the loop execution.  
- **Mathematical formulas** (like `2*i - 1`) can optimize loops.
