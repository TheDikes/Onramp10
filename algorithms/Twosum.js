//Tasks
// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
 
function twoSum (nums, target) {
    for (let i=0; i <= nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
        return [i, j]; // Return the indices of the pair as soon as it's found
        }
    } 
    }
    return []; // Returns empty array if not found.
 };
 
// const nums = [1, 2, 7, 9, 15]

// target = 9

console.log(twoSum([1, 5, 2, 5, 28, 10, 40, 21], 10))
 
 // this code implements a brute-force approach to find a pair of numbers in an array whose sum equals a target value.
 
 // Time Complexity: O(n^2) - The time complexity is still quadratic due to the nested loops.
 // Space Complexity: O(1) or O(2) (depending on whether you consider loop variables) - constant 
 // because the size of the returned array (containing the indices) is fixed and does not depend on the input size.
 