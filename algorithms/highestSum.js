// Given two arrays, retrun the sum of the array with the highest value when its elements are summed respectively.
// for example
// highestSum(X, Y)
// highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]) => 20
// highestSum([15, 7], [12, 17]) => 29
// highestSum([30], [3,6,2,1]) => 30

function highestSum(X, Y){
    let highestX = X.reduce((a,b) => a + b);
    let highestY = Y.reduce((a,b) => a + b);
    let finalResult = Math.max(highestX, highestY);

    return finalResult;
}