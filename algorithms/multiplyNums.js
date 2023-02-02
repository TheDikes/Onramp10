// Given a string of numbers seperated by a comma and space, return the product of the numbers.
// multiplyNums("2, 3") --> 6
// multiplyNums("1, 2, 3, 4") --> 24
// multiplyNums("54, 74, 453, 0") --> 0
// multiplyNums("10, -2") --> -20

function multiplyNums(nums){
    // convert the nums to an array 
    let split = [...nums];
    let sum = 1;
    split.map((item) => {
        // get the sum of the and multiply 
        sum *= Number(item)
    });
    return sum;
}

// OR

function multiplyNums(nums){
    split = nums.split(",");
    let sum = 1;
    for(let i=0; i<split.length; i++){
        let char = split[i];
        sum *= Number(char);
    }
    return sum;
}