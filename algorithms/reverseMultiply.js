// Given an array of numbers, multiply each number in the array by the number of elements in the array in descending order

function reverseMultiply(arr){
    let n = arr.length;
    let newArr = arr.sort((a,b) => b - a).map((item) => item * n);
    return newArr;
}