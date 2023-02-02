// You are given an array of a number and a target number, your task is to find the index of the number in the array 
// and return -1 if the target is not found

let arrNum = [4, 5, 3, 1, 8, 0, 9, 2, 7, 6];
// let sorted = arrNum.sort((a, b) => a - b);
let target = 7;

function findTarget(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return [i];
        }
    }
    return -1;
}

// OR
const findTarget = (arr, target) => arr.indexOf(target);

// in a case where the target or the array is not given the function would be as below
function findTarget(arr, target){
    if (!target) return "please provide a target";
    if (!arr) return "please provide an array";
    if (!arr && !target) return "please both parameters are required";
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return [i];
        }
    }
    return -1;
}
