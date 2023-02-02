// Find the number of elements in an array yield, that are greater than or equal to the variable X and less than or equal to the variable Z. F
// For Example...
// noOfElements(Y, X, Z)
// noOfElements([2,3,8,1,7], 4, 8) to return 1
// noOfElements([3,3,3,5,18,6,20], 15, 30) to return 2
// noOfElements([4,6,2,6,7,7],0,7) to return 6

function noOfElements(Y, X, Z){
    let count = 0;

    Y.forEach((item) => {
        if(item >= X && item <= Z){
            return count++;
        }
    })

    return count;
}