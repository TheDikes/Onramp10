// Implement a function that takes two arrays as arguments and returns an array of the sum of the values in the first array with the values in the second array in repeating order.
// For example. 
// arraySum ([1, 2, 4, 5, 6, 2. 1], [2, 3, 5]) to return [3, 5, 9, 7, 9, 7, 3]
// arraySum ([10, 20, 30, 40, 50], [20, 40, 60]) to return [30, 60, 90, 60, 90]

/*function arraySum(arr1, arr2){
    let incIndex = 0;

    const sum = arr1.map((item) => {
        const total = item + arr2[incIndex];
        // when we get to the last index of the 2nd array
        if(incIndex >= arr2.length - 1){
            incIndex = 0;
        }else{
            incIndex++;
        }
         //incIndex = incIndex >= arr2.length -1 ? 0 : incIndex + 1
        return total;
    });
    return incIndex;
}
*/
// OR

function arraySum(arr1, arr2){
    let result = [];
    for(i=0; i<arr1.length; i++){
        result.push(arr1[i] + arr2[i % arr2.length]);
    }
    return result;
}

console.log(arraySum ([10, 20, 30, 40, 50], [20, 40, 60]))