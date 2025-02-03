
---

# **JavaScript Assignment 6** 🎯  
### Mastering Conditionals and Logical Thinking 🤔

---

## **Questions Overview** 📚

### **1️⃣ Check for a 3-Digit Number**
Check if a given number is a three-digit number.  
**Code Snippet**:
```javascript
function Question1() {
    let num = 333;
    if (num >= 100 && num <= 999) console.log(num, "is a 3 Digit Number");
}
```

---

### **2️⃣ Profit or Loss Calculator** 💹  
Calculate profit, loss, and their respective percentages for given cost price (CP) and selling price (SP).  
**Code Snippet**:
```javascript
function Question2() {
    let cp = 100, sp = 150;
    if (sp > cp) {
        const profit = sp - cp;
        const profitPercentage = (profit / cp) * 100;
        console.log(`Profit of ${profit}`);
        console.log(`Profit Percentage of ${profitPercentage.toFixed(2)}%`);
    } else if (sp < cp) {
        const loss = cp - sp;
        const lossPercentage = (loss / cp) * 100;
        console.log(`Loss of ${loss}`);
        console.log(`Loss Percentage of ${lossPercentage.toFixed(2)}%`);
    } else {
        console.log("No profit, no loss.");
    }
}
```

---

### **3️⃣ Student Pass/Fail Checker** 🎓  
Determine if a student has passed based on marks in 5 subjects.  
**Code Snippet**:
```javascript
function Question3() {
    let s1 = 55, s2 = 64, s3 = 75, s4 = 56, s5 = 55;
    if (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33 && s5 >= 33) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}
```

---

### **4️⃣ Check Case of Alphabet** 🔤  
Check whether an alphabet is in uppercase or lowercase.  
**Code Snippet**:
```javascript
function Question4() {
    let alphabet = "D";
    if (alphabet >= 'a' && alphabet <= 'z') console.log(alphabet + " is in Lowercase");
    else if (alphabet >= 'A' && alphabet <= 'Z') console.log(alphabet + " is in Uppercase");
    else console.log("Not an alphabet");
}
```

---

### **5️⃣ Divisibility Check (2 and 3)**  
Check if a number is divisible by both 2 and 3.  
**Code Snippet**:
```javascript
function Question5() {
    let num = 6;
    if (num % 2 == 0 && num % 3 == 0) console.log(num + " is divisible by 2 and 3");
    else console.log(num + " is not divisible by 2 and 3");
}
```

---

### **6️⃣ Divisibility Check (7 or 3)**  
Check if a number is divisible by 7 or 3.  
**Code Snippet**:
```javascript
function Question6() {
    let num = 2;
    if (num % 7 == 0 || num % 3 == 0) console.log(num + " is divisible by 7 or 3");
    else console.log(num + " is not divisible by 7 or 3");
}
```

---

### **7️⃣ Positive, Negative, or Zero** ➕➖  
Check whether a number is positive, negative, or zero.  
**Code Snippet**:
```javascript
function Question7() {
    let num = 55;
    if (num > 0) console.log(`${num} is Positive`);
    else if (num < 0) console.log(`${num} is Negative`);
    else console.log(`${num} is Zero`);
}
```

---

### **8️⃣ Character Type Identifier** ✍️  
Determine if the given input is an uppercase/lowercase letter, digit, or special character.  
**Code Snippet**:
```javascript
function Question8() {
    let input = "%";
    let code = input.charCodeAt(0);
    if (code >= 48 && code <= 57) console.log(`Given input is a Digit ${input}`);
    else if (code >= 65 && code <= 90) console.log(`Given input is an Uppercase Character ${input}`);
    else if (code >= 97 && code <= 122) console.log(`Given input is a Lowercase Character ${input}`);
    else console.log(`Given input is a Special Character ${input}`);
}
```

---

### **9️⃣ Triangle Validity Check** 🔺  
Check if the given sides form a valid triangle.  
**Code Snippet**:
```javascript
function Question9() {
    let a = 30, b = 40, c = 50;
    if ((a + b) > c && (a + c) > b && (b + c) > a) console.log("Given Triangle Is Valid");
    else console.log("Given Triangle is Invalid");
}
```

---

### **🔟 Days in a Month Checker** 📅  
Determine the number of days in a given month.  
**Code Snippet**:
```javascript
function Question10() {
    let month = 5;
    if (month > 0 && month < 13) {
        if (month == 2) console.log(`${month} Month has 28 or 29 days`);
        else if (month == 4 || month == 6 || month == 9 || month == 11) console.log(`${month} has 30 days`);
        else console.log(`${month} has 31 Days`);
    } else console.log("Invalid Month");
}
```

---

## 🚀 **Execution**  
To execute any question, uncomment the corresponding function call, e.g., `Question1()` and run the script in a Node.js environment or browser console.

---

## 💡 **Key Takeaways**  
- Strengthened concepts of **if-else** conditions.
- Practiced various logical checks for numbers, characters, and triangles.
- Improved understanding of **JavaScript control flow**.

--- 

Feel free to suggest or enhance the solutions! 🌟