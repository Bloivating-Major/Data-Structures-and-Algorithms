let arr = [2,3,5,9,14,16,18];
let target = 15;

let ans;

// ans = BinarySearch(arr,target);
// ans = CeilingOfNumber(arr,target);
// ans = FloorOfNumber(arr, target);

console.log(ans);

function FloorOfNumber(arr, target){

      let start = 0, end = arr.length-1; // Start and End Pointers
  
      while(start<=end){
          // Find the Mid of Array
          let mid = Math.floor(start + (end - start) / 2);
  
          if(target < arr[mid]) end = mid - 1; // Target Less Then Mid
          else if(target > arr[mid]) start = mid + 1; // Target Greater Then Mid
          else return mid;
  
      }
      return end; // If Array Doesn't have that element then return ans as end.
}

function CeilingOfNumber(arr, target){

    // What if the target is greater than the greatest number in the array
    // let arr = [2,3,5,9,14,16,18];
    // let target = 20;
    if(target > arr[arr.length-1]) return -1;

    let start = 0, end = arr.length-1; // Start and End Pointers

    while(start<=end){
        // Find the Mid of Array
        let mid = Math.floor(start + (end - start) / 2);

        if(target < arr[mid]) end = mid - 1; // Target Less Then Mid
        else if(target > arr[mid]) start = mid + 1; // Target Greater Then Mid
        else return mid;

    }
    return start; // If Array Doesn't have that element then return ans as start.
}

function BinarySearch(arr, target){
    let start = 0, end = arr.length-1;
    let ans = -1;
    while(start<=end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] == target) return ans = mid;
        else if(arr[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return ans;
}