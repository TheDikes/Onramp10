function addMultiplesOf3And5(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Example usage:
const numbers = [3, 5, 6, 7, 8, 9, 10, 12];
console.log(addMultiplesOf3And5(numbers)); // Output: 45 (3 + 5 + 6 + 9 + 10 + 12)
