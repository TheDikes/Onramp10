// Implement a function sumMix(arr) that given an array of integers as strings and numbers, returns the sum of the array values as if all were numbers.

function sumMixArray(arr){
    return arr.reduce((a,b) => Number(a) + Number(b))
}

// OR

let arr = [9, 3, '7', '3']
function sumMixArray(arr){
    return arr.reduce((a,b) => parseInt(a) + parseInt(b));
}

// Sum two smallest number
let arr2 = [5, 7, 8, 1, 3, 9, 2, 6]
function sumTwoSmallestNum(arr2){
    let sortedArr = arr2.sort((a,b) => a - b);
    return sortedArr[0] + sortedArr[1];
}