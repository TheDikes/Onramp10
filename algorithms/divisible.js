// Find the number of elements in an array that are divisible by 2 and greater than 15.
// For example, 
// divisible(A)
// divisible([2, 3, 12, 18, 42, 24]) to return 3
// divisible([100, 84, 37]) to return 2
// divisible([5, 8, 6, 12]) to 0 

function divisible(A){
    let count = 0;

    for (i=0; i<A.length; i++){
        if(A[i] % 2 === 0 && A[i] > 15){
            count++;
        }
    }
    return count;

}


function divisible(A){
    let count = 0;

    A.forEach((item) => {
        if(item % 2 && item > 15){
            count++;
        }
    });
    return count;
}