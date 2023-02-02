// # Challenge 1

// Implement the function missingNumber(numArr) which returns the missing number in a given integer array between 1 and 9. If there is no missing number, the function should return false. If there is more than one missing number, the function should return the result in an array sorted in ascending order.

// ## Examples

// missingNumber([1,2,3,4,6,7,8,9]) to return 5  
// missingNumber([1,2,3,4,5,6,8]) to return [7, 9]  
// missingNumber([1,2,3,4,5,6,7,8,9]) to return false 

function missingNumber(numArr){
    let newArr = [];
    // Loop through the given array
    for(i=1; i<10; i++){
        if(numArr.indexOf(i) == -1){
            newArr.push(i);
        }
    }

    if(newArr.length === 0){
        return false;
    } 
    return newArr.length > 1 ? newArr : newArr[0];
}

// OR

function missingNumber(numArr){
    let newArr = [];
    for(let i=1; i<=9; i++){
        if(!numArr.includes(i)){
            newArr.push(i);
        }
    }
    if(newArr === 0){
        return false;
    }else if (newArr === 1){
        return newArr[0];
    } else{
        return newArr.sort((a,b) => a + b);
    }
}   