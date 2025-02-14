# ⭐ Patterns 🚀

This document contains a collection of programming questions involving loops and mathematical patterns, along with their implementations in JavaScript. Each question has been designed to help you understand core programming concepts through pattern printing. 🖥️✨

[⬅️ Go Back](./Readme.md)

## 📌 Questions and Solutions

### 🎯 Question 30: Right Triangle Star Pattern ⭐
**Problem:** Print a right-angled triangle star pattern.
```javascript
function Question30(){
    let n = 5;
    for(let i = 0; i < n; i++){
        for(let j = 0; j <= i; j++){
            process.stdout.write(" * ");
        }
        console.log();
    }
}
```

### 🔢 Question 31: Right Triangle Number Pattern 🔢
**Problem:** Print a right-angled triangle pattern using numbers.
```javascript
function Question31(){
    let n = 5;
    for(let i = 1; i <= n; i++){
        for(let j =1; j <= i; j++){
            process.stdout.write(` ${j} `)
        }
        console.log();
    }
}
```

### 🔠 Question 32: Right Triangle Alphabet Pattern 🔡
**Problem:** Print a right-angled triangle pattern using alphabets.
```javascript
function Question32(){
    let n = 5;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            process.stdout.write(` ${String.fromCharCode(j+64)} `)
        }
        console.log();
    }
}
```

### 🔻 Question 33: Inverted Right Triangle Star Pattern 🔽
**Problem:** Print an inverted right-angled triangle star pattern.
```javascript
function Question33(){
    let n = 5;
    for(let i = 0; i < n; i++){
        for(let j = n-i; j > 0; j--){
            process.stdout.write(` * `);
        }
        console.log();
    }
}
```

### 🏠 Question 34: Pyramid Left-Aligned Pattern ⬅️
**Problem:** Print a left-aligned pyramid star pattern.
```javascript
function Question34(){
    let n = 5;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-i-1; j++ ){
            process.stdout.write(`   `);
        }
        for(let j = 5; j > n-i-1; j-- ){
            process.stdout.write(` * `);
        }
        console.log();
    }
}
```

### ⛰️ Question 35: Pyramid Star Pattern ⛰️
**Problem:** Print a full pyramid star pattern.
```javascript
function Question35(){
    let num = 5;
    for(let i = 0; i < num; i++){
        let k = 0;
        for(let j = 0; j < num * 2 - 1; j++){
            if(j < num - i - 1) process.stdout.write("   ");
            else if(k < 2 * i + 1){
                process.stdout.write(" * ");
                k++;
            }
            else process.stdout.write("   ");
        }
        console.log();
    }
}
```

### 💎 Question 36: Hollow Diamond Pattern 🔷
**Problem:** Print a hollow diamond star pattern.
```javascript
function Question36(){
    let num = 5;
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= 2 * num - 1; j++){
            if(j <= num){
                if(j == i) process.stdout.write('* ')
                else process.stdout.write('  ');
            }
            else {
                if(j == 2*num-i) process.stdout.write('*  ')
                else process.stdout.write('  ');
            }
        }
        console.log();
    }
}

```

### 🎭 Question 37: Full Hollow Diamond Pattern 🔶
**Problem:** Print a complete hollow diamond pattern.
```javascript
function Question37(){
    let num = 9;
    for(let i = 1; i <= 2 * num - 1; i++){
        for(let j = 1; j <= 2 * num - 1; j++){
            if(i <= num) {
                if(j <= num){
                    if(j == i) process.stdout.write('* ')
                    else process.stdout.write('  ');
                }
                else {
                    if(j == 2*num-i) process.stdout.write('*  ')
                    else process.stdout.write('  ');
                }
            }else{
                if(j <= num){
                    if(j == num-(i - num)) {
                        process.stdout.write('* ')
                    }    
                    else process.stdout.write('  ');
                }
                else {
                    if(j == num+(i-num)) process.stdout.write('*  ')
                    else process.stdout.write('  ');
                }
            }
        }
        console.log();
    }
}
```

## 🎉 Happy Coding! 🚀

