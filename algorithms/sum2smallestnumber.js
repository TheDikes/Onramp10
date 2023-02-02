// Sum the two smallest number in the array 

let arr2 = [3, 5, 6, 9, 8, 2, 4, 1]

function sum2SmallestNum(arr2) {
    let sortArr = arr2.sort((a,b) => a - b)
        return sortArr[0] + sortArr[1];
}