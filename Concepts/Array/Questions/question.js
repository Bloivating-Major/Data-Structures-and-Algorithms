// SortColors();
// MoveAllNegativesToLeft();
// FindDuplicates();
// console.log(FirstRepeatingElement());
// FirstNonRepeatingElement();
// FirstElementAppearKTimes();
// CommonElementsIn3SortedArrays();
// WavePrintAMatrix();
// AddTwoNumberRepresentedByArray();


function AddTwoNumberRepresentedByArray() {
  let A = [0,9,0,0,3,5],
    B = [2,2,7];
  let carry = 0;
  let ans = [];
  let i = A.length - 1;
  let j = B.length - 1;

  while (i >= 0 && j >= 0) {
    let x = A[i] + B[j] + carry;
    let digit = x % 10;
    ans.push(digit);
    carry = Math.floor(x / 10);
    i--, j--;
  }
  while (i >= 0) {
    let x = A[i] + 0 + carry;
    let digit = x % 10;
    ans.push(digit);
    carry = Math.floor(x / 10);
    i--;
  }

  while (j >= 0) {
    let x = 0 + B[j] + carry;
    let digit = x % 10;
    ans.push(digit);
    carry = Math.floor(x / 10);
    j--;
  }

  if (carry) {
    ans.push(carry);
  }

  while(ans[ans.length-1] == '0'){
    ans.pop();
  }

  console.log(ans.reverse().join(''));
}

function WavePrintAMatrix() {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log(arr);

  let row = arr.length;
  let col = arr[0].length;
  for (let i = 0; i < col; i++) {
    if ((i & 1) == 0) {
      for (let j = 0; j < row; j++) {
        process.stdout.write(` ${arr[j][i]} `);
      }
    } else {
      for (let j = row - 1; j >= 0; j--) {
        process.stdout.write(` ${arr[j][i]} `);
      }
    }

    console.log();
  }
}

function CommonElementsIn3SortedArrays() {
  let arr1 = [1, 5, 10, 20, 40, 80],
    arr2 = [6, 7, 20, 80, 100],
    arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

  // let arr1 = [3,3,3] , arr2 = [3,3,3], arr3 = [3,3,3];

  let i = (k = j = 0);

  let set = new Set();

  let common = [];

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
      set.add(arr1[i]);
      i++, j++, k++;
    } else if (arr1[i] < arr2[j]) i++;
    else if (arr2[j] < arr3[k]) j++;
    else k++;
  }

  for (let num of set) {
    common.push(num);
  }
  console.log(common);
}

function FirstElementAppearKTimes() {
  let arr = [5, 1, 2, 1, 2, 3, 2],
    k = 3;

  let map = new Map();
  let ans = -1;

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of arr) {
    if (map.get(num) == k) {
      ans = num;
      break;
    }
  }

  if (ans !== -1) console.log(ans);
  else console.log(ans);
}

function FirstNonRepeatingElement() {
  //Time Complexity O(n)
  let arr = [2, 2, 3, 3, 4, 4];
  let map = new Map();
  let i = 0;
  let ans = -1;
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of arr) {
    if (map.get(num) == 1) {
      ans = num;
      break;
    }
  }

  if (ans !== -1) console.log(`${ans} is the first element does not repeat`);
  else console.log(`${ans} all elements repeat`);
}

function FirstRepeatingElement() {
  // Approach 1 Bruteforce Check all elements.
  // let arr = [1, 5, 3, 4, 3, 5, 6];
  // for (let i = 0; i < arr.length; i++) {
  //   let isFound = false;
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] == arr[j]) {
  //       isFound = true;
  //       return i + 1;
  //     }
  //   }
  // }
  // return -1;
  //Approach 2 Hashmap.
  // let arr =  [1, 2, 3, 4]
  // let map = new Map();
  // let minIndex = Infinity;
  // for(let i = 0; i < arr.length; i++){
  //     if(map.has(arr[i])) {
  //       minIndex = Math.min(minIndex, map.get(arr[i]));
  //     }
  //     else map.set(arr[i], i+1);
  //   }
  //   return minIndex == Infinity ? -1 : minIndex;
}

function MoveAllNegativesToLeft() {
  // This is Dutch National Flag Algorithm
  let arr = [1, 2, -3, 4, -5, 6];
  let low = 0,
    high = arr.length - 1;
  while (low < high) {
    if (arr[low] < 0) {
      low++;
    } else if (arr[high] > 0) {
      high--;
    } else {
      let temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;
    }
  }
  console.log(arr);
}

function FindDuplicates() {
  // Approach 1 Sort Can be Improved
  // Time Complexity = O(nLog n)
  // let arr =[3,1,3,4,2]
  // console.log(arr);
  // arr.sort((a,b) => a-b);
  // let duplicate = false;
  // for(let i = 0; i < arr.length-1;i++){
  //     if(arr[i] == arr[i+1]) {
  //       console.log(arr[i]);
  //       duplicate = true;
  //       break;
  //     }
  // }
  // if(!duplicate) console.log(-1);

  //Approach 2 Negative Marking
  // let arr = [3,3,3,3,3]
  // let ans = -1;
  // for(let i =0; i < arr.length; i++){
  //     let index = Math.abs(arr[i]);
  //     if(arr[index] < 0){
  //         ans = index;
  //         break;
  //     }
  //     arr[index] = arr[index] * -1;
  // }
  // if(ans) console.log(ans);
  // else console.log(ans);

  // Swap with Indexes
  let arr = [1, 3, 4, 2, 2];
  let i = 0;
  while (arr[i] !== arr[arr[i]]) {
    let temp = arr[arr[i]];
    arr[arr[i]] = arr[i];
    arr[i] = temp;
  }
  console.log(arr[i]);
}

function SortColors() {
  // Approach 1 Using Direct Sort Method
  // let arr = [2,0,2,1,1,0];
  // console.log(arr);
  // arr.sort((a,b)=> a-b);
  // console.log(arr);
  // But we don't have to use this

  //Approach 2 Using Count Method.
  //   let arr = [2, 0, 2, 1, 1, 0];
  //   console.log(arr);

  //   let zeroes = (ones = twos = 0);

  //   // Count Frequency
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] == 0) zeroes++;
  //     else if (arr[i] == 1) ones++;
  //     else twos++;
  //   }
  //   // Spread Zeroes,Ones,Twos
  //   let i = 0;
  //   while (zeroes--) {
  //     arr[i] = 0;
  //     i++;
  //   }
  //   while (ones--) {
  //     arr[i] = 1;
  //     i++;
  //   }
  //   while (twos--) {
  //     arr[i] = 2;
  //     i++;
  //   }
  //   console.log(arr);

  //Approach 3 Three Pointer Approach Inplace Solution
  let arr = [2, 0, 2, 1, 1, 0];
  console.log(arr);

  let low = 0,
    medium = 0;
  let high = arr.length - 1;

  while (medium <= high) {
    if (arr[medium] == 0) {
      let temp = arr[low];
      arr[low] = arr[medium];
      arr[medium] = temp;
      low++;
      medium++;
    } else if (arr[medium] == 1) medium++;
    else {
      let temp = arr[high];
      arr[high] = arr[medium];
      arr[medium] = temp;
      high--;
    }
  }
  console.log(arr);
}
