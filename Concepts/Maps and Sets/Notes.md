  

---

# 🌟 **JavaScript Sets & Maps - A Complete Guide**  

Welcome to this **comprehensive** guide on **Sets** and **Maps** in JavaScript! 🎯  
These **powerful** data structures offer unique ways to store and manage data efficiently.  

Let's dive in! 🏊‍♂️  

---

## 📌 **1. Sets in JavaScript**  

A **Set** is a **collection of unique values**. Unlike arrays, it **does not allow duplicate elements**.  
It is especially useful when you need to store **distinct values** without repetition.  

### 🎯 **Creating a Set**  
```javascript
const set = new Set();
console.log(set);  // Output: Set(0) {}
```
✔ **Explanation:**  
- We create an **empty Set** using `new Set()`.  
- Initially, it has **zero elements**.  

---

### 🚀 **Adding Elements to a Set**  
```javascript
set.add(1);
set.add(2);
set.add("Sam");

console.log(set);  
// Output: Set(3) {1, 2, 'Sam'}
```
✔ **Explanation:**  
- `.add(value)` adds **new unique elements** to the Set.  
- If an **existing value** is added again, it is **ignored**.  

---

### 🔄 **Iterating Over a Set**  
```javascript
for(let elem of set){
    console.log(elem);
}
// Output:
// 1
// 2
// Sam
```
✔ **Explanation:**  
- `for...of` loops **iterate** over Set elements.  

---

### ❓ **Checking If a Value Exists**  
```javascript
console.log(set.has("Sam"));  // true
console.log(set.has("sam"));  // false (case-sensitive)
```
✔ **Explanation:**  
- `.has(value)` checks if a value **exists** in the Set.  
- **Case-sensitive** comparison (`"Sam"` ≠ `"sam"`).  

---

### ❌ **Deleting & Clearing a Set**  
```javascript
set.delete(2);  // Removes value 2
console.log(set);  // Set(2) {1, 'Sam'}

console.log(set.size);  // Output: 2 (number of elements)

set.clear();  // Removes all elements
console.log(set);  // Output: Set(0) {}
```
✔ **Explanation:**  
- `.delete(value)` removes a **specific element**.  
- `.clear()` **removes all** elements from the Set.  
- `.size` returns the **number of elements** in the Set.  

---

## 🗺️ **2. Maps in JavaScript**  

A **Map** is a collection of **key-value pairs** where **keys can be of any type** (string, number, object, etc.).  
It is similar to an object, but with added flexibility! 🚀  

---

### 🎯 **Creating a Map**  
```javascript
const map = new Map();
console.log(map);  // Output: Map(0) {}
```
✔ **Explanation:**  
- We create an **empty Map** using `new Map()`.  

---

### 🚀 **Adding Key-Value Pairs**  
```javascript
map.set('firstName', 'Sambhav');
map.set(1, "Sambhav");
map.set("Sambhav", "Sam");

console.log(map);
// Output: Map(3) {"firstName" => "Sambhav", 1 => "Sambhav", "Sambhav" => "Sam"}
```
✔ **Explanation:**  
- `.set(key, value)` stores **a key-value pair** in the Map.  
- **Keys can be of any type** (string, number, object, etc.).  

---

### 🔍 **Retrieving Values from a Map**  
```javascript
console.log(map.get("Sambhav"));  // Output: Sam
```
✔ **Explanation:**  
- `.get(key)` retrieves **the value** associated with a key.  

---

### ❓ **Checking If a Key Exists**  
```javascript
console.log(map.has(1));  // true
console.log(map.has("lastName"));  // false
```
✔ **Explanation:**  
- `.has(key)` checks if a **key exists** in the Map.  

---

### ❌ **Deleting & Getting Keys**  
```javascript
map.delete(1);  // Removes key-value pair where key = 1
console.log(map);

console.log(map.keys());  // Output: MapIterator {"firstName", "Sambhav"}
```
✔ **Explanation:**  
- `.delete(key)` removes **a specific key-value pair**.  
- `.keys()` returns an **iterator** containing all the keys.  

---

### 🔄 **Iterating Over a Map**  
```javascript
for(let [key, value] of map){
    console.log(key, value);
}
// Output:
// firstName Sambhav
// Sambhav Sam
```
✔ **Explanation:**  
- `for...of` loop **iterates** over Map entries, returning **[key, value]** pairs.  

---

## 🏆 **Key Differences Between Sets & Maps**  

| Feature      | Sets  🟢 | Maps 🔵  |
|-------------|--------|--------|
| Stores unique values? | ✅ Yes | ❌ No |
| Key-Value pairs? | ❌ No | ✅ Yes |
| Allows duplicate values? | ❌ No | ✅ Yes (but keys must be unique) |
| Order of insertion maintained? | ✅ Yes | ✅ Yes |
| Fast lookups? | ✅ Yes | ✅ Yes |

---

## 🎯 **Summary Table**
| Method | **Set** | **Map** | **Description** |
|--------|--------|--------|----------------|
| `.add(value)` | ✅ | ❌ | Adds a value |
| `.set(key, value)` | ❌ | ✅ | Adds a key-value pair |
| `.delete(value/key)` | ✅ | ✅ | Removes element |
| `.has(value/key)` | ✅ | ✅ | Checks existence |
| `.size` | ✅ | ✅ | Returns number of elements |
| `.clear()` | ✅ | ✅ | Removes all elements |
| `.keys()` | ❌ | ✅ | Returns all keys |
| `.get(key)` | ❌ | ✅ | Retrieves value by key |

---

## 🚀 **Final Thoughts**
- **Use a Set** when you need a collection of **unique elements**.  
- **Use a Map** when you need a **key-value storage** with flexible key types.  
- Both **preserve insertion order**, making them great choices for modern JavaScript programming.  

🎉 **Happy Coding!** 🚀🔥  

---
