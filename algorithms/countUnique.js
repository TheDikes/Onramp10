// Implement a function countUnique values which accepts a sorted array and counts the unique values in the array. 
// For example, 
// countUnique[1, 1, 1, 2] => 2
// countUnique[] => 0
// countUnique[1, 2, 3, 3, 4, 4, 5] => 5

function countUniqueValues(arr){
    let obj = {};
    let count = 0;
    for (i = 0; i < arr.length; i++){
        let char = arr[i];
        // if the element (i) is already in the array do the following
        if(obj[char]){
            obj[char]++;
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

/*function countUniqueValues(arr){
    return newSet(arr).size;
}
*/

/*function countUniqueValues(arr) {
    if (!arr.length) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}
*/

console.log(countUniqueValues([1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6]))
console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 4, 5, 5]))
console.log(countUniqueValues([1, 1, 1, 2]))