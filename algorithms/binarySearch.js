// To find the target using the binary search, the array must be sorted.

const sortedArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === target){
            return mid;
        }else if (arr[mid] < target){
            start = mid + 1;
        }else{
            end = mid -1;
        }
    }
    return -1;
}

console.log(binarySearch([3,4,5,6,7], 5))
console.log(binarySearch([3,4,5,6,7], 9))
console.log(binarySearch([3,4,5,6,7], 3))

// Time complexity is O(log n)