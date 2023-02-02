// Write a function isDivisibleByN that extracts all the values of an array that is divisble by n 


function isDivisibleByN(arr, n){
    const newArr = [];

    arr.forEach((item) => {
        if (item % n === 0 && !newArr.includes(item) && item !== 0){
            newArr.push(item)
        }
    })

    if(newArr.length === 0){
        return 0;
    }

    return newArr;
}

// OR

function isDivisibleByN(arr, n){
    return arr.filter((item) => item % n === 0);
}