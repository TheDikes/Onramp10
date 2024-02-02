// You are given an array of a number and a target number, your task is to find the index of the number in the array 
// and return -1 if the target is not found

let arr = [4, 5, 3, 1, 8, 0, 9, 2, 7, 6];
// let sorted = arrNum.sort((a, b) => a - b);  # linear search does not require sorted out.
let target = 7;

function findTarget(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    console.log("Target not found")
    return -1;
}

// // OR
//  const findTarget = (arr, target) => arr.indexOf(target);
 



console.log(findTarget(arr, target))