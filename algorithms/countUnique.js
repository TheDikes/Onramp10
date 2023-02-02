// Implement a function countUnique values which accepts a sorted array and counts the unique values in the array. 
// For example, 
// countUnique[1, 1, 1, 2] => 2
// countUnique[] => 0
// countUnique[1, 2, 3, 3, 4, 4, 5] => 5

function countUnique(arr){
    let obj = {};
    let count = 0;
    for (i=0; i< arr.length; i++){
        let char = arr[i];
        // if the element (i) is already in the array do the following
        if(obj[char]){
            obj[char] ++;
        }else{
            obj[char] = 1
        }
    }
    for(let key in obj){
        count++;
    }
    return count;
}

// OR

function countUnique(arr){
    return new Set(arr).size;
}

