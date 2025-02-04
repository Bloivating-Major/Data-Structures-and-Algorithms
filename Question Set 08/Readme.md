

---

## 📌 **Assignment 8 Solutions**  

This assignment covers **looping constructs** using `for loops` and `while loops` to solve **common mathematical problems** in JavaScript. Below is a breakdown of each question with explanations and optimized solutions.  

---

### ✅ **Question 1: Print a name `n` times**  
```javascript
function Question1(n) {
  for (let i = 0; i < n; i++) {
    console.log("Sambhav");
  }
}
Question1(5);
```
✔ **Explanation:**  
- Uses a **for loop** to iterate `n` times.  
- Prints `"Sambhav"` on each iteration.  

---

### ✅ **Question 2: Print numbers from `1 to n`**  
```javascript
function Question2(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
Question2(10);
```
✔ **Explanation:**  
- Runs a loop from `1 to n`.  
- Prints each number sequentially.  

---

### ✅ **Question 3: Print numbers from `n to 1` (reverse order)**  
```javascript
function Question3(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
Question3(10);
```
✔ **Explanation:**  
- Starts from `n` and decrements till `1`.  

---

### ✅ **Question 4: Print first `n` odd natural numbers**  
```javascript
function Question4(n) {
  for (let i = 1, count = 0; count < n; i += 2) {
    console.log(i);
    count++;
  }
}
Question4(10);
```
✔ **Explanation:**  
- Uses a **for loop** to track `n` odd numbers.  
- Increments by `2` to get odd numbers.  

---

### ✅ **Question 5: Print first `n` odd natural numbers in reverse order**  
```javascript
function Question5(n) {
  for (let i = 2 * n - 1; i >= 1; i -= 2) {
    console.log(i);
  }
}
Question5(10);
```
✔ **Explanation:**  
- Starts from the largest `n`th odd number (`2n - 1`) and decrements by `2`.  

---

### ✅ **Question 6: Print first `n` even natural numbers**  
```javascript
function Question6(n) {
  for (let i = 2, count = 0; count < n; i += 2) {
    console.log(i);
    count++;
  }
}
Question6(10);
```
✔ **Explanation:**  
- Increments by `2` to generate even numbers.  

---

### ✅ **Question 7: Print first `n` even natural numbers in reverse order**  
```javascript
function Question7(n) {
  for (let i = 2 * n; i >= 2; i -= 2) {
    console.log(i);
  }
}
Question7(10);
```
✔ **Explanation:**  
- Starts from `2n` (largest even number) and decrements by `2`.  

---

### ✅ **Question 8: Print squares of first `n` natural numbers**  
```javascript
function Question8(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i * i);
  }
}
Question8(10);
```
✔ **Explanation:**  
- Computes and prints **square** of each number from `1 to n`.  

---

### ✅ **Question 9: Print cubes of first `n` natural numbers**  
```javascript
function Question9(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i * i * i);
  }
}
Question9(10);
```
✔ **Explanation:**  
- Similar to **Q8**, but prints **cubes** instead of squares.  

---

### ✅ **Question 10: Print multiplication table of a number `n`**  
```javascript
function Question10(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
Question10(7);
```
✔ **Explanation:**  
- Prints the **multiplication table** of `n` from `1 to 10`.  

---

## 🎯 **Summary Table**  
| Question | Concept | Loop Used | Key Logic |
|----------|---------|----------|-----------|
| **Q1** | Print name `n` times | For Loop | `console.log("Sambhav")` |
| **Q2** | Print numbers from `1 to n` | For Loop | `console.log(i)` |
| **Q3** | Print numbers from `n to 1` | For Loop | `console.log(i)` |
| **Q4** | Print first `n` odd numbers | For Loop | `i += 2` |
| **Q5** | Print first `n` odd numbers (reverse) | For Loop | `2n - 1` |
| **Q6** | Print first `n` even numbers | For Loop | `i += 2` |
| **Q7** | Print first `n` even numbers (reverse) | For Loop | `2n` to `2` |
| **Q8** | Print squares of first `n` numbers | For Loop | `i * i` |
| **Q9** | Print cubes of first `n` numbers | For Loop | `i * i * i` |
| **Q10** | Print multiplication table | For Loop | `${n} x ${i} = ${n * i}` |

---

## 🚀 **Final Thoughts**  
✅ **For loops** are best when the number of iterations is known.  
✅ **Mathematical formulas** (like `2n - 1` for odd numbers) can optimize loops.  
✅ **Using efficient loops** ensures **better performance** in JavaScript programs.  
