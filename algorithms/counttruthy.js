// Implement a function countTruthy(arr) that takes an array and returns the number of truthy values

// countTruthy([6, 3, 0, 30, 7]) to return 4 countTruthy(['', 3, 0, 30, 7]) to return 3 countTruthy(['', 0, 0, undefined, 7]) to return 1

function countTruthy (arr){
    let count = 0;
    for (let value of arr){
        if(value) count++;
    }
    return count;
}

// Return the length of the longest word in the provided sentence.

// (“The quick brown fox jumped over the lazy dog”)

// Your response should be a number

function longestWord(sentence){
    let count = 0;
    words = sentence.split('');

    words.forEach((word) => {
        if (word.length > longest) {
            return count = word.length;
        }
    });
    return count
}