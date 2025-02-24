// Find The First Occurence of an Element

let arr = [1,3,4,4,4,4,4,6,7,9];
let target = 4;

firstOccurence(arr,target);
lastOccurence(arr, target);


function lastOccurence(arr, target){
    let s = 0, e = arr.length-1;
    let mid = Math.floor(s + ( e - s)/2)
    let ans = -1;
    while(s <= e){
        if(arr[mid] == target){
            ans = mid;
            // Search Right
            s = mid + 1;
        }else if(arr[mid] < target){
            // Search Right
            s = mid + 1;
        }else if(arr[mid] > target){
            // Search Left
            e = mid - 1;
        }
        mid = Math.floor(s + ( e - s)/2);
    }
    console.log(ans);
}

function firstOccurence(arr, target){
    let s = 0, e = arr.length-1;
    let mid = Math.floor(s + (e-s)/2);

    let ans = -1;

    while(s <= e){
        if(arr[mid] == target){
            // Store Answer and Search in Left
            ans = mid;
            e = mid - 1;
        }else if(target > arr[mid]){
            //Search right
            s = mid + 1;
        }else if(target < arr[mid]){
            // Search  Left
            e = mid - 1;
        }
        mid = Math.floor(s + (e-s)/2)

    }
    console.log(ans);
}