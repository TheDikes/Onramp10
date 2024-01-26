// Write a function that returns the sum of the length of all words greater than a minimum value in an array.

// allSum(words, min)
// Parameters
// words: Array<String> - The words to sum up their length.

// min: Number - The minimum length of each word before its length should be summed.

// Return Value
// Number - The sum of all length of words greater than the minimum

/*function allSum (words, min){
    return words.reduce((sum, word) => {
        if(word.length > min){
            sum += word.length;
        }
        return sum;
    }, 0);
}
*/
// OR
function allSum(words, min){
    let sum = 0;
    words.forEach((word) => {
        if(word.length > min){
            sum += word.length;
        }
    });
    return sum;
}

console.log(allSum(['c','y','n','t','h','i','a', 'Ella',]),1)

// OR

/*function allSum(words, min) {
    // if the length of the words is less than min, return 0
    if (words.length < min) {
      return 0;
    }
    // you then return the sum of the words that are greater than the minimum word, using the .reduce() method
    return words.reduce((acc, word) => acc + word.length, 0);
}
*/

