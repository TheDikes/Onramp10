// Given a sorted array of integers, write a function called search that accepts a value and returns 
// the index where the value passed to the function is located. If the value is not found return -1. For example, search([1,2,3,4,5,6], 4)

// function search(arr, n){
//     return arr.indexOf(n);
// }

// OR

// function search(arr, n){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == n){
//             return i;
//         }
//     }
//     return -1;
// }

// OR
// given a condition where there is repetition
function search(arr, n){
    let indexes = [];
    for (i=0; i<arr.length; i++){
        if(arr[i] === n){
            indexes.push(i);
        }
    }
    return -1;
}


console.log(search([1,2,3,4,5,4,6], 0))