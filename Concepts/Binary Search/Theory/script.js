function BinarySearch(arr, target){
    let start = 0, end = arr.length-1;
    while(start  < end){
        let mid = Math.floor((start+end) / 2);
        if(arr[mid] == target) return mid;
        if(arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}

function BinarySearchAgnostic(arr, target){
    let start = 0, end = arr.length-1;

    let isAsscending = arr[start] < arr[end];

    while(start < end){
        let mid = Math.floor((start+end) / 2);
        
        if(arr[mid] == target) return mid;

        if(isAsscending){
            if(arr[mid] < target) start = mid + 1;
            else end = mid - 1;
        }
        else{
            if(arr[mid] < target) end = mid - 1;
            else start = mid + 1;
        }
    }
    return -1;
}

function Question1(){
    // order-agnostic binary search
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let arr2 = [10,9,8,7,6,5,4,3,2,1];
    let target = 9;
    let index = BinarySearch(arr, target);
    let index2 = BinarySearchAgnostic(arr2, target);
    console.log(`Target ${target} found at index ${index}`);
    console.log(`Target ${target} found at index ${index2}`);
}

Question1();